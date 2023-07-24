describe('Тестирование Оформление заказа на сайте HuntingPony', function () {
   it('Выбираб товар и оформляю заказ', function () {
        cy.visit('https://huntingpony.com/'); //зашла на сайт
        cy.get('[data-index="1"] > .header__collections-controls > .header__collections-link').click(); //нажала на кнопку Лежанки
        cy.get('[data-product-id="338934152"] > .product-preview__content > .product-preview__area-photo > .product-preview__photo > .img-ratio > .img-ratio__inner > a > :nth-child(1) > .product-preview__img-1').click(); //нажала на карточку товара
        cy.wait(2000)
        cy.contains('В корзину').should('be.visible'); //вижу информацию
        cy.get('.add-cart-counter__btn').click(); // нажала на кнопку В корзину
        cy.get('[data-add-cart-counter-plus=""]').click(); // изменила количество на 2 шт. 
        cy.get('.add-cart-counter__detail').click(); // нажать кнопку Перейти в Корзину 
        cy.get('.cart-controls > .button').click(); // нажать кнопку Оформить заказ
        cy.wait(2000)
        cy.get('#client_surname').type('Макаркин'); 
        cy.get('#client_contact_name').type('Оксимирон');
        cy.get('#client_phone').type('+79011211212');
        cy.get('#client_email').type('Oximiron@Makarkin.ru');
        cy.get('#shipping_address_country').type('Россия');
        cy.get('#shipping_address_full_locality_name').type('Москва');
        cy.get('#shipping_address_street').type('Ленинградское шоссе');
        cy.get('#shipping_address_house').type('76');
        cy.get('#shipping_address_flat').type('357');
        cy.get('#order_comment').type('Спасибо от Оксимирона!');
        cy.get('#checkout_buyer_fields > .co-input--required > .co-input-select > .co-input-field').select('Мальчик');
        cy.get('#order_field_24333471').type('Бигль');  
        cy.get('#order_field_24333473').type('02.07.2017');
        cy.get('.co-delivery_method-list > .co-input--captcha > .g-recaptcha > [style="width: 304px; height: 78px;"] > div > iframe').click();
        cy.get('#create_order').click();        
          
         })

})

