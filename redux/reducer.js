function getId(state) {
  return state.activities.reduce((maxId, activity) => {
    return Math.max(activity.id, maxId)
  }, -1) + 1
}

let reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ACTIVITY':
      return Object.assign({}, state, {
        activities: [{
          title: action.title,
          description: action.description,
          dueDate: action.dueDate,
          completed: false,
          updated: false,
          display: true,
          id: getId(state)
        }, ...state.activities]
      })
    case 'COMPLETE_ACTIVITY':
      return Object.assign({}, state, {
        activities: state.activities.map((activity) => {
          return activity.id === action.id ?
              Object.assign({}, activity, {updated: false, completed: ! activity.completed}) : activity
        })
      })
    case 'DELETE_ACTIVITY':
      return Object.assign({}, state, {
        activities: state.activities.filter((activity) => {
          return activity.id !== action.id
        })
      })
    case 'EDIT_ACTIVITY':
      return Object.assign({}, state, {
        activities: state.activities.map((activity) => {
          return activity.id === action.id ?
            Object.assign({}, activity, {updated: !activity.updated}) : Object.assign({}, activity, {updated: false})
        })
      })
    case 'UPDATE_ACTIVITY':
      return Object.assign({}, state, {
        activities: state.activities.map((activity) => {
          return activity.id === action.id ?
            Object.assign({}, activity, {title: action.title, description: action.description, dueDate: action.dueDate, updated: false}) : activity
        })
      })
    case 'SHOW_ALL': 
       return Object.assign({}, state, {
        activities: state.activities.map((activity) => {
            return Object.assign({}, activity, {display: true})
        })
      })
    case 'SHOW_ACTIVE': 
      return Object.assign({}, state, {
        activities: state.activities.map((activity) => {
          return activity.completed !== true  ?
            Object.assign({}, activity, {display: true}) : Object.assign({}, activity, {display: false})
        })
      })
    case 'SHOW_COMPLETED': 
      return Object.assign({}, state, {
        activities: state.activities.map((activity) => {
          return activity.completed === true  ?
            Object.assign({}, activity, {display: true}) : Object.assign({}, activity, {display: false})
        })
      })
    default: 
      return state;
  }
}

export default reducer
