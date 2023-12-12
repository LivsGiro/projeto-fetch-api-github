<<<<<<< HEAD
const user = {
    avatarUrl: '',
    name: '',
    bio: '',
    userName: '',
    repositories: [],
    events:[],
    setInfo(gitHubUser){
        this.avatarUrl = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.bio = gitHubUser.bio
        this.userName = gitHubUser.login
        this.followers = gitHubUser.followers
        this.following = gitHubUser.following
    },
    setRepositories(repositories){
        this.repositories = repositories
        this.forks = repositories.forks_count
        this.stars = repositories.stargazers_count
        this.watchers = repositories.watchers_count
        this.language = repositories.language
    },
   async setEvents(events) {
        this.events = events
  }};

export { user }
=======
//import { getAndExtractEvents } from '../services/events.js';

const user = {
    avatarUrl: '',
    name: '',
    bio: '',
    userName: '',
    repositories: [],
    events:[],
    setInfo(gitHubUser){
        this.avatarUrl = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.bio = gitHubUser.bio
        this.userName = gitHubUser.login
        this.followers = gitHubUser.followers
        this.following = gitHubUser.following
    },
    setRepositories(repositories){
        this.repositories = repositories
        this.forks = repositories.forks_count
        this.stars = repositories.stargazers_count
        this.watchers = repositories.watchers_count
        this.language = repositories.language
    },
   async setEvents(events) {
        this.events = events
        console.log(events)
  }};

export { user }
>>>>>>> c38135b4cc186526bcc7c7a97ca34059daaa52c0
