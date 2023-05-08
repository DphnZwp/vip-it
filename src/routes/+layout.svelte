<script>
  import "../styles/global.css";
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";
</script>

<Header />

<main id="main-content">
  <slot />
</main>

<Footer />
