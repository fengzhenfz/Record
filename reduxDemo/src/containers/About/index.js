import React, { Component } from 'react'
import styles from './main.scss'

// @pureRender
export default class About extends Component {
  constructor(props) {
    super(props);
    console.log('................styles:', styles)
  }
  render() {
    return (
      <div className={styles.test}>
      	My name is ben chan,I'm a web developer, I like js!
			</div>
    )
  }
}


