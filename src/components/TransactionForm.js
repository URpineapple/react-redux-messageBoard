import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions/transactionActions'
import { bindActionCreators } from 'redux'

class TransactionForm extends Component {
    state = {
        ...this.returnStateObject()
    }

    returnStateObject() {
        if (this.props.currentIndex == -1)
            return {
                username: '',
                email: '',
                notedate: '',
                textarea: ''
            }
        else
            return this.props.list[this.props.currentIndex]
    }

    componentDidUpdate(prevProps) {
        if (prevProps.currentIndex != this.props.currentIndex || prevProps.list.length != this.props.list.length) {
            this.setState({ ...this.returnStateObject() })
        }

    }

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        if (this.props.currentIndex == -1)
            this.props.insertTransaction(this.state)
        else
            this.props.updateTransaction(this.state)
    }

    render() {
        return (
            <div>
                <h1>Message Board</h1>
                <br />
                <form onSubmit={this.handleSubmit} autoComplete="off" id="initialForm">
                    <input className="form-control" name="username" placeholder="Your name"
                        value={this.state.username}
                        onChange={this.handleInputChange} required /><br />
                    <input className="form-control" name="email" placeholder="Email address"
                        value={this.state.email}
                        onChange={this.handleInputChange} /><br />
                    <input type="date" className="form-control" name="notedate"
                        value={this.state.notedate}
                        onChange={this.handleInputChange} /><br />
                    <textarea className="form-control" row="3" name="textarea"
                        placeholder="Write down something you like"
                        value={this.state.textarea}
                        onChange={this.handleInputChange} required /><br />
                    <button className="btn btn-primary" type="submit">Submit</button>
                </form>

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        list: state.list,
        currentIndex: state.currentIndex
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        insertTransaction: actions.insertData,
        updateTransaction: actions.updateData
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionForm);