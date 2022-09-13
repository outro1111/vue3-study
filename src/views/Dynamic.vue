<template>
  <div>
    <h1>Dynamic page</h1>
    <!-- Dynamic classes : {클래스명: true} true 일 시 add class, false 일 시 remove class -->
    <div class="visual_class" :class="{active: classOpen}">Visual - Dynamic Class</div>
    <button @click="classOpen = !classOpen">{{ classOpen ? '닫기' : '열기' }}</button>
    <br><br>
    <!-- v-show : css 기반 렌더링 -->
    <div v-show="vshowOpen" class="visual_show">Visual - v-show</div>
    <button @click="toggleVshow">{{ vshowOpen ? '닫기' : '열기' }}</button>
    <br><br>
    <!-- v-if : 조건부 블록 렌더링/ v-else는 v-if 바로 다음에 와야 함 -->
    <div v-if="vifOpen" class="visual_if">Visual - v-if</div>
    <div v-else class="visual_else">Visual - v-else</div>
    <button @click="toggleVif">
      <span v-if="vifOpen">v-else 열기</span>
      <span v-else>v-if 열기</span>
    </button>
    <br><br>
    <!-- v-else-if : v-if를 여러번 연결 -->
    <div v-if="type==='dog'" class="type dog">강아지</div>
    <div v-else-if="type==='cat'" class="type cat">고양이</div>
    <div v-else class="type cow">소</div>
    <!-- <button @click="type='dog'">강아지</button> -->
    <button @click="typeChange('dog')">강아지</button>
    <button @click="typeChange('cat')">고양이</button>
    <button @click="typeChange('cow')">소</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      classOpen: true,
      vshowOpen: true,
      vifOpen: true,
      type: 'dog'
    }
  },
  methods: {
    toggleVshow() {
      this.vshowOpen = !this.vshowOpen
    },
    toggleVif() {
      this.vifOpen = !this.vifOpen
    },
    typeChange(typePara) {
      // console.log(typePara)
      if (typePara === 'dog') {
        this.type = 'dog'
      } else if (typePara === 'cat') {
        this.type = 'cat'
      } else {
        this.type = 'cow'
      }
    }
  }
}
</script>

<style scoped>
.visual_class {display:none;width:600px;margin:20px auto;padding:50px;background:orange;}
.visual_class.active {display:block}
.visual_show {width:600px;margin:20px auto;padding:50px;background:salmon;}
.visual_if {width:600px;margin:20px auto;padding:20px;background:lightsteelblue;}
.visual_else {width:600px;margin:20px auto;padding:20px;background:steelblue;}
.type {width:600px;margin:20px auto;padding:20px;}
.type.dog {background:lightpink;}
.type.cat {background:lightskyblue;}
.type.cow {background:gold;}
</style>