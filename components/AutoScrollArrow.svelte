<script>
  let speed;

  const step = () => {
    window.scrollBy(0, 1);
  };

  const pageScroll = (e) => {
    speed = setInterval(step, 5);
  };

  const stopScroll = (e) => {
    clearInterval(speed);
  };
</script>

<div id="arrowbox" on:mouseenter={pageScroll} on:mouseleave={stopScroll}>
  <svg
    id="arrow"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 53.34 137.41"
    width="35px"
  >
    <path
      d="M23.69,124.61,5.62,106.53l-4.21,4.21L26.67,136l25.26-25.26-4.21-4.21L29.65,124.61V1h-6Z"
    />
  </svg>
</div>

<style>
  #arrowbox {
    display: flex;
    justify-content: center;
    position: sticky;
    bottom: 8vh;
  }

  #arrow {
    fill: none;
    stroke: var(--grey);
    stroke-miterlimit: 10;
    stroke-width: 2px;
  }

  #arrowbox:hover #arrow {
    fill: var(--white);
    stroke: var(--white);
  }
</style>
