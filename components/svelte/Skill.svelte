<script>
  export let title
  export let blurb
  import Blurb from "../components/Blurb.svelte"
  import PoppedHeader from "../components/PoppedHeader.svelte"
</script>

<div id="container">
  <div id="text">
    <PoppedHeader size={2}>{title}</PoppedHeader>
    <Blurb>
      {blurb}
    </Blurb>
  </div>
</div>

<style>
  #container {
    height: 40vh;
    position: relative;
    width: 40vw;
  }

  #text {
    left: 10%;
    position: absolute;
    top: 20%;
  }
</style>
