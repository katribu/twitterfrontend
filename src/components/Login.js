import React from "react"
import { getLoginToken } from "../services/fetch"
import {FaTwitter} from 'react-icons/fa'

export default class Login extends React.Component{
    constructor(props){
        super(props)

        this.state={
            username:'',
            password:'',
            error:null,
        }
    }

    handleInputFieldChange(field,event){
        this.setState({
            [field]:event.target.value
        })
    }

   async handleLoginAttempt(){
        const {username,password} = this.state
        const{history} = this.props
        try{
            //make a request to create a token
            const {error,token} = await getLoginToken(username,password)
            //check if successful
            if(error){
                throw new Error(error)
            }

            if(!token){
                throw new Error('Something went wrong....')
            }
            // add token to local storage
            localStorage.setItem('TWITTER_TOKEN',token)
            //redirect to Feed.js
            history.replace('/')
        }catch(error){
            this.setState({error})
        }
    }
    render(){
        const {error,username,password} = this.state
        return(
            <div className="loginContainer">
                <h1 className="loginH1"><FaTwitter/> Login to Tweeter</h1>

                <div>
                    <div>
                        <label>Username: 
                            <input 
                                type="text" 
                                onChange={this.handleInputFieldChange.bind(this,'username')}
                                value={username}
                                className="loginInput"
                            />
                        </label>
                    </div>

                    <div>
                        <label>Password:
                            <input 
                                type="password" 
                                onChange={this.handleInputFieldChange.bind(this,'password')}
                                value={password}
                                className="loginInput"
                            />
                        </label>
                    </div>
                </div>
                <div>
                    <button onClick={this.handleLoginAttempt.bind(this)} className="backLink">Log In</button>
                </div>
                {error && <div> Error: {error.message}</div>}
            </div>
        )
    }
}