import React, { Component } from 'react';
import axios from "axios"
const { Provider, Consumer } = React.createContext()

class DataProvider extends Component {
    constructor() {
        super()
        this.state = {
            quote: ''
        }
    }

    getQuote = () => {
        axios.get(`https://api.kanye.rest`).then(res => {
            this.setState({
                quote: res.data.quote
            })
        }).catch(function (error) {
            window.location.reload()
        });
    }

    render() {
        return (
            <Provider value={{
                getQuote: this.getQuote,
                ...this.state
            }}
            >
                {this.props.children}
            </Provider>
        );
    }
}

export default DataProvider;

export function withData(C) {
    return props => <Consumer>{value => <C {...value}{...props} />}</Consumer>
}