describe('mobile vikings comment', () => {

    it('intercept comment' , () => {  
        cy.intercept('reviews**',
        {body:{
        "number_of_reviews": 17974,
         "average_score": 8.38, 
         "buckets": {"0": 445, "1": 449, "2": 533, "3": 854, "4": 4172, "5": 11521}, 
         "reviews": [
                {"name": "J.", "score": 10, "text": " geen Goede duidelijke info en snelle informatie terug als je een vraag stelt.", "date": "2021-11-15T00:00:00Z"},
                {"name": "E.", "score": 10, "text": "totaal niet Vlot, handig, overzichtelijk, niet duur", "date": "2021-11-18T00:00:00Z"},

            ]}   
            
         }).as('reviews')
        
        cy.visit('https://mobilevikings.be/nl/offer/subscriptions/')
        cy.wait('@reviews')
    })

    beforeEach(() => {
        cy.visit('https://mobilevikings.be/nl/')
        cy.get('#btn-accept-cookies').click()    

    })
})