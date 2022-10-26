describe('My Second Test Suite', function() 
{
 
it('My FirstTest case',function() {
 
//handle new tab or window
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
const url= cy.get("#opentab").invoke("prop","href").as("url")
cy.get("@url").then((url) => {
    cy.log(url)
    cy.visit(url)
})
})
 
 
})