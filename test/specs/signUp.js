const SignUpPage = require('../pageobjects/signup.page');
const SecurePage = require('../pageobjects/secure.page');
const User = require('../Data/User');
const { faker } = require('@faker-js/faker');

describe('Luma e-commerce user', () => {
    beforeEach(()=>{
        SignUpPage.open();
    })
    afterEach(()=>{
        browser.url(`https://magento.softwaretestingboard.com/customer/account/logout/`);
    })
    it('should signup with valid credentials', async () => {
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
        await expect(SecurePage.successMessage).toBeExisting();
        await expect(SecurePage.successMessage).toHaveTextContaining(
            'Thank you for registering with Fake Online Clothing Store.');
    });
    it('should not be able to signup with no fields entered', async () => {
        let firstName = ' ';
        let lastName = ' ';
        let email = ' ';
        let password = ' ';

        await SignUpPage.signUp(
            firstName,
            lastName,
            email,
            password
        );

        await SecurePage.passwordConfirmationError.waitForExist();
        await expect(SecurePage.firstNameError).toHaveTextContaining(
            'This is a required field.');
        await expect(SecurePage.lastNameError).toHaveTextContaining(
            'This is a required field.');
        await expect(SecurePage.emailError).toHaveTextContaining(
            'This is a required field.');
        await expect(SecurePage.passwordError).toHaveTextContaining(
            'This is a required field.');
        await expect(SecurePage.passwordConfirmationError).toHaveTextContaining(
            'This is a required field.');
    });
    it('should not be able to signup with invalid email field', async () => {
        let firstName = await faker.name.firstName();
        let lastName = await faker.name.lastName();
        let email = User.invalid1.email;
        let password = await faker.internet.password(10);

        await SignUpPage.signUp(
            firstName,
            lastName,
            email,
            password
        );

        await SecurePage.emailError.waitForExist();
        await expect(SecurePage.emailError).toHaveTextContaining(
            'Please enter a valid email address');
    });
    it('should not be able to signup with invalid password field', async () => {
        let firstName = await faker.name.firstName();
        let lastName = await faker.name.lastName();
        let email = await faker.internet.email(undefined, undefined, 'faker.com');
        let password = User.invalid2.password;

        await SignUpPage.signUp(
            firstName,
            lastName,
            email,
            password
        );

        await SecurePage.passwordError.waitForExist();
        await expect(SecurePage.passwordError).toHaveTextContaining(
            'Minimum length of this field must be equal or greater than 8 symbols');
    });
});