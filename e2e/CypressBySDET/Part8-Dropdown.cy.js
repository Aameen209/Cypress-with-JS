describe("Handle Dropdown", () => {

    it("Dropdown with Select", () => { // we can skip this test instead of commenting

        cy.visit("https://testautomationpractice.blogspot.com/") // Visit the target URL

        // Normal Dropdown which is having select tag
        cy.get("select#country").select('India') // Select the option 'India' from the dropdown by value
            .should('have.value', 'india') // Assert that the selected value is 'india'

    })

    it.only("Dropdown without Select tag", () => {

        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/?wmc-currency=EUR") // Visit the target URL

        // Dropdown without select tag
        cy.get("#select2-billing_country-container").click() // Click on the dropdown to open the list
        cy.get(".select2-search__field").type('Italy').type('{Enter}') // Type 'Italy' in the search field and press Enter

        cy.get("#select2-billing_country-container").click() // Click the dropdown again
            .should('have.text', 'Italy') // Assert that the text 'Italy' is selected in the dropdown

    })

    it.skip("Static AutoSuggested Dropdown", () => {

        cy.visit("https://www.wikipedia.org/") // Visit the target URL

        //Dropdown without auto suggestions
         cy.get("#searchInput").click().type('Delhi')
         cy.get(".suggestion-title").contains("Delhi University").click() //contains is a part of assertions
         
        
    })
    it("Dynamic Dropdown", ()=>{ 

        cy.visit("https://www.google.com/") // Visit the target URL

        // Dropdown with Dynamic auto suggestions
        cy.get("[name='q']").type("Cypress Automation") // Type 'Cypress Automation' into the search field
        cy.wait(5000) // Wait for 5 seconds to allow the dropdown suggestions to load

        cy.get('div.wM6W7d>span').should('have.length', 13) // Assert that there are 13 elements in the dropdown suggestions

        // Iterate through each suggestion in the dropdown
        cy.get('div.wM6W7d>span').each(($el, index, $list) => { // $el = each element, index = position, $list = full list
            if ($el.text() == 'cypress automation jobs') { // Check if the text of the current element is 'cypress automation jobs'
                cy.wrap($el).click() // If the condition matches, click on the element
            }
        })

        cy.get("[name='q']") // Access the search input field
            .should('have.value', 'cypress automation job') // Assert that the search field contains 'cypress automation jobs'

    })
})
