import React, { Component } from 'react'
import FaPlus from 'react-icons/lib/fa/plus'

import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates'
import moment from 'moment';
import 'react-dates/lib/css/_datepicker.css';

class ActivityInput extends Component {

  constructor(props) {
    super(props)
    this.state = {
      title: '',
      description: '',
      dueDate: null,
      focused: false
    }
  }

  handleTitleChange(event) {
    console.log(event);
    this.setState({
      title: event.target.value
    })
  }

  handleDescriptionChange(event) {
    console.log(event);
    this.setState({
        description: event.target.value
    })
  }

  handleDueDateChange(event) {
    console.log(event);
    this.setState({
        dueDate: event
    })
  }
  
  handleFocusChange(event) {
    console.log(event);
    this.setState({
      focused: event.focused
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    if (this.state.title != '')
    {
      this.props.addActivity(this.state.title, this.state.description, this.state.dueDate)
      //reset input box
      this.setState({
        title: '',
        description: '',
        dueDate: null
      })
    }
    
  }

  render() {
    return (
      <div className="activity__input">
        <div className="submitButton">
          <button onClick={this.handleSubmit.bind(this)}><FaPlus /></button>
        </div> 
        <div className="title">
          <input
            type="text"
            placeholder="title.."
            required={true}
            value={this.state.title}
            onChange={this.handleTitleChange.bind(this)}
          />
        </div>
        <div className="description">
           <input
            type="text"
            placeholder="description.."
            value={this.state.description}
            onChange={this.handleDescriptionChange.bind(this)}
          />    
        </div>
        <div className="date">
          <SingleDatePicker
            placeholder='set reminder'
            date={this.state.dueDate} 
            onDateChange={ this.handleDueDateChange.bind(this)}
            focused={this.state.focused} 
            onFocusChange={this.handleFocusChange.bind(this)} 
          />
        </div> 
      </div>
    )
  }

}

export default ActivityInput
