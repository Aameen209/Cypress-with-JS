import 'cypress-file-upload';

describe('File Upload', ()=>{
    it('Single File Upload',()=>{
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile( { filePath: 'test1.pdf' });
        cy.get('#file-submit').click();
        cy.wait(3000);
        cy.get('#content>div>h3').should('have.text','File Uploaded!');

    })
    it('File Upload -rename',()=>{
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile( { filePath: 'test1.pdf' , fileName:'myfile.pdf'});
        cy.get('#file-submit').click();
        cy.wait(3000);
        cy.get('#content>div>h3').should('have.text','File Uploaded!');
        
    })
    it('File Upload - Drag and drop',()=>{
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#drag-drop-upload').attachFile("test1.pdf",{subjectType:'drag-n-drop'});
        cy.wait(3000);
        cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span').contains("test1.pdf");
        
    })
    it('Multiple Files upload',()=>{
      cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
      cy.get('#filesToUpload').attachFile(["test1.pdf","test2.pdf"])
      cy.wait(3000);
      cy.get('#fileList>li').should('contain.text','test1.pdftest2.pdf')
    })
    it.only('File Upload - Shadows DOM',()=>{ //shadow root = shadow dom

        cy.visit('https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm');
        cy.get(".smart-browse-input",{includeShadowDom:true}).attachFile("test1.pdf");
        cy.wait(5000);

        cy.get('.smart-item-name',{includeShadowDom:true}).contains('test1.pdf');
        //when writing this id #fileUpload8c28File1Name then it's not working and with class it working why ?
    })
})