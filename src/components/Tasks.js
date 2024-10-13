import Task from "./Task"

const Tasks = ({tasks, onDelete, onToggle}) => {

  return (
    // tasks.pus() this not feasible cuz state is immutable, it is one way data it is created and send it down
    // to do that we can do lik this setTasks([...tasks, {new obj}])
    <>
        {tasks.map((task,index) => (
            <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>
        ))}
    </>
  )
}

export default Tasks