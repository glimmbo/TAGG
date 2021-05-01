<script>
  let hover, active, inactive

  function enter() {
    hover = true
    inactive = false
  }

  function leave() {
    hover = false
    inactive = true
  }

  function press() {
    active = true
  }

  function release() {
    active = false
  }
</script>

<div
  on:mouseover={enter}
  on:mouseout={leave}
  on:mousedown={press}
  on:mouseup={release}
>
  <slot {hover} {active} {inactive} />
</div>
