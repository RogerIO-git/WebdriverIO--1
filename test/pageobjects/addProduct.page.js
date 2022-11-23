const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class AddProductPage extends Page {
    /**
     * define selectors using getter methods
     */
    
     get hotSeller1(){
        return $('.product-item:nth-child(1)')
    }

    get productDetailImage () {
        return $('.fotorama__img');
    }

    get sizeSmall(){
        return $('.swatch-option[aria-label="S"]')
    }

    get colourBlue(){
        return $('.swatch-option[aria-label="Blue"]')
    }

    get addToCartBtn(){
        return $('#product-addtocart-button')
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async chooseProductOne () {
        await this.hotSeller1.scrollIntoView();
        await this.hotSeller1.click();
    }

    async addProductOne(){
        await this.sizeSmall.click();
        await this.colourBlue.click(); 
        await this.addToCart();
    }

    async addToCart(){
        await this.addToCartBtn.waitForDisplayed();
        await this.addToCartBtn.scrollIntoView();  
        await this.addToCartBtn.waitForClickable()
        await this.addToCartBtn.click();      
    }
}

module.exports = new AddProductPage();