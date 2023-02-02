import React from 'react'
import {Link} from 'react-router-dom'
import Moment from 'react-moment';
import {FaTwitter} from 'react-icons/fa'

export default class Tweet extends React.Component{
    render(){
            const tweet = this.props.tweetInfo
            const {name,username,created_at,message} = tweet 
            return (
                <div  className="tweetContainer">
                    <div className="user">
                        <h4><FaTwitter/>{name} <Link to={`/user/${username}`}>(@{username}) </Link>
                        <span className="ago"><Moment fromNow>{created_at}</Moment></span></h4>
                    </div>
                    <p className="message">{message}</p>
                </div>
            )
        
    }
}