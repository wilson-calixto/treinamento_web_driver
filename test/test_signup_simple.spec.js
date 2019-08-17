
describe('Signup test', function() {
    var username = element(by.model('$ctrl.formData.username'));
    var email = element(by.model('$ctrl.formData.email'));
    var password = element(by.model('$ctrl.formData.password'));
    var signupButton = element(by.xpath("//button[@class='btn btn-lg btn-primary pull-xs-right ng-binding']"));
    var signed = element.all(by.xpath("//a[@class='nav-link ng-binding']")).first();
    var text = "username has already been taken";
    var duplicaterusername = element(by.cssContainingText('li.ng-binding.ng-scope', text));
    var user='';
    var email='';
   

    function makeid(length) {
      var user= '';
      var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      var charactersLength = characters.length;
      for ( var i = 0; i < length; i++ ) {
         user += characters.charAt(Math.floor(Math.random() * charactersLength));
      }

      return user,user+"@gmail.com";
   }
   

    beforeEach(function() {
      browser.get('http://localhost:4000/#!/register');
      // console.log(makeid(5));

    });
  
    it('it should have a title', function() {
      expect(browser.getTitle()).toEqual('Sign up — Conduit');
    });

    it(' it should display error when username is duplicated', function() {
      username.sendKeys('eli876544');
      email.sendKeys('eli876544@test.te');
      password.sendKeys('123456789');
      //clica no botão e depois faz o assert
      signupButton.click().then(function () {
        expect(duplicaterusername.getText()).toEqual(text);
      }); 

     });
  
    it('it should sign up new user', function() {

      user,email=makeid(5);
      username.sendKeys(user);
      email.sendKeys(email);
      console.log(user,email);
      //clica no botão e depois faz o assert
      signupButton.click().then(function() {
        expect(signed.getText()).toEqual('eli876544');
      }); 

    }); 



    it('it should sign up new user', function() {
      username.sendKeys('eli876544');
      email.sendKeys('eli876544@test.te');
      password.sendKeys('123456789');

      //clica no botão e depois faz o assert
      signupButton.click().then(function() {
        expect(signed.getText()).toEqual('eli876544');
      }); 

    }); 



});