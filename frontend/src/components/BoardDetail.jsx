import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { url } from '../config/config'
import axios from 'axios'

export const BoardDetail = () => {
    const sessionId = sessionStorage.getItem('loginID')
    console.log(sessionId)
    const navigator = useNavigate()
    const { seq } = useParams() // URL에서 seq 가져오기
    const [board, setBoard] = useState({
        board_seq: 0,
        board_title: '',
        board_content: '',
        member_id: '',
    })
    const bdDetail = async () => {
        try {
            const resp = await axios.get(`${url}/detail/${seq}`)
            setBoard(resp.data[0]) // 데이터 상태 업데이트
        } catch (error) {
            console.error('Error fetching board list:', error)
        }
    }

    useEffect(() => {
        bdDetail()
    }, [seq])

    const goToModi = () => {
        console.log(seq)
        navigator(`/modi/${seq}`)
    }
    const goToHome = () => {
        navigator(`/`)
    }

    return (
        <div className="boardCont">
            <div>
                <h1>{board.board_title}</h1>
                <div>{board.member_id}</div>
                <div>{board.board_content}</div>
            </div>
            {sessionId == board.member_id ? (
                <>
                    <button type="submit" onClick={goToModi}>
                        게시글 수정
                    </button>
                </>
            ) : (
                <></>
            )}
            <button type="submit" onClick={goToHome}>
                돌아가기
            </button>
        </div>
    )
}
