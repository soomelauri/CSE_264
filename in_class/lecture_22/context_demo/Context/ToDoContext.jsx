import { useToDoData } from "./ToDosContext";

export function ToDoComponent () {
    const {state} = useToDoData()

    return (
        <div>
            Here are the todos from the components
            {state.todos.map(todo => {
                <ol key={todo.id}>{todo.title}</ol>
            })}
        </div>
    )
}
