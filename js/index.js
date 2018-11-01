'use strict';

import React, {Component} from 'react';
import {Provider} from 'react-redux';

import configureStore from './store/index';

import Root from './root';
import Test from './Test';

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            isLoading: true,
            store: configureStore(() => {
                this.setState({isLoading: false})
            })
        }
    }

    render() {
        if (this.state.isLoading) {
            console.log('loading app');
            return null;
        }
        return (
            <Provider store={this.state.store}>
                <Root/>
            </Provider>
        )
    }

    componentDidMount() {
        let t = new Test();
    }
}



