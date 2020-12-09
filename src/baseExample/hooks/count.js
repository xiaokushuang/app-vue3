import {
  ref
} from 'vue'

function countUse() {
  const count = ref(0)
  const handleJian = () => {
    count.value--
  }
  const handleAdd = () => {
    count.value++
  }
  return {
    count,
    handleJian,
    handleAdd
  }
}

export {
  countUse
}
