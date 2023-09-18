describe('Testing header component', () => {

  it('header title is rendered', () => {
    cy.visit('http://localhost:5173/')
    cy.get('[data-testid="header-title"]').should('exist')
    cy.get('[data-testid="header-title"]').should('have.text', 'The Book Store')
  })

  it('header contains a search bar', () => {
    cy.visit('http://localhost:5173/')
    cy.get('[data-testid="book-store-search-bar"]').should('exist')
    cy.get('[data-testid="book-store-search-bar"]').invoke('attr', 'placeholder').should('contain', 'Search...')
  })

  it('header contains a clear cart button', () => {
    cy.visit('http://localhost:5173/')
    cy.get('[data-testid="clear-cart-button"]').should('exist')
    cy.get('[data-testid="clear-cart-button"]').should('have.text', 'Clear cart')
  })

  it('header contains a cart icon', () => {
    cy.visit('http://localhost:5173/')
    cy.get('[data-testid="shopping-cart-icon"]').should('exist')
  })

})