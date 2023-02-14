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