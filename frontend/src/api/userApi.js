import axios from 'axios'

const API_URL = 'http://localhost:/api/users'

export const getUsers = () => axios.get(API_URL)
export const createUser = user => axios.get(API_URL, user)
export const updateUser = () => axios.put(`${API_URL}/${id}`, user)
export const deleteUsers = () => axios.delete(`${API_URL}/${id}`)
