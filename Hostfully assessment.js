  // This is a test suite for a demo app
describe("Demo app", function() {
  
  // This is a test case to add a new computer
  it("Add", function() {
    
    // Visit the computer database website
    cy.visit("https://computer-database.gatling.io/computers")
    
    // Wait for the page to load
    cy.wait(3000)
    
    // Scenario 1: Add a new computer successfully
    // Fill in the required fields and submit the form
    cy.get('#add').click()
    cy.get('#name').type("macbook")
    cy.get('#introduced').type("2019-05-24")
    cy.get('#discontinued').type("2023-01-24")
    cy.get("#company").select('Apple Inc.')
    cy.get('.primary').click()
    
    // Verify that the computer was successfully added
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.equal('Done! Computer macbook has been created')
    })
    
    
    // Scenario 2: Add a new computer with invalid date format
    cy.get('#add').click()
    cy.get('#name').type("invalid-date-format")
    cy.get('#introduced').type("05-24-2019")
    cy.get('#discontinued').type("01-24-2023")
    cy.get("#company").select('Apple Inc.')
    cy.get('.primary').click()
    
    // Verify error message is displayed for invalid date format
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.equal('Failed to decode date : java.time.format.DateTimeParseException: Text "05-24-2019" could not be parsed at index 0')
      expect(alertText).to.equal('Failed to decode date : java.time.format.DateTimeParseException: Text "01-24-2023" could not be parsed at index 0')
    })
    
    
    // Scenario 3: Add a new computer with missing required field
    cy.get('#name').type("no discontinued")
    cy.get('#introduced').type("2019-05-24")
    cy.get('.primary').click()
    
    // Verify error message is displayed for missing field
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.equal('Failed to decode date : java.time.format.DateTimeParseException: Text "01-24-2023" could not be parsed at index 0')
    })
    
    
    // Scenario 4: Cancel adding a new computer
    cy.get('#add').click()
    cy.get('#name').type("cancel-add")
    cy.get('#introduced').type("2019-05-24")
    cy.get('#discontinued').type("2023-01-24")
    cy.get("#company").select('Apple Inc.')
    cy.get('a.btn').click()
  })
})