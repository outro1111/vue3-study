<template>
  <div class="tab_menu">
    <ul>
      <li v-for="menu in menus" :key="menu"><button @click="changMenu(menu)">{{ menu }}</button></li>
    </ul>
    <slot :selected="selected" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      menus: [],
      selected: ''
    }
  },
  created() {
    // console.log( this.$slots.default()[0].props.name )
    this.menus = this.$slots.default().map((menu) => menu.props.title)
    this.selected = this.$slots.default()[0].props.title
  },
  methods: {
    // changeMenu(m) {
    //   console.log(m);
    // }
    changMenu(menu) {
      // console.log(menu)
      this.selected = menu
    }
  }
}
</script>

<style scoped>

</style>