<template>
  <div class="contents">
    <h1>Contents page</h1>
      <!-- default slot : child components에 slot으로 템플릿 컨텐츠(html 구조) 전달 -->
      <!-- Named Slots : v-slot:슬롯이름, 전용약어 #슬롯이름 -->
      <TabA>
        <h2><strong>TabA</strong> slot이 들어갑니다.</h2>
        <template v-slot:tabNameA>
          <input type="text" placeholder="텍스트를 입력하세요" /> 
        </template>
      </TabA>
      <TabB>
        <h2><strong>TabB</strong> slot이 들어갑니다.</h2>
        <template #tabNameB>
          <h3>네임 슬롯 TabB입니다.</h3>
        </template>
      </TabB>
       <TabC>
        <template #tabNameC>
          <img src="@/assets/bear.png" alt=""><!-- @/ 경로는 src/ 경로 -->
        </template>
        <h2><strong>TabC</strong> slot이 들어갑니다.</h2>
      </TabC>

      <!-- Dynamic Components : is 속성을 v-bind를 통해 동적으로 컴포넌트 전환  -->
      <!-- keep-alive : 동적 컴포넌트 전환 시 조건부 캐시로 상태 유지(input) -->
      <!-- <button @click="comp = 'TabA'" :class="{ active: comp === 'TabA' }">compA</button>
      <button @click="comp = 'TabB'" :class="{ active: comp === 'TabB' }">compB</button>
      <button @click="comp = 'TabC'" :class="{ active: comp === 'TabC' }">compC</button> -->
      <button v-for="tab in tabs" :key="tab" @click="comp = tab" :class="{ active: comp === tab }">
        {{ tab }}
      </button>
      <!-- <component :is='comp' /> -->
      <keep-alive>
        <component :is='comp'>
          <template v-slot:tabNameA>
            <input type="text" placeholder="텍스트를 입력하세요" /> 
          </template>
          <template #tabNameB>
            <h3>네임 슬롯 TabB입니다.</h3>
          </template>
          <template #tabNameC>
            <img src="@/assets/bear.png" alt=""><!-- @/ 경로는 src/ 경로 -->
          </template>
        </component>
      </keep-alive>

  </div>
</template>

<script>
import TabA from '../components/TabA.vue'
import TabB from '../components/TabB.vue'
import TabC from '../components/TabC.vue'

export default {
  components: { TabA, TabB, TabC },
  data() {
    return {
      comp: 'TabA',
      tabs: ['TabA', 'TabB', 'TabC']
    }
  },
}
</script>

<style>
.contents h2 {font-size:30px;font-weight:bold;margin:10px 0}
.contents h3 {font-size:20px;font-weight:bold;margin:10px 0}
.contents input {width:360px;padding:3px 10px 1px;margin:10px 0}
.contents button {margin:40px 5px 20px}
.contents button.active {background:PaleVioletRed;border:1px solid PaleVioletRed;color:#fff}
</style>