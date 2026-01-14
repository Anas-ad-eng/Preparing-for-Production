
describe("Navigation tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:1234"); // أو أي port يفتح فيه Parcel
  });

  it("should load Home page", () => {
    cy.get("#homePage").click();
    cy.contains("A Digital Study Solution for the Modern World");
  });

  it("should load About page", () => {
    cy.get("#aboutPage").click();
    cy.get(".aboutContainer");
  });

  it("should load Card Sets page", () => {
    cy.get("#cardSetPage").click();
    cy.contains("Card Sets");
  });
});
