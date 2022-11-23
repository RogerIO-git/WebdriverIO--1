const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */


    // get logoutDropdown () {
    //     return $('.panel>.header>.customer-welcome');
    // }

    get inputEmail () {
        return $('input#email');
    }

    get inputPassword () {
        return $('input#pass[name="login[password]"]');
    }

    get btnSubmit () {
        return $('button.action.login.primary');
    }

    get siteLogo () {
        return $('a.logo');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (email, password) {
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    async navigateToHome(){
        await this.siteLogo.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('customer/account/login/');
    }
}

module.exports = new LoginPage();
