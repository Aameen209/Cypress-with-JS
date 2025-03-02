describe("Assertions demo", () => {

    it("Implicit assertions", () => {  // should keyword, and keyword

        // for verifying url
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"); // visiting the login page

        // Verifying the URL contains the expected domain
        cy.url("").should('include', 'orangehrmlive.com'); // include 
        cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'); // equal to
        cy.url().should('contain', 'orangehrm'); // contain
        
        describe("Assertions demo", () => {

            it("Implicit assertions", () => {  /// should keyword, and keyword
                /// Implicit Assertions: These assertions automatically retry until they pass or time out.
                /// They are used with commands like .should() and .and() without requiring explicit conditions.
        
                // for verifying url
                cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        
                // include 
                cy.url(" ").should('include', 'orangehrmlive.com'); 
                
                // equal to
                cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'); 
                
                // contain
                cy.url().should('contain', 'orangehrm'); 
        
                // Chaining multiple should() assertions
                cy.url(" ").should('include', 'orangehrmlive.com')  
                    .should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') 
                    .should('contain', 'orangehrm'); 
        
                // instead of using should we can use "and" to reduce it 
                cy.url(" ").should('include', 'orangehrmlive.com')  
                    .and('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') 
                    .and('contain', 'orangehrm') 
                    .and('not.contain', 'greenhrm'); /// for not contain (Negative Scenario)
        
                // Verifying the page title
                cy.title().should('include', 'Orange') 
                    .and('eq', 'OrangeHRM') 
                    .and('contain', 'HRM'); 
        
                // Checking if the logo image is visible
                cy.get('.orangehrm-login-logo > img').should('be.visible'); /// checking if logo is visible
                
                // Checking if the logo exists in the DOM
                cy.get('.orangehrm-login-branding > img').should('exist'); /// checking if logo exists in DOM
        
                // Verifying the number of anchor tags on the page
                cy.xpath('//a').should('have.length', '5'); /// have.length is a keyword 
        
                // Entering username in the input field
                cy.get("input[name='username']").type("Admin"); 
                
                // Verifying the entered value
                cy.get("input[name='username']").should('have.value', 'Admin'); /// have.value is a parameter
        
            });
        
            it("Explicit assertions", () => {  /// assert keyword, expect keyword
                /// Explicit Assertions: These require manual checks using expect() or assert().
                /// They allow direct comparison between actual and expected values.
        
                // Visiting the login page
                cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        
                // Entering username and password
                cy.get("input[name='username']").type("Admin");
                cy.get("input[name='password']").type("admin123");
                
                // Clicking the login button
                cy.get("button[type='submit']").click();
        
                let expName = "Илья Николаевич"; 
                
                // Fetching the actual username displayed on the page
                cy.get(".oxd-userdropdown-name").then((x) => {
                    let actName = x.text(); /// a user-defined function to fetch actual text
                    
                    // BDD Style assertions
                    expect(actName).to.equal(expName);  /// comparing actName with expName
                    expect(actName).to.not.equal(expName);  
        
                    // TDD style assertions
                    assert.equal(actName,expName); 
                    assert.notEqual(actName,expName); 
        
                });
        
            });
        
        });
        
        // Using multiple should() assertions
        cy.url("").should('include', 'orangehrmlive.com') // include  
            .should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') // should equal to
            .should('contain', 'orangehrm'); // contain

        // Using "and" to simplify multiple assertions
        cy.url("").should('include', 'orangehrmlive.com') // include 
            .and('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') // equal to
            .and('contain', 'orangehrm') // contain
            .and('not.contain', 'greenhrm'); // for not contain (Negative Scenario)

        // Verifying the page title
        cy.title().should('include', 'Orange')
            .and('eq', 'OrangeHRM')
            .and('contain', 'HRM');

        // Checking if the logo image is visible
        cy.get('.orangehrm-login-logo > img').should('be.visible');
        
        // Checking if the logo exists in the DOM
        cy.get('.orangehrm-login-branding > img').should('exist');

        // Verifying the number of links present on the webpage
        cy.xpath('//a').should('have.length', '5'); // have.length is a keyword 

        // Entering username and verifying the value
        cy.get("input[name='username']").type("Admin");
        cy.get("input[name='username']").should('have.value', 'Admin'); // have.value is a parameter

    });

    it("Explicit assertions", () => {  // asser keyword, expect keyword

        // Visiting the login page
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        // Entering username and password
        cy.get("input[name='username']").type("Admin");
        cy.get("input[name='password']").type("admin123");
        
        // Clicking the login button
        cy.get("button[type='submit']").click();

        let expName = "Илья Николаевич";
        
        // Fetching the actual username displayed on the page
        cy.get(".oxd-userdropdown-name").then((x) => {
            let actName = x.text(); // a user defined function
            
            // BDD Style assertions
            expect(actName).to.equal(expName);  // comparing actName with expName
            expect(actName).to.not.equal(expName);  

            // TDD style assertions
            assert.equal(actName,expName);
            assert.notEqual(actName,expName);
        });

    });

});
