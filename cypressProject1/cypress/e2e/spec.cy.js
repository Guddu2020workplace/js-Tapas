/*describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
}) */

describe('automation suite',()=>{
  it('test1',()=>{
    cy.visit('https://www.google.co.in/')
  })

  it('test2',()=>{
    cy.visit('https://www.amazon.jobs/en/')
  })


  it('test3',()=>{
    cy.visit('https://www.flipkart.com/')
    cy.wait(4000)
    cy.get('a[title="Login"] span').click().should('have.text','Login')
    cy.get('input[class="r4vIwl BV+Dqf"]').type('9938723778')
   // cy.get('button[@class="QqFHMw twnTnD _7Pd1Fp"]').click()
   cy.get('button[class*="QqFHMw"]').click();

  })

  })


