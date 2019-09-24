/// <reference types="Cypress" />

context('Match', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    describe(' calculating winner', () => {
        it('player 2 wins 1:3', () => {
            cy.get('[data-testid=StageMatch0]')
                .click()

            cy.get('[data-testid=MatchHeader0]')
                .should('contain.text', 'Avi Cohen')
                .should('contain.text', 'Benny Levi');

            cy.get('[data-testid=FirstPlayer0]').clear().type(10);
            cy.get('[data-testid=Game0Winner]').should('be.empty');
            cy.get('[data-testid=SecondPlayer0]').clear().type(9);
            cy.get('[data-testid=Game0Winner]').should('be.empty');
            cy.get('[data-testid=FirstPlayer0]').clear().type(11);
            cy.get('[data-testid=Game0Winner]').should('contain.text', 'won by Avi Cohen');
            cy.get('[data-testid=FirstPlayer0]').clear().type(10);
            cy.get('[data-testid=Game0Winner]').should('be.empty');
            cy.get('[data-testid=SecondPlayer0]').clear().type(12);
            cy.get('[data-testid=Game0Winner]').should('contain.text', 'won by Benny Levi');
            cy.get('[data-testid=FirstPlayer1]').clear().type(14);
            cy.get('[data-testid=SecondPlayer1]').clear().type(16);
            cy.get('[data-testid=MatchFooter0]').should('be.empty')
            cy.get('[data-testid=FirstPlayer2]').clear().type(11);
            cy.get('[data-testid=SecondPlayer2]').clear().type(6);
            cy.get('[data-testid=FirstPlayer3]').clear().type(8);
            cy.get('[data-testid=SecondPlayer3]').clear().type(11);

            cy.get('[data-testid=MatchFooter0]').should('contain.text', 'Benny Levi')
           

        })
    })
})