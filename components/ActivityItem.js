import React, { Component } from 'react'
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css';
import FaEdit from 'react-icons/lib/fa/edit'
import FaCheck from 'react-icons/lib/fa/check'
import FaClose from 'react-icons/lib/fa/close'

class ActivityItem extends Component {

  constructor(props) {
    super(props)
    this.state = {
        title: this.props.activity.title,
        description: this.props.activity.description,
        dueDate: this.props.activity.dueDate,
        focused: false,
        checked: this.props.activity.completed,
    }
  }

  handleComplete() {
    this.props.actions.completeActivity(this.props.activity.id)
    this.setState({
      checked: !this.state.checked
    })
  }

  handleDelete() {
    this.props.actions.deleteActivity(this.props.activity.id)
  }

  handleEdit() {
    this.props.actions.editActivity(this.props.activity.id)
  }

  handleUpdate() {
    if (this.state.title != '') {
      this.props.actions.updateActivity(this.props.activity.id, this.state.title, this.state.description, this.state.dueDate)
    }
  }

  handleTitleChange(event) {
    this.setState({
      title: event.target.value
    })
  }

  handleDescriptionChange(event) {
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

  render() {
    return (
      <li className="activity__item">
        <input type="checkbox"
               defaultChecked={this.state.checked}
               required={true}
               hidden={(this.props.activity.updated === true)}
               onClick={this.handleComplete.bind(this)}/>
        <input type="text"
               onChange={this.handleTitleChange.bind(this)}
               required={true}
               placeholder='title'
               disabled={(this.props.activity.updated !== true) ? 'disables' : ''}
               className={(this.props.activity.updated === true) ? "" : (this.props.activity.completed === true) ? "__completed__ __readonly__" : "__readonly__"}
               value={this.state.title}/>
       <input type="text"
              hidden={(this.props.activity.updated !== true)}
              placeholder='description'
              className={(this.props.activity.updated === true) ? "" : (this.props.activity.completed === true) ? "__completed__ __readonly__" : "__readonly__"}
              onChange={this.handleDescriptionChange.bind(this)}
              value={this.state.description}/>
        <SingleDatePicker
            date={this.state.dueDate}
            onDateChange={ this.handleDueDateChange.bind(this)}
            disabled={(this.props.activity.updated !== true)}
            placeholder='date reminder'
            focused={this.state.focused} 
            onFocusChange={this.handleFocusChange.bind(this)} 
          />
        <button onClick={(this.props.activity.updated) ? this.handleUpdate.bind(this): this.handleEdit.bind(this)}>
            {(this.props.activity.updated) ? <FaCheck/> : <FaEdit/>}
        </button>
        <button onClick={this.handleDelete.bind(this)}><FaClose/></button>
      </li>
    )
  }

}

export default ActivityItem
