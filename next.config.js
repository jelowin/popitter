const { PHASE_DEVELOPMENT_SERVER } = require("next/constants")

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        API: "http://localhost:3000",
      },
      /* development only config options here */
    }
  }

  return {
    /* config options for all phases except development here */
  }
}
