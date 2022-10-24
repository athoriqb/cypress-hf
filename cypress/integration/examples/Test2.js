describe("My First Test suite", () => {
    it('My First Test Case', () => {
      cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
      cy.get('.search-keyword').type("ca")
      cy.wait(2000)
      // get element with attribute
      cy.get(".product:visible").should('have.length', 4)
      // get element start from parent to descendent
      cy.get(".products").find(".product").should('have.length', 4)
      // get element from index array
      cy.get(".products")
        .find(".product")
        .eq(1).contains('CART')
        .click()
        .should('contain.text', 'ADDED')
      // looping  
      cy.get(".products")
        .find(".product")
        .each(function ($el) {
          
          const productName = $el.find("h4.product-name").text()
          if (productName.includes("Cashews")) {
            cy.wrap($el).find("button").click()
          }
        })
    })
  })