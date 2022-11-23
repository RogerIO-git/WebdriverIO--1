

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    get flashAlert () {
        return $('#flash');
    }

    //Login Messages and Notifications
    get successMessage(){
        return $('div.message-success')
    }

    get firstNameError(){
        return $('#firstname-error')
    }

    get lastNameError(){
        return $('#lastname-error')
    }

    get emailError(){
        return $('#email_address-error')
    }

    get passwordError(){
        return $('#password-error')
    }

    get passwordConfirmationError(){
        return $('#password-confirmation-error')
    }

    //Product Details Messages and Notifications
    get sizeError(){
        return $('[id="super_attribute[93]-error"]')
    }

    get colourError(){
        return $('[id="super_attribute[143]-error"]')
    }

    


}

module.exports = new SecurePage();
