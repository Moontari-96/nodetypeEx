import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { url } from '../config/config'
import axios from 'axios'

export const BoardModi = () => {
    const sessionId = sessionStorage.getItem('loginID')
    console.log(sessionId)
    const navigator = useNavigate()
    const { seq } = useParams() // URL에서 seq 가져오기
    const [board, setBoard] = useState({
        board_content: '',
        board_seq: 0,
        board_title: '',
        member_id: '',
    })
    const bdModi = async () => {
        try {
            const resp = await axios.get(`${url}/detail/${seq}`)
            setBoard(resp.data[0]) // 데이터 상태 업데이트
        } catch (error) {
            console.error('Error fetching board list:', error)
        }
    }

    useEffect(() => {
        bdModi()
    }, [seq])

    const gotoBoard = () => {
        navigator('/board')
    }

    const modifyContent = e => {
        setBoard({ ...board, [e.target.name]: e.target.value })
    }
    const modiCont = () => {
        axios.put(`${url}/modify`, board).then(resp => {
            if (resp.data == 'ok') navigator(`/detail/${seq}`)
        })
    }

    const deleteBoard = async () => {
        const resp = await axios.delete(`${url}/delete/${seq}`)
        if (resp.data == 'ok') navigator(`/board`)
    }
    return (
        <div className="boardCont">
            <h1>게시글 수정</h1>
            <input
                type="text"
                value={board.board_title || ''}
                onChange={modifyContent}
                name="board_title"
            />
            <input
                type="text"
                value={board.board_content || ''}
                onChange={modifyContent}
                name="board_content"
            />
            <div className="btnBox">
                {sessionId == board.member_id ? (
                    <>
                        <button onClick={modiCont}>수정</button>
                        <button onClick={deleteBoard}>삭제</button>
                    </>
                ) : (
                    <></>
                )}
                <button onClick={gotoBoard}>돌아가기</button>
            </div>
        </div>
    )
}
