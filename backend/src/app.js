import express from 'express'
import cors from 'cors'
import session from 'express-session'
// import bodyParser from 'body-parser'
import joinRouter from './routes/join.js'
import loginRouter from './routes/login.js'
import logoutRouter from './routes/logout.js'
import writeRouter from './routes/write.js'
import MemoryStore from 'memorystore'

const app = express()
const PORT = 5000
const store = MemoryStore(session) // 메모리 스토어 초기화

app.use(
    express.json(),
    express.urlencoded({ extended: false }),
    cors({
        origin: 'http://localhost:3000', // 허용할 프론트엔드 도메인
        methods: ['GET', 'POST', 'PUT', 'DELETE'], // 허용할 HTTP 메서드
    })
)

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

app.use('/join', joinRouter)
app.use('/login', loginRouter)
app.use('/logout', logoutRouter)
app.use('/write', writeRouter)

app.get('/', (req, res) => {
    res.status(200).send('welcome to server')
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
    console.log('서버 가동')
})
