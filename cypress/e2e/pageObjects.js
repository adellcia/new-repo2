export class NavigationPage{
    contactPage(){
       cy.get('#contact-us').invoke("removeAttr", "target").click()
    }
   
    dropdownsPage(){
       cy.get('#dropdown-checkboxes-radiobuttons').invoke("removeAttr", "target").click()
    }
   
   datepickerPage(){
       cy.get('#datepicker').invoke("removeAttr", "target").click()
   
   }
   
   autocompletePage() {
       cy.get('#autocomplete-textfield').invoke("removeAttr", "target").click()
   
   }
   
   ajaxPage(){
       cy.get('#ajax-loader').invoke("removeAttr", "target").click()
   
   }
   }
   
   export const navigateTo = new NavigationPage ()
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
   
   export class Checkboxes {

    checkAll() {
        cy.get('.thumbnail').eq(1).should('contain', 'Checkboxe(s)')
        .find('input','[type="checkbox"]')
        .check()
        .should('be.checked')
    }

    uncheckOneTwo() {
        cy.get('.thumbnail').eq(1).should('contain', 'Checkboxe(s)').find('input','[type="checkbox"]').then ( input => {
            cy.wrap(input).eq(1)
            .uncheck().should('not.be.checked')
            cy.wrap(input).eq(3)
            .uncheck().should('not.be.checked')
    })
   }
}
export const checkBoxes = new Checkboxes
