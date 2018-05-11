import React from 'react';

const Contact = () => (
  <div className="PersonalPortfolioWebpage__contact">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="heading">
            <h2 className="text-center">Contact</h2>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <form
            role="form"
            action="https://formspree.io/lacyjpr99@gmail.com"
            method="POST"
          >
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Name"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                name="_replyto"
                placeholder="Email"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="subject"
                placeholder="Subject"
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="InputMessage"
                className="form-control"
                placeholder="Message"
                rows="3"
                required
              />
            </div>
            <input
              type="submit"
              name="submit"
              id="submit"
              value="Submit"
              className="btn btn-info pull-left"
            />
          </form>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <ul>
            <li>
              <a
                href="https://twitter.com/lacyjpr"
                target="blank_"
                className="PersonalPortfolioWebpage__li"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://plus.google.com/116311584410349560126"
                target="blank_"
                className="PersonalPortfolioWebpage__li"
              >
                Google+
              </a>
            </li>
            <li>
              <a
                href="https://github.com/lacyjpr"
                target="blank_"
                className="PersonalPortfolioWebpage__li"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;
