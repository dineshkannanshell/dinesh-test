const DESKTOP_USERAGENT =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4695.0 Safari/537.36 Chrome-Lighthouse"; // eslint-disable-line max-len
const DESKTOP_EMULATION_METRICS = {
  mobile: false,
  width: 1350,
  height: 940,
  deviceScaleFactor: 1,
  disabled: false,
};

const config = {
  extends: "lighthouse:default",
  settings: {
    formFactor: "desktop",
    // throttling: constants.throttling.desktopDense4G,
    screenEmulation: DESKTOP_EMULATION_METRICS,
    emulatedUserAgent: DESKTOP_USERAGENT,
    audits: [
      { id: "errors-in-console", options: { ignoredPatterns: [/404/] } },
    ],
  },
};

module.exports = config;
