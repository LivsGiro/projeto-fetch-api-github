<<<<<<< HEAD
import { getUser } from "./services/users.js"

import { getRepositories } from "./services/repositories.js"

import { getAndExtractEvents } from "./services/events.js"

import { user } from '/src/scripts/objects/user.js'

import { screen } from '/src/scripts/objects/screen.js'

document.getElementById('btn-search').addEventListener('click', () => {
    const userName = document.getElementById('input-search').value
    if(validateEmptyInput(userName)) return
    getUserData(userName)
})

document.getElementById('input-search').addEventListener('keyup', (e) => {
    const userName = e.target.value
    const key = e.which || e.keyCode
    const isEnterKeyPressed = key === 13

    if(isEnterKeyPressed){
        if (validateEmptyInput(userName)) return
        getUserData(userName)
    }
})

async function getUserData(userName){
    const userResponse = await getUser(userName)

    if(userResponse.message === "Not found"){
        screen.renderNotFound()
        return
    }

    const repositoriesResponse = await getRepositories(userName)
    const eventsResponse = await getAndExtractEvents(userName)

    user.setInfo(userResponse)
    user.setRepositories(repositoriesResponse)
    user.setEvents(eventsResponse)

    screen.renderUser(user) 

}

function validateEmptyInput (userName){
    if(userName.length === 0){
        alert('Preencha o campo com o nome correto do usuario do GitHub')
        return true
    }
}
=======
import { getUser } from "./services/users.js"

import { getRepositories } from "./services/repositories.js"

import { getAndExtractEvents } from "./services/events.js"

import { user } from './src/scripts/objects/user.js'

import { screen } from '/src/scripts/objects/screen.js'

document.getElementById('btn-search').addEventListener('click', () => {
    const userName = document.getElementById('input-search').value
    if(validateEmptyInput(userName)) return
    getUserData(userName)
})

document.getElementById('input-search').addEventListener('keyup', (e) => {
    const userName = e.target.value
    const key = e.which || e.keyCode
    const isEnterKeyPressed = key === 13

    if(isEnterKeyPressed){
        if (validateEmptyInput(userName)) return
        getUserData(userName)
    }
})

async function getUserData(userName){
    const userResponse = await getUser(userName)

    if(userResponse.message === "Not found"){
        screen.renderNotFound()
        return
    }

    const repositoriesResponse = await getRepositories(userName)
    const eventsResponse = await getAndExtractEvents(userName)

    user.setInfo(userResponse)
    user.setRepositories(repositoriesResponse)
    user.setEvents(eventsResponse)

    screen.renderUser(user) 

}

function validateEmptyInput (userName){
    if(userName.length === 0){
        alert('Preencha o campo com o nome correto do usuario do GitHub')
        return true
    }
}
>>>>>>> c38135b4cc186526bcc7c7a97ca34059daaa52c0
