export default function tasksReducer(toDoList, action) {
    switch (action.type) {
        case "added": {
            return [{ id: crypto.randomUUID(), title: action.title, completed: false }, ...toDoList]
        }
        case "completed": {
            const updatedToDoList = toDoList.map(item => {
                if (item.id === action.item.id) {
                    return { ...item, completed: action.item.completed }
                } else {
                    return item
                }
            });
            updatedToDoList.sort((a, b) => (a.completed === b.completed ? 0 : a.completed ? 1 : -1))
            return updatedToDoList
        }
        case "removed": {
            const updatedToDoList = toDoList.filter(item => item.id !== action.item.id)
            return updatedToDoList
        }
        case "edited": {
            const updatedToDoList = toDoList.map(item => {
                if (item.id === action.item.id) {
                    return { ...item, title: action.item.title }
                } else {
                    return item
                }
            });
            return updatedToDoList
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}