<<<<<<< HEAD
import { baseUrl } from "../variables.js"

async function getUser (userName) {
    const response = await fetch (`${baseUrl}/${userName}`)
    return await response.json()
}

=======
import { baseUrl } from "../variables.js"

async function getUser (userName) {
    const response = await fetch (`${baseUrl}/${userName}`)
    return await response.json()
}

>>>>>>> c38135b4cc186526bcc7c7a97ca34059daaa52c0
export { getUser }