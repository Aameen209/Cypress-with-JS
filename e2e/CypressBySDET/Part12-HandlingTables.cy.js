describe("Handle Tables",()=>{

    beforeEach('Login',()=>{

        cy.visit("https://demo.opencart.com/admin/index.php") // Visit the admin login page
        // cy.get("#input-username").click().type("demo")
        // cy.get("#input-password").click().type("demo")
        cy.get("button[type='submit']").click(); // Click login button
        cy.wait(5000); // Wait for login to complete

        // Navigating to Customers section
        cy.get("#menu-customer").click(); //customer main menu
        cy.get("#menu-customer>ul>li:first-child").click(); //customer/sub/child -item
    })

    it('check number rows and columns from a table',()=>{
        // This test case verifies if the table has the expected number of rows and columns.
        
        // Verify total number of rows in the table body
        cy.get("table[class='table table-bordered table-hover']>tbody>tr").should('have.length','10')
        
        // Verify total number of columns in the table header
        cy.get("table[class='table table-bordered table-hover']>thead>tr>td").should('have.length','6')
    })

    it('Check cell data from Specific Rows and columns',()=>{
        // This test case validates specific cell data within the table.
        
        // Locate specific cell data (5th row, 3rd column) and validate its content
        cy.get("table[class='table table-bordered table-hover']>tbody>tr:nth-child(5)>td:nth-child(3)")
        .contains("leduyquan25741244@gmail.com");
    })
    
    it('Read all the rows & columns data in the first page without pagination',()=>{
        // This test case extracts and logs data from all rows and columns of the first page.

        // Iterate over all rows in the table body
        cy.get("table[class='table table-bordered table-hover']>tbody>tr")
            //Capture all the rows
        .each(  ($row, index, $rows)=>{ //$row represents a single row, $rows represents all rows
            //repeat this each block  for every row
            cy.wrap($row).within(()=>{
                //we've to capture all the columns ,this will repeat all the columns
                cy.get("td").each(  ($col, index, $cols)=>{ //$col represents a single column, $cols represents all columns
                    
                    cy.log($col.text()); // Log each column's text content
                })
            })
        })
    })
    
    it.only('Page initiation',()=>{
        // This test case iterates through multiple pages and logs specific column data.
      /*
        //find total no of pages
        let totalPages;
        cy.get(".col-sm-6.text-end").then(   (e)=>{
            
            let mytext=e.text(); //showing 1 to 10 of 16071 (1671 pages)

            totalPages=mytext.substring(mytext.indexOf("(")+1, mytext.indexOf("Pages")-1 );
            cy.log("Total number of pages in a table=>"+totalPages);
        })*/

        // Read data from all pages (Here, we are limiting it to 3 pages for testing)
        let totalPages=3;
        for (let p=1;p<=totalPages;p++){
            if(totalPages>1){
                cy.log("Active page is==="+p); // Log active page number
                
                // Click on the corresponding pagination number
                cy.get("ul[class='pagination']>li:nth-child("+p+")").click();
                cy.wait(5000); // Wait for the new page to load
                
                // Iterate through each row in the table on the current page
                cy.get("table[class='table table-bordered table-hover']>tbody>tr")
                .each(($row, index, $rows)=>{ //$row represents a single row, $rows represents all rows
                    cy.wrap($row).within(()=>{ // Wrap the row to work inside it
                        
                        // Extract the text from the 3rd column of each row
                        cy.get('td:nth-child(3)').then((e)=>{
                            cy.log(e.text()); // Log the extracted data
                        })
                    })
                })
            }
        }
    })
})