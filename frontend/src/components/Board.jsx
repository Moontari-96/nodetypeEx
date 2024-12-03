import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { url } from '../config/config'
import axios from 'axios'

export const Board = () => {
    const [board, setBoard] = useState([])

    const navigate = useNavigate()
    const goToWrite = () => {
        navigate('/write')
    }

    const boardList = () => {
        axios.get(`${url}/list`).then(resp => {
            console.log(resp)
        })
    }
    return (
        <div className="boardCont">
            <h1>Tari 게시판</h1>
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
                <div className="row"></div>
            </div>
        </div>
    )
}
