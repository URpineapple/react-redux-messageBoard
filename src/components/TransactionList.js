import React, { Component } from 'react'
import TransactionForm from './TransactionForm'
import { connect } from 'react-redux'
import * as actions from '../actions/transactionActions'
import Table from 'react-bootstrap/Table'
import { bindActionCreators } from 'redux'

class TransactionList extends Component {

    handleEdit = (index) => {
        this.props.updateTransactionIndex(index)
    }

    handleDelete = index => {
        this.props.deleteTransaction(index)
    }

    render() {
        return (
            <div>
                <TransactionForm />
                <br />
                <Table>
                    <tbody>
                        {
                            this.props.list.map((item, index) => {
                                return <tr key={index}>
                                    <td>{item.username}</td>
                                    <td>{item.email}</td>
                                    <td>{item.notedate}</td>
                                    <td>{item.textarea}</td>
                                    <td><button className="btn btn-secondary btn-block" onClick={() => this.handleEdit(index)}>Edit</button></td>
                                    <td><button className="btn btn-secondary btn-block" onClick={() => this.handleDelete(index)}>Delete</button></td>
                                </tr>
                            })
                        }
                    </tbody>
                </Table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.list,
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        updateTransactionIndex: actions.updateIndex,
        deleteTransaction: actions.deleteData
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionList);