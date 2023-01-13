import axios from "axios"
import env from 'react-dotenv'
import { user, userActivity, userAverageSessions, userPerformance } from '../types/user.type'

export async function getUserById(id: number): Promise<user> {
    try {
        const { data } = await axios.get(`${env.API_URL}user/${id}`)
        return data
    } catch (error) {
        throw new Error()
    }
}

export async function getUserActivityById(id: number): Promise<userActivity> {
    try {
        const { data } = await axios.get(`${env.API_URL}user/${id}/activity`)
        return data
    } catch (error) {
        throw new Error()
    }
}

export async function getUserAverageSessionsById(id: number): Promise<userAverageSessions> {
    try {
        const { data } = await axios.get(`${env.API_URL}user/${id}/average-sessions`)
        return data
    } catch (error) {
        throw new Error()
    }
}

export async function getUserPerformanceById(id: number): Promise<userPerformance> {
    try {
        const { data } = await axios.get(`${env.API_URL}user/${id}/performance`)
        return data
    } catch (error) {
        throw new Error()
    }
}
