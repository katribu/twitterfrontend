
const TWITTER_API_URL = 'http://localhost:3333'

async function getTweets(username){
    const response = await fetch(`${TWITTER_API_URL}/tweets/${username}`)
    const data = await response.json()
    return data
}

async function getAllTweets(){
    const response = await fetch(`${TWITTER_API_URL}/tweets`)
    const data = await response.json()
    return data
}

async function createTweet(text){
    const response = await fetch(`${TWITTER_API_URL}/tweets`,{
        method:'POST',
        headers:{
            'Content-Type': 'application/json',
            'x-token': localStorage.getItem('TWITTER_TOKEN'),
        },
        body:JSON.stringify({text}),
    })
    const data = await response.json()
    return data;
}

async function getLoginToken(username,password){
    const response = await fetch(`${TWITTER_API_URL}/login`,{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            username,
            password,
        })
    
    })
    const data = await response.json()
    return data
}


export {getTweets, getAllTweets, createTweet, getLoginToken}