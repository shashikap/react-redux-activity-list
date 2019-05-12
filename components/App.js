import React, { Component } from 'react'
import ActivityInput from './ActivityInput'
import ActivityList from './ActivityList'
import ActivityFilter from './ActivityFilter'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../redux/actions'

class App extends Component {

  render() {
    return (
      <div>
        <h1 className="header">Activity List</h1>
        <br/>
        <ActivityInput addActivity={this.props.actions.addActivity}/>
        <ActivityList actions={this.props.actions} activities={this.props.activities}/>
        <ActivityFilter actions={this.props.actions} filter={this.props}/>
      </div>
    )
  }

}

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
