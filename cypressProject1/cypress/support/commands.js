// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
import 'cypress-xpath';

// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// cypress/support/index.js or cypress/support/commands.js

Cypress.on('uncaught:exception', (err, runnable) => {
    // Ignore specific error messages (e.g., errors from third-party scripts)
    if (err.message.includes('specific error message or script')) {
      // Return false to prevent Cypress from failing the test
      return false;
    }
    // Return true to fail the test (default behavior)
    return true;
  });
  
  