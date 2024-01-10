describe('First Test', () => {
    it('Web okay', () => {
        cy.visit('http://localhost:3030')
    })
})

describe('Second Test', () => {
    it('shoud focus the form when visit the site', () => {
        cy.visit('http://localhost:3030')
        cy.get('input').first().should('have.focus')
    })
})