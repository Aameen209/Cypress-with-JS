describe("Alerts",()=>{

    //[1] Javascript Alert : It will have some text and 'OK' button
    it('jsAlert',()=>{

        //Alert is automatically handled by the cypress
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsAlert()']").click(); // css selector oneclick = attribute, jsAlert = value

        //validating the text on alert window
        cy.on('window:alert',(t)=>{ //t = some alert window variable
            expect(t).to.contain("I am a JS Alert"); //validation point & we don't need to close alert window cypress will automatically will do this
        })
        //validating the text after closing the alert
        cy.get("#result").should('have.text','You successfully clicked an alert') //for text verifying
    })
    //[2] Javascript Confirm Alert : It will have some text with 'OK' and 'Cancel' button
    it('js Confirm Alert-Ok',()=>{  //by using 'only' then this it block only run

        //Cypress will automatically closed alert window by using ok button
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsConfirm()']").click();
        cy.on('window:confirm',(t)=>{
            expect(t).to.contains('I am a JS Confirm');
        })        
        cy.get("#result").should('have.text','You clicked: Ok') //for text verifying
    })
    //[2] Javascript Confirm Alert : For Cancel button
    it('js Confirm Alert-Cancel',()=>{  //by using 'only' then this it block only run

        //Cypress will automatically closed alert window by using ok button
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsConfirm()']").click();
        cy.on('window:confirm',(t)=>{
            expect(t).to.contains('I am a JS Confirm');
        })        
        cy.on('window:confirm',()=>false); //cypress will close alert window automatically by using 'cancel' button
        cy.get("#result").should('have.text','You clicked: Cancel') //for text verifying
    
    })
    //[3] Javascript Prompt Alerts: It will have some text with a text box for user input along with 'OK' and 'Cancel' button
    it('js prompt Alert',()=>{  

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        //store the text in win before clicking on prompt alert button
        cy.window().then((win)=>{
            cy.stub(win,'prompt').returns('welcome');
        })        
        //after storing the text then click on the alert button 
        cy.get("button[onclick='jsPrompt()']").click()
        //after typing the text into text box field it's click on ok button by default
         cy.get("#result").should('have.text', 'You entered: welcome');
    })
     //[4] Javascript Authenticated Alert: It will have some text with a text box for user input along with 'OK' and 'Cancel' button
     it.only('Authenticated Alert',()=>{  
        //approach1
        //auth basic for pop-up entering username and password
        /*cy.visit("https://the-internet.herokuapp.com/basic_auth",{auth :
                                                                        {
                                                                            username : "admin",
                                                                            password : "admin"
                                                                        }
                                                                    } );
        cy.get("div[class='example'] p").should("have.contain","Congratulations")*/
        
        //aproach2
        cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")
        cy.get("div[class='example'] p").should("have.contain","Congratulations")
    })

    

})