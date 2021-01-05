import React, { Component, Fragment } from 'react';
import './user.scss';

import { get, set, remove } from './../../store/actions/userAction';
import { connect } from 'react-redux';

import { Table, 
        TableBody, 
        TableCell, 
        TableContainer, 
        TableHead, 
        TableRow, 
        Paper, 
        withStyles 
} from '@material-ui/core';

import AddUserLayout from '../layouts/admin/AddUserLayout'

const headers = ['Id', 'Name', 'Email', 'Role'];

const users = [
    {id: 1, name: 'Abhishek', email: 'abhikam@gmail.com', role: 'user'},
    {id: 2, name: 'Sanu', email: 'sanu@gmail.com', role: 'user'},
    {id: 3, name: 'Rohit', email: 'rohit@gmail.com', role: 'user'},
    {id: 4, name: 'Gourav', email: 'gourav@gmail.com', role: 'user'},
    {id: 5, name: 'Kishan', email: 'kishan@gmail.com', role: 'admin'},
]

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

const StyledTableRow = withStyles((theme) => ({
root: {
    '&:hover': {
        backgroundColor: '#1e88e5',
    },
},
}))(TableRow);  

const types = {
    CREATE: 'CREATE',
    CLEAR: 'CLEAR',
    DELETE: 'DELETE'
}

class UserScreen extends Component{

    constructor(){
        super();
        this.state = {
            users: [],
            selectedUser: null,
            type: null,
            selectedElement: null
        }
    }

    componentDidMount(){
        this.props.setUsers(users)
    }

    rowSelected(user, e){
        this.setState({type: types.DELETE});
        this.setState({selectedUser: user})

        let { selectedElement } = this.state;
        if(selectedElement){
            selectedElement.style.backgroundColor = '#fff';
        }
        let element = e.currentTarget;
        element.style.backgroundColor= '#1e88e5';
        this.setState({selectedElement: element})
    }

    onDelete(){
        let selectedUser = this.state.selectedUser;
        this.props.deleteUser(selectedUser.id);
        this.setState({type: null});
        this.setState({ selectedUser: null })
    }

    onClear(){
        this.setState({ type: null })
        let { selectedElement } = this.state;
        selectedElement.style.backgroundColor = '#fff';
        this.setState({selectedElement: null})
    }

    onCreate(){
        this.setState({ type: types.CREATE })
    }

    render(){
        let { type } = this.state;
        let { users } = this.props;
        let context = this;

        function deleteButton(){
            if(type == types.DELETE)
                return <button className="user__button--delete" 
                    onClick={context.onDelete.bind(context)}>Delete</button>
        }

        function clearButton(){
            if(type == types.DELETE)
                return <button className="user__button--clear" 
                    onClick={context.onClear.bind(context)}>Clear</button>
        }

        function addUser(){
            if(type == types.CREATE){
                let userScreen = document.getElementsByClassName('user__table')[0];
                userScreen.style.opacity = '.5';
                return <AddUserLayout/>
            }
        }

        function usersRow(){
            if(users.length){
                return (
                    context.props.users.map((user) => (
                        <StyledTableRow key={user.id} className="table__row" 
                               onClick={context.rowSelected.bind(context, user)}>
                           <StyledTableCell>{user.id}</StyledTableCell>
                           <StyledTableCell>{user.name}</StyledTableCell>
                           <StyledTableCell>{user.email}</StyledTableCell>
                           <StyledTableCell>{user.role}</StyledTableCell>
                       </StyledTableRow>
                    ))
                )
            }
        }

        return(
           <div className="user user--size">
               {addUser()}
               <div className="user__header user__header--size">
                    {deleteButton()}
                    {clearButton()}
                    <button className="user__button--create" 
                        onClick={this.onCreate.bind(this)}>Create</button>
                </div>
                <TableContainer component={Paper}>
                    <Table className="user__table user__table--size"  aria-label="customized table">
                        <TableHead>
                           <TableRow className="user-table__row">
                            {headers.map((head, index) => <StyledTableCell 
                                className="user-table__cell" key={index}>{head}</StyledTableCell>)}
                           </TableRow>
                        </TableHead>
                        <TableBody>
                            {usersRow()}
                        </TableBody>
                    </Table>
                </TableContainer>
           </div>
        )
    }
}

const mapStateToProps = function(store){
    
    return {
        users: store.userState.users
    }
}

const mapDispatchToProps = function(dispatch){
    return {
        setUsers: function(users){
            dispatch(set(users))
        },
        deleteUser: function(id){
            dispatch(remove(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserScreen);