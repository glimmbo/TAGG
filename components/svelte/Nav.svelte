<script>
  export let segment
  import NavLink from "./NavLink.svelte"
</script>

<nav>
  <div id="spacer">
    <NavLink href="about" content="ABOUT" {segment} />
    <NavLink href="works" content="WORKS" {segment} />
    <!-- for the works link, we're using rel=prefetch so that Sapper prefetches
					the works data when we hover over the link or tap it on a touchscreen -->
    <NavLink href="about#contact" content="CONTACT" {segment} />
  </div>
</nav>

<style>
  nav {
    align-items: center;
    background-color: transparent;
    display: flex;
    flex-direction: row;
    height: 23vh;
    justify-content: flex-end;
    position: fixed;
    top: 0;
    width: 100vw;
    z-index: 2;
    font-weight: 300;
  }

  #spacer {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding-right: 5em;
    width: 25%;
  }
</style>
