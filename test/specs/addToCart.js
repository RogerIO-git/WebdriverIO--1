const SignUpPage = require('../pageobjects/signup.page');
const LoginPage = require('../pageobjects/login.page')
const SecurePage = require('../pageobjects/secure.page');
const AddProductPage = require('../pageobjects/addProduct.page');
const { faker } = require('@faker-js/faker');
const User = require('../Data/User');

describe('Luma e-commerce user', () => {
    beforeEach(async ()=>{
        SignUpPage.open()
        let firstName = await faker.name.firstName();
        let lastName = await faker.name.lastName();
        let email = await faker.internet.email(undefined, undefined, 'faker.com');
        let password = await User.valid.password

        await SignUpPage.signUp(
            firstName,
            lastName,
            email,
            password
        );

        await SecurePage.successMessage.waitForExist();
    })
    afterEach(async ()=>{
        await browser.url(`https://magento.softwaretestingboard.com/customer/account/logout/`);
    })
    it('should be able to add item to cart', async () => {
        await LoginPage.navigateToHome();
        await AddProductPage.chooseProductOne();
        await AddProductPage.addProductOne();
        await SecurePage.successMessage.waitForExist();
        await expect(SecurePage.successMessage).toBeExisting();
        await expect(SecurePage.successMessage).toHaveTextContaining(
            'You added Radiant Tee to your');
    });
});