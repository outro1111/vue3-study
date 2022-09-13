<template>
  <div class="tabA">
    <slot><h2><strong>디폴트 TabA</strong> slot</h2></slot>
    <slot name="tabNameA"></slot>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
.tabA {width:600px;margin:0 auto 20px;padding:20px;background:orange}
.tabA h2 strong {color:steelblue}
</style>