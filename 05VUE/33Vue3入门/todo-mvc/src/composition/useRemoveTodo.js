export default function useRemoveTodo(todosRef){
    const removeOneTodo = (todo)=>{
        todosRef.value.splice(todosRef.value.indexOf(todo), 1)
    }

    const removeCompleted = ()=>{
        todosRef.value = todosRef.value.filter(todo=>!todo.completed)
    }

    return {
        removeOneTodo,
        removeCompleted
    }
}