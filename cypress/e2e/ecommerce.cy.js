describe('e-commerce website tesing',()=>{
    beforeEach(()=>{
        cy.visit('https://checkout.demo.vuestorefront.io/');
    })

    it('1.	Open the homepage of the e-commerce site.',()=>{
        cy.get('body').should('be.visible');
    })

    it('2.	Search for a product by name.',()=>{
        cy.get('button[data-search="quickSearch"]').should('be.visible').click();
        cy.get('#nav-quick-search').type('kitchen');
        //3.	Click on the product from the search results.
        cy.get('[aria-label*="Able Brewing System"]').eq(1).should('exist').click();
        cy.get('input[value="Add to Cart"]').should('exist').click();
        cy.contains('a', 'View or edit your cart').should('be.visible').click()
        cy.url().should('include',"/cart.php");
    });
  
  

})