var SignupPage = require('./signupPage.po.js');
var HomePage = require('./homePage.po.js');
describe('Sign Up Test', function() {
  var signupPage = new SignupPage();
  var homePage = new HomePage();
  var user= '';
  var email= '';
  
  beforeEach(function() {
    signupPage.visit();
    browser.driver.manage().window().maximize();
    makeid(5);
  });


  function makeid(length) {
    
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       user += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    email=user+"@gmail.com";
    // return user,email;

  }

  it('it should have a title', function() {
    expect(browser.getTitle()).toEqual(signupPage.title);
  });



  it('it should sign up new user', async () => { 
    
    signupPage.username.sendKeys(user);
    signupPage.email.sendKeys(user+'aa@11.com');
    signupPage.password.sendKeys('1qa234567890s');

    signupPage.signupButton.click().then(function() {
        expect(homePage.signed.getText()).toEqual(user);
    });


    homePage.settings.click().then(function() {
        expect(homePage.settings_tab.getText()).toEqual('Your Settings');
    });

  });
});