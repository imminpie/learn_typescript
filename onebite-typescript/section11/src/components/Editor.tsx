import { useState } from 'react';
import { useTodoDispatch } from '../App';

export default function Editor() {
  const dispatch = useTodoDispatch();
  const [text, setText] = useState('');

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleClickAdd = () => {
    dispatch.handleClickAdd(text);
    setText('');
  };

  return (
    <>
      <input type='text' value={text} onChange={handleChangeInput} />
      <button onClick={handleClickAdd}>추가</button>
    </>
  );
}
