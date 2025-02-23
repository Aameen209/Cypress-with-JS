module.exports = {
  reporter: 'cypress-mochawesome-reporter', //generating html reports

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      screenshotOnRunFailure=true;
      require('cypress-mochawesome-reporter/plugin')(on);

    },
    supportFile: false,
    specPattern: "**/*.cy.{js,jsx,ts,tsx}", // More flexible pattern
    fixturesFolder: "cypress/fixtures", // Explicitly setting the correct path
    video: true, // Ensure video recording is enabled
    videosFolder: "cypress/videos", // Make sure the folder is set
  },
};
