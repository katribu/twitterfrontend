import React from "react"
import {Link} from "react-router-dom"

export default class AddTweet extends React.Component{
    render(){
        return (
            <div>
                <h4>Add a Tweet</h4>
                <form>
                    <label> Message:<input type="text"/></label>
                </form>

                <Link to={"/"} className="backLink">Back to All Tweets</Link>
            </div>
        )
    }
}