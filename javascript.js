const TITLE = "Chosentechies";

function render() {
	const yearEl = document.getElementById("year");
	if (yearEl) {
		yearEl.textContent = new Date().getFullYear();
	}
}

if (document.readyState === "loading") {
	document.addEventListener("DOMContentLoaded", render);
} else {
	render();
}
