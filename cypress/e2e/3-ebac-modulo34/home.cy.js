/// <reference types="cypress" />

describe('Teste para o exercicio', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Incluir novo contato', () => {
        cy.get('[type="text"]').type('Teste Souza')
        cy.get('[type="email"]').type('teste@souza.com')
        cy.get('[type="tel"]').type('77777777')
        cy.get('.adicionar').click()
    })

    it('Editar um contato', () => {
        cy.get(':nth-child(5) > .sc-gueYoa > .edit').click()
        cy.get('[type="tel"]').clear()
        cy.get('[type="tel"]').type('77775555')
        cy.get('.alterar').click()
    })

    it('Remover um contato', () => {
        cy.get(':nth-child(5) > .sc-gueYoa > .delete').click()
    })

})
