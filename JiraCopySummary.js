const KEY_SPACE = 32;

document.addEventListener("keyup", (e) => {
	if (e.ctrlKey && e.keyCode == KEY_SPACE) {
		copy();
	}
});

function copy() {
	console.log("test")
	var issueText = document.querySelector("#key-val").text;
	var summaryText = document.querySelectorAll("#summary-val").item(0).innerHTML;
	var copyText = issueText + ": " + summaryText;
	navigator.clipboard.writeText(copyText);
}