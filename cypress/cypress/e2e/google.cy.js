describe('Google Search', () => {
    it('Visits Google and types Tapas', () => {
      // Visit Google
      cy.visit('https://www.google.com');
      
      // Find the search box and type 'Tapas'
      cy.get('input[name="q"]').type('Tapas');
  
      // Optionally, you can press 'Enter' to search or wait for the results.
      cy.get('input[name="q"]').type('{enter}');
    });
  });
  