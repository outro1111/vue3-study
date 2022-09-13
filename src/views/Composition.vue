<template>
  <div>
    <h1>Composition API page</h1>

    <p ref="ptag">내 이름은 {{ name }}, 나이는 {{ age }}</p>
    <button @click="changeA">이름 바꾸기</button>

    <br><br>
    
    <p>{{ memberOne }} {{ memberOne }}</p>
    <p>{{ memberTwo }} {{ memberTwo }}</p>
    <button @click="changeB">이름 바꾸기</button>
  </div>
</template>

<script>
import { reactive, ref } from 'vue'

export default {
  setup() {
    // changeA - ref() 반응형 데이터 만들기 - 변수명.value로 값 참조
    let name = ref('Han')
    let age = ref(18)
    let ptag = ref(null)
    const changeA = () => {
      console.log(ptag, ptag.value)
      age.value = '22'
      name.value = 'Kim'
      ptag.value.classList.add('blue')
    }

    // changeB - ref()와 reactive() 차이
    // ref()는 Primitive type, Reference type 데이타 둘 다 가능
    // reactive()는 Reference type 데이타만 가능
    // reactive()는 변수명.vaulue가 아닌 변수명으로 바로 접근
    // let memberOne = ref({ name: 'John', age: 55 })
    // let memberTwo = reactive({ name: 'goodman', age: 77 })
    let memberOne = ref(['kim', 'lee', 'park'])
    let memberTwo = reactive({ name: ['john', 'baby', 'good']})
    const changeB = () => {
      memberOne.value = ['ee', 'dd', 'gg']
      memberTwo.name = ['11', '22', '33']
    }

    // return { name: name, age: age }
    return { name, age, ptag, changeA, memberOne, memberTwo, changeB }
  }
}
</script>

<style scoped>
p.blue {color:blue}
</style>