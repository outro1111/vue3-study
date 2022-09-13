<template>
  <div>
    <!-- data binding / v-once 데이터 변경 시 업데이트 되지 않음 -->
    <h1 v-once>{{ title }}</h1>
    <!-- data binding -->
    <p>{{ text }}</p>

    <!-- attribute binding : src, alt, class, id -->
    <img v-bind:src="img.url" :alt="img.alt" :class="img.class" :id="img.id">
    <!-- attribute 이름을 data로 binding -->
    <a :[attrName]="img.url">href의 attr을 동적으로</a>
    <!-- v-html : 태그 코드(Raw HTML) 직접 입력 -->
    <p v-html="subTitle"></p>

    <!-- 함수 return 값 입력 -->
    <h1>{{ changeTitle() }}</h1>
    <!-- 파라미터로 전달받은 data를 함수 return 값으로 입력 -->
    <h1>{{ changeTitle2('펩시콜라!') }}</h1>
    
    <!-- javaScript 표현식 사용 : 계산 -->
    <p>{{ number + 3 }}</p>
    <!-- javaScript 표현식 사용 : 삼항연산자(if문단축형) - 조건 ? true : false -->
    <p>{{ ok ? 'YES' : 'NO' }}</p>
    <!-- javaScript 표현식 사용 : 문자열 순서 반전 -->
    <!-- split() 문자열을 배열로, reverse() 배열의 순서를 반전, join() 배열의 모든 요소를 하나의 문자열로 -->
    <p>{{ text.split('').reverse().join('') }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '홍길동 Home page',
      text: '콜라(Cola)는 코카콜라뿐이 아니라 펩시 등 다른 회사의 검은색 단물도 총칭하는 단어이다.',
      img: {
        url: require('../assets/cocacola.png'),
        alt: 'cocacola',
        class: 'visual',
        id: 'visual01'
      },
      attrName: 'href',
      subTitle: '<strong style="font-size:30px;color:brown">CocaCola</strong>',
      number: 500,
      ok: false
    }
  },
  methods: {
    changeTitle() {
      return this.title = '코카콜라!'
    },
    changeTitle2(pepsi) {
      return this.title = pepsi
    }
  }
}
</script>

<style scoped>
a:link, a:visited {text-decoration:underline}
a:hover, a:active {text-decoration:underline}
.visual {display:block;width:100%;max-width:1440px;min-width:800px;margin:20px auto}
p {margin:10px 0}
</style>