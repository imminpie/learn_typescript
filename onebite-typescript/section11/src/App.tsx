import { useEffect, useRef, useState } from 'react';
import './App.css';
import Editor from './components/Editor';

interface Todo {
  id: number;
  content: string;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const idRef = useRef(0);

  const handleClickAdd = (text: string) => {
    setTodos([
      ...todos,
      {
        id: idRef.current++,
        content: text,
      },
    ]);
  };

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <>
      <h1>Todo</h1>
      <Editor onClickAdd={handleClickAdd} />
    </>
  );
}

export default App;
