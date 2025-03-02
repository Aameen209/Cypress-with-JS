describe('Mytestsuite', () => {
    it('Datadriventest', () => {
        // Data-driven testing: Using a fixture file to load multiple sets of test data
        // A fixture is a static set of data stored in a JSON file to be used for testing
        
        cy.fixture("orangehrm2").then((data) => {
            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'); // Navigate to the login page

            data.forEach((userdata) => {
                // Enter username and password from test data (Using CSS Selectors)
                cy.get('input[name="username"]').type(userdata.username); // CSS Selector: Attribute-based
                cy.get('input[name="password"]').type(userdata.password); // CSS Selector: Attribute-based
                cy.get("button[type='submit']").click(); // CSS Selector: Attribute-based (Button)

                if (userdata.username == 'Admin' && userdata.password == 'admin123') {
                    // Verify dashboard text for successful login
                    // Using CSS Selector based on class names
                    cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module")
                        .should('have.text', userdata.expected);

                    // If login is successful, then logout
                    cy.get('.oxd-icon.bi-caret-down-fill.oxd-userdropdown-icon').click(); // Open user dropdown (CSS Selector: Class-based)
                    cy.get(':nth-child(4) > .oxd-userdropdown-link').click(); // Click on logout button (CSS Selector: Child selector)
                } else {
                    // Show login screen for invalid credentials
                    // Using CSS Selector based on class name to validate error message
                    cy.get(".oxd-text.oxd-text--p.oxd-alert-content-text")
                        .should("have.text", userdata.expected); // Verify error message
                }
            });
        });
    });
});
