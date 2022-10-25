describe("My Fourth Test suite", () => {
    it('My Fourth Test Case', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        // checkbox
        cy.get("#checkBoxOption1").check().should('be.checked').and('have.value',"option1")
        cy.get("#checkBoxOption1").uncheck().should('not.be.checked')
        cy.get("input[type='checkbox']").check(['option2','option3'])

        //dropdown static
        cy.get("#dropdown-class-example").select("option2").should('have.value',"option2")

        //dropdown dynamic
        cy.get("#autocomplete").type("ind")
        cy.get(".ui-menu-item div").each(($el) => {
            const country = $el.text()
            if (country == "India") {
                cy.wrap($el).click()
            }
        })
        cy.get("#autocomplete").should('have.value',"India")

        // visible invisible
        cy.get("#displayed-text").should("be.visible")
        cy.get("#hide-textbox").click()
        cy.get("#displayed-text").should("not.be.visible")
        cy.get("#show-textbox").click()
        cy.get("#displayed-text").should("be.visible")

        // radio button
        cy.get("input[value='radio2']").check().should("be.checked")
    })
  })