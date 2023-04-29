// Define a test suite named 'Demo app'
describe("Demo app", function() {

  // Define a test case named 'Add new computer to the demo application'
  it("Add new computer to the demo application", function() {

    // Visit the demo application URL
    cy.visit("https://computer-database.gatling.io/computers");

    // Click on the 'Add a new computer' button
    cy.get('#add').click();

    // Fill out the required fields to create a new computer
    cy.get('#name').type("macbook"); // Fill out the computer name field
    cy.get('#introduced').type("2019-05-24"); // Fill out the introduction date field
    cy.get('#discontinued').type("2023-01-24"); // Fill out the discontinuation date field
    cy.get("#company").select('Apple Inc.'); // Select the company from the dropdown list

    // Click on the 'Create this computer' button to submit the form
    cy.get('.primary').click();

    // Wait for a few seconds to allow the new computer to be created
    cy.wait(6000);

  });

});

//Gherkin format 

//Given that I am on the Demo application
//When I click on the "Add a new computer" button
//Then I should see a form to fill out

//Given that I am on the "Add a computer" form
//When I fill out the required fields with the following information:

//Computer name: "macbook"
//Introduced date: "2019-05-24"
//Discontinued date: "2023-01-24"
//Company name: "Apple Inc."
//And I click on the "Create this computer" button
//Then the computer should be added to the list of computers on the application