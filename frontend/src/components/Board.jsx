import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { url } from '../config/config'
import axios from 'axios'

export const Board = () => {
    const [boards, setBoards] = useState([])
    const sessionId = sessionStorage.getItem('loginID')

    const navigate = useNavigate()
    const goToWrite = () => {
        navigate('/write')
    }
    const goToHome = () => {
        navigate('/')
    }

    const boardList = async () => {
        try {
            const resp = await axios.get(`${url}/list`)
            console.log(resp.data) // API 응답 확인
            setBoards(resp.data) // 데이터 상태 업데이트
        } catch (error) {
            console.error('Error fetching board list:', error)
        }
    }

    useEffect(() => {
        boardList()
    }, [])

    const boardDetail = board_seq => {
        const seq = board_seq.board_seq
        console.log(`Navigating to board ${seq}`)
        navigate(`/detail/${seq}`)
    }

    return (
        <div className="boardCont">
            <h1>{sessionId} 게시판</h1>
            <div className="boardWrite">
                <button type="submit" onClick={goToWrite}>
                    게시글 작성
                </button>
            </div>
            <div className="boardList">
                <div className="title row">
                    <div>번호</div>
                    <div>제목</div>
                    <div>작성자</div>
                </div>
                {boards.map(bd => (
                    <div
                        className="row"
                        key={bd.board_seq}
                        onClick={() =>
                            boardDetail({
                                board_seq: bd.board_seq,
                            })
                        }
                    >
                        <div>{bd.board_seq}</div>
                        <div>{bd.board_title}</div>
                        <div>{bd.member_id}</div>
                    </div>
                ))}
            </div>
            <button onClick={goToHome}>홈</button>
        </div>
    )
}
