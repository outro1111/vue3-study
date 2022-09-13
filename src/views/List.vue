<template>
  <div>
    <h1>List page</h1>
    <h2>기본 목록 렌더링</h2>
    <!-- v-for 배열 기반 목록 렌더링 : item in items는 items는 데이터 배열, item은 배열 요소의 별칭 -->
    <!-- :key 지정 : 재렌더링 시 데이터 변경을 감지하고 각 항목 식별을 위해 필수 -->
    <button @click="members.reverse()">재배열</button><!-- :key가 없을 시 테스트 -->
    <ul>
      <li v-for="member in members" :key="member">
        {{ member }}
        <input type="text" class="keytest" /><!-- :key가 없을 시 테스트 -->
      </li>
    </ul>

    <h2>범위 지정</h2>
    <!-- v-for 범위 지정: 정수를 사용하여 여러번 반복 -->
    <ul>
      <li v-for="n in 8" :key="n">{{ n }}</li>
    </ul>

    <h2>짝수만 출력</h2>
    <!-- even 함수로 filter 이용 짝수만 출력 2로 / n % 2로 나눈 나머지가 0일 경우 -->
    <!-- computed, methods 가능 methods 일시 n in even() -->
    <ul>
      <li v-for="n in even" :key="n">{{ n }}</li>
    </ul>

    <h2>중첩 data 홀수만 출력</h2>
    <!-- 중첩된 v-for : 상위 범위 엑세스 가능 -->
    <!-- odd(n) computed는 argument를 사용 불가, methods만 가능 -->
    <ul v-for="numbers in sets2" :key="numbers">
      <li v-for="n in odd(numbers)" :key="n">{{ n }}</li>
    </ul>

    <h2>Object Template</h2>
    <!-- object 속성 반복 렌더링  -->
    <!-- Component나 template에 사용 가능 -->
    <!-- template : 보이지 않지만 감싸는 역할(invisible wrapper), 최종 렌더링 결과에 포함되지 않음 -->
    <!-- 객체속성 반복 시 value, key, index 순서로 별칭 사용 -->
    <template v-for="(value, key, index) in myObject" :key="value">
      <p>{{ index + 1 }} {{ key }} : {{ value }}</p>
    </template>

    <h2>리스트 검색</h2>
    <!-- v-modal : 양방향 데이터 바인딩 -->
    <!-- filterLists 함수로 listData와 search의 값이 match되는 데이타만 출력 -->
    <!-- (list, index) : 현재 항목의 index에 대한 두번째 전달인자 제공 -->
    <input type="text" v-model="search" placeholder="리스트 검색" />
    <!-- <p>{{ search }}</p> -->
    <ul v-if="filterLists.length" class="list">
      <li v-for="(list, index) in filterLists" :key="list.id">
        <strong>{{ index + 1 }} {{ list.title }}</strong>
        <span>{{ list.content }}</span>
      </li>
    </ul>
    <p v-else class="nodata">검색된 데이타가 없습니다.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      members: ['Kim', 'Park', 'Lee', 'Han'],
      sets: [1, 2, 3, 4, 5],
      sets2: [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10]],
      myObject: {
        제목: '아기공룡 둘리',
        캐릭터: '도우넛',
        설명: '깐따삐야 별 외계인'
      },
      search: '',
      listData: [
        { id: 1, title: 'Top Gun: Maverick', content: 'Maverick pulls off a feat even trickier' },
        { id: 2, title: 'Jurassic World: Dominion', content: 'This summer, experience the epic' },
        { id: 3, title: 'Obi-Wan Kenobi', content: 'The Jedi Master contends with the consequences' },
        { id: 4, title: '마녀 Part2. The Other One', content: '통제불능의 존재가 세상 밖으로 나왔다' },
        { id: 5, title: '범죄도시2', content: '금천서 강력반은 도주한 용의자를 찾는 미션을 받는다.' },
        { id: 6, title: '헤어질 결심', content: '산 정상에서 추락한 한 남자의 변사 사건' }
      ]
    }
  },
  computed: {
    even() {
      // filter 메소드 : 제공된 함수의 조건을 만족한 모든 엘리먼트로 새로운 배열을 만드는 함수
      return this.sets.filter(n => n % 2 === 0)
    },
    filterLists() {
      // return list.title.match(this.search) || list.content.match(this.search)
      // 정규표현식(Regular Expression) / i (Flag) 는 대소문자를 구별하지 않고 검색
      return this.listData.filter((list) => {
        return list.title.match(new RegExp(this.search, 'i')) || list.content.match(new RegExp(this.search, 'i'))
      })
    }
  },
  methods: {
    odd(numbers) {
      return numbers.filter(number => number % 2 !== 0)
    }
  }
}
</script>

<style scoped>
h2 {font-weight:bold;color:indianred;margin:40px 0 10px}
ul {margin-bottom:10px}
li {display:inline-block;padding:0 15px;font-size:20px}
input {width:100%;max-width:600px;font-size:16px;padding:4px 8px}
input.keytest {max-width:60px;padding:0;text-align:center}
.list {max-width:600px;margin:0 auto}
.list li {display:block;margin-top:8px;padding:15px 0;border:1px solid rgba( 0, 0, 0, 0.3 );background:rgba( 255, 255, 255, 0.3 )}
.list li span {display:block;font-size:16px}
.nodata {padding:20px 0}
</style>