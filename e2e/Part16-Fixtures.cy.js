describe('Mytestsuite',()=>{
    
    //Direct access
    it('FixturesDemoTest',()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.fixture('orangehrm').then((data)=>{
        cy.get('input[name="username"]').type(data.username)
        cy.get('input[name="password"]').type(data.password)
        cy.get("button[type='submit']").click();
    
            cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module")
            .should('have.text',data.expected);
    })
    
    })  
    let userdata;
    before(()=>{
        cy.fixture("orangehrm").then((data)=>{
            userdata=data;
        })
    })
    it.only('For multiple it block',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        cy.get('input[name="username"]').type(userdata.username)
        cy.get('input[name="password"]').type(userdata.password)
        cy.get("button[type='submit']").click();
    
            cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module")
            .should('have.text',userdata.expected);
    })
       
        
        })
