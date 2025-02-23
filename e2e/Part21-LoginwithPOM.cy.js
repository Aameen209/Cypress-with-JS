import Login from "../Pageobject.js/LoginPage2";

describe('POM',()=>{
    //Normal approach
    it('Login Test',()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("input[placeholder='Username']").type('Admin')
        cy.get("input[placeholder='Password']").type('admin123')
        cy.get("button[type='submit']").click();
        cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should('have.text','Dashboard');

    })
    //usign POM
    it('Login Test',()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
       const ln =new Login(); //object refernce variable = ln
       ln.setUserName("Admin");
       ln.setPassword("admin123")
       ln.clickSubmit();
       ln.verifylogin();
    })
    //using POM with fixtures
    it.only('Login Test',()=>{ //from OM we're referening to elements
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
       
        cy.fixture('orangehrm').then((data)=>{ //from fixturetures refereing to Data
       const ln =new Login(); //object refernce variable = ln

            ln.setUserName(data.username);
            ln.setPassword(data.password)
            ln.clickSubmit();
            ln.verifylogin();
        })

    })
})