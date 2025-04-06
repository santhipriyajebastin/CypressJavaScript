describe.only('testing gigame website', () => {
    it('opening website and check for logo'),() => {
        cy.visit('https://gigamein.com/Login/Candidate');
        cy.wait(40000);
        cy.get('.gigame_logo').should(exist);
    }

});