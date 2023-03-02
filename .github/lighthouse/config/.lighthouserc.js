module.exports = {
  ci: {
    collect: {
      // collect options here
      url: [
        // "https://airhorner.com/",
        "https://npe20.shell.co.uk/",
        // "https://shell-npe001.adobecqms.net/",
      ],
      // startServerCommand: "npm start",
      numberOfRuns: 2,
      chromeFlags: ["--disable-gpu", "--headless", "--no-sandbox"],
      headful: false,
      // This setting makes the budgets section appear in the Lighthouse report itself
      budgetsFile: ".github/lighthouse/config/budget.json",
      output: {
        output: ["json", "html", "csv"],
        view: false,
      },
      settings: {
        configPath: ".github/lighthouse/config/desktop-config.js",
        //configPath: ".github/lighthouse/config/mobile-config.js",
        printConfig: true,
      },
    },
    assert: {
      // assert options here
      // Error: Cannot use both budgets AND assertions
      // preset: "lighthouse:recommended", // "lighthouse:all", "lighthouse:recommended", "lighthouse:no-pwa"
    },
    upload: {
      // upload options here
      target: "filesystem", //"lhci", "temporary-public-storage", "filesystem" [default: "lhci"]
      outputDir: ".github/lighthouse/reports/",
    },
    server: {
      // server options here
    },
    wizard: {
      // wizard options here
    },
  },
};
