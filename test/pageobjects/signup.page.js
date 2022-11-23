const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SignUpPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputFirstName () {
        return $('input#firstname');
    }

    get inputLastName () {
        return $('input#lastname');
    }

    get inputEmail () {
        return $('input#email_address');
    }

    get inputPassword () {
        return $('input#password');
    }

    get inputPasswordConfirmation () {
        return $('input#password-confirmation');
    }

    get btnSubmit () {
        return $('button.action.submit.primary');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async signUp (firstName, lastName, email, password) {
        await this.inputFirstName.waitForDisplayed();
        await this.inputFirstName.setValue(firstName);
        await this.inputLastName.setValue(lastName);
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.inputPasswordConfirmation.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('customer/account/create/');
    }
}

module.exports = new SignUpPage();
