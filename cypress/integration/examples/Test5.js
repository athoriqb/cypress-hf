describe("My Fourth Test suite", () => {
    it('My Fourth Test Case', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get("#alertbtn").click()
        cy.on("window:alert",(str) => {
            expect(str).to.equal("Hello , share this practice page and share your knowledge")
        })
        cy.get("#confirmbtn").click()
        cy.on("window:confirm",(str) => {
            expect(str).to.equal("Hello , Are you sure you want to confirm?")
        })

        // handling new tab with remove attribut target with jquery
        // invoke for using jquery function
        cy.get('#opentab').invoke('removeAttr','target').click()
 
        cy.url().should('include','rahulshettyacademy')
 
        cy.go('back')
        
    })
  })