import { useEffect, useState } from 'react'

export const BoardWrite = () => {
    const [board, setBoard] = useState({
        board_title: '',
        board_content: '',
    })

    const boardWritehandle = e => {
        setBoard({ ...board, [e.target.name]: e.target.value })
    }

    return (
        <div className="boardCont">
            <h1>게시글 작성</h1>
            <div className="inputRow">
                <label>게시글 제목</label>
                <input
                    type="text"
                    name="board_title"
                    value={board.board_title || ''}
                    placeholder="제목을 입력해주세요"
                    onChange={boardWritehandle}
                />
            </div>
            <div className="inputRow">
                <label>게시글 내용</label>
                <textarea
                    className="boardContent"
                    name="board_content"
                    value={board.board_content || ''}
                    placeholder="게시글 내용을 입력해주세요"
                    onChange={boardWritehandle}
                ></textarea>
            </div>
            <div>
                <button type="submit">게시글 작성</button>
            </div>
        </div>
    )
}
