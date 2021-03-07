module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
    '@nuxtjs'
  ],
  plugins: [
    'vue'
  ],
  rules: {
    'no-tabs': 'off',
    'no-extra-semi': 'off',
    'vue/v-bind-style': 'off',
    'vue/v-on-style': 'off',
    'vue/name-property-casing': 'off',
    'vue/max-attributes-per-line': ['error', {
      singleline: 1,
      multiline: {
        max: 1,
        allowFirstLine: false
      }
    }],
    'vue/multiline-html-element-content-newline': ['error', {
      ignoreWhenEmpty: true,
      ignores: ['pre', 'textarea']
    }],
    'vue/singleline-html-element-content-newline': ['error', {
      ignoreWhenNoAttributes: false,
      ignoreWhenEmpty: false
    }]
  }
}
