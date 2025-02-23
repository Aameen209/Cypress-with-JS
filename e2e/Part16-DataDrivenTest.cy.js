describe('Mytestsuite', () => {
    it('Datadriventest', () => {
        cy.fixture("orangehrm2").then((data) => {
            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

            data.forEach((userdata) => {
                cy.get('input[name="username"]').type(userdata.username);
                cy.get('input[name="password"]').type(userdata.password);
                cy.get("button[type='submit']").click();

                if (userdata.username == 'Admin' && userdata.password == 'admin123') {
                    // Verify dashboard text
                    cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module")
                        .should('have.text', userdata.expected);

                    // If login is successful, then logout
                    cy.get('.oxd-icon.bi-caret-down-fill.oxd-userdropdown-icon').click();
                    cy.get(':nth-child(4) > .oxd-userdropdown-link').click();
                } else {
                    // Show login screen for invalid data
                    cy.get(".oxd-text.oxd-text--p.oxd-alert-content-text")
                        .should("have.text", userdata.expected);
                }
            });
        });
    });
});
