
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

async function createTweet(text){
    const response = await fetch(`http://localhost:3333/tweets`,{
        method:'POST',
        headers:{
            'Content-Type': 'application/json',
            'x-user': 'santaclaus',
        },
        body:JSON.stringify({text}),
    })
    const data = await response.json()
    return data;
}


export {getTweets, getAllTweets, createTweet}