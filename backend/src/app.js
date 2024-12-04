import express from 'express'
import cors from 'cors'
import session from 'express-session'
// import bodyParser from 'body-parser'
import joinRouter from './routes/join.js'
import loginRouter from './routes/login.js'
import logoutRouter from './routes/logout.js'
import writeRouter from './routes/write.js'
import listRouter from './routes/list.js'
import detailRouter from './routes/detail.js'
import modiRouter from './routes/modify.js'
import deleteRouter from './routes/delete.js'
import MemoryStore from 'memorystore'

const app = express()
const PORT = 5000
const store = MemoryStore(session) // 메모리 스토어 초기화

// 로컬 접속 허용 및 json으로 타입 전환 http  메서드 설정
app.use(
    express.json(),
    express.urlencoded({ extended: false }),
    cors({
        origin: 'http://localhost:3000', // 허용할 프론트엔드 도메인
        methods: ['GET', 'POST', 'PUT', 'DELETE'], // 허용할 HTTP 메서드
    })
)

// 세션 express session사용
// 키 새로고침 및 시간 저장
app.use(
    session({
        secret: 'test-key',
        resave: false,
        saveUninitialized: false,
        store: new store({
            checkPeriod: 86400000, // 24 hours (= 24 * 60 * 60 * 1000 ms)
        }),
    })
)

// 회원가입
app.use('/join', joinRouter)
// 로그인
app.use('/login', loginRouter)
// 로그아웃
app.use('/logout', logoutRouter)
// 게시글 작성
app.use('/write', writeRouter)
// 게시글 리스트
app.use('/list', listRouter)
// 게시글 디테일
app.use('/detail', detailRouter)
// 게시글 수정
app.use('/modify', modiRouter)
// 게시글 삭제
app.use('/delete', deleteRouter)

// 접속확인
app.get('/', (req, res) => {
    res.status(200).send('welcome to server')
})

// 접속 시 서버 호출
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
    console.log('서버 가동')
})
