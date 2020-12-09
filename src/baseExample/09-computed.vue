<template>
  <div>
    computed--{{computedName}}
    <input type="text"
           v-model="inputText">
    <ul>
      <li v-for="data in computedList"
          :key="data">
        {{data}}
      </li>
    </ul>
  </div>
</template>
<script>
import { reactive, toRefs, computed, onMounted } from 'vue'
export default {
  setup () {
    const state = reactive({
      name: 'yanmingshuang',
      list: [],
      inputText: ''
    })
    const computedName = computed(() => {
      return state.name + '111'
    })
    const computedList = computed(() => {
      const newList = state.list.filter(item => {
        return item.includes(state.inputText)
      })
      return newList
    })
    onMounted(() => {
      fetch('/test.json')
        .then(res1 => {
          console.log(res1)
          return res1.json()
        })
        .then(res2 => {
          state.list = res2.list
          console.log(state.list)
        })
    })
    return {
      ...toRefs(state),
      computedName,
      computedList
    }
  }

}
</script>
