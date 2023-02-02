import React from "react"

 export default class Logout extends React.Component {
    async componentDidMount() {
      const { history } = this.props;
  
      await new Promise((resolve) => {
        setTimeout(resolve, 3000);
      });
  
      localStorage.removeItem('TWITTER_TOKEN');
      history.replace('/');
    }
  
    render() {
      return (
        <div>Logging out...</div>
      );
    }
  }