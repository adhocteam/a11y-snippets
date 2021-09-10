const getLabel = (node) => {
  // Order of precedence is:
  // 1. aria-labelledby
  // 2. aria-label
  // 3. from-label
  // 4. contents
  // 5. title
  return node.ariaLabelledBy || node.ariaLabel || node.innerText;
};

describe("My First Test", () => {
  it("should not have multiple buttons with the same label", () => {
    cy.visit("http://localhost:8080");

    // Find all the buttons
    cy.get("button").then((buttonList) => {
      // 1. For each button (I'm seeing this a `.map()` that returns the accessible labels)
      // 	a. Calculate the accessible label
      // 	  - In order of a11y label precedence (`aria-labelledby` -> `aria-label`, etc.), use the test of the first occurrence
      // 1. Compare the length of the calcuated labels array against the size of the unique labels Set
      // 1. Find the duplicates and flag them});

      cy.log(buttonList);

      const labels = Array.from(buttonList).map((b) => getLabel(b));
      const unique = new Set(labels);

      cy.log("All the labels:", labels);
      cy.log("Unique labels:", unique);
      // expect(labels.length).equal(unique.size);
    });
  });
});
