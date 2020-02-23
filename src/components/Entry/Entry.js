import React, { Component } from 'react'
import Data from '../Data/DataContainer'
import './Entry.scss'
import { apiService } from '../../service/apiService'

class Entry extends Component {

  componentDidMount = async () => {
    await apiService.getSchedule(this.props.selectedDoctors.id)
      .then(res=>{console.log(77777777,res)})
  }

  render () {
    return (
      <div className='wrapperEntry'>
        <div className='wrapperInfoDoctor'>
          <div className='photoDoctor'>
            <img className='photo' src={this.props.selectedDoctors.photo} alt='img'/>
          </div>
          <div className='nameDoctor'>
            <h3> {this.props.selectedDoctors.name}</h3>
          </div>
          <div className='typeDoctor'>
            <h5> {this.props.selectedDoctors.type}</h5>
          </div>
          <div className='infoDoctor'>
            <p>{this.props.selectedDoctors.info}</p>
          </div>
        </div>

        {/*<Data />*/}
      </div>
    )
  }
}

export default Entry
