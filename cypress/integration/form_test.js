const nameInput = () => cy.get('input[name="name"]')
const instructionsInput = () => cy.get('input[name="instructions"]')
const submitInput = () => cy.get('input[name="submitBtn"]')
const pepperoniInput = () => cy.get('input[name="pepperoni"]')
const sausageInput = () => cy.get('input[name="sausage"]')
const baconInput = () => cy.get('input[name="bacon"]')
const olivesInput = () => cy.get('input[name="olives"]')
const pineappleInput = () => cy.get('input[name="pineapple"]')
const mushroomsInput = () => cy.get('input[name="mushrooms"]')
const sizeInput = () => cy.get('input[name="size"]')

describe('Pizza App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza')
    })
    it('sanity test', () => {
        expect(1+1).to.equal(2)
    })

    it('can text be put in the box', () => {
        nameInput()
            .should('have.value', '')
            .type('Andrew')
            .should('have.value', 'Andrew')

        instructionsInput()
            .should('have.value', '')
            .type('Make it good')
            .should('have.value', 'Make it good')
    })

    it('can select multiple boxes', () => {
        sausageInput().click()
        olivesInput().click()
    }) 

    it('can submit', () => {
        nameInput().type('Andrew')
        sausageInput().click()
        olivesInput().click()
        instructionsInput().type('Things n Stuff')
        submitInput().click()
    })
})