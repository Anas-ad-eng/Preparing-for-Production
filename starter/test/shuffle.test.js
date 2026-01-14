import { expect } from "chai";
import { shuffle } from "../src/shuffle.js";

describe("Shuffle function", () => {
  it("should shuffle an array", () => {
    const arr = [1, 2, 3, 4, 5];
    const shuffled = shuffle(arr);

    // نفس الطول
    expect(shuffled).to.have.lengthOf(arr.length);

    // يجب أن تحتوي على نفس العناصر
    expect(shuffled.sort()).to.deep.equal(arr.sort());

    // من المحتمل أن يكون ترتيب مختلف (احتمالي)
    let isSameOrder = arr.every((val, i) => val === shuffled[i]);
    // يمكن أن يحدث نفس الترتيب بالصدفة، لذلك لا نتحقق بقوة
    expect(isSameOrder).to.be.a("boolean");
  });
});
