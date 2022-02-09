describe('mobile vikings', () => {

    it('displays two items at a time' , () => {  
        cy.intercept('b2c',
        {body: [{"name": "chat", "sla_duration": 2, "is_open": true, "opening_hours": [{"days": "week", "opening_at": "08:30:00", "closing_at": "16:30:00"}]}, 
                {"name": "whatsapp", "uri": "https://wa.me/32456130693", "sla_duration": 20, "is_open": true, "opening_hours": [{"days": "week", "opening_at": "08:30:00", "closing_at": "22:00:00"}, {"days": "weekend", "opening_at": "08:30:00", "closing_at": "22:00:00"}]}, 
                {"name": "messenger", "uri": "https://m.me/mobilevikings", "sla_duration": 20, "is_open": true, "opening_hours": [{"days": "week", "opening_at": "08:30:00", "closing_at": "22:00:00"}, {"days": "weekend", "opening_at": "08:30:00", "closing_at": "22:00:00"}]}, 
                {"name": "twitter", "uri": "https://twitter.com/mobilevikingsbe", "sla_duration": 20, "is_open": true, "opening_hours": [{"days": "week", "opening_at": "08:30:00", "closing_at": "22:00:00"}, {"days": "weekend", "opening_at": "08:30:00", "closing_at": "22:00:00"}]}, 
                {"name": "mail", "uri": "mailto:info@mobilevikings.be", "sla_duration": 1440, "is_open": true, "opening_hours": [{"days": "all", "opening_at": "00:00:00", "closing_at": "23:59:00"}]}] 
                
        }).as('klantendienst')
        cy.visit('https://mobilevikings.be/nl/offer/subscriptions/')
        cy.wait('@klantendienst')
    })

    beforeEach(() => {
        cy.visit('https://mobilevikings.be/nl/')
        cy.get('#btn-accept-cookies').click()

        
        

    })

})
