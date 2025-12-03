# Disallow the use of icons without the suffix icon (`lucide/use-icon-suffix`)

🔧 This rule is automatically fixable by the [`--fix` CLI option](https://eslint.org/docs/latest/user-guide/command-line-interface#--fix).

<!-- end auto-generated rule header -->

Disallow the use of icons without the suffix icon.

## Rule Details

Examples of **incorrect** code for this rule:

```js
import { Book } from "lucide-react";
```

Examples of **correct** code for this rule:

```js
import { BookIcon } from "lucide-react";
```
