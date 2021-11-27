import { username, password } from './fixtures.js'

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
        expect(userNameDropdown.getText()).toEqual('Lenka');
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


