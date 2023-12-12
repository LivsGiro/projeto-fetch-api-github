<<<<<<< HEAD
import { baseUrl, repositoriesQuantity } from "../variables.js"

async function getRepositories (userName) {
    const response = await fetch (`${baseUrl}/${userName}/repos?per_page=${repositoriesQuantity}`)
    return await response.json()
}

=======
import { baseUrl, repositoriesQuantity } from "../variables.js"

async function getRepositories (userName) {
    const response = await fetch (`${baseUrl}/${userName}/repos?per_page=${repositoriesQuantity}`)
    return await response.json()
}

>>>>>>> c38135b4cc186526bcc7c7a97ca34059daaa52c0
export {getRepositories}