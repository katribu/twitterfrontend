import React from "react"
import { createTweet } from "../services/fetch"

export default class AddTweet extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            newTweetText:''
        }
    }

    handleChagneNewTweetText(event){
        this.setState({
            newTweetText:event.target.value
        })
    }

   async handleSubmitTweet(){
    const {newTweetText} = this.state
    const result = await createTweet(newTweetText)
        this.setState({
            newTweetText:''
        })
    this.handlePopulateTweets()
    // this.handlePopulateTweets() this method is from the Feed.js file.
    }
    render(){
        const {newTweetText} = this.state
        return (
            <div className="addTweetContainer" >
                <div className="form">
                    <label> Add a Tweet </label><br/>
                        <textarea rows="3"
                        placeholder="Write a tweet..."
                        value={newTweetText}
                        onChange={this.handleChagneNewTweetText.bind(this)}

                        />
                    <button className="backLink" onClick={this.handleSubmitTweet.bind(this)}>Submit Tweet</button>
                </div>

                
            </div>
        )
    }
}