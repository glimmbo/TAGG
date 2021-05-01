<script>
  // export let videos; //json data from Vimeo account
  // dummy example:
  export let videos = [
    {
      type: "music video",
      title: "troy boi",
      href: "troyboy",
    },
    {
      type: "commercial",
      title: "mr. clean",
      href: "mrclean",
    },
    {
      type: "short",
      title: "something artsy",
      href: "artsy",
    },
  ]
  import CorneredButton from "./CorneredButton.svelte"
  import CarouselButton from "./CarouselButton.svelte"
  import SlideSelectors from "./SlideSelectors.svelte"
</script>

<section id="carousel">
  <div id="frame">
    <CorneredButton content="WATCH" href="#" />
    <SlideSelectors {videos} />
  </div>
</section>

<style>
  #carousel {
    height: 100%;
    padding: 1.5em;
    background-color: var(--black);
  }

  #frame {
    border: solid var(--red) 0.5em;
    background-color: darkblue;
    padding: 1.5em;
  }
</style>
