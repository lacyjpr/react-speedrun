import React, { Component } from 'react';
import axios from 'axios';
import './WikipediaViewer.scss';

class WikipediaViewer extends Component {
  constructor() {
    super();

    this.state = {
      searchText: '',
      results: null,
    };
  }

  handleChange = async event => {
    await this.setState({ searchText: event.target.value });
    console.log(this.state);
    const SEARCHTEXT = this.state.searchText;
    const results = await axios.get(
      `https://en.wikipedia.org/w/api.php?format=json&origin=*&action=query&generator=search&prop=extracts|info&inprop=url&exintro&explaintext&exsentences=1&exlimit=10&gsrsearch=${SEARCHTEXT}`
    );
    this.setState({ results });
  };

  render() {
    const { searchText } = this.state;
    return (
      <div className="WikipediaViewer">
        <div className="text-center WikipediaViewer__searchBox">
          <h1>WikipediA Viewer</h1>
          <div className="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3">
            <form className="form-inline" id="form-container" role="form">
              <div className="form-group">
                <input
                  type="text"
                  id="searchText"
                  className="form-control"
                  placeholder="search WikipediA"
                  value={searchText}
                  onChange={this.handleChange}
                  required
                />
                <button type="submit" className="btn btn-primary">
                  <i className="glyphicon glyphicon-search" />
                </button>
                <a
                  href="https://en.wikipedia.org/wiki/Special:Random"
                  target="_blank"
                  className="btn btn-primary"
                  role="button"
                >
                  <i className="glyphicon glyphicon-random" />
                </a>
              </div>
            </form>
          </div>
        </div>

        {this.state.results &&
          this.state.searchText &&
          this.state.results.data.query &&
          Object.entries(this.state.results.data.query.pages).map(article => (
            <div className="row" key={article[0]}>
              <a
                href={article[1].fullurl}
                target="blank_"
                className="WikipediaViewer__link"
              >
                <div className="col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3 col-xs-8 col-xs-offset-2 WikipediaViewer__result">
                  <h2>{article[1].title}</h2>
                  <p>{article[1].extract}</p>
                </div>
              </a>
            </div>
          ))}
      </div>
    );
  }
}

export default WikipediaViewer;
