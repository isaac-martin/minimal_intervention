import React, { Component, Fragment } from 'react'
import { validateEmail } from '../utils'

class Newsletter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userEmail: '',
      firstName: '',
      lastName: '',
      errorMsg: null,
    }
  }

  onSubscribeClick = async e => {
    const { userEmail } = this.state
    e.preventDefault()

    try {
      const response = await fetch('/.netlify/functions/subscribe', {
        method: 'post',
        body: JSON.stringify({
          email: userEmail,
        }),
      })

      const body = await response.json()
      console.log('body', body) // eslint-disable-line

      if (response.status === 500) {
        const errorMsg = body.msg
        console.log(errorMsg) // eslint-disable-line
        this.setState({
          errorMsg,
        })
      } else {
        this.setState({
          userEmail: '',
          subscribed: true,
          errorMsg: null,
        })
      }
    } catch (err) {
      console.log('err', err) // eslint-disable-line
    }
  }

  onInputChange = e => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  render() {
    const { userEmail, errorMsg, firstName, lastName, subscribed } = this.state

    const validEmail = validateEmail(userEmail)
    return (
      <Fragment>
        {!subscribed ? (
          <form className="newsletter" onSubmit={this.onSubscribeClick}>
            <input
              aria-label="First Name"
              type="text"
              name="firstName"
              placeholder="First Name"
              className="half"
              onChange={this.onInputChange}
              value={firstName}
            />
            <input
              aria-label="Last Name"
              type="text"
              className="half"
              name="lastName"
              placeholder="Last Name"
              onChange={this.onInputChange}
              value={lastName}
            />
            <input
              aria-label="Newsletter Form"
              className={
                !validEmail && userEmail.length > 1
                  ? 'invalid full email-input'
                  : 'full email-input'
              }
              type="email"
              name="userEmail"
              placeholder="email@yourcompany.com"
              onChange={this.onInputChange}
              value={userEmail}
            />
            <button
              type="submit"
              className={!validEmail ? 'disabled btn full' : 'btn full'}
              disabled={!validEmail}
            >
              Subscribe
            </button>
            {errorMsg ? <p className="text-red">{errorMsg}</p> : ''}
          </form>
        ) : (
          <h4 className="text-blue">Thanks for subscribing!</h4>
        )}
      </Fragment>
    )
  }
}

export default Newsletter
