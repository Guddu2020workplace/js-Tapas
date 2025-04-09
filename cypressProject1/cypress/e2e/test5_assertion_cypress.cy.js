
describe('Non-Loggedin flow',()=> {
    
    it('Landing Page',()=> {
        
         cy.visit("http://localhost:3000/signin")

 //assertion
 //imploicit and explicit

 //verify the url contains coupon code
        cy.url().should('include',"3000")  // 'include = key and 3000 = value'
        cy.url().should('eq','http://localhost:3000/signin') //eq = equality -it will match the exact url provided
        cy.url().should('contain','sign') 

        cy.url().should('include',"3000").should('eq','http://localhost:3000/signin').should('contain','sign')


//using and keyword insteead of repeatedly using should 

        cy.url().should('include',"3000").and('eq','http://localhost:3000/signin').and('contain','sign').and('not.contain','Tapas')

        cy.title().should('eq','Cypress Real World App')
        cy.title().should('contains','Cypress Real World App')
        cy.get('[d="M40.073 1.133C39.27.776 38.36.623 37.39.66l-9.832.384c-.901.112-1.527.94-1.385 1.831.14.874.966 1.477 1.845 1.346l9.514-.357c.555-.02.957.068 1.237.192.42.186.603.409.717.777.116.37.12.936-.174 1.662l-3.843 9.51c-.782 1.937-3.782 4.168-6 4.251l-8.053.301c-.901.112-1.527.94-1.385 1.832.14.874.966 1.477 1.845 1.346l7.735-.274c3.881-.145 7.486-2.851 8.857-6.244l3.842-9.51c.514-1.273.635-2.6.258-3.806-.374-1.203-1.293-2.234-2.496-2.768zM21.68 2.33a1.66 1.66 0 00-.93-.147l-7.688.173c-3.859.094-7.416 2.67-8.74 5.945L.615 17.478c-.662 1.638-.61 3.417.344 4.798.951 1.383 2.715 2.145 4.644 2.099l9.772-.253c.894-.098 1.507-.894 1.355-1.76-.15-.849-.979-1.443-1.852-1.327l-9.456.23c-1.103.026-1.556-.293-1.806-.655-.25-.362-.38-.987-.002-1.92l3.708-9.178c.754-1.866 3.714-3.993 5.921-4.046l8.005-.195c.894-.098 1.507-.894 1.355-1.76a1.63 1.63 0 00-.921-1.181h-.002zm2.52 2.093c-.811-.315-1.718.071-2.027.862l-.186.462c-1.183.164-2.3.756-3.06 1.753-1.54 2.018-1.095 4.956.985 6.505.714.531.858 1.476.33 2.167-.53.692-1.488.815-2.202.285l-.635-.47c-.691-.527-1.675-.412-2.202.255-.537.682-.416 1.642.328 2.197l.635.47v.001c.13.096.264.186.402.269-.26.76.117 1.609.888 1.933.82.344 1.755-.037 2.07-.844l.185-.457c1.184-.163 2.3-.76 3.062-1.758 1.54-2.017 1.094-4.955-.986-6.504-.714-.531-.858-1.475-.33-2.167.53-.691 1.489-.816 2.203-.286l.634.47c.692.527 1.677.412 2.204-.255.537-.681.388-1.675-.33-2.197l-.632-.47c-.13-.097-.27-.175-.408-.257.275-.78-.127-1.652-.927-1.964z"]').should('be.visible')

        cy.get('.MuiContainer-root > .MuiTypography-root').should('be.visible').and('exist')

        //get all the links in the page
        cy.xpath('//a').should('have.length','2')  


//get the locator for the user name and pass the value

        cy.get("#username").type("Katharina_Bernier")

        //need to check whether the given value is passed to the specific field or not

        cy.get("#username").should('have.value','Katharina_Bernier')

        cy.get("#password").type("s3cret")

        cy.get("#password").should('have.value','s3cret')

        cy.get("button[type='submit']").click()  


 })
      it('explicit assertion',() <={

        
      })                  
    
 })