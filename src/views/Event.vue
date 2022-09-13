<template>
  <div>
    <h1>Event page</h1>
    <!-- event handler : v-on 이벤트 리스너 - counter 데이타 1증가 -->
    <button v-on:click="counter++">Add 1</button>
    <p>클릭한 수는 {{ counter }}입니다.</p>

    <!-- methods handler로 함수 호출 (@click으로 축약) : greet 함수 호출 -->
    <button @click="greet">Greet</button>
    <p>{{ name }}</p>
    
    <!-- 이벤트종류 : @mouseover, @mouseleave, @dblclick - handleEvent 메소드 '이벤트' 출력 -->
    <div class="box">
      <!-- custom argument가 필요 시 첫번째 argument를 $event로 두번째는 custom argument로 적용 -->
      <!-- Event Modifiers @event.once를 사용하면 한번만 실행 됨 -->
      <button @mouseover.once="handleEvent($event, '마우스오버')">mouseover</button>
      <button @mouseleave="handleEvent">mouseleave</button>
      <button @dblclick="handleEvent">double click</button>
      <button @mousemove="handleMousemove">position - {{ x }}, {{ y }}</button>
    </div>

    <!-- methods, computed 차이 -->
    <!-- methods는 반환하는 값이 같아도 재렌더링 시 계속 함수 호출 -->
    <!-- computed는 반환하는 값이 변하지 않으면 최초에 호출하는 값을 메모리에 저장(캐싱) 가져다 사용 -->
    <!-- computed는 argument 사용 못함 -->
    <!-- getRandom 함수 호출 시 마다 랜덤하게 다른 값 반환 -->
    <!-- getRandom 호출 시 computed는 같은 vue 객체의 데이타만 변경 감지하여 다시 동작
    외부의 어떤 요소의 변화는 감지 못함 -->
    <p>
      <span>test methods -</span>
      <span>{{ testMethods() }}</span>
      <span>{{ testMethods() }}</span>
      <span>{{ testMethods() }}</span>
    </p>
    <p>
      <span>test computed -</span>
      <span>{{ testComputed }}</span>
      <span>{{ testComputed }}</span>
      <span>{{ testComputed }}</span>
    </p>
    <button @click="setValue">값 변경</button>
    <p>
      <span>random methods -</span>
      <span>{{ randomMethods() }}</span>
      <span>{{ randomMethods() }}</span>
      <span>{{ randomMethods() }}</span>
    </p>
    <p>
      <span>random computed -</span>
      <span>{{ randomComputed }}</span>
      <span>{{ randomComputed }}</span>
      <span>{{ randomComputed }}</span>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
      name: '둘리',
      x: 0,
      y: 0,
      a: 100,
      b: 200
    }
  },
  methods: {
    // greet함수 
    greet() {
      return this.name = this.name + '안녕하세요'
    },
    // handleEvent 첫번째 argument는 이벤트 오브젝트에 엑세스 할 수 있음
    handleEvent(e, data) {
      // console.log('이벤트입니다')
      console.log(e, e.type, e.target.tagName);
      if (data) {
        console.log(data)
      }
    },
    // handleMousemove 함수 - 좌표 출력
    handleMousemove(e) {
      // console.log(e)
      this.x = e.offsetX
      this.y = e.offsetY
    },
    // methods, computed 차이 - testMethods 메소드 a와 b를 더함
    testMethods() {
      console.log('test methods')
      return this.a + this.b
    },
    // methods, computed 차이 - setValue 메소드 a와 b를 업데이트
    setValue() {
      this.a = 500,
      this.b = 600
    },
    // methods, computed 차이 - randomMethods 메소드 숫자를 랜덤하게 출력
    randomMethods() {
      return Math.random()
    }
  },
  computed: {
    // methods, computed 차이 - testComputed 컴퓨티드 a와 b를 더함
    testComputed() {
      console.log('test computed')
      return this.a + this.b
    },
    // methods, computed 차이 - randomComputed 컴퓨티드 숫자를 랜덤하게 출력
    randomComputed() {
      return Math.random()
    }
  }
}
</script>

<style scoped>
p {padding:10px 0 20px}
p span {display:inline-block;padding:0 20px}
.box {display:flex;width:900px;margin:20px auto}
.box button {width:100%;margin:10px;padding:50px 0;border-radius:0}
</style>
