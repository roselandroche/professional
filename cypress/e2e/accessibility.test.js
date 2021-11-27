/// <reference types="Cypress" />

describe("Accessibility tests", () => {
  beforeEach(() => {
    cy.visit("/").get("main").injectAxe()
  })
  it("Has no detectable accessibility violations on load", () => {
    cy.checkA11y()
  })
  it("Navigates to jobs page and checks for accessibility violations", () => {
    cy.get("#job-link").click().checkA11y()
  })
  it("Navigates to education page and checks for accessibility violations", () => {
    cy.get("#edu-link").click().checkA11y()
  })
  it("Navigates to volunteer page and checks for accessibility violations", () => {
    cy.get("#vol-link").click().checkA11y()
  })
  it("Focuses on the footer link and asserts its attributes", () => {
    cy.findAllByText("Gatsby").focus()
    cy.focused()
      .should("have.text", "Gatsby")
      .should("have.attr", "href", "https://www.gatsbyjs.com")
      .should("not.have.css", "outline-width", "0px")
  })
})
