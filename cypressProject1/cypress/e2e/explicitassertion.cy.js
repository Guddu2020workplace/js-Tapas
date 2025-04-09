describe('explicit assertion',()=> {

    it('learnquickly',()=> {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get("input[placeholder='Username']").type('admin')
           
        cy.get("input[placeholder='Password']").type('admin123')
       
        cy.get("button[type='submit']").click()
    }
    )
}
)