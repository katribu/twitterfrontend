import React from 'react'
import { getAllTweets,createTweet } from '../services/fetch'
import Tweet from './Tweet'
import jwtDecode from 'jwt-decode'
import { Link } from "react-router-dom";

export default class Feed extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      allTweets:[],
      isLoading:true,
      error:null,
      newTweetText:'',
      user:{},
    }
  }

  async componentDidMount(){
    const {history} = this.props
    const token = localStorage.getItem('TWITTER_TOKEN')

    if(!token){
      history.replace('/login')
      return;
    }

    const payload = jwtDecode(token)
    this.setState({user:payload})

    //Fetch tweets from server
    await this.handlePopulateTweets()
  }

  async handlePopulateTweets(){
    this.setState({
      isLoading:true,
      error: null,
    })

    try {
      const allTweets = await getAllTweets()
      this.setState({allTweets, isLoading:false})
    }catch(error){
      this.setState({error:error})
    }
  }

  handleChagneNewTweetText(event){
    this.setState({
      newTweetText:event.target.value
    })
  }

  async handleSubmitTweet(){
    const {newTweetText} = this.state
    await createTweet(newTweetText)
    this.setState({
        newTweetText:''
    })
    this.handlePopulateTweets()
  }

  render(){
    const {allTweets,isLoading,error,newTweetText,user} = this.state

    if (error) {
      return (
        <div>
          <h3>Unable to fetch tweets: {error.message}</h3>
          <button className="backLink"onClick={this.handlePopulateTweets.bind(this)}>
            Retry
          </button>
        </div>
      );
    }
      
    if (isLoading) {
      return (
        <div>Loading tweets...</div>
      );
    }

    const tweets = allTweets.map(tweet => {
      return <Tweet key={tweet.id}tweetInfo={tweet}/>
    })

    return(
        // get all the tweets
    <div className="feedContainer">
      <h2 className="feedTitle">Tweeter</h2>
      <h4>Feed (logged in as {user.name})</h4>
        <Link to="/logout" className="backLink">Log out</Link>

        
        <div className="addTweetContainer" >
          <div>
              <label> Add a Tweet </label><br/>
              <textarea 
                rows="3"
                placeholder="Write a tweet..."
                value={newTweetText}
                onChange={this.handleChagneNewTweetText.bind(this)}
              />
              <button className="backLink" onClick={this.handleSubmitTweet.bind(this)}>Submit Tweet</button>
          </div>

        </div>
      {tweets}
    </div>
    )
  }

}