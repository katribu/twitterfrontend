import React from 'react'

export default class UserFeed extends React.Component{

    render(){
        const username = this.props.match.params.username
        return(
            <div>User Feed for @{username}</div>
        )
    }
}

