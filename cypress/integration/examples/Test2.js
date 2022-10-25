describe("My First Test suite", () => {
    it('My First Test Case', () => {
      cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
      cy.get('.search-keyword').type("ca")
      cy.wait(2000)
      // get element with attribute
      cy.get(".product:visible").should('have.length', 4)
      // Parent child chining
      cy.get(".products").as("productLocator")
      // get element start from parent to descendent
      cy.get("@productLocator").find(".product").should('have.length', 4)
      // get element from index array
      cy.get("@productLocator")
        .find(".product")
        .eq(1).contains('CART')
        .click()
        .should('contain.text', 'ADDED').then(() => {
          console.log("tf")
        })
      // looping  
      cy.get("@productLocator")
        .find(".product")
        .each(function ($el) {
          
          const productName = $el.find("h4.product-name").text()
          if (productName.includes("Cashews")) {
            cy.wrap($el).find("button").click()
          }
        })
      // assert if logo text is correctly displayed
      cy.get(".brand").should('have.text',"GREENKART")

      // handle non cypress command the promise by manually  
      cy.get(".brand").then(function(logoEle) {
        cy.log(logoEle.text())
      })
    })
  })