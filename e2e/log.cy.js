describe('Автотесты на форму логин пароль', function () {
    it('Верный логин и пароль', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('german@dolnikov.ru');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').click();
         cy.contains('Авторизация прошла успешно');
         cy.get('#exitMessageButton > .exitIcon')
     })
     it('Восстановление пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('dima@mikh.ru');
        cy.get('#restoreEmailButton').click();
        cy.contains('Успешно отправили пароль на e-mail');
        cy.get('#exitMessageButton > .exitIcon')
    })
    it('Верный логин и НЕ верный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio');
        cy.get('#loginButton').click();
        cy.contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon')
    })
    it('Не верный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolniko.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon')
    })
    it('Логин без @ и верный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('germandolniko.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Нужно исправить проблему валидации');
    })
    it('Приведение к строчным буквам в логине EMAIL', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('GerMan@Dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon')
    })
    describe('Покупка аватара', function () {
        it('e2e тест на покупку нового аватара для тренера', function () {
             cy.visit('https://pokemonbattle.me/');
             cy.get(':nth-child(1) > .auth__input').type('dima290991mikhaylov@yandex.ru');
             cy.get('#password').type('1ErD-RSf-Hje-Nrh');
             cy.get('.auth__button').click();
             cy.get('.header__btns > [href="/shop"]').click();
             cy.get('.shop__list > li').not('.feature-empty').children('.shop__button').eq(0).click();
             cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4620869113632996');
             cy.get(':nth-child(1) > .pay_base-input-v2').type('1225');
             cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
             cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('German Dolnikov');
             cy.get('.pay-btn').click();
             cy.get('#cardnumber').type('56456');
             cy.get('.payment__submit-button').click();
             cy.get('.payment__adv').click();
         })
     })
     
 })
