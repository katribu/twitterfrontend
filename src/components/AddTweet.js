import React from "react"
// import {Link} from "react-router-dom"

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

    handleSubmitTweet(){
        this.setState({newTweetText:''})
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

                {/* <Link to={"/"} className="backLink">Back to All Tweets</Link> */}
            </div>
        )
    }
}