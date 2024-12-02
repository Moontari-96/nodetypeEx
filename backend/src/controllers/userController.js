import { db } from '../db'

export const getUsers = async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM users')
        res.json(rows)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

export const createUser = async (req, res) => {
    const { name, email } = req.body
    try {
        const [result] = await db.query(
            'INSERT INTO users (name, email) VALUES (?, ?)',
            [name, email]
        )
        res.json({ id: result.insertId, name, email })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

export const updateUser = async (req, res) => {
    const { id } = req.params
    const { name, email } = req.body
    try {
        await db.query('UPDATE users SET name = ?, email = ? WHERE id = ?', [
            name,
            email,
            id,
        ])
        res.json({ id, name, email })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

export const deleteUser = async (req, res) => {
    const { id } = req.params
    try {
        await db.query('DELETE FROM users WHERE id = ?', [id])
        res.send(`User with ID ${id} has been deleted.`)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}
