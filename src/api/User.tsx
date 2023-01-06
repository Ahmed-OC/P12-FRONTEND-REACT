import axios from "axios"
import env from 'react-dotenv'

export async function getUserById(id: number) {
    try {
        const {data} = await axios.get(`${env.API_URL}`)
        return data
    } catch (error) {
        throw new Error()
    }
}
