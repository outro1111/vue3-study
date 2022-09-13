<template>
  <div class="tabC">
    <slot><h2><strong>디폴트 TabC</strong> slot</h2></slot>
    <slot name="tabNameC"></slot>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
.tabC {width:600px;margin:0 auto 20px;padding:20px;background:steelblue}
.tabC h2 strong {color:orange}
</style>