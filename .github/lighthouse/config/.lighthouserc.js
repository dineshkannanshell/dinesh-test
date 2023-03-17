module.exports = {
  ci: {
    assert: {
      "assertions": {
        "first-contentful-paint": ["warn", {"maxNumericValue": 4000}],
        "viewport": "error",
        "resource-summary:document:size": ["error", {"maxNumericValue": 14000}],
        "resource-summary:font:count": ["warn", {"maxNumericValue": 1}],
        "resource-summary:third-party:count": ["warn", {"maxNumericValue": 5}]
      },
    },
    collect: {
      url: ['https://npe20.shell.co.uk/'],
    },
  },
};
