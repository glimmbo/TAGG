<script>
  import Hoverable from "./Hoverable"
</script>

<Hoverable let:hover let:active let:inactive>
  <div class:hover class:active class:inactive>
    {#if active}
      <slot name="active" />
    {:else if hover}
      <slot name="hover" />
    {:else}
      <slot name="inactive" />
    {/if}
  </div>
</Hoverable>

<style>
  .active {
    fill: red;
    color: red;
  }

  .hover {
    fill: blue;
    color: blue;
  }

  .inactive {
    fill: grey;
    color: grey;
  }
</style>
