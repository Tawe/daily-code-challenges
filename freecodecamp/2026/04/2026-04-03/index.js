function getBrowserHistory(commands) {
	const history = [];
	let currentIndex = 0;

	for (const command of commands) {
		if (command === "Back") {
			currentIndex = Math.max(0, currentIndex - 1);
		} else if (command === "Forward") {
			if (history.length > 0) {
				currentIndex = Math.min(history.length - 1, currentIndex + 1);
			}
		} else {
			history.splice(currentIndex + 1);
			history.push(command);
			currentIndex = history.length - 1;
		}
	}

	return [history, currentIndex];
}

console.log(
	getBrowserHistory(["freecodecamp.org", "freecodecamp.org/learn", "Back"]),
);
