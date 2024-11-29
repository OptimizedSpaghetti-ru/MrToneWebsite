document.getElementById("buy-button").addEventListener("click", function () {
	document.getElementById("buy-modal").style.display = "block";
});

const closeModalButtons = Array.from(
	document.getElementsByClassName("close-modal")
);

closeModalButtons.forEach((button) => {
	button.addEventListener("click", function () {
		document.getElementById("buy-modal").style.display = "none";
	});
});
