import React from 'react';
import './RandomQuoteMachine.scss';

class RandomQuoteMachine extends React.Component {
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
            <p id="quote" className="text-center" />
            <p id="author" className="text-right" />
            <div className="row">
              <div className="col-xs-6 col-sm-6 col-md-6">
                <button type="button" className="btn btn-secondary" id="tweet">
                  Tweet
                </button>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-6>">
                <button
                  type="button"
                  className="btn btn-secondary pull-right"
                  id="newQuote"
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
