import React, { Component } from 'react';
import axios from 'axios';

import './RandomQuoteMachine.scss';

class RandomQuoteMachine extends Component {
  state = {
    data: {},
  };

  componentDidMount() {
    this.getQuote(this);
  }

  getQuote = async _this => {
    const res = await axios.get('https://api.chucknorris.io/jokes/random');
    const data = res.data;
    _this.setState({ data });
  };

  render() {
    return (
      <div className="RandomQuoteMachine">
        <div className="row">
          <h1 className="text-center">Random Quote Machine</h1>
        </div>
        <div className="row">
          <div
            id="quoteBox"
            className="col-xs-8 col-xs-offset-2 col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-4"
          >
            <p id="quote" className="text-center">
              {this.state.data.value && this.state.data.value}
            </p>
            <div className="row">
              <div className="col-xs-6 col-sm-6 col-md-6">
                <button
                  type="button"
                  className="btn btn-primary pull-left"
                  id="tweet"
                >
                  Tweet
                </button>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-6>">
                <button
                  type="button"
                  className="btn btn-primary pull-right"
                  id="newQuote"
                  onClick={async () => await this.getQuote(this)}
                >
                  New Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RandomQuoteMachine;
