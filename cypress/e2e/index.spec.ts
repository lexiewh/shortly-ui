describe('Basic flow', () => {
	beforeEach(() => {
		cy.viewport('macbook-13')
	})

	it('Should render the navbar', () => {
		cy.visit('/')
		cy.findAllByTestId('Title').should('have.text', 'Shortly')
		cy.findAllByTestId('NavLink').should('have.length', 4)
		cy.findAllByTestId('Button').should('contain.text', 'Sign Up')
	})
})
