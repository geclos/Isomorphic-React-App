import Immutable from 'immutable'
import {connect} from 'react-redux';
import {login} from '../../actions/loginActions';
import s from '../../constants/styles'
import React from 'react';

@connect(state => ({auth: state.auth}))
export default class Home extends React.Component {
  static defaultProps = {
    auth: Immutable.Map()
  };

  constructor(props) {
    super(props)

    this.goToFeed = this.goToFeed.bind(this)
  }

  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(login());
  }


  goToFeed() {
    const {history} = this.props;
    history.pushState(null, '/feed')
  }

  render() {
    const {auth, dispatch, history} = this.props
    const content = (
      <section className="container expand">
        <header className="row expand">
          <hgroup className="column center">
            <h1 style={{fontSize: '8rem'}}>
              Welcome,&nbsp;
              {auth.get('isLoggedIn') ? 'Gerard' : 'User'}
              </h1>
              <h2>It is time to kickstart your account.</h2>
              <button className="button button-larger button-outline margin-top" onClick={this.goToFeed}>
                Let's begin &darr;
              </button>
          </hgroup>
        </header>
      </section>
    );

    return auth.get('isLoggedIn') ? content : null;
  }
}
