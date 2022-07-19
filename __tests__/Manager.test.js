const Manager = require("../assets/lib/manager");
const Employee = require("../assets/lib/employee");

test("Checks that office number exists", () => {
  const e = new Manager("Foo", 1, "test@test.com");
  expect(typeof e.officeNumber).toBe("number");
});

test("getRole() should return \"Manager\"", () => {
  const testValue = "Manager";
  const e = new Manager("Foo", 1, "test@test.com", 100);
  expect(e.getRole()).toBe(testValue);
});

test("Can get office number via getOffice()", () => {
  const e = new Manager("Foo", "test@test.com", 1);
  expect(typeof e.getOffice()).toBe("number");
});
