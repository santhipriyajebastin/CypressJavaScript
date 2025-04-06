describe('Button Test', () => { 
    it('should find the button', () => { 
        cy.visit('https://www.google.com/'); 
        cy.wait(10000);
        cy.get('input[name="btnK"]', { timeout: 10000 }).should('exist');
    });
    it('should click the google search button',() => {
        cy.visit('https://www.google.com/'); 
        cy.wait(10000);
        cy.get('input[name="btnK"]', { timeout: 10000 }).should('be.visible'); 
        cy.get('input[name="btnK"]', { timeout: 10000 }).should('exist');
            it('should click the first Google Search button', () => {
                cy.get('input[name="btnK"]:first').should('be.visible').click();
              }); 
        
        });
});