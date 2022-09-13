<template>
  <div>
    <h1>Multiple page</h1>
    <!-- toggleModal 함수 실행으로 showModal이 true일 시 보여지고 flase면 안보여짐 -->
    <!-- Modal 컴포넌트 사용 -->
    <!-- Props : header, text, theme - 자식컴포넌트에 데이터 전달 -->
    <!-- custom events : @close, @textAdd - 자식컴포넌트 함수 실행 시 부모컴포넌트로 event, 데이터 전달  -->
    <!-- custom events : @close - Modal.vue의 $emit('close') click 이벤트 전달받음 -->
    <!-- custom events : @textAdd - Modal.vue의 $emit('textAdd') $emit('close') 이벤트, 데이터 전달받음 -->
    <template v-if="showModal">
      <Modal header="Multiple Popup" :text="text" theme="orange" @close="toggleModal" @textAdd="fnTextAdd" />
    </template>
    <button @click="toggleModal">팝업 열기</button>
    <p>{{ outputText }}</p>
  </div>
</template>

<script>
// Modal 컴포넌트 import
import Modal from '../components/Modal.vue'
export default {
  // import된 Modal 컴포넌트 object에 등록하면 template에 사용 가능 
  components: { Modal },
  data() {
    return {
      showModal: false,
      text: '팝업 내용입니다',
      outputText: ''
    }
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal
    },
    fnTextAdd(inputTextPara) {
      // console.log(inputTextPara)
      this.outputText = inputTextPara
    }
  }
}
</script>

<style scoped>
p {margin-top:30px;font-weight:bold;font-size:24px;color:steelblue}
</style>