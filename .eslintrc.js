module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/prettier"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-unused-vars": "off",
    "vue/no-unused-components": "off",
    "no-undef": "off",
    "no-useless-escape": "off",
    "no-irregular-whitespace": "off",
    "vue/no-use-v-if-with-v-for": "off",
    "no-empty": "off",
    "no-redeclare": "off",
    "no-cond-assign": "off",
    "no-func-assign": "off",
    "no-unsafe-finally": "off",
    "no-fallthrough": "off",
    "no-self-assign": "off",
    "no-control-regex": "off"
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
