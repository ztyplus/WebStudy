const LOCAL_KEY = "todomvc"

/**
 * 生成任务唯一编号，时间戳 + 4位随机数
 * @return {String} 任务Id
 */
export function generateId(){
    return Date.now() + Math.round().toString(16).substr(2,4)
}

/**
 * 获取目前的所有任务
 * @return {Array}
 */
export function fetch(){
    const result = localStorage.getItem(LOCAL_KEY);
    if(result) {
        return JSON.parse(result);
    }
    return [];
}

/**
 * 
 * 保存任务列表
 * @param todos {Array} 任务列表
 */
export function save(todos){
    localStorage.setItem(LOCAL_KEY, JSON.stringify(todos));
}

/**
 * 筛选任务列表
 * @param todos {Array} 待筛选的任务列表
 * @param visibility {String} 筛选方式 all | active | completed
 * @return {Array} 筛选后的任务列表
 */
export function filter(todos,visibility = "all"){
    if(visibility === "all") {
        return todos
    }else if(visibility === "active") {
        return todos.filter(todo => todo.completed === false)
    }else if(visibility === "completed") {
        return todos.filter(todo => todo.completed === true)
    }
    throw new Error("invalid visibility value")
}

