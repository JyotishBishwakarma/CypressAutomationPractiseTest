class LoginPage{
    fillEmail(value) {
        const field = cy.get(`#email`);
        field.clear();
        field.type(value);
        
        return this;
      }
    
      fillPassword(value) {
        const field = cy.get(`#passwd`);
        field.clear();
        field.type(value);
        
        return this;
      }
      
      submit() {
        const button = cy.get(`#SubmitLogin > span`);
        button.click();
      }
}

export default  LoginPage;