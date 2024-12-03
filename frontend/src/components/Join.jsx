import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
export const Join = () => {
    const navigate = useNavigate()

    const [members, setmembers] = useState({
        member_id: '',
        member_pw: '',
        member_name: '',
    })
    const handleCreate = e => {
        setmembers({ ...members, [e.target.name]: e.target.value })
    }

    const joinMemberBtn = () => {
        axios.post('http://localhost:5000/join', members).then(resp => {
            console.log(resp.data)
            if (resp.data.result == 'fail') {
                alert('중복된 아이디 입니다.')
            } else {
                alert('회원가입해주셔서 감사합니다.')
                navigate('/')
            }
        })
        setmembers({ member_id: '', member_pw: '', member_name: '' })
    }
    return (
        <div className="joinBox">
            <div className="joinForm">
                <h1>회원가입</h1>
                <div className="joinInput">
                    <label>id</label> <br />
                    <input
                        type="text"
                        value={members.member_id || ''}
                        placeholder="아이디를 입력하시오"
                        name="member_id"
                        onChange={handleCreate}
                    />
                </div>
                <div className="joinInput">
                    <label>password</label> <br />
                    <input
                        type="password"
                        value={members.member_pw || ''}
                        placeholder="비밀번호를 입력하시오"
                        name="member_pw"
                        onChange={handleCreate}
                    />
                </div>
                <div className="joinInput">
                    <label>member_name</label> <br />
                    <input
                        type="text"
                        value={members.member_name || ''}
                        placeholder="이름을 입력하시오"
                        name="member_name"
                        onChange={handleCreate}
                    />
                </div>
                <button type="submit" onClick={joinMemberBtn}>
                    회원가입
                </button>
            </div>
        </div>
    )
}
