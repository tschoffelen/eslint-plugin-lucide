/**
 * @fileoverview Disallow the use of icons without the suffix icon
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/use-icon-suffix"),
  RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester({
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
  },
});
ruleTester.run("use-icon-suffix", rule, {
  valid: [
    { code: "import { BookIcon } from 'lucide-react';" },
    { code: "import { HomeIcon, UserIcon } from 'lucide-react';" },
  ],
  invalid: [
    {
      code: "import { Book } from 'lucide-react';",
      errors: [
        { messageId: "useIconSuffix", data: { name: "Book" } },
      ],
      output: "import { BookIcon } from 'lucide-react';",
    },
    {
      code: "import { Home, UserIcon } from 'lucide-react';",
      errors: [
        { messageId: "useIconSuffix", data: { name: "Home" } },
      ],
      output: "import { HomeIcon, UserIcon } from 'lucide-react';",
    },
  ],
});
