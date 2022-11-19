
import axios from "axios";

export async function getUsers(){

    const res = await axios.get('https://jsonplaceholder.typicode.com/users')

    return await res.data
}