document.addEventListener('keydown', function(event) {
	if (event.ctrlKey && event.key === 'Home') {
			event.preventDefault()
			document.querySelector('.skip-nav-link').focus();
	}
});
