describe("Navigation tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:1234");
  });

  it("should load Home page", () => {
    // أضفنا { force: true } لتجاوز مشكلة التغطية
    cy.get("#homePage").click({ force: true });
    cy.contains("A Digital Study Solution for the Modern World");
  });

  it("should load About page", () => {
    cy.get("#aboutPage").click({ force: true });
    cy.get(".aboutContainer");
  });

  it("should load Card Sets page", () => {
    cy.get("#cardSetPage").click({ force: true });
    cy.contains("Card Sets");
  });
});