class Login{

    txtUserName="input[placeholder='Username']";
    txtPassword="input[placeholder='Password']";
    btnSubmit="button[type='submit']";
    lblmsg=".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module";

    setUserName(username){
        cy.get(this.txtUserName).type(username); //this represents current class
    }
    setPassword(password)
    {
        cy.get(this.txtPassword).type(password);
    }
    clickSubmit(){
        cy.get(this.btnSubmit).click();
    }
    verifylogin(){
        cy.get(this.lblmsg).should('have.text','Dashboard');
//we can use this as well
        // cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should('have.text','Dashboard');

    }
}
export default Login;