<script>
	import Contact from '$lib/components/Contact.svelte';
</script>

<svelte:head>
	<title>vip-it.nl - IT omscholing voor mensen met een visuele beperking</title>
</svelte:head>

<section class="hero">
<<<<<<< HEAD
  <div>
    <h1>VIP-IT</h1>
    <p class="big-paragraph">
      Een toegankelijk IT-omscholingsprogramma met baangarantie voor mensen met
      een visuele beperking.
    </p>
  </div>
  <img src="/images/coding-room.png" alt="" />
</section>

<section class="collaboration">
  <div class="logos">
    <img src="/images/bartimeus-groen.png" alt="" />
    <img src="/images/incluvisie.png" alt="" />
    <img src="/images/hogeschool-van-amsterdam.png" alt="" />
  </div>
  <div class="information">
    <h2>Wie zijn wij en wat willen wij?</h2>
    <p>
      Het project VIP-IT is een initiatief van het Bartiméus Fonds, Incluvisie
      en de Hogeschool van Amsterdam. Wij werken binnen dit project samen met
      het Ministerie van Volksgezondheid, Welzijn en Sport. Wij geloven erin dat
      je samen verder komt. Daarom willen we middels een inclusiepact meer
      organisaties verbinden aan VIP-IT. Zo kunnen we samen de doelstellingen
      bereiken. In de komende periode benaderen we daarom organisaties die
      hierbij kunnen helpen. Bijvoorbeeld werkgeversorganisaties,
      belangenorganisaties, landelijke en regionale overheden,
      koepelorganisaties, etc.
    </p>
  </div>
</section>

<section class="contact">
  <h2>Doet u met ons mee?</h2>
  <p>
    Als deelnemer aan het pact vragen wij u om met ons mee te denken over en mee
    te werken aan het vormgeven van de aangepaste opleiding. Daarnaast vragen we
    u om uw invloed en netwerk in te zetten om werkgevers te enthousiasmeren
    mensen met een visuele beperking in hun organisatie op te nemen.
  </p>
  <a class="btn-primary" href="/">Contact</a>
</section>

<Footer />

<style>
  .hero {
    padding-left: 6em;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    gap: 3em;
  }

  .big-paragraph {
    font-size: 1.5rem;
    font-weight: 500;
  }

  .collaboration {
    padding-top: 4em;
    padding-right: 6em;
    padding-bottom: 4em;
    padding-left: 6em;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2em;
    align-items: center;
  }

  .logos {
    display: grid;
    grid-column: 1/2;
    gap: 2em;
  }

  .information {
    grid-column: 2/5;
  }

  .contact {
    padding-top: 4em;
    padding-bottom: 4em;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--clr-blue);
  }

  .contact p {
    margin-bottom: 1em;
    max-width: 38em;
  }

  .btn-primary {
    padding: 0.75em 1.75em;
    color: var(--clr-white);
    background-color: var(--clr-purple);
    border-radius: 0.5rem;
    width: max-content;
    text-decoration: none;
  }

  .btn-primary:hover {
    color: var(--clr-white);
    background-color: var(--clr-light-purple);
  }
=======
	<div>
		<h1>VIP-IT</h1>
		<p class="big-paragraph">Een toegankelijk IT-omscholingsprogramma met baangarantie voor mensen met een visuele beperking.</p>
	</div>
	<img aria-hidden="true" src="/images/coding-room.png" alt="Kamer met studenten die coderen">
</section>

<section class="collaboration">
	<div class="logos">
		<img src="/images/bartimeus-groen.png" alt="Logo Bartimeus">
		<img src="/images/incluvisie.png" alt="Logo Incluvisie">
		<img src="/images/hogeschool-van-amsterdam.png" alt="Logo Hogeschool">
	</div>
	<div class="information">
		<h2>Wie zijn wij en wat willen wij?</h2>
		<p>Het project VIP-IT is een initiatief van het Bartiméus Fonds, Incluvisie en de Hogeschool van Amsterdam. Wij werken binnen dit project samen met het Ministerie van Volksgezondheid, Welzijn en Sport. Wij geloven erin dat je samen verder komt. Daarom willen we middels een inclusiepact meer organisaties verbinden aan VIP-IT. Zo kunnen we samen de doelstellingen bereiken. In de komende periode benaderen we daarom organisaties die hierbij kunnen helpen. Bijvoorbeeld werkgeversorganisaties, belangenorganisaties, landelijke en regionale overheden, koepelorganisaties, etc.</p>
	</div>
</section>

<Contact />
<style>
	h2 {
		margin-bottom: .5rem;
	}

	.hero {
		padding-left: 2em;
		padding-right: 2em;
		display: grid;
		grid-template-columns: 1fr;
		align-items: center;
		gap: 3em;
	}

	.hero img {
			width: 100%;
	}

	.big-paragraph {
		font-size: 1.5rem;
		font-weight: 500;
	}

	.collaboration {
		padding-top: 4em;
		padding-right: 2em;
		padding-bottom: 4em;
		padding-left: 2em;
		display: grid;
		grid-template-columns: 1fr;
		gap: 2em;
		align-items: center;
	}

	@media (min-width: 70em) {
		.hero {
			padding-left: 6em;
			padding-right: 0;
			display: grid;
			grid-template-columns: repeat(2, 1fr);
		}

		.hero img {
			width: auto;
		}

		.collaboration {
			padding-top: 4em;
			padding-right: 6em;
			padding-bottom: 4em;
			padding-left: 6em;
			display: grid;
			grid-template-columns: repeat(4, 1fr);
			gap: 2em;
			align-items: center;
		}

		.logos {
			display: grid;
			grid-column: 1/2;
			gap: 2em;
		}

		.information {
			grid-column: 2/5;
		}
	}
>>>>>>> ce84e8608bea1dcdd23095901b095c48bf9e1f10
</style>
