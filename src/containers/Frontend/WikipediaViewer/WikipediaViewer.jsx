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
    const TEXT = this.state.searchText;
    const results = await axios.get(
      `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${TEXT}&format=json&origin=*`
    );
    this.setState({ results });
  };

  render() {
    const { searchText } = this.state;
    return (
      <div className="WikipediaViewer">
        <div className="text-center searchBox">
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
          Object.entries(this.state.results.data.query.search).map(article => (
            <div className="row" key={article[0]}>
              <div id="results" />
            </div>
          ))}
      </div>
    );
  }
}

export default WikipediaViewer;
