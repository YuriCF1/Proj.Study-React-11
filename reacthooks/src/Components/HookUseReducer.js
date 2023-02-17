import React, { useReducer, useState } from "react";

const HookUseReducer = () => {
  // 3 - Começando com useReducer
  const [number, dispatch] = useReducer((state, action) => {
    //State = number || Dispatch = Função que é executada alterando o state
    return Math.random(state);
  });

  // 4 - Avançando no useReducer
  const initialTasks = [
    { id: 1, text: "Fazer alguma coisa" },
    { id: 2, text: "Fazer outra coisa " },
  ];

  const taskReducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        const newTask = {
          id: Math.random(),
          text: taskText,
        };

        setTaskText("");

        return [...state, newTask];
      case "DELETE":
        return state.filter((task) => task.id !== action.id);
      default:
        return state;
    }
  };

  const [taskText, setTaskText] = useState("");
  const [tasks, dispatchTasks] = useReducer(taskReducer, initialTasks); //dispatchTasks = taskReducer || tasks = initialTasks

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatchTasks({ type: "ADD" });
  };

  const removeTask = (id) => {
    dispatchTasks({ type: "DELETE", id }); // Eu posso enviar outros parâmetros diretamente no dispatch
  };

  return (
    <div>
      <h2>useReducer</h2>
      <p>Número: {number}</p>
      <button onClick={dispatch}>Alterar número</button>
      <hr />
      {/* 4 - Avançando no useReducer */}
      <h3>Tarefas: </h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setTaskText(e.target.value)}
          value={taskText}
        />
        <input type="submit" value={"Adicionar"} />
      </form>
      {tasks.map((task) => (
        <li key={task.id} onDoubleClick={() => removeTask(task.id)}>
          {task.text}
        </li>
      ))}
      <hr />
    </div>
  );
};

export default HookUseReducer;
