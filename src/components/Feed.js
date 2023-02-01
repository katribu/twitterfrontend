import React from 'react'
import { getAllTweets } from '../services/fetch'
import Tweet from './Tweet'


export default class Feed extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            allTweets:[],
            isLoading:true,
            error:null,
        }
    }

    async componentDidMount(){
        await this.handlePopulateTweets()
        // console.log(allTweets)
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

    render(){
        const {allTweets,isLoading,error} = this.state

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