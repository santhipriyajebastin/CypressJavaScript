describe('Testing webpage',() => {
   
        it('should visit the login page and check the title',()=>{
           cy.intercept('GET','https://298279967.log.optimizely.com/event*').as('optimizelyEvent');
            cy.visit('https://the-internet.herokuapp.com/login');
            cy.wait('@optimizelyEvent');
            cy.get('form').should('be.visible');
            cy.title().should('include','The Internet');
         //   cy.request('GET', 'optimizelyEvent'). its('status');
           
        })

        it('login and verify success and logout',()=>{
            cy.visit('https://the-internet.herokuapp.com/login');
            cy.get('#username').type('tomsmith');
            cy.get('#password').type('SuperSecretPassword!');
            cy.get('button[type="submit"]').click();
            cy.url().should('include',"/secure");
            cy.get('#flash-messages').should('be.visible').and('contain','You logged into a secure area!');
            cy.get('.button.secondary.radius[href="/logout"]').should('be.visible').click();
            cy.url().should('include',"/login");
        })

        it('login with api @api',()=>{
            cy.request({
                method:'POST',
                url : 'https://the-internet.herokuapp.com/login',
                body:{
                    username:'tomsmith',
                    password:'SuperSecretPassword!',
                }
            }).then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body).to.have.property('token');
                window.localStorage.setItem('auth_token', response.body.token);

            });
            cy.visit('/login');
            cy.url().should('include',"/secure");
        })
        
        it('should show error message for invalid attempt',()=>{
            cy.visit('https://the-internet.herokuapp.com/login');
            cy.get('#username').type('sssss');
            cy.get('#password').type('SuperSecretPassword!');
            cy.get('button[type="submit"]').click();
            cy.get('.flash.error').should('contain','Your username is invalid!');
        })
    

})