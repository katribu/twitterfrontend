import React from 'react'
import { getAllTweets } from '../services/fetch'
import {Link} from 'react-router-dom'


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
            return (
                <div key={tweet.id}>
                    <h4>{tweet.name} <Link to={`/user/${tweet.username}`}>(@{tweet.username})</Link></h4>
                    <p>about {tweet.created_at} ago</p>
                    <p>{tweet.message}</p>
                </div>
            )
        })
        return(
            // get all the tweets
            <div>{tweets}
            
            </div>
        )
    }

}