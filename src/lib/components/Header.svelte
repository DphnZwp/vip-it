<header>
	<div>
		<a class="skip-nav-link" href="#main-content">Navigatie overslaan</a>
		<a aria-label="Logo vip-it" href="/">
			<img aria-hidden="true" src="/vip-it-logo.png" alt="Logo vip-it">
		</a>
	</div>
	<nav>
		<ul>
			<li><a href="/">Home</a></li>
			<li><a href="/over-ons">Over ons</a></li>
			<li><a class="btn-primary" href="/contact">Contact</a></li>
		</ul>
	</nav>
</header>

<style>
	header {
			padding: 1em;
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: .5em;
			width: 100%;
		}

		ul {
			display: flex;
			align-items: center;
			list-style-type: none;
			gap: 2em;
		}

		.skip-nav-link {
			left: 10px;
			position: absolute;
			transform: translateY(-100px);
		}

		.skip-nav-link:focus {
			transform: translateY(0);
		}

		a {
			color: black;
			text-decoration: none;
		}

		a:hover {
			color: var(--clr-light-purple);
		}

		.btn-primary {
			padding: .75em 1.75em;
			color: var(--clr-white);
			background-color: var(--clr-purple);
			border-radius: .5rem;
			display: block;
		}

		.btn-primary:hover {
			color: var(--clr-white);
			background-color: var(--clr-light-purple);
		}

	@media (min-width: 70em) {
		header {
			padding: 1em 6em;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
		}

		div {
			display: flex;
			align-items: center;
		}

		.skip-nav-link {
			position: absolute;
			transform: translateY(-100px);
		}

		.skip-nav-link:focus {
			margin-right: 2em;
			position: relative;
			transform: translateY(0);
		}
	}
</style>
