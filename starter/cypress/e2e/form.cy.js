describe("Form tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:1234"); // أو حسب مسار مشروعك
  });

  it("should show error for empty input", () => {
    cy.get("[data-cy='submit-button']").click();
    cy.get("input[name='setName']").then(($input) => {
      expect($input[0].validationMessage).to.exist;
    });
  });
});
