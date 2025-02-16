describe("Handle Tables",()=>{

    beforeEach('Login',()=>{

        cy.visit("https://demo.opencart.com/admin/index.php")
        // cy.get("#input-username").click().type("demo")
        // cy.get("#input-password").click().type("demo")
        cy.get("button[type='submit']").click();
        cy.wait(5000);

        cy.get("#menu-customer").click(); //customer main menu
        cy.get("#menu-customer>ul>li:first-child").click(); //customer/sub/child -item
    })

    it('check number rows and columns from a table',()=>{

        cy.get("table[class='table table-bordered table-hover']>tbody>tr").should('have.length','10')
        cy.get("table[class='table table-bordered table-hover']>thead>tr>td").should('have.length','6')

    })

    it('Check cell data from Specific Rows and columns',()=>{

        cy.get("table[class='table table-bordered table-hover']>tbody>tr:nth-child(5)>td:nth-child(3)")
        .contains("leduyquan25741244@gmail.com");


    })
    
    it('Read all the rows & columns data in the first page without pagination',()=>{

        cy.get("table[class='table table-bordered table-hover']>tbody>tr")
            //Capture all the rows
        .each(  ($row, index, $rows)=>{ //$rows hold all the rows & index holds the particular row
            //repeat this each block  for every row
            cy.wrap($row).within(()=>{
                //we've to capture all the columns    ,this will repeat all the columns
                cy.get("td").each(  ($col, index, $cols)=>{ //index is 1,2,3, and so on.. and from all the columns we have to extract a particular column
                    
                    cy.log($col.text());

                })
            })
        })
    })
    it.only('Page initiation',()=>{
      /*
        //find total no of pages
        let totalPages;
        cy.get(".col-sm-6.text-end").then(   (e)=>{
            
            let mytext=e.text(); //showing 1 to 10 of 16071 (1671 pages)

            totalPages=mytext.substring(mytext.indexOf("(")+1, mytext.indexOf("Pages")-1 );
            cy.log("Total number of pages in a table=>"+totalPages);
        })*/

        //read data from the all the pages
        let totalPages=3;
        for (let p=1;p<=totalPages;p++){
            if(totalPages>1){
                cy.log("Active page is==="+p);
                cy.get("ul[class='pagination']>li:nth-child("+p+")").click();
                cy.wait(5000);
                
                cy.get("table[class='table table-bordered table-hover']>tbody>tr")
                .each(($row, index, $rows)=>{
                    cy.wrap($row).within(()=>{
                        cy.get('td:nth-child(3)').then((e)=>{
                            cy.log(e.text());
                        })
                    })
                })
            }

        }
    })
})