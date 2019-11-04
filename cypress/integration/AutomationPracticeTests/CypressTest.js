import LandingPage from '../../pages/LandingPage'
import LoginPage from '../../pages/LoginPage'

describe('My first cypruss test',() =>{
    let email;
    let password;

    beforeEach(() => {
    cy.fixture('user').then((user) => {
      email=user.email;
      password=user.password;
    })
    });

    it('Navigate to test Automation demo site',()=>{
        const landingPage=new LandingPage();
        landingPage.visit();
        landingPage.clickSignIn();
    })

    it('Verify SignIn using registered email',()=>{
        const loginPage= new LoginPage();
        loginPage.fillEmail(email);
        loginPage.fillPassword(password);
        loginPage.submit();
        cy.title().should('include','My account - My Store');
    })

    it ('Verify purchase flow',()=>{
      //clicking on category women
      cy.xpath("//a[@title='Women']").click();
      //Adding first item from this category to cart
      cy.xpath("(//span[contains(.,'Add to cart')])[1]").click();
      //Clicking on continue shopping
      cy.xpath("(//span[contains(.,'Continue shopping')])[2]").click();
      //clicking second category Dresses
      cy.xpath("(//a[contains(@title,'Dresses')])[5]").click();
      //Adding first item from this category to cart
      cy.xpath("(//span[contains(.,'Add to cart')])[1]").click();
      //Clicking checkout button
      cy.xpath("//span[contains(.,'Proceed to checkout')]").click();
      //Clicking Proceed to checkout in Summary tab
      cy.xpath("(//span[contains(.,'Proceed to checkout')])[2]").click();
      //Signing in signIn tab
      cy.get('#email').type(email);
      cy.get('#passwd').type(password);
      cy.get('#SubmitLogin > span').click();
      //Clicking Proceed to checkout in Address tab
      cy.xpath("(//span[contains(.,'Proceed to checkout')])[2]").click();
      //Checking terms and conditions and clicking proceed to checkout in shipping page
      cy.xpath("//input[@id='cgv']").click();
      cy.xpath("(//span[contains(.,'Proceed to checkout')])[2]").click(); 
      //Choosing payment method and confirming order
      cy.xpath("//a[@class='bankwire']").click();
      cy.xpath("//span[contains(.,'I confirm my order')]").click();
    })
})

