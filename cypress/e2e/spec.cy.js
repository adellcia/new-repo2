let baseUrl = ('https://webdriveruniversity.com/')


import { checkBoxes, navigateTo } from './pageObjects'
import { fillForm } from './pageObjects'
import { Checkboxes } from './pageObjects'

describe('template spec', () => {
  beforeEach('open application page', () => {
    cy.visit(baseUrl)
  })

  it('1', () => {
    
    navigateTo.contactPage()
    fillForm.fullFormFilling()
    cy.get('input[type="reset"]').click()
    cy.get('input[placeholder], textarea[placeholder="Comments"]').should('have.value', "")
    
    })


    
  it('2', () => {
    
    navigateTo.contactPage()
    fillForm.notFullFormFilling()
    cy.get('input[type="submit"]').click()
    cy.get('body').should('contain', 'Error: all fields are required')

    })

  it('3', () => {
    
    navigateTo.contactPage()
    fillForm.wrongEmailFormFilling()
    cy.get('input[type="submit"]').click()
    cy.get('body').should('contain', 'Error: Invalid email address')


    })
  it('4', () => {
      
      navigateTo.contactPage()
      fillForm.fullFormFilling()
      cy.get('input[type="submit"]').click()
      cy.get('body').should('contain', 'Thank You for your Message!')
    
})


it('5', () => {
  
  navigateTo.dropdownsPage()

  cy.get('.thumbnail').first().should('contain', 'Dropdown Menu(s)').find('.dropdown-menu-lists').first()
  .select('JAVA').should('have.value', 'java')
  .select('C#').should('have.value', 'c#')
  .select('Python').should('have.value', 'python')
  .select('SQL').should('have.value', 'sql')

  cy.get('.thumbnail').first().should('contain', 'Dropdown Menu(s)').find('.dropdown-menu-lists').eq(1)
  .select('Eclipse').should('have.value', 'eclipse')
  .select('Maven').should('have.value', 'maven')
  .select('TestNG').should('have.value', 'testng')
  .select('JUnit').should('have.value', 'junit')

  cy.get('.thumbnail').first().should('contain', 'Dropdown Menu(s)').find('.dropdown-menu-lists').eq(2)
  .select('HTML').should('have.value', 'html')
  .select('CSS').should('have.value', 'css')
  .select('JavaScript').should('have.value', 'javascript')
  .select('JQuery').should('have.value', 'jquery')
      
  })
it.only('6', () => {
  navigateTo.dropdownsPage()
  checkBoxes.checkAll()
  checkBoxes.uncheckOneTwo()

  })
it('7', () => {
  navigateTo.dropdownsPage()
  cy.get('.thumbnail').eq(2).should('contain', 'Radio Button(s)').find('input','[type="radiobutton"]').then (radiobutton => {
    cy.wrap(radiobutton).each( radiobutton => {
      cy.get(radiobutton).check().should('be.checked')
    })
  })
    
  
it('8', () => {
  navigateTo.datepickerPage()

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
  navigateTo.autocompletePage()

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
  navigateTo.ajaxPage()
  cy.get('#button1', { timeout: 10000 }).should('be.visible').click()
  cy.get('.modal-content').find('.modal-body').should('contain', 'The waiting game can be a tricky one; this exercise will hopefully improve your understandings of the various types of waits.')

})


  })
})


