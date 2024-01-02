import { useTodoDispatch } from '../App';
import { Todo } from '../types';

interface Props extends Todo {}

export default function TodoItem(props: Props) {
  const dispatch = useTodoDispatch();

  const handleClickDelete = () => {
    dispatch.handleClickDelete(props.id);
  };

  return (
    <div>
      {props.id}번: {props.content}
      <button onClick={handleClickDelete}>삭제</button>
    </div>
  );
}
