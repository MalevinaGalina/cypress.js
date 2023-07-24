
describe('Тестирование staya', function () {
    
    it('Проваливаюсь в категорию поводки и ищу совпадение с названием Heatwave', function () {
        cy.visit('https://staya.dog/');
        cy.get('[href="/catalog/leashes"] > .category-link__canvas-wrapper > .category-link__canvas').click();
        cy.get(':nth-child(1) > .product-list > :nth-child(2) > .SProductCard__galleryWrapper > .CurtainGallery')
        cy.end();
         })

    
})
