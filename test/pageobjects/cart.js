const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class Cart extends Page {
    /**
     * define selectors using getter methods
     */
    
     get cartIcon(){
        return $('a.action.showcart')
    }

    get checkOutCartBtn(){
        return $('button#top-cart-btn-checkout')
    }

    get companyField(){
        return $('[name="shippingAddress\.company"] > .control >.input-text')
    }

    get addressLine1Field(){
        return $('[name="shippingAddress\.street\.0"] > .control >.input-text')
    }

    get addressLine2Field(){
        return $('[name="shippingAddress\.street\.1"] > .control >.input-text')
    }

    get addressLine3Field(){
        return $('[name="shippingAddress\.street\.2"] > .control >.input-text')
    }
    
    get cityField(){
        return $('[name="shippingAddress\.city"] > .control >.input-text')
    }

    get state_provinceField(){
        return $('[name="shippingAddress\.region_id"]>.control >.select')
    }

    get zip_portalField(){
        return $('[name="shippingAddress\.postcode"]>.control >.input-text')
    }

    get countryField(){
        return $('[name="shippingAddress\.country_id"]>.control >.select')
    }

    get phoneNumField(){
        return $('[name="shippingAddress\.telephone"]>.control >.input-text')
    }

    get radioBtnOne(){
        return $('input.radio[name="ko_unique_1"]')
    }

    get radioBtnTwo(){
        return $('input.radio[name="ko_unique_2"]')
    }

    get continueShippingBtn(){
        return $('button.action.continue.primary')
    }

    get billingAddressDetails(){
        return $('.billing-address-details')
    }
    get placeOrderBtn(){
        return $('button.action.primary.checkout')
    }

    get purchaseConfirmationMsg(){
        return $('.base')
    }

    get purchaseId(){
        return $('.checkout-success>p>a>strong')
    }

    //Order Page Locators
    get OrderDetailName(){
        return $('.product.name.product-item-name')
    }
    get OrderDetailSize(){
        return $('.item-options>dd:nth-child(2)')
    }
    get OrderDetailColour(){
        return $('.item-options>dd:nth-child(4)')
    }

    get OrderNumber(){
        return $('.base')
    }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async checkOutCart () {
        await this.cartIcon.click();
        await this.checkOutCartBtn.waitForDisplayed();
        await this.checkOutCartBtn.click();
    }

    async inputShippingDetail(
        company,
        addressLine1,
        addressLine2,
        addressLine3,
        city,
        zip_pastal,
        phoneNum
    ){
        await this.companyField.setValue(company);
        await this.addressLine1Field.setValue(addressLine1);
        await this.addressLine2Field.setValue(addressLine2);
        await this.addressLine3Field.setValue(addressLine3);
        await this.cityField.setValue(city);
        await this.state_provinceField.click();
        await browser.keys('N');
        await browser.keys('\uE007');
        await this.zip_portalField.setValue(zip_pastal);
        await this.phoneNumField.setValue(phoneNum);
        await this.radioBtnOne.scrollIntoView();
        await this.radioBtnOne.click();
    }

    async clickNextBtn(){
        await this.continueShippingBtn.click()
    }

    
}

module.exports = new Cart();