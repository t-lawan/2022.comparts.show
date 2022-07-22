<script>
  import { goto } from '@sapper/app'
  import 'css/global.css'
  const handleBackButton = () => {
    goto('/')
  }
  
</script>

<svelte:head>
  <title>About</title>
</svelte:head>

<body class="container">
  <div>
    <span class="span_back-arrow-wrapper">
      <img
        src="/img/icons/arrow.svg"
        alt="back"
        class="back-arrow"
        on:click={handleBackButton}
      /><span class="title">About</span></span
    >
  </div>
  <sub>Computational Arts MA/MFA Degree Show, 1st - 5th September 2021</sub>
  <sub>Opening night Wednesday 1st September </sub>
  
  <p>This is a show about art and other things.</p>
  <p>
    La di da di la di da di la di da di la di da di la di da di la di da di la di da di la di da di la di da di la di da di la di da di da
  </p>


</body>

<style>

  .container {
    font-family: dotgothic16;
  }


</style>
