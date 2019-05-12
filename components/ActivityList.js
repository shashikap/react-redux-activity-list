import React, { Component } from 'react'
import ActivityItem from './ActivityItem'

class ActivityList extends Component {

  render() {
    return (
      <ul className="activity__list">

        {
          this.props.activities.map((activity) => {
            if (activity.display === true) {
              return <ActivityItem key={activity.id} activity={activity} actions={this.props.actions}/>
            }        
          })
        }

      </ul>
    )
  }

}

export default ActivityList
