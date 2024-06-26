// eslint-disable-next-line no-undef
module.exports = {
  extends: ['plugin:react/recommended', 'plugin:import/typescript', 'plugin:import/recommended', 'plugin:import/warnings', 'plugin:@typescript-eslint/recommended', 'prettier', 'plugin:storybook/recommended'],
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: '*.stories.@(ts|tsx|js)',
      extends: 'plugin:storybook/recommended',
      rules: {
        'import/no-default-export': 'off', // default export を許可
      },
    },
  ],
  settings: {
    react: {
      version: 'detect',
      pragma: 'h',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      typescript: { project: './' },
    },
  },
  env: {
    es2022: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'space-before-function-paren': [
      'warn',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    'no-useless-constructor': 'off',
    'no-use-before-define': 'off',
    'comma-dangle': ['warn', 'always-multiline'],
    // 'no-unused-vars': 'warn',
    semi: ['warn', 'always'],
    'semi-spacing': [
      'warn',
      {
        after: true,
        before: false,
      },
    ],
    'semi-style': ['warn', 'last'],
    'no-extra-semi': 'warn',
    'no-unexpected-multiline': 'error',
    'no-unreachable': 'warn',
    'padded-blocks': ['warn', 'never'],
    'no-trailing-spaces': 'warn',
    'space-before-blocks': 'warn',
    'no-multiple-empty-lines': 'warn',
    indent: [
      'warn',
      2,
      {
        SwitchCase: 1,
      },
    ],
    'eol-last': 'warn',
    quotes: [
      'warn',
      'single',
      {
        allowTemplateLiterals: true,
      },
    ],
    'import/order': [
      'warn',
      {
        groups: ['external', 'parent', 'sibling', 'index', 'object', 'type'],
        pathGroups: [
          {
            pattern: '@alias/**',
            group: 'parent',
            position: 'before',
          },
        ],
        alphabetize: {
          order: 'asc',
        },
        'newlines-between': 'always',
      },
    ],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
  },
}
