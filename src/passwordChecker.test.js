import { isPasswordValid } from './passwordChecker';

describe("Password validation", () => {
	it("should return false for passwords shorter than 8 characters", () => {
		const result = isPasswordValid("Ab@1");
	  	expect(result.toBe(false));
	});
});
