<script>
  export let size
</script>

{#if size === 1}
  <h1><slot /></h1>
{/if}
{#if size === 2}
  <h2><slot /></h2>
{/if}

<style>
  h1,
  h2 {
    background-color: transparent;
    color: var(--lightgrey);
    font-family: Montserrat-Bold;
    letter-spacing: 50;
    margin: 0;
    text-shadow: -0.1em 0.1em var(--red);
    text-transform: uppercase;
    z-index: 2;
  }
  h1 {
    font-size: 3em;
  }
</style>
