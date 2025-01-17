export class PasswordChecker {
	isValid(password) {
		if (password.length < 8) return false;
		if (password.search(/[a-z]/) < 1) return false;
		if (password.search(/[0-9]/) === -1) return false;
		if (password.toLowerCase().includes("ipl")) return false;
		
		return true;
	}
}
