<template>
  <!-- 기본 HTML
  <div class="backdrop">
    <div class="modal">
      <h1 class="title">Multiple Popup</h1>
      <button class="btn-close"><span>닫기</span></button>
      <p>팝업 내용입니다.</p>
    </div>
  </div> 
  -->
  <!-- @click.self="closeModal" : 팝업 닫기 $emit('close') 부모컴포넌트로 전달 -->
  <!-- Dynamic classes : orange, blue의 테마를 조건에 따라 class로 적용 -->
  <!-- v-model : form 입력 값을 데이터로, 양방향 데이터 바인딩 -->
  <!-- @click="fnTextAdd" 텍스트추가의 이벤트와 입력된 데이터를 Arguments로 부모에 전달 -->
  <div class="backdrop" @click.self="closeModal">
    <div class="modal" :class="{ orange: theme === 'orange', blue: theme === 'blue' }">
      <h1 class="title">{{ header }}</h1>
      <button class="btn-close" @click="$emit('close')"><span>닫기</span></button>
      <p>{{ text }}</p>
      <input type="text" v-model="inputText" placeholder="텍스트를 입력하세요.">
      <button @click="fnTextAdd">텍스트 추가</button>
      <!-- <p>{{ inputText }}</p> -->
    </div>
  </div>
</template>

<script>
export default {
  // props : 부모로부터 전달받은 데이터 - header, text, theme
  props: ['header', 'text', 'theme'],
  data() {
    return {
      inputText: null
    }
  },
  methods: {
    closeModal() {
      this.$emit('close')
    },
    fnTextAdd() {
      if(this.inputText === null) {
        alert('텍스트를 입력해주세요')
      } else {
        this.$emit('textAdd', this.inputText)
        this.$emit('close')
      }
    }
  },
  // Lifecycle Hooks - 각 Vue 구성 요소 인스턴스가 생성될 때 일련의 초기화 단계
  // Lifecycle Hooks - 템플릿 컴파일, instance를 DOM에 mount, 데이터 업데이트 등의 
  // 특정 단계에서 고유한 코드를 추가할 수 있는 기회를 제공
  beforeCreate() {
    console.log('before create')
  },
  created() {
    console.log('created')
  },
  beforeMount() {
    console.log('before mount')
  },
  mounted() {
    console.log('mounted')
  },
  beforeUpdate() {
    console.log('before update')
  },
  updated() {
    console.log('updated')
  },
  beforeUnmount() {
    console.log('before unmount')
  },
  unmounted() {
    console.log('unmounted')
  }
}
</script>

<style scoped>
.modal {position:relative;width:400px;top:150px;padding:20px 20px 50px;margin:0 auto;background:#fff;border-radius:10px}
.modal h1 {font-size:24px;padding-bottom:10px;text-align:center}
.modal p {text-align:center}
.backdrop {position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.5);z-index:100}
.btn-close {position:absolute;right:-12px;top:-12px;display:block;width:40px;height:40px;padding:0;background:linear-gradient(-45deg, transparent 0%, transparent 46%, white 46%,  white 56%,transparent 56%, transparent 100%), linear-gradient(45deg, transparent 0%, transparent 46%, white 46%,  white 56%,transparent 56%, transparent 100%);background-color:red;
border:10px solid red;border-radius:100%;box-shadow:2px 2px 5px 1px rgba(0,0,0,0.5);}
.btn-close span {display:none}
.modal.orange {background:darkorange;color:#fff}
.modal.orange h1, .modal.orange p {color:#fff}
.modal.blue {background:DeepSkyBlue;color:#fff}
.modal.blue h1, .modal.blue p {color:#fff}
.modal input {width:70%;font-size:16px;padding-left:8px;margin:15px 0}
.modal button {font-size:16px}
</style>