/**
 * @fileoverview ESLint plugin for Lucide icons usage
 */
"use strict";

// import all rules in lib/rules
module.exports = {
  rules: {
    useIconSuffix: require("./rules/use-icon-suffix"),
  },
  configs: {
    recommended: {
      plugins: ["lucide"],
      rules: {
        "lucide/use-icon-suffix": "error",
      },
    },
  },
};
