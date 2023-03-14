import {ref} from "vue"
import {generateId} from "../utils/todoStorage"

export default function useNewTodo(todosRef){
  const newTodoRef = ref("") //新任务的标题

  //新增任务的方法
  const addTodo = () => {
    const todoValue = newTodoRef.value && newTodoRef.value.trim();
    if(!todoValue) return;
    // 生成一个任务对象，将其加入任务列表
    const todoObj = {
      id: generateId(),
      title: todoValue,
      completed: false //任务是否完成
    }
    todosRef.value.push(todoObj)
    newTodoRef.value = ""
  } 

  return {
    newTodoRef,
    addTodo
  };
}