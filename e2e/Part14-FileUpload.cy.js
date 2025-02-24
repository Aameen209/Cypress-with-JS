import 'cypress-file-upload'; // Importing Cypress file upload plugin to handle file uploads

describe('File Upload', ()=>{

    it('Single File Upload',()=>{ 
        cy.visit('https://the-internet.herokuapp.com/upload') // Navigate to the file upload page
        
        // Selecting the file input element using an ID selector and uploading a file
        cy.get('#file-upload').attachFile( { filePath: 'test1.pdf' }); 
        
        // Click the submit button to upload the file
        cy.get('#file-submit').click();
        
        cy.wait(3000); // Wait for the upload to process

        // Verify that the file upload confirmation message is displayed
        cy.get('#content>div>h3').should('have.text','File Uploaded!');
    })

    it('File Upload - Rename',()=>{ 
        cy.visit('https://the-internet.herokuapp.com/upload')

        // Uploading a file and renaming it before submission
        cy.get('#file-upload').attachFile( { filePath: 'test1.pdf' , fileName:'myfile.pdf'});

        cy.get('#file-submit').click();
        cy.wait(3000);

        // Verify upload confirmation message
        cy.get('#content>div>h3').should('have.text','File Uploaded!');
    })

    it('File Upload - Drag and drop',()=>{ 
        cy.visit('https://the-internet.herokuapp.com/upload') 
        
        // Upload file using drag-and-drop method (instead of input selection)
        cy.get('#drag-drop-upload').attachFile("test1.pdf",{subjectType:'drag-n-drop'}); 
        
        cy.wait(3000);

        // Verify file name appears after upload
        cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span').contains("test1.pdf");
    })

    it('Multiple Files Upload',()=>{ 
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')

        // Upload multiple files at once
        cy.get('#filesToUpload').attachFile(["test1.pdf","test2.pdf"])

        cy.wait(3000);

        // Verify uploaded file names are listed
        cy.get('#fileList>li').should('contain.text','test1.pdftest2.pdf')
    })

    it.only('File Upload - Shadow DOM',()=>{ // shadow root = shadow DOM
        cy.visit('https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm');

        // Selecting a file input inside a shadow DOM using {includeShadowDom: true}
        cy.get(".smart-browse-input",{includeShadowDom:true}).attachFile("test1.pdf");

        cy.wait(5000);

        // Verify uploaded file appears inside shadow DOM
        cy.get('.smart-item-name',{includeShadowDom:true}).contains('test1.pdf');

        // when writing this ID #fileUpload8c28File1Name then it's not working and with class it is working why?
        // Possible reason: The element inside the shadow DOM might have dynamically generated IDs that change per session, 
        // making it unreliable to use an ID selector. Using class selectors can be more stable.
    })

})
