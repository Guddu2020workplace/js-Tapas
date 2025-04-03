describe('Tapas Job Search',()=>{

    beforeEach(() => {
        cy.viewport('iphone-6')  // Set to iPhone 6 size for all tests in this block
      })
    
    it('vist Linkedin',()=>{
        cy.visit('https://www.linkedin.com/')
    })
    it('visit google',()=>{
        cy.visit('https://www.google.co.in/')
    })
})

/*
1.Visit Naukri in loggedin state
2. Find and locate job search field
3.click on it
  a.locate designation field
  b.enetr experience 4 years
  c.find and locate bengaluru, then select from download*/
