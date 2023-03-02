const MOBILE_USERAGENT =
  "Mozilla/5.0 (Linux; Android 7.0; Moto G (4)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4695.0 Mobile Safari/537.36 Chrome-Lighthouse"; // eslint-disable-line max-len

const MOBILE_EMULATION_METRICS = {
  mobile: true,
  width: 360,
  height: 640,
  deviceScaleFactor: 2.625,
  disabled: false,
};

const config = {
  extends: "lighthouse:default",
  settings: {
    formFactor: "mobile",
    // throttling: constants.throttling.desktopDense4G,
    screenEmulation: MOBILE_EMULATION_METRICS,
    emulatedUserAgent: MOBILE_USERAGENT,
  },
};

module.exports = config;
