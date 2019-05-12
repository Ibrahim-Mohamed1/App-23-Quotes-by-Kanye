import React, { Component } from 'react';
import { withData } from './DataProvider';

class App extends Component {

  componentDidMount(){
    this.props.getQuote()
}

  render() {
    const styles={
      quote:{
        width: "90%",
        display:"block",
        margin:"auto",
        color:"lime",
        textAlign:"center",
        textTransform: "capitalize"
      },
      button:{
        display: "block",
        margin: "auto",
        marginTop:"1em",
        zoom: 2.5,
        backgroundColor: 'white',
        borderRadius: 5
      }
    }
    return (
      <div>
        <h1 style={{color: "gold", textAlign:"center", fontSize: '2.2em'}}>Quotes by Kanye</h1>
        <button style={styles.button} onClick={() => this.props.getQuote()}>Next</button>
        <br/>
        <br/>
        <h1 style={styles.quote}>"{this.props.quote}"</h1>
      </div>
    );
  }
}

export default withData(App);