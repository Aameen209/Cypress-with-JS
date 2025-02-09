describe("Assertions demo", () => {

    it("Implicit assertions", () => {  // should keyword, and keyword

        // for verifying url
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

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
        
                // To run simple remove cy.url() then only should is repeating multiple times
                cy.url(" ").should('include', 'orangehrmlive.com')  
                    .should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') 
                    .should('contain', 'orangehrm'); 
        
                // instead of using should we can use "and" to reduce it 
                cy.url(" ").should('include', 'orangehrmlive.com')  
                    .and('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') 
                    .and('contain', 'orangehrm') 
                    .and('not.contain', 'greenhrm'); /// for not contain (Negative Scenario)
        
                // for checking title
                cy.title().should('include', 'Orange') 
                    .and('eq', 'OrangeHRM') 
                    .and('contain', 'HRM'); 
        
                // for image css path after running test click on aim button then click on the logo and then copy
                // check the image is visible
                cy.get('.orangehrm-login-logo > img').should('be.visible'); /// checking if logo is visible
                // check the logo is exist 
                cy.get('.orangehrm-login-branding > img').should('exist'); /// checking if logo exists in DOM
        
                // cy.xpath("//a") // will return all the links which are present on the webpage
                cy.xpath('//a').should('have.length', '5'); /// have.length is a keyword 
                
                // "//a" is an XPath locator that selects all <a> (anchor) tags in the document
        
                cy.get("input[name='username']").type("Admin"); 
                cy.get("input[name='username']").should('have.value', 'Admin'); /// have.value is a parameter
        
            });
        
            it("Explicit assertions", () => {  /// assert keyword, expect keyword
                /// Explicit Assertions: These require manual checks using expect() or assert().
                /// They allow direct comparison between actual and expected values.
        
                cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        
                cy.get("input[name='username']").type("Admin");
                cy.get("input[name='password"]").type("admin123");
                cy.get("button[type='submit']").click();
        
                let expName = "Илья Николаевич"; 
                
                cy.get(".oxd-userdropdown-name").then((x) => {
                    let actName = x.text(); /// a user-defined function to fetch actual text
                    
                    // BDD Style
                    expect(actName).to.equal(expName);  /// comparing actName with expName
                    expect(actName).to.not.equal(expName);  
        
                    // TDD style
                    assert.equal(actName,expName) 
                    assert.notEqual(actName,expName) 
        
                });
        
            });
        
        });
        
        // To run simple remove cy.url() then only should is repeating multiple times
        cy.url("").should('include', 'orangehrmlive.com') // include  
            .should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') // should equal to
            .should('contain', 'orangehrm'); // contain

        // instead of using should we can use "and" to reduce it 
        cy.url("").should('include', 'orangehrmlive.com') // include 
            .and('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') // equal to
            .and('contain', 'orangehrm') // contain
            .and('not.contain', 'greenhrm'); // for not contain (Negative Scenario)

        // for checking title
        cy.title().should('include', 'Orange')
            .and('eq', 'OrangeHRM')
            .and('contain', 'HRM');

        // for image css path after running test click on aim button then click on the logo and then copy
        // check the image is visible
        cy.get('.orangehrm-login-logo > img').should('be.visible');
        // check the logo is exist 
        cy.get('.orangehrm-login-branding > img').should('exist');

        // cy.xpath("//a") // will return all the links which are present on the webpage
        cy.xpath('//a').should('have.length', '5'); // have.length is a keyword 

        cy.get("input[name='username']").type("Admin");
        cy.get("input[name='username']").should('have.value', 'Admin'); // have.value is a parameter

    });

    it("Explicit assertions", () => {  // asser keyword, expect keyword

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        cy.get("input[name='username']").type("Admin");
        cy.get("input[name='password']").type("admin123");
        cy.get("button[type='submit']").click();

        let expName = "Илья Николаевич";
        
        cy.get(".oxd-userdropdown-name").then((x) => {
            let actName = x.text(); // a user defined function
            // BDD Style
            expect(actName).to.equal(expName);  // comparing actName with expName
            expect(actName).to.not.equal(expName);  

            // TDD style
            assert.equal(actName,expName)
            assert.notEqual(actName,expName)

        });

    });

});
