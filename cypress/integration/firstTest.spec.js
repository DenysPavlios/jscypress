///  <reference types="Cypress" /> 


// describe("Popolnenie mobolnogo telefona", () => {
//     context("Popolnenie minimalnoy summu", () => {
//         it("Pokazuvaet owibky: Minimum popolneniya na 1 UAH", () => {



//         })

//     })

// })

it("By id", () => {
    cy.vieport(1800, 700)
    cy.visit('https://next.privat24.ua/deposit')
    cy.get('tbody>:nth-child(1)>:nth-child(8)')
})
//