//using mocha framework to write cypress automation
describe('jobsearch', function(){

    //Test Case
    it('test1',  function(){
        //steps
        cy.visit(
            'https://www.google.co.in/'
        );
    });
});