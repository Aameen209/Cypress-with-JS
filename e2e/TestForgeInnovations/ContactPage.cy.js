import 'cypress-xpath';
describe('Contact Today', () => {
  
  beforeEach(function (){
    cy.visit("https://testforge.co");

    cy.fixture('contactData').then(function (data) {
      this.data = data;
    });
  });

  it.only('Valid Contact Today Form Submission', function () {
    cy.url().should('contain', 'testforge');
    
    cy.get(".wpda-builder-logo_sticky").should('exist').click({ force: true });
    cy.title().should('eq', 'TestForge – Forge your success');
    cy.get("button[data-id='1214']").should('exist').and('be.visible').first().click();
    cy.get("input[value='Enquiry now']").should('be.visible');
   
    // Using fixture data
    cy.SubmitForm(this.data.valid.name, this.data.valid.email, this.data.valid.phone, this.data.valid.message)
    cy.get(".wpcf7-response-output").should('have.text', 'Thank you for your message. It has been sent.');
    cy.get("button[aria-label='Close this dialog']").click();
  });

  it('Invalid Contact Today Form Submission', function () {
    cy.get("button[data-id='1214']").should('be.visible').first().click();

    // Using invalid fixture data
    cy.SubmitForm(this.data.invalid.name, this.data.invalid.email, this.data.invalid.phone, this.data.invalid.message);

    cy.wait(3000);  

    cy.get(".wpcf7-response-output").should('not.have.text', 'Thank you for your message. It has been sent.');
    cy.get(".wpcf7-response-output").should('have.text','One or more fields have an error. Please check and try again.')
  });

  it('Valid ContactUs Form Submission', function () {
    cy.xpath("//div[@id='wpcf7-f1214-p3425-o1']//form").scrollIntoView({ duration: 2000 });

    cy.xpath("//input[@placeholder='Your Name*']").first().type(this.data.valid.name, { force: true });
    cy.xpath("//input[@placeholder='Phone']").first().type(this.data.valid.phone, { force: true });
    cy.xpath("//input[@placeholder='Email*']").first().type(this.data.valid.email, { force: true });
    cy.xpath("//textarea[@placeholder='Message']").first().type(this.data.valid.message, { force: true });

    cy.xpath("//input[@value='Enquiry now']").first().click();

    cy.xpath("//div[contains(text(),'Thank you for your message. It has been sent.')]")
      .should('have.text', 'Thank you for your message. It has been sent.');
  });

});
