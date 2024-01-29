/**
 * 맵드 타입
 */
interface Board {
  id: number;
  title: string;
  content: string;
}

type UpdateBoard = {
  [key in keyof Board]?: Board[key];
};

function fetchBoard(): Board {
  return {
    id: 1,
    title: '제목',
    content: '내용',
  };
}

function updateBoard(board: UpdateBoard) {
  // 게시글 정보 수정
}

updateBoard({ title: '제목수정' });
