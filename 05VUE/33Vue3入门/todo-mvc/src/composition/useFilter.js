import { ref, onMounted, onUnmounted, computed } from "vue"
import { filter } from "../utils/todoStorage"

const validHash = ["all", "active", "completed"]

export default function useFilter(todosRef){
  const visibilityRef = ref("all")

  const onHashChange = () => {
    const hash = location.hash.replace(/#\/?/,"")
    if(!validHash.includes(hash)){
      location.hash = ""
      visibilityRef.value = "all"
    }else{
      visibilityRef.value = hash
    }
  }

  // 1. 组件挂载完成的生命周期函数
  onMounted(()=>{
    // 监听哈希值变化
    window.addEventListener("hashchange",onHashChange)
  })

  // 2. 组件销毁过后的生命周期函数
  onUnmounted(()=>{
    window.removeEventListener("hashchange",onHashChange)
  })

  const filtererTodosRef = computed(() => {
    return filter(todosRef.value,visibilityRef.value)
  })

  const remainingRef = computed(()=> {
    return filter(todosRef.value,"active").length
  })

  const completedRef = computed(()=> {
    return filter(todosRef.value,"completed").length
  })

  return {
    visibilityRef,
    filtererTodosRef,
    remainingRef,
    completedRef
  }

}