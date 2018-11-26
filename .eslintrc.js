module.exports = {
  "extends": "standard",
  "rules":{
  "indent": [2, 2],
  "max-len": [2, 300, 4],
  "quotes": [2, "double"],
  "semi": [2, "never"],
  "no-multiple-empty-lines": [2, {"max": 1}],
  "linebreak-style":0,


  "brace-style": [2, "stroustrup"],
  "comma-dangle": [2, "always-multiline"],
  "comma-style": [2, "last"],
  "computed-property-spacing": [2, "never"],
  "dot-location": [2, "property"],

  "one-var": [2, "never"], 
  "prefer-const": [2],
  "no-bitwise": [2],

  "object-curly-spacing": [2, "never"],
  "array-bracket-spacing": [2, "never"],
  "space-unary-ops": [2, {"words": true, "nonwords": false}],
  "keyword-spacing": [2, {"after": true}],
  "space-before-blocks": [2, "always"],
  "space-before-function-paren": [2, "never"],
  "space-in-parens": [2, "never"],
  "spaced-comment": [2, "always"]
  },
  "env": {
    "browser": true,
    "jquery": true
  }
};