# eslint-plugin-lucide

ESLint plugin for Lucide icons usage

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-lucide`:

```sh
npm install eslint-plugin-lucide --save-dev
```

## Usage

Add `lucide` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["lucide"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "lucide/use-icon-suffix": "error"
  }
}
```

## Rules

<!-- begin auto-generated rules list -->

🔧 Automatically fixable by the [`--fix` CLI option](https://eslint.org/docs/user-guide/command-line-interface#--fix).

| Name                                             | Description                                       | 🔧  |
| :----------------------------------------------- | :------------------------------------------------ | :-- |
| [use-icon-suffix](docs/rules/use-icon-suffix.md) | Disallow the use of icons without the suffix icon | 🔧  |

<!-- end auto-generated rules list -->
