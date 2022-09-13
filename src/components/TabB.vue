<template>
  <div class="tabB">
    <slot><h2><strong>디폴트 TabB</strong> slot</h2></slot>
    <slot name="tabNameB"></slot>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
.tabB {width:600px;margin:0 auto 20px;padding:20px;background:salmon}
.tabB h2 strong {color:green}
</style>