import React from 'react'
import { getAllTweets } from '../services/fetch'
import Tweet from './Tweet'


export default class Feed extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            allTweets:[]
        }
    }

    async componentDidMount(){
        const allTweets = await getAllTweets()
        this.setState({allTweets})
        // console.log(allTweets)
    }
    render(){
        const {allTweets} = this.state
        const tweets = allTweets.map(tweet => {
           return <Tweet tweetInfo={tweet}/>
        })

        return(
            // get all the tweets
            <div className="feedContainer">
                <h2 className="feedTitle">Tweeter</h2>
                {tweets}
            </div>
        )
    }

}