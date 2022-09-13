<template>
  <div id="wrap">
    <div id="header">
      <ul id="nav">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/event">Event</router-link></li>
        <li><router-link to="/dynamic">Dynamic</router-link></li>
        <li><router-link to="/list">List</router-link></li>
        <li><router-link to="/multiple">Multiple</router-link></li>
        <li><router-link to="/contents">Contents</router-link></li>
        <li><router-link to="/composition">Composition</router-link></li>
      </ul>
    </div>
    <router-view/>
  </div>

  <!--
  <div id="wrap">
    <div id="header">
      <ul id="nav">
        <li><a href="/">Home</a></li>
        <li><a href="/event">Event</a></li>
        <li><a href="/dynamic">Dynamic</a></li>
        <li><a href="/list">List</a></li>
        <li><a href="/multiple">Multiple</a></li>
        <li><a href="/contents">Contents</a></li>
      </ul>
    </div>
    <router-view/>
  </div>

  <li><router-link v-bind:to="{ name: 'Multiple' }">Multiple</router-link></li>
  -->
</template>


<style scoped>
#wrap {text-align:center;margin-bottom:100px}
#header {width:100%;padding:20px;}
#header  h1 {display:inline-block;color:#fff;font-size:40px;font-weight:200}
#nav {display:inline-block;text-align:center;margin-top:30px;padding:10px;background:rgba( 0, 0, 0, 0.3 );border-radius:60px;}
#nav li {display:inline-flex;margin:0 5px}
#nav a {min-width:100px;color:#fff;padding:5px 20px;border-radius:30px;font-weight:500}
#nav a.router-link-exact-active {background:rgba( 255, 255, 255, 0.5 );color:#000}
</style>
