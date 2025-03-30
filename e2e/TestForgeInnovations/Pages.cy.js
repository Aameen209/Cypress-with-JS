describe('Pages',()=>{
    beforeEach(() => {
        cy.viewport(1920, 1080); // Set viewport for all tests
        cy.visit("https://testforge.co/");

    });
    

    it('Home',()=>{

        cy.get("#menu-item-14095>a").click({force:true});
        cy.url("https://testforge.co/").should('contains','https://testforge.co/');

    })
    it('About Us',()=>{

        cy.get("#menu-item-14056>a").click({force:true});
        cy.url("https://testforge.co/").should('contains','https://testforge.co/about-us/');

    })
    it('Solution',()=>{
        cy.viewport(1920, 1080); // Adjust to a larger resolution

        cy.get("#menu-item-14071").trigger('mouseover',{force:true});
        cy.get('#menu-item-14071>ul>li').should('have.length',7);
        cy.get('#menu-item-14071>ul>li').first().click({force:true});
        cy.get('#menu-item-14071>ul>li').each(($el)=>{
        cy.wrap($el).trigger('mouseover',{force:true}).click({force:true});
        cy.wait(3000);
        // cy.url('https://testforge.co/').should('not.eq', 'https://testforge.co/');
        cy.url().should('not.eq', 'https://testforge.co/'); 
        cy.go('back')
    })
    })
    it.only('Services',()=>{
        cy.get("#menu-item-14061>ul>li").first().trigger('mouseover',{force:true});
        cy.get("#menu-item-14061>ul>li").should('have.length',9);
        cy.get('#menu-item-14061>ul>li').first().click({force:true});
        

       
        cy.wait(3000);
        cy.location('href').should('not.eq', 'https://testforge.co/');
        // cy.url().should('not.eq', 'https://testforge.co/'); 
        cy.go('back')
        

    })
    
})