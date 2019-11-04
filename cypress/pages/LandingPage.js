class LandingPage{
    // static SignInButton=cy.get('.login')
    constructor(){
    }

    visit() {
        cy.visit('/');
    }

    getSignInLink() {
        return cy.get('.login');
      }
    
    clickSignIn(){
        const link = this.getSignInLink();
        link.click();
    }

}
export default LandingPage;