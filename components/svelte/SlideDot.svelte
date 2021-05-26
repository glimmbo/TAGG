<script>
  export let position
  export let href
</script>

<div id="ring" on:click={handleClick}>
  <div id="dot" />
</div>

<style>
  #ring {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 0.5em;
    width: 0.5em;
    border: 2px solid var(--grey);
    border-radius: 100%;
  }
  #ring:hover {
    border-color: var(--lightgrey);
  }
  #ring:active {
    border-color: var(--white);
  }
  #dot {
    background-color: transparent;
    border-radius: 100%;
    height: 0.2em;
    width: 0.2em;
  }
  #ring:hover #dot {
    background-color: var(--lightgrey);
  }
  #ring:active #dot {
    background-color: var(--red);
  }
  /* .selected {
    background-color: var(--red)
  } */
  /* how to know when selected? */
</style>
