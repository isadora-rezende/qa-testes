
describe('Teste de Login - Sauce Demo', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/');
  });

  it('CT01 - Login com usuário válido', () => {
    cy.get('#user-name').type('standard_user');
    cy.wait(500)
    cy.get('#password').type('secret_sauce');
    cy.wait(500)
    cy.get('#login-button').click();
    cy.url().should('include', '/inventory.html');
    cy.wait(500)
  });

  it('CT02 - Login com usuário inválido', () => {
    cy.get('#user-name').type('usuarioerrado');
    cy.wait(500)
    cy.get('#password').type('secret_sauce');
    cy.wait(500)
    cy.get('#login-button').click();
    cy.get('[data-test="error"]').should('contain.text', 'Epic sadface: Username and password do not match');
    cy.wait(500)
  });

  it('CT03 - Login com senha inválida', () => {
    cy.get('#user-name').type('standard_user');
    cy.wait(500)
    cy.get('#password').type('senhaerrada');
    cy.wait(500)
    cy.get('#login-button').click();
    cy.get('[data-test="error"]').should('contain.text', 'Epic sadface: Username and password do not match');
    cy.wait(500)
  });

  it('CT04 - Login com campos vazios', () => {
    cy.wait(1000)
    cy.get('#login-button').click();
    cy.get('[data-test="error"]').should('contain.text', 'Epic sadface: Username is required');
    cy.wait(500)
  });

   it('CT05 - Logout do usuário', () => {
    cy.get('#user-name').type('standard_user');
    cy.wait(500)
    cy.get('#password').type('secret_sauce');
    cy.wait(500)
    cy.get('#login-button').click();
    cy.wait(500)
    cy.get('#react-burger-menu-btn').click();
    cy.wait(500)
    cy.get('#logout_sidebar_link').click();
    cy.url().should('eq', 'https://www.saucedemo.com/');
    cy.wait(500)
   }); 
});