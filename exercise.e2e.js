import { username, password, userFullName } from './fixtures.js'

describe('Authentication page', () => {

    beforeEach(() => {
        browser.reloadSession();
        browser.url('/login?back=my-account');
    });

    it('should sign in', () => {


        const emailField = $('#email');
        expect(emailField).toBeDisplayed();
        expect(emailField).toBeEnabled();

        const passwordField = $('#passwd');
        expect(passwordField).toBeDisplayed();
        expect(passwordField).toBeEnabled();

        const loginButton = $('#SubmitLogin');
        expect(loginButton.getText()).toEqual('Sign in');

        emailField.setValue(username);
        passwordField.setValue(password);
        loginButton.click();

        const userNameDropdown = $('[data-toggle="dropdown"]');
        expect(userNameDropdown.getText()).toEqual(userFullName);
    });

    it('should logout', () => {
        const emailField = $('#email')
        const passwordField = $('#passwd');
        const loginButton = $('#SubmitLogin');

        emailField.setValue(username);
        passwordField.setValue(password);
        loginButton.click();

        const userNameDropdown = $('[data-toggle="dropdown"]');
        expect(userNameDropdown.getText()).toEqual('Lenka');

        userNameDropdown.click();
        $('.dropdown-menu').$('[title="Log me out"]').click();

        const loginLink = $('.user_login');
        expect(loginLink.getText()).toEqual('Sign in')

        loginLink.click();
        expect(emailField).toBeDisplayed();
        expect(passwordField).toBeDisplayed();
        expect(loginButton).toBeDisplayed();
    });
});

describe('My account page', () => {

    beforeEach(() => {
        browser.reloadSession();
        browser.url('/login?back=my-account');
    });

    it('my account ', () => {

        const emailField = $('#email');
        expect(emailField).toBeDisplayed();
        expect(emailField).toBeEnabled();

        const passwordField = $('#passwd');
        expect(passwordField).toBeDisplayed();
        expect(passwordField).toBeEnabled();

        const loginButton = $('#SubmitLogin');
        expect(loginButton.getText()).toEqual('Sign in');

        emailField.setValue(username);
        passwordField.setValue(password);
        loginButton.click();

        const userNameDropdown = $('[data-toggle="dropdown"]');
        expect(userNameDropdown.getText()).toEqual(userFullName);

        const fieldOrders = $('a[title="Orders"]').$('span');
        expect(fieldOrders).toBeDisplayed();
        expect(fieldOrders).toBeEnabled();

        const fieldCredit = $('a[title="Credit slips"]').$('span');
        expect(fieldCredit).toBeDisplayed();
        expect(fieldCredit).toBeEnabled();

        const fieldAddresses = $('a[title="Addresses"]').$('span');
        expect(fieldAddresses).toBeDisplayed();
        expect(fieldAddresses).toBeEnabled();

        const fieldPersonal = $('a[title="Information"]').$('span');
        expect(fieldPersonal).toBeDisplayed();
        expect(fieldPersonal).toBeEnabled();

        const fieldHome = $('a[title="Home"]').$('span');
        expect(fieldHome).toBeDisplayed();
        fieldHome.click();
        browser.saveScreenshot('main_page.png');

    });
});
