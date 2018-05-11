import React from 'react';

const Contact = () => (
  <div className="PersonalPortfolioWebpage__contact">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="heading">
            <h2 class="text-center">Contact</h2>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6">
          <form
            role="form"
            action="http://formspree.io/lacyjpr99@gmail.com"
            method="POST"
          >
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                name="name"
                placeholder="Name"
                required
              />
            </div>
            <div class="form-group">
              <input
                type="email"
                class="form-control"
                name="_replyto"
                placeholder="Email"
                required
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                name="subject"
                Placeholder="Subject"
                required
              />
            </div>
            <div class="form-group">
              <textarea
                name="InputMessage"
                class="form-control"
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
              class="btn btn-info pull-left"
            />
          </form>
        </div>
      </div>

      <div class="row">
        <div class="col-md-4 col-md-offset-4">
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
