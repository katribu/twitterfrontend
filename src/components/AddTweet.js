import React from "react"
import {Link} from "react-router-dom"

export default class AddTweet extends React.Component{
    render(){
        return (
            <div className="addTweetContainer">
                <h1 className="formTitle">Add a Tweet</h1>
                <form className="form">
                    <label> Message<br/>
                        <input type="text" placeholder="Write a tweet..."/>
                    </label>
                </form>

                <Link to={"/"} className="backLink">Back to All Tweets</Link>
            </div>
        )
    }
}