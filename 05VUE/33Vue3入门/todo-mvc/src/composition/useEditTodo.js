import { ref, computed } from "vue"

export default function useEditTodo(todoRef) {
    const editingTodo = ref(null); //当前修改的todo
    let originTitle = null;

    const editTodo = (todo) => {
        editingTodo.value = todo
        originTitle = todo.title
    }

    const doneEdit = (todo) => {
        editingTodo.value = null
        const title = todo.title.trim()
        if(title) {
            todo.title = title
        }else{
            todoRef.value.splice(todoRef.value.indexOf(todo),1)
        }
    }

    const cancelEdit = (todo) => {
        editingTodo.value = null
        todo.title = originTitle
    }

    const allDoneRef = computed({
        get(){
            return todoRef.value.filter(it => !it.completed).length === 0
        },
        set(checked) {
            todoRef.value.forEach(todo => {
                todo.completed = checked
            });
        }
    }) 

    return {
        editingTodo,
        editTodo,
        doneEdit,
        cancelEdit,
        allDoneRef
    }
}