describe('example testconnection', () => {
    beforeEach(() => {
        cy.visit('https://sacdemostorage.z6.web.core.windows.net/index.html')
        
    })
    it('displays two todo items by default', () => {
    
       
        cy.get('#logout').click()
        cy.get('#username').type('admin')
        cy.get('#password').type('superduper')
        cy.get('#home .content').click()

        cy.get('#bear').should('not.be.visible')
        cy.get('#welcome input').click()
        cy.get('#bear').should('be.visible')
    
      })
      
    
})

