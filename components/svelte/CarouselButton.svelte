<script>
  export let direction
</script>

<div id="frame">
  <div class={direction} />
</div>

<style>
  #frame {
    height: 1.5em;
    width: 1.5em;
    border: 2px solid var(--grey);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #frame:hover {
    background-color: var(--lightgrey);
    border: 2px solid var(--lightgrey);
  }
  #frame:active {
    background-color: var(--red);
    border: 2px solid var(--red);
  }
  #frame:active div {
    background-color: var(--white);
  }
  #frame div:active {
    background-color: var(--white);
  }
  .right {
    width: 100%;
    height: 100%;
    background-color: var(--red);
    -webkit-clip-path: polygon(
      37.5% 27.5%,
      40% 25%,
      70% 50%,
      40% 75%,
      37.5% 72.5%
    );
    clip-path: polygon(
      65% 50%,
      37.5% 27.5%,
      40% 25%,
      70% 50%,
      40% 75%,
      37.5% 72.5%
    );
  }
  .left {
    width: 100%;
    height: 100%;
    background-color: var(--red);
    -webkit-clip-path: polygon(
      37.5% 27.5%,
      40% 25%,
      70% 50%,
      40% 75%,
      37.5% 72.5%
    );
    clip-path: polygon(
      65% 50%,
      37.5% 27.5%,
      40% 25%,
      70% 50%,
      40% 75%,
      37.5% 72.5%
    );
    transform: rotate(180deg);
  }
</style>
