let actions = {
  addActivity: function(title, description, dueDate) {
    return {
      type: 'ADD_ACTIVITY',
      title: title,
      description: description,
      dueDate: dueDate
    }
  },

  completeActivity: function(id) {
    return {
      type: 'COMPLETE_ACTIVITY',
      id: id
    }
  },

  deleteActivity: function(id) {
    return {
      type: 'DELETE_ACTIVITY',
      id: id
    }
  },

  editActivity: function (id) {
    return {
      type: 'EDIT_ACTIVITY',
      id: id,
    }
  },

    updateActivity: function (id, title, description, dueDate) {
    return {
      type: 'UPDATE_ACTIVITY',
      id: id,
      title: title,
      description: description,
      dueDate: dueDate

    }
  },

  showAll : function() {
    return {
      type: 'SHOW_ALL'
    }
  },

  showActive : function() {
    return {
      type: 'SHOW_ACTIVE'
    }
  },

  showCompleted : function() {
    return {
      type: 'SHOW_COMPLETED'
    }
  }
  
}

export default actions
