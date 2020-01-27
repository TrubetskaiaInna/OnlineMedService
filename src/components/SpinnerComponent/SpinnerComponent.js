import Loader from 'react-loader-spinner'
import React, { Component } from 'react'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './SpinnerComponent.scss'

class SpinnerComponent extends Component {
  render () {
    return (
      <div className='wrapperSpinner'>
        <Loader
          type='Oval'
          color='silver'
          height={80}
          width={80}
        />
      </div>
    )
  }
}
export default SpinnerComponent
