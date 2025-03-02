describe('Mytestsuite',()=>{

    // Direct access to fixture data within the test block
    it('FixturesDemoTest',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'); // Navigate to login page

        cy.fixture('orangehrm').then((data)=>{ // Load test data from "orangehrm.json" fixture
            cy.get('input[name="username"]').type(data.username); // Enter username (CSS Selector - Attribute Selector)
            cy.get('input[name="password"]').type(data.password); // Enter password (CSS Selector - Attribute Selector)
            cy.get("button[type='submit']").click(); // Click login button (CSS Selector - Attribute Selector)

            // Verify the expected text on the dashboard after login
            cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module") // (CSS Selector - Class Selector)
                .should('have.text', data.expected);
        });
    });  

    // Declare a variable to store fixture data for use across multiple test cases
    let userdata;

    // `before()` hook to load fixture data before running test cases
    before(()=>{
        cy.fixture("orangehrm").then((data)=>{
            userdata = data; // Store fixture data in a variable for reuse
        });
    });

    // Using the loaded fixture data in another test case
    it.only('For multiple it block',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'); // Navigate to login page

        cy.get('input[name="username"]').type(userdata.username); // Use stored fixture data for username
        cy.get('input[name="password"]').type(userdata.password); // Use stored fixture data for password
        cy.get("button[type='submit']").click(); // Click login button

        // Verify the expected text on the dashboard after login
        cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module") 
            .should('have.text', userdata.expected);
    });
});
