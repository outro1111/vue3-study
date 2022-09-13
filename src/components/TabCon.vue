<template>
  <div class="tab_con">
    <slot :selected="selected" />
    {{ selected }}
  </div>
</template>

<script>
export default {
  props: [ 'title', 'selected' ],
  // props: {
  //   name: { required: true },
  //   selectedMenu: { default: false }
  // },
  // created() {
  //   // this.name = this.selected
  //   console.log(this.selectedMenu);
  // },
  // method: {
  //   changeMenu() {
  //     console.log(this.name == selectedMenu);
  //     this.name == selectedMenu
  //   }
  // }
}
</script>

<style scoped>

</style>