<header>
	<div>
		<a class="skip-nav-link" href="#main-content">Navigatie overslaan</a>
		<a href="/">
			<img src="/vip-it-logo.png" alt="">
		</a>
	</div>
	<nav>
		<ul>
			<li><a href="/">Home</a></li>
			<li><a href="/">Over ons</a></li>
			<li><a href="/">Contact</a></li>
		</ul>
	</nav>
</header>

<style>
	header {
			padding: 1em 4em;
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: .5em;
			width: 100%;
		}

		ul {
			display: flex;
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
	@media (min-width: 70em) {
		header {
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
