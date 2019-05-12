import React, { Component } from 'react'

export default class FiltersList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            filter: 'ALL'
        }
    }

    handleShowAll() {
        this.props.actions.showAll()
        this.setState({
            filter: 'ALL'
        })
    }

    handleShowActive() {
        this.props.actions.showActive()
        this.setState({
            filter: 'ACTIVE'
        })
    }

    handleShowCompleted() {
        this.props.actions.showCompleted()
        this.setState({
            filter: 'COMPLETED'
        })
    }

    render() {
        return (
            <p className="__filter__">
                <a onClick={this.handleShowAll.bind(this)} 
                    className={(this.state.filter=='ALL') ? 'active' : ''}>
                All
                </a>
            
                <a onClick={this.handleShowActive.bind(this)}
                    className={(this.state.filter=='ACTIVE') ? 'active' : ''}>
                Active
                </a>
                
                <a onClick={this.handleShowCompleted.bind(this)}
                    className={(this.state.filter=='COMPLETED') ? 'active' : ''}>
                Completed
                </a>
            </p>
        )
    }
}
