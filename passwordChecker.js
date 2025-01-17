export class PasswordChecker {
	isValid(password) {
		if (password.length < 8) return false;
		if (password.search(/[a-z]/) < 1) return false;
		if (!/\d/.test(password)) return false;
		
		return true;
	}
}
