const hamburgerSideBar = '.hideBelowDesktop.hamburgerMenuIcon'

describe('Testing gigame website',() => {

 //   beforeEach(() => {
        // Runs once before all tests in this describe block
        it('should type valid credentials and able to click on login button and navigate to the next page',() =>{
        cy.intercept('POST','https://gigamein.com/Login').as('gigamelogin');
        cy.visit('https://gigamein.com/Login/Candidate');
      //  cy.wait('@gigamelogin');
        cy.get('div').should('be.visible');
        cy.title().should('include','Login Candidate - GigaMe');
        cy.get('input[placeholder="Email or User name"]').type('santhipriyajebastin@gmail.com');
        cy.get('input[placeholder="Password"]').type('Jessexen@10');
        cy.get('div[style="opacity: 1;"]').eq(2).click()
        cy.get(hamburgerSideBar).should('be.visible');
        cy.wait('@gigamelogin',{ timeout: 60000}).then((interception)=>{
            console.log(interception);
            expect(interception.response.statusCode).to.eq(200);
        })
      });

//   {
//         cy.get(hamburgerSideBar).should('be.visible').click();
        
//     }) 

    // it('able to logout from gigame',()=>{
    //     cy.get(hamburgerSideBar).click();
    //     cy.get('.dropdown-items[href="/Login/Candidate"]').click();
    //     cy.url().should('include','/login/candidate');
    // })

    // after(()=>{
    //     // cy.get('.dropdown-items[href="/Login/Candidate"]').click()
    //     // cy.url().should('include','/candidate');
    //     console.log('test completed ****')
    // })
})