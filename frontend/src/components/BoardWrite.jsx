import { useEffect, useState } from 'react'
import axios from 'axios'
import { url } from '../config/config'
import { useNavigate } from 'react-router-dom'

export const BoardWrite = () => {
    const navigator = useNavigate()
    const sessionId = sessionStorage.getItem('loginID')
    const [board, setBoard] = useState({
        board_title: '',
        board_content: '',
        member_id: sessionId,
    })

    const boardWritehandle = e => {
        setBoard({ ...board, [e.target.name]: e.target.value })
    }

    const writeBtn = () => {
        console.log(board.board_content)
        axios.post(`${url}/write`, board).then(resp => {
            if (resp.data.result == 'ok') navigator('/board')
        })
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
                <button type="submit" onClick={writeBtn}>
                    게시글 작성
                </button>
            </div>
        </div>
    )
}
