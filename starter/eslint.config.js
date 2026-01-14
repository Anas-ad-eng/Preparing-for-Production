// eslint.config.js
export default [
  {
    files: ["*.js"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
    },
    rules: {
      "no-var": "error",          // يمنع استخدام var
      "semi": ["error", "always"], // يجبر على الفاصلة المنقوطة
      "no-unused-vars": "warn",    // يحذر من المتغيرات غير المستخدمة
    },
  },
];
