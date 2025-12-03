/**
 * Custom ESLint rule to enforce using icon names with 'Icon' suffix from lucide-react
 * @type {import('eslint').Rule.RuleModule}
 */
module.exports = {
  meta: {
    type: "problem",
    docs: {
      description:
        "Enforce using icon names ending with 'Icon' from lucide-react (e.g., CheckIcon instead of Check)",
      category: "Best Practices",
      recommended: true,
    },
    messages: {
      useIconSuffix:
        "Import '{{ name }}Icon' instead of '{{ name }}' from lucide-react",
    },
    fixable: "code",
    schema: [],
  },

  create(context) {
    const sourceCode = context.sourceCode;

    return {
      ImportDeclaration(node) {
        // Only check imports from lucide-react
        if (node.source.value !== "lucide-react") {
          return;
        }

        // Check each specifier in the import
        node.specifiers.forEach((specifier) => {
          if (specifier.type === "ImportSpecifier") {
            const importedName = specifier.imported.name;
            const localName = specifier.local.name;

            // Check if the imported name doesn't end with 'Icon'
            if (!importedName.endsWith("Icon")) {
              context.report({
                node: specifier,
                messageId: "useIconSuffix",
                data: {
                  name: importedName,
                },
                fix(fixer) {
                  const fixes = [];
                  const newImportedName = `${importedName}Icon`;
                  const newLocalName =
                    importedName === localName
                      ? newImportedName
                      : localName.endsWith("Icon")
                      ? localName
                      : `${localName}Icon`;

                  // Fix the import statement
                  if (importedName !== localName) {
                    // Aliased import: import { Check as MyCheck }
                    // Change to: import { CheckIcon as MyCheckIcon }
                    fixes.push(
                      fixer.replaceText(specifier.imported, newImportedName)
                    );
                    fixes.push(
                      fixer.replaceText(specifier.local, newLocalName)
                    );
                  } else {
                    // Regular import: import { Check }
                    // Change to: import { CheckIcon }
                    fixes.push(fixer.replaceText(specifier, newImportedName));
                  }

                  // Find and fix all references to this variable
                  const scope = sourceCode.getScope(node);
                  const variable = scope.variables.find(
                    (v) => v.name === localName
                  );

                  if (variable) {
                    variable.references.forEach((reference) => {
                      // Skip the import declaration itself
                      if (reference.identifier !== specifier.local) {
                        fixes.push(
                          fixer.replaceText(reference.identifier, newLocalName)
                        );
                      }
                    });
                  }

                  return fixes;
                },
              });
            }
          }
        });
      },
    };
  },
};
