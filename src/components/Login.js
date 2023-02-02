import React from "react"
import { getLoginToken } from "../services/fetch"

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
            <div>
                <h1>Login</h1>

                <div>
                    <label>Username: 
                        <input 
                            type="text" 
                            onChange={this.handleInputFieldChange.bind(this,'username')}
                            value={username}
                        />
                    </label>
                </div>

                <div>
                    <label>Password:
                        <input 
                            type="password" 
                            onChange={this.handleInputFieldChange.bind(this,'password')}
                            value={password}
                        />
                    </label>
                </div>
                <div>
                    <button onClick={this.handleLoginAttempt.bind(this)}>Log In</button>
                </div>
                {error && <div> Error: {error.message}</div>}
            </div>
        )
    }
}