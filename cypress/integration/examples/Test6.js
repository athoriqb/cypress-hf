describe('My Second Test Suite', function() 
{
 
it('My FirstTest case',function() {
 
//Check boxes
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
 
cy.get('tr td:nth-child(2)').each(($e1, index, $list) => {
 
    const text=$e1.text()
    if(text.includes("Python"))
    {
 
        cy.get("tr td:nth-child(2)").eq(index).next().then((price) =>
        {
         const priceText=   price.text()
         expect(priceText).to.equal('25')
        })
    }
})
//mouse over
// cy.get("div[class='mouse-hover-content']").invoke("show")
cy.contains("Top").click({force: true})
cy.url().should("include","#top")
})
 
 
})