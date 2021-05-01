<script>
  export let href
  export let content
</script>

<div class="selected">
  <div class="top left" />
  <div class="top right" />
  <div class="bottom right" />
  <div class="bottom left" />
  <a {href}>{content}</a>
</div>

<style>
  div {
    background-color: transparent;
  }

  a {
    text-decoration: none;
    padding: 0.5em 0.5em;
    display: block;
    color: var(--grey);
    font-weight: 300;
    letter-spacing: 0.25em;
    background-color: transparent;
    font-family: "Rubik", sans-serif;
  }

  a:visited {
    text-decoration: none;
  }

  a:hover {
    color: var(--lightgrey);
    font-weight: 500;
  }

  .selected {
    position: relative;
    width: 125px;
    padding: 0.35em 0.5em;
    text-align: center;
  }

  .top,
  .bottom {
    position: absolute;
    width: 6px;
    height: 6px;
  }

  .top {
    top: 0;
    border-top: 4px solid var(--red);
  }

  .bottom {
    bottom: 0;
    border-bottom: 4px solid var(--red);
  }

  .left {
    left: 0;
    border-left: 4px solid var(--red);
  }

  .right {
    right: 0;
    border-right: 4px solid var(--red);
  }
</style>
