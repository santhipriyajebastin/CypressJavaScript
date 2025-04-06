describe('Tesing amazon website',()=>{

    beforeEach('opne amazon website',()=>{
        cy.visit('https://www.amazon.com/');
    })

    const searchoption = 'Handbag';

    it('verify the page open successfully without any issues',()=>{
        cy.get('#nav-logo-sprites').should('have.attr','aria-label','Amazon');
    })

    it('locate the search bar and enter Handbag and click enter',()=>{
       cy.get('#twotabsearchtextbox').should('have.attr','role',"searchbox").click().type(searchoption);
       // cy.get('#twotabsearchtextbox').should('have.attr','role',"searchbox").click().type('searchoption{Enter}');
      cy.get('#nav-search-submit-button').should('have.attr','value','Go').click();
    })

})