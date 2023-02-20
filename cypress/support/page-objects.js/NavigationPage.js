let contactPage = '#contact-us'
let dropdownsPage = '#dropdown-checkboxes-radiobuttons'
let datepickerPage = '#datepicker'
let autocompletePage = '#autocomplete-textfield'
let ajaxPage = '#ajax-loader'
let baseUrl = 'https://webdriveruniversity.com/'
export class NavigationPage{
    contactPage(){
       cy.get(contactPage).invoke("removeAttr", "target").click()
    }
   
    dropdownsPage(){
       cy.get(dropdownsPage).invoke("removeAttr", "target").click()
    }
   
   datepickerPage(){
       cy.get(datepickerPage).invoke("removeAttr", "target").click()
   
   }
   
   autocompletePage() {
       cy.get(autocompletePage).invoke("removeAttr", "target").click()
   
   }
   
   ajaxPage(){
       cy.get(ajaxPage).invoke("removeAttr", "target").click()
   
   }
   
   mainPage(){
    cy.visit(baseUrl)
   }
   }
   
   export const goToPage = new NavigationPage ()
   
   

