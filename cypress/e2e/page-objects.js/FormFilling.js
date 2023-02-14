let firstName = 'Brat'
   let lastName = 'Pitt'
   let emailAddress = 'bradPitt@gmail.com'  
   let Comments = 'Comment'
      export class FormFilling{

       fullFormFilling(){
           cy.get('[placeholder="First Name"]').type(firstName)
           cy.get('[placeholder="Last Name"]').type(lastName)
           cy.get('[placeholder="Email Address"]').type(emailAddress)
           cy.get('[placeholder="Comments"]').type(Comments)
       }
       notFullFormFilling(){
        cy.get('[placeholder="First Name"]').type(firstName)
        cy.get('[placeholder="Last Name"]').type(lastName)
        cy.get('[placeholder="Email Address"]').type(emailAddress)
       }
       wrongEmailFormFilling(){
        cy.get('[placeholder="First Name"]').type(firstName)
        cy.get('[placeholder="Last Name"]').type(lastName)
        cy.get('[placeholder="Email Address"]').type('brad.pitt.gmail.com')
        cy.get('[placeholder="Comments"]').type(Comments)
       }
   }
   export const fillForm = new FormFilling()