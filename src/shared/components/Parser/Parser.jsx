import cn from 'classnames'
import React, { PropTypes } from 'react'
import s from './Parser.scss'
import withStyles from 'isomorphic-style-loader/lib/withStyles'

class Parser extends React.Component {
  render () {
    return (
      <section className='container expand'>
        <section className="row expand">
          <section className="column column-60 column-offset-20 center">
            <form className={s.form}>
              <fieldset>
                <label for="container">Product Container</label>
                <input type="text" id="container" placeholder="Product container" required autoFocus/>
              </fieldset>
              <fieldset>
                <label for="name">Product Name</label>
                <input type="text" id="name" placeholder="Product name" required />
              </fieldset>
              <fieldset>
                <label for="url">Product Link</label>
                <input type="text" id="url" placeholder="Link to the product page" required />
              </fieldset>
              <fieldset>
                <label for="ref">Product Reference</label>
                <input type="text" id="ref" placeholder="Unique product identifier" required />
              </fieldset>
              <fieldset>
                <label for="gender">Product Gender</label>
                <input type="text" id="gender" placeholder="eg: female, male..." required />
              </fieldset>
              <fieldset>
                <label for="category">Product Category</label>
                <input type="text" id="category" placeholder="Product category" required />
              </fieldset>
              <fieldset>
                <label for="imageLink">Product Image Link</label>
                <input type="text" id="imageLink" placeholder="link to the product image" required />
              </fieldset>
            </form>
          </section>
        </section>
      </section>
    )
  }
}

export default withStyles(Parser, s);
