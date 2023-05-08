describe('Basic flow', () => {
	beforeEach(() => {
		cy.viewport('macbook-13')
	})

	it('Should render the home page', () => {
		cy.visit('/')
		cy.get('[data-cy="header"]').should('be.visible')
	})
})
