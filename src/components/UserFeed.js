import React from 'react'
import { getTweets } from '../services/fetch'
import {Link} from 'react-router-dom'


export default class UserFeed extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            userTweets:undefined,
            isLoading:false,
        }
    }

    async componentDidMount(){
        this.setState({isLoading:true})
        const tweets =  await getTweets(this.props.match.params.username)
        this.setState({userTweets:tweets, isLoading:false})
    }
    
    render(){
        const {username} = this.props.match.params.username
        const {userTweets, isLoading} = this.state
        
        if(isLoading){
            return <div>Loading Tweets...</div>
        }
        
        if(!username && !userTweets){
            return <div>No tweets with the username: {username}</div>
        }
        
        const usernameTweets = userTweets.map(tweet => {
            return (
            <div key={tweet.id}>
                <p>
                {tweet.message} 
                </p>     
            </div>
            )
        })

        return(
            // get tweets according to username
            <div>
                <h2>User Feed for @{this.props.match.params.username}</h2>
                {usernameTweets}
                <Link to={"/"}>Back to All Tweets</Link> 
            </div>
        )
    }
}

