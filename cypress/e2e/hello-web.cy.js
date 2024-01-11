describe('Home first view behaviour', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3030')
    })
 
    it('Input has focus on load', () => {  
        cy.focused()
            .should('have.class', 'new-todo')
    })
})