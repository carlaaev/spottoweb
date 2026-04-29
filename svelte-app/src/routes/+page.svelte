<script>
  import { onMount } from 'svelte';

  let visible = false;

  onMount(() => {
    setTimeout(() => (visible = true), 200);
  });

  const openApp = () => {
    window.open('https://rewb1dintaohyw4ageob.share.dreamflow.app/', '_blank');
  };
</script>

<style>
  :global(body) {
    margin: 0;
    font-family: 'Inter', sans-serif;
    background: radial-gradient(circle at top, #eafff7 0%, #ffffff 60%);
    color: #1f2937;
  }

  .container {
    max-width: 1200px;
    margin: auto;
    padding: 40px 20px;
  }

  /* HERO */
  .hero {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding-top: 80px;
    gap: 40px;
  }

  .hero-text {
    flex: 1;
    min-width: 300px;
  }

  .title {
    font-size: 3.5rem;
    font-weight: 800;
    line-height: 1.1;
    background: linear-gradient(90deg, #7cc9a7, #a5d8ff);
    -webkit-background-clip: text;
    color: transparent;
  }

  .subtitle {
    margin-top: 20px;
    font-size: 1.2rem;
    color: #6b7280;
  }

  .cta {
    margin-top: 30px;
    padding: 16px 32px;
    border-radius: 999px;
    background: linear-gradient(90deg, #7cc9a7, #a5d8ff);
    color: white;
    font-weight: 600;
    border: none;
    cursor: pointer;
    transition: 0.3s;
    box-shadow: 0 10px 25px rgba(124, 201, 167, 0.4);
  }

  .cta:hover {
    transform: scale(1.05);
  }

  /* PHONE MOCKUP */
  .phone {
    flex: 1;
    display: flex;
    justify-content: center;
    position: relative;
  }

  .phone img {
    width: 280px;
    border-radius: 30px;
    box-shadow: 0 20px 60px rgba(0,0,0,0.15);
    animation: float 4s ease-in-out infinite;
  }

  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-12px); }
    100% { transform: translateY(0px); }
  }

  /* FEATURES */
  .section {
    margin-top: 120px;
    text-align: center;
  }

  .features {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 30px;
    margin-top: 50px;
  }

  .card {
    padding: 30px;
    border-radius: 24px;
    background: white;
    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
    transition: 0.3s;
  }

  .card:hover {
    transform: translateY(-8px);
  }

  /* FINAL CTA */
  .cta-section {
    margin-top: 140px;
    padding: 60px 20px;
    border-radius: 30px;
    background: linear-gradient(90deg, #7cc9a7, #a5d8ff);
    color: white;
    text-align: center;
  }

  .cta-section h2 {
    font-size: 2rem;
  }

  .cta-white {
    margin-top: 20px;
    padding: 14px 30px;
    border-radius: 999px;
    border: none;
    background: white;
    color: #1f2937;
    font-weight: 600;
    cursor: pointer;
  }

  /* FADE IN */
  .fade {
    opacity: 0;
    transform: translateY(20px);
    transition: 0.6s ease;
  }

  .fade.show {
    opacity: 1;
    transform: translateY(0);
  }
</style>

<div class="container">

  <!-- HERO -->
  <section class="hero">
    <div class="hero-text fade {visible ? 'show' : ''}">
      <h1 class="title">spotto 🌿</h1>
      <p class="subtitle">
        Discover hidden gems. Avoid tourist traps.  
        Travel like a local, not a guidebook.
      </p>

      <button class="cta" on:click={openApp}>
        Open the App 🚀
      </button>
    </div>

    <div class="phone fade {visible ? 'show' : ''}">
      <img src="/icons/showcase.png" alt="App preview" />
    </div>
  </section>

  <!-- FEATURES -->
  <section class="section">
    <h2>Why spotto?</h2>

    <div class="features">
      <div class="card">
        <h3>Local discoveries</h3>
        <p>Real recommendations from real people.</p>
      </div>

      <div class="card">
        <h3>Unlock the map</h3>
        <p>Explore cities by physically visiting them.</p>
      </div>

      <div class="card">
        <h3>Community feed</h3>
        <p>Scroll posts like social media for travel.</p>
      </div>

      <div class="card">
        <h3>Gamified travel</h3>
        <p>Earn badges and points as you explore.</p>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="cta-section">
    <h2>Start exploring smarter</h2>
    <p>No more generic travel lists.</p>

    <button class="cta-white" on:click={openApp}>
      Launch Spotto
    </button>
  </section>

</div>