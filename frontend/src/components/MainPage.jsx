import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useAuthStore } from '../store/store'
import { url } from '../config/config'

export const MainPage = () => {
    const [members, setmembers] = useState({
        member_id: '',
        member_pw: '',
    })
    const { loginID, setLoginID } = useAuthStore()

    const navigate = useNavigate()

    // 초기 상태 복원
    useEffect(() => {
        const storedLoginID = sessionStorage.getItem('loginID')
        if (storedLoginID) {
            setLoginID(storedLoginID) // sessionStorage에서 로그인 ID를 가져와 상태 복원
        }
    }, [setLoginID])

    const gotoJoin = () => {
        navigate('/join')
    }

    const loginValidation = e => {
        setmembers({ ...members, [e.target.name]: e.target.value })
    }
    const gotoLogin = () => {
        axios.post(`${url}/login`, members).then(resp => {
            console.log(resp)
            if (resp.data.result == 'fail') {
                alert('로그인 실패')
            } else {
                sessionStorage.setItem('loginID', resp.data.member_id)
                setLoginID(resp.data.member_id) // resp로 돌아오는 data를 setLoginID로 loginID에 담겠다.
                alert('로그인 성공!')
                navigate('/')
            }
        })
    }

    const handleLogout = () => {
        axios.delete(`${url}/logout`).then(resp => {
            console.log(resp.data)
            if (resp.data.result == 'true') {
                sessionStorage.removeItem('loginID')
                setLoginID('')
            }
        })
    }

    return (
        <>
            {loginID ? (
                <div className="joinBox">
                    <table>
                        <thead>
                            <tr>
                                <th colSpan={4}>
                                    <h1>{loginID} 님 환영합니다.</h1>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <button
                                        onClick={() => {
                                            navigate('/board')
                                        }}
                                    >
                                        게시판
                                    </button>
                                </td>
                                <td>
                                    <button onClick={handleLogout}>
                                        로그아웃
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            ) : (
                <div className="joinBox">
                    <h1>Hello Moontari Community</h1>
                    <div className="joinForm">
                        <input
                            type="text"
                            value={members.member_id || ''}
                            placeholder="아이디를 입력하시오"
                            name="member_id"
                            onChange={loginValidation}
                        />
                        <input
                            type="password"
                            value={members.member_pw || ''}
                            placeholder="비밀번호를 입력하시오"
                            name="member_pw"
                            onChange={loginValidation}
                        />
                        <button onClick={gotoLogin}>로그인</button>
                        <button onClick={gotoJoin}>회원가입</button>
                    </div>
                </div>
            )}
        </>
    )
}
