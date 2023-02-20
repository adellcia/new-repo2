import { goToPage } from '../support/page-objects.js/NavigationPage'
import { fillForm } from '../support/page-objects.js/FormFilling'
import { checkBoxes } from '../support/page-objects.js/Checkboxes'


describe('template spec', () => {
  beforeEach( () => {
    goToPage.mainPage()
  })

  it('1', () => {
    goToPage.contactPage()
    fillForm.fullFormFilling()
    cy.get('input[type="reset"]').click()
    cy.get('input[placeholder], textarea[placeholder="Comments"]').should('have.value', "")
  
    })

  it('2', () => {
    goToPage.contactPage()
    fillForm.notFullFormFilling()
    cy.get('input[type="submit"]').click()
    cy.get('body').should('contain', 'Error: all fields are required')
    })

  it('3', () => {
    goToPage.contactPage()
    fillForm.wrongEmailFormFilling()
    cy.get('input[type="submit"]').click()
    cy.get('body').should('contain', 'Error: Invalid email address')
    })

  it('4', () => {
      goToPage.contactPage()
      fillForm.fullFormFilling()
      cy.get('input[type="submit"]').click()
      cy.get('body').should('contain', 'Thank You for your Message!')  
})

it.only('5', () => {
  goToPage.dropdownsPage();
const dropdownValues = [  ['JAVA', 'C#', 'Python', 'SQL'],
  ['Eclipse', 'Maven', 'TestNG', 'JUnit'],
  ['HTML', 'CSS', 'JavaScript', 'JQuery'] ]
for (let i = 0; i < dropdownValues.length; i++) {
  const dropdown = cy.get('.thumbnail').first().should('contain', 'Dropdown Menu(s)').find('.dropdown-menu-lists').eq(i);
  dropdownValues[i].forEach((value) => {
    dropdown.select(value).should('have.value', `${value.toLowerCase()}`);
  });
}

  it('6', () => {
  goToPage.dropdownsPage()
  checkBoxes.checkAll()
  checkBoxes.uncheckOneTwo()
  })

it('7', () => {
  goToPage.dropdownsPage()
  cy.get('.thumbnail').eq(2).should('contain', 'Radio Button(s)').find('input','[type="radiobutton"]').then (radiobutton => {
    cy.wrap(radiobutton).each( radiobutton => {
      cy.get(radiobutton).check().should('be.checked')
    })
  })
      
it('8', () => {
  goToPage.datepickerPage()
  let date = new Date()
  date.setDate(date.getDate() + 2)
  let futureDay = date.getDate('default')
  let futureMonth = date.toLocaleString('default', {month: 'long'})
  let assertMonth = date.toLocaleString('default', {month: '2-digit'})
  let dateAssert = assertMonth+'-'+futureDay+'-'+date.getFullYear()

  cy.get('#datepicker').find('input').then( input => {
    cy.wrap(input).click()
    selectDayFromCurrent()
    function selectDayFromCurrent(){
      cy.get('.datepicker-switch').invoke('prop', 'textContent').then( dateAttribute => {
          if(!dateAttribute.includes(futureMonth)) {
            cy.get('.next').eq(0).click()
            selectDayFromCurrent()
          } else {
            cy.get('.day').contains(futureDay).click()
          }
    })    
} 
cy.wrap(input).invoke('prop', 'value').should('contain', dateAssert)
    })
  })

it('9', () => {
  goToPage.autocompletePage()
cy.get('section').find('form').find('div', '.autocomplete').click().type('chi')
cy.get('#myInputautocomplete-list').find('div').eq(1).click()
cy.get('section').find('form').find('input').first().then( input => {
  cy.wrap(input)
  .should('have.value', 'Chips')
})
})

it('10', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  }) 
  goToPage.ajaxPage()
  cy.get('#button1', { timeout: 10000 }).should('be.visible').click()
  cy.get('.modal-content').find('.modal-body').should('contain', 'The waiting game can be a tricky one; this exercise will hopefully improve your understandings of the various types of waits.')
})
  })
})
})
