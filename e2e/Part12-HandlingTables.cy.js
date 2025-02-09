describe("Handle Tables",()=>{

    beforeEach('Login',()=>{

        cy.visit("https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F")
        cy.get("#Email").click().type("admin@yourstore.com")
        cy.get("#Password").click().type("admin")
        cy.get("button[type='submit']").click();

        cy.get("ul>li:nth-child(4)>a>p>i[class='right fas fa-angle-left ']").click();
        cy.get("ul>li:nth-child(4)>ul>li:nth-child(3)");
    })


})