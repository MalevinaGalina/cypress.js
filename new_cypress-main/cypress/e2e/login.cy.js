describe('Тестирование формы логина и пароля', function () {
   it('Ввожу правильный логин и пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').should('be.enabled');
        cy.get('#loginButton').click();
        cy.wait(1000)
        cy.contains('Авторизация прошла успешно').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //вижу крестик
        cy.get('#exitMessageButton > .exitIcon').click(); //нажала на крестик
   })
})
describe('Проверка логики восстановления пароля', function () {
   it('Проверяю кнопку восстановления пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#loginButton').should('be.disabled'); //кнопка при входе задиз.
        cy.get('#forgotEmailButton').click();  //нажмаем кнопку забыли пароль
        cy.contains('Восстановите пароль').should('be.visible'); //проверила наличие кнопки 
        cy.get('#exitRestoreButton > .exitIcon').should('be.visible'); //видимый крестик
        cy.get('#mailForgot').type('german@dolnikov.ru'); //вводим емайл
        cy.get('#restoreEmailButton').click(); //нажать на кнопку отправить код
        cy.contains('Успешно отправили пароль на e-mail').should('be.visible'); //вижу информацию
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //вижу крестик
        cy.get('#exitMessageButton > .exitIcon').click(); //нажимаю на крестик
        cy.contains('Форма логина').should('be.visible'); //вижу форму логина
    })
})
describe('Hегативный кейс авторизации', function () {
   it('Ввожу правильный логин и неправильный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#loginButton').should('be.disabled'); //кнопка Войти при входе задиз.
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#loginButton').should('be.disabled'); //кнопка при логине задиз.
        cy.get('#pass').type('iLoveqastudio2');
        cy.get('#loginButton').should('be.enabled');  // кнопка активна 
        cy.get('#loginButton').click();
        cy.contains('Такого логина или пароля нет').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //вижу крестик
        cy.get('#exitMessageButton > .exitIcon').click(); //нажала на крестик
      })
})
 describe('Hегативный кейс авторизации', function () {
   it('Ввожу неправильный логин и правильный пароль', function () {
        cy.visit('https://login.qa.studio/'); //зашла на сайт
        cy.get('#loginButton').should('be.disabled'); //кнопка Войти при входе задиз.
        cy.get('#mail').type('german@dolnikoff.ru'); //ввела неправильный логин
        cy.get('#loginButton').should('be.disabled'); //кнопка Войти при входе задиз.
        cy.get('#pass').type('iLoveqastudio1'); //ввела правильный пароль
        cy.get('#loginButton').should('be.enabled'); //кнопка Войти активна.
        cy.get('#loginButton').click(); //нажала на кнопку Войти
        cy.contains('Такого логина или пароля нет').should('be.visible')
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //крестик видимый
        cy.get('#exitMessageButton > .exitIcon').click(); //нажала на крестик
    })
})
  describe('Hегативный кейс валидации', function () {
   it('Ввожу логин без @', function () {
        cy.visit('https://login.qa.studio/'); //зашла на сайт
        cy.get('#loginButton').should('be.disabled'); //кнопка Войти при входе задиз.
        cy.get('#mail').type('germandolnikov.ru'); //ввела неправильный логин 
        cy.get('#loginButton').should('be.disabled'); //кнопка Войти при входе задиз.
        cy.get('#pass').type('iLoveqastudio1'); //ввела правильный пароль
        cy.get('#loginButton').should('be.enabled'); //кнопка Войти активна.
        cy.get('#loginButton').click(); //нажала на кнопку Войти
        cy.contains('Нужно исправить проблему валидации').should('be.visible') //вижу информацию
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //крестик видимый
        cy.get('#exitMessageButton > .exitIcon').click(); //нажала на крестик
    })
})
  describe('Тест на приведение к строчным буквам в логине', function () {
   it('Ввожу логин GerMan@Dolnikov.ru', function () {
        cy.visit('https://login.qa.studio/'); //зашла на сайт
        cy.get('#loginButton').should('be.disabled'); //кнопка Войти при входе задиз.
        cy.get('#mail').type('GerMan@Dolnikov.ru'); //ввела неправильный логин
        cy.get('#loginButton').should('be.disabled'); //кнопка Войти при входе задиз.
        cy.get('#pass').type('iLoveqastudio1'); //ввела правильный пароль
        cy.get('#loginButton').click(); //нажала на кнопку Войти 
        cy.contains('Такого логина или пароля нет').should('be.visible'); //вижу информацию
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //крестик видимый
        cy.get('#exitMessageButton > .exitIcon').click(); //нажала на крестик
    })
})
  