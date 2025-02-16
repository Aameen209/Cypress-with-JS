import 'cypress-iframe'
require('@4tw/cypress-drag-drop')

describe('Mouse Operator',()=>{

    it('MouseHover',()=>{
        cy.visit("https://demo.opencart.com/");
        
        cy.get("body > main:nth-child(4) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)")
        .should('not.be.visible');


        cy.get(".nav > :nth-child(1) > .dropdown-toggle").trigger('mouseover').click();

        cy.get("body > main:nth-child(4) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)")
        .should('be.visible');
    })
    
    it('RightClick',()=>{
        cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html")

        //Approach1
        // cy.get("ul>[class='context-menu-item context-menu-icon context-menu-icon-copy']").should('not.be.visible')
        // cy.get("span[class='context-menu-one btn btn-neutral']").trigger('contextmenu') //contectmenu for right click
        // cy.get("ul>[class='context-menu-item context-menu-icon context-menu-icon-copy']").should('be.visible')
        
        //Approach2
        cy.get("span[class='context-menu-one btn btn-neutral']").rightclick();
        cy.get("ul>[class='context-menu-item context-menu-icon context-menu-icon-copy']").should('be.visible')
    })
    
    it('DoubleClick',()=>{
        cy.visit("https://www.w3schools.com/TAgs/tryit.asp?filename=tryhtml5_ev_ondblclick")
        cy.frameLoaded('#iframeResult');

        // //Approach1
        // cy.iframe('#iframeResult').find("button[ondblclick='myFunction()']").trigger('dblclick');
        // cy.iframe('#iframeResult').find("#demo").should('have.text', 'Hello World');     
        //Approach2   
        cy.iframe('#iframeResult').find("button[ondblclick='myFunction()']").dblclick();
        cy.iframe('#iframeResult').find("#demo").should('have.text', 'Hello World');    
        
    })
    
    it('Drag and Drop Using Plugin',()=>{
        cy.visit("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html#google_vignette")
        cy.get("#box106").should('be.visible');
        cy.get('#box6').should('be.visible');

        cy.wait(3000);
        cy.get("#box6").drag('#box106',{force:true}); //if it's an hidden element use force
        cy.get("#box7").drag('#box107',{force:true});
        cy.get("#box1").drag('#box101',{force:true});
        cy.get("#box4").drag('#box104',{force:true});
        cy.get("#box5").drag('#box105',{force:true});
        cy.get("#box2").drag('#box102',{force:true});
        cy.get("#box3").drag('#box103'); //if it's not hidden then drag it directly 
    })

    it.only('Scrolling',()=>{
        cy.visit("https://www.worldometers.info/geography/flags-of-the-world/")
//scrolling to the specif flag
        cy.get("a[href='/img/flags/in-flag.gif']").scrollIntoView({duration:2000}); //duration = taking 2 second to scrolling
        cy.get("a[href='/img/flags/in-flag.gif']").should('be.visible')
    //Scrolling up
        cy.get("a[href='/img/flags/af-flag.gif']").scrollIntoView({duration:5000}); //duration = taking 2 second to scrolling
        cy.get("a[href='/img/flags/af-flag.gif']").should('be.visible')

        //scrollign to the end of the page
        cy.get(".footerlinks").scrollIntoView({duration:10000});
         })
})