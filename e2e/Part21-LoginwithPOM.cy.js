import Login from "../Pageobject.js/LoginPage2"; // Importing the Login page object model (POM) class

describe('POM',()=>{

    //Normal approach
    it('Login Test',()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login") // Open the login page
        cy.get("input[placeholder='Username']").type('Admin') // Enter username
        cy.get("input[placeholder='Password']").type('admin123') // Enter password
        cy.get("button[type='submit']").click(); // Click login button

        cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module")
          .should('have.text','Dashboard'); // Verify successful login
    });

    //usign POM
    it('Login Test',()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login") // Open the login page
       
       const ln =new Login(); //object refernce variable = ln
       // "const" is used to declare a constant variable, meaning the reference to the object cannot be reassigned.
       // "ln" is the object reference variable that allows access to methods inside the Login class.

       ln.setUserName("Admin"); // Call setUserName method from Login class to enter username
       ln.setPassword("admin123") // Call setPassword method from Login class to enter password
       ln.clickSubmit(); // Call clickSubmit method from Login class to click login button
       ln.verifylogin(); // Call verifyLogin method from Login class to verify login success
    });

    //using POM with fixtures
    it.only('Login Test',()=>{ //from OM we're referening to elements
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login") // Open the login page
       
        cy.fixture('orangehrm').then((data)=>{ //from fixturetures refereing to Data
       const ln =new Login(); //object refernce variable = ln
       // This object allows access to methods defined in the LoginPage2.js file.

            ln.setUserName(data.username); // Retrieve username from fixture data and set it
            ln.setPassword(data.password) // Retrieve password from fixture data and set it
            ln.clickSubmit(); // Click login button using POM method
            ln.verifylogin(); // Verify login success using POM method
        })

    })

})
