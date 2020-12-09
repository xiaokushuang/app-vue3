<template>
  <div class="about">
    <ul>
      <li v-for="data in state.list"
          :key="data.filmId"
          @click="handleClick(data.filmId)">
        <img :src="data.poster" />
        <div style="text-align:left">{{data.name}}</div>
      </li>
    </ul>
  </div>
</template>
<script>
import { onMounted, reactive, getCurrentInstance } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'
export default {
  setup () {
    const state = reactive({
      list: []
    })
    const { ctx } = getCurrentInstance()
    const router = useRouter()
    const handleClick = (id) => {
      // ctx.$router.push(`/detail/${id}`)
      router.push(`/detail/${id}`)
    }

    onMounted(() => {
      axios({
        url: 'https://m.maizuo.com/gateway?cityId=310100&pageNum=1&pageSize=10&type=1&k=101035',
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1596502176387264316178433"}',
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then(res => {
        console.log(res.data)
        state.list = res.data.data.films
      })
    })
    return {
      handleClick,
      state
    }
  }
}
</script>
<style lang="scss" scoped>
li {
  overflow: hidden;
  padding: 10px;
  img {
    width: 100px;
    float: left;
  }
}
</style>
