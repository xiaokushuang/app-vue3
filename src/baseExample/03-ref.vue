<template>
  <div>
    ref--{{myname}}---{{myage}}
    <button @click="handleChange">change</button>
  </div>
</template>
<script>
import { ref } from 'vue'
export default {
  setup () {
    const myname = ref('小爽')
    const myage = ref('23')
    const handleChange = () => {
      console.log(myname)
      myname.value = 'xxx'
    }
    return {
      myname,
      myage,
      handleChange
    }
  }
}
</script>
