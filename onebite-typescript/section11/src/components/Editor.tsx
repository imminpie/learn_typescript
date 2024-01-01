import { useState } from 'react';

interface Props {
  onClickAdd: (text: string) => void;
}

export default function Editor(props: Props) {
  const [text, setText] = useState('');

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleClickAdd = () => {
    props.onClickAdd(text);
    setText('');
  };

  return (
    <>
      <input type='text' value={text} onChange={handleChangeInput} />
      <button onClick={handleClickAdd}>추가</button>
    </>
  );
}
