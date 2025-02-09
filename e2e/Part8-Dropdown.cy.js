describe ("Handle Dropdown", ()=> {

    it.skip("Dropdown with Select", ()=>{ // we can skip this test instead of commenting

        cy.visit("https://testautomationpractice.blogspot.com/")

        //Normal Dropdown which is having select tag
        cy.get("select#country").select('India')
        .should('have.value','india')

        
        

    })
    it.skip("Dropdown without Select tag", ()=>{ 

        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/?wmc-currency=EUR")

        //Dropdown without select tag
         cy.get("#select2-billing_country-container").click()
         cy.get(".select2-search__field").type('Italy').type('{Enter}') //For enter button use type.('{enter}')

         cy.get("#select2-billing_country-container").click()
         .should('have.text','Italy')  //using have.text for to check the text in the dropdown is selected or not
        
    })
    it.skip("Static AutoSuggested Dropdown", ()=>{ 

        cy.visit("https://www.wikipedia.org/")

        //Dropdown without auto suggestions
         cy.get("#searchInput").click().type('Delhi')
         cy.get(".suggestion-title").contains("Delhi University").click() //contains is a part of assertions
         
        
    })
    it("Dynamic Dropdown", ()=>{ 

        cy.visit("https://www.google.com/")

        //Dropdown with Dynamic auto suggestions
         cy.get("[name='q']").type("Cypress Automation")
         //Waiting for the dropdowns suggestions
         cy.wait(5000)

         cy.get('div.wM6W7d>span').should('have.length',13) //Counting the elements
         //jquery function & //$el = dollar element
         cy.get('div.wM6W7d>span').each(($el, index, $list)=>{ //putting all elements into $el
            if($el.text()=='cypress automation jobs'){ //comparing 'cypress automation jobs' = $el
                cy.wrap($el).click() //if both are equal performing the click option on $el
            } 
    })
    cy.get("[name='q']")
    .should('have.value','cypress automation job') //Checking after searching that the serch field should have this text cypress automation jobs
        
    })
})