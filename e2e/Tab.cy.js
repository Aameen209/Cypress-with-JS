describe("Handle Tabs", (()=> {

    it("Handle tab on the same Page",()=>{

        cy.visit("https://the-internet.herokuapp.com/windows")
        //after removing the target attribute the page is open on the same window
        cy.get(".example >a").invoke('removeAttr',"target").click(); //removeAttr = to remove attribute which is target

        cy.url().should('include','https://the-internet.herokuapp.com/windows/new')
        cy.wait(3000);

        //operations
        cy.go('back'); //back to parent tab
    })
    it("Handle tab on the same Page",()=>{

        cy.visit("https://the-internet.herokuapp.com/windows")
        cy.get(".example >a").then((e)=>{ //

            let url=e.prop('href');//extracting the href value and putting in url
            cy.visit(url);

        })
        //both the url should be same then this approach will work(domain)
        cy.url().should('include','https://the-internet.herokuapp.com/windows/new')
        cy.wait(3000);

        //operations
        cy.go('back'); //back to parent tab
    })
}))