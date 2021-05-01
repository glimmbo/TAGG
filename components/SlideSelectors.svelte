<script>
  import SlideDot from "./SlideDot.svelte"
  import CarouselButton from "./CarouselButton.svelte"
  export let videos
</script>

<div id="column">
  {#each videos as video, i}
    <SlideDot position={i} href={video.href} />
  {/each}
  <CarouselButton direction="left" />
  <CarouselButton direction="right" />
</div>

<style>
  #column {
    float: right;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
