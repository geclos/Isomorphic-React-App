import cn from 'classnames'
import React, { PropTypes } from 'react'
import validate from 'validate.js'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './Feed.scss'

class Feed extends React.Component {
  state = {
    isValid: false
  };

  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.validateInput = this.validateInput.bind(this);
  }

  validateInput(ev) {
    const {isValid} = this.state;
    const url = ev.currentTarget.value.trim();
    const invalid = validate.single(url, {
      presence: true,
      url: true,
    });

    if (!invalid && !isValid) this.setState({isValid: true})
    else if (invalid && isValid) this.setState({isValid: false})
  }

  onSubmit(ev) {
    ev.preventDefault();
  }

  render () {
    const {isValid} = this.state;
    const nextStep = (
      <fieldset className="text-center margin-top-large">
        <input type="submit" className="button button-larger button-outline" value="Next Step"/>
      </fieldset>
    );

    return (
      <section className="container expand">
        <section className="row expand">
          <header className="column center">
            <hgroup className={cn("text-center", s.root)}>
              <h1>What's the link to your feed?</h1>
            </hgroup>
            <form className="column column-80 column-offset-10" onSubmit={this.onSubmit}>
              <fieldset>
                <input placeholder="Write here your feed url"
                  id="url"
                  type="url"
                  autoFocus
                  onChange={this.validateInput}
                  className={cn({
                    "input-large": true,
                    valid: isValid,
                  })}
                />
              </fieldset>
              {isValid ? nextStep : null}
            </form>
          </header>
        </section>
      </section>
    );
  }
}

export default withStyles(Feed, s);
