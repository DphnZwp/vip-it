document.addEventListener('keydown', function(event) {
	if (event.ctrlKey && event.key === 'Home') {
			document.querySelector('.skip-nav-link').focus();
	}
});
