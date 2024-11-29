function showCategory(category) {
	const categories = ['best-selling', 'sale', 'top-rated', 'new-items'];
	categories.forEach(cat => {
		document.getElementById(cat).style.display = 'none';
	});
	document.getElementById(category).style.display = 'flex';
	const buttons = document.querySelectorAll('.sidebar button');
	buttons.forEach(button => {
		button.classList.remove('active');
	});
	document.querySelector(`.sidebar button[onclick="showCategory('${category}')"]`).classList.add('active');
}