import React from 'react';
import s from './about.scss';
import withStyles from '../../decorators/withStyles';

@withStyles(s)
class About extends React.Component {
  render() {
    return (
      <section className={s.about}>
        <h1>About</h1>
      </section>
    );
  }
}

export default About;
