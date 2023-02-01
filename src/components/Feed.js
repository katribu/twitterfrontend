import React from 'react'
import { getAllTweets } from '../services/fetch'
import {Link} from 'react-router-dom'
import Moment from 'react-moment';
import {FaTwitter} from 'react-icons/fa'


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
                <div key={tweet.id} className="tweetContainer">
                    <div className="user">
                        <h4><FaTwitter/>{tweet.name} <Link to={`/user/${tweet.username}`}>(@{tweet.username}) </Link>
                        <span className="ago"><Moment fromNow>{tweet.created_at}</Moment></span></h4>
                    </div>
                    <p className="message">{tweet.message}</p>
                </div>
            )
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