export class PasswordChecker {
	checkLength(password) {
		return password.length >= 8;
	}

	checkSpecialChar(password) {
		return /[!@#$%^&*(),.?":{}|<>]/.test(password);
	}

	checkNumbers(password) {
		return /\d/.test(password);
	}

	checkIPL(password) {
		return !/ipl/i.test(password);
	}

	isValid(password) {
		return this.checkLength(password) && this.checkSpecialChar(password) && this.checkNumbers(password) && this.checkIPL(password);
	}
}
