
async function getTweets(username){
    const response = await fetch(`http://localhost:3333/tweets/${username}`)
    const data = await response.json()
    return data
}

async function getAllTweets(){
    const response = await fetch(`http://localhost:3333/tweets`)
    const data = await response.json()
    return data
}

export {getTweets, getAllTweets}