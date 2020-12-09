<template>
  <div>
    detail--{{route}}
  </div>
</template>

<script>
import { onMounted, onUnmounted, reactive } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
export default {
  setup () {
    const state = reactive({
      routeId: ''
    })
    // 获取列表页面传来的id,利用此id进行数据请求
    const route = useRoute()
    const store = useStore()
    onMounted(() => {
      console.log('route', route)
      state.routeId = route.params.id
      store.commit('hide')
    })

    onUnmounted(() => {
      store.commit('show')
    })
    return {
      route
    }
  }
}
</script>
