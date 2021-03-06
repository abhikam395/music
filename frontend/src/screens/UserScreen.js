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
        withStyles,
} from '@material-ui/core';

import { Alert, Pagination, PaginationItem } from '@material-ui/lab';

import AddUserLayout from '../layouts/admin/AddUserLayout'

const headers = ['Id', 'Name', 'Email', 'Role'];

const users = [
    {id: 1, name: 'Abhishek', email: 'abhikam@gmail.com', role: 'user'},
    {id: 2, name: 'Sanu', email: 'sanu@gmail.com', role: 'user'},
    {id: 3, name: 'Rohit', email: 'rohit@gmail.com', role: 'user'},
    {id: 4, name: 'Gourav', email: 'gourav@gmail.com', role: 'user'},
    {id: 5, name: 'Kishan', email: 'kishan@gmail.com', role: 'admin'},
    {id: 7, name: 'Abhishek', email: 'abhikam@gmail.com', role: 'user'},
    {id: 8, name: 'Sanu', email: 'sanu@gmail.com', role: 'user'},
    {id: 9, name: 'Rohit', email: 'rohit@gmail.com', role: 'user'},
    {id: 10, name: 'Gourav', email: 'gourav@gmail.com', role: 'user'},
    {id: 11, name: 'Kishan', email: 'kishan@gmail.com', role: 'admin'},
    {id: 12, name: 'Sanu', email: 'sanu@gmail.com', role: 'user'},
    {id: 13, name: 'Rohit', email: 'rohit@gmail.com', role: 'user'},
    {id: 14, name: 'Gourav', email: 'gourav@gmail.com', role: 'user'},
    {id: 15, name: 'Kishan', email: 'kishan@gmail.com', role: 'admin'},
    {id: 16, name: 'Kishan', email: 'kishan@gmail.com', role: 'admin'},
    {id: 17, name: 'Sanu', email: 'sanu@gmail.com', role: 'user'},
    {id: 18, name: 'Rohit', email: 'rohit@gmail.com', role: 'user'},
    // {id: 19, name: 'Gourav', email: 'gourav@gmail.com', role: 'user'},
    // {id: 20, name: 'Kishan', email: 'kishan@gmail.com', role: 'admin'},
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
    DELETE: 'DELETE',
    CREATED: 'CREATED'
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

    unmountAddUser(){
        this.setState({type: null});
        let userScreen = document.getElementsByClassName('user__table')[0];
        userScreen.style.opacity = '1';
        this.setState({type: types.CREATED});
    }

    render(){
        let { type } = this.state;
        let { users } = this.props;
        let context = this;

        function deleteButton(){
            if(type == types.DELETE)
                return <button className="user__button user__button--delete" 
                    onClick={context.onDelete.bind(context)}>Delete</button>
        }

        function clearButton(){
            if(type == types.DELETE)
                return <button className="user__button user__button--clear" 
                    onClick={context.onClear.bind(context)}>Clear</button>
        }

        function addUser(){
            if(type == types.CREATE){
                let userScreen = document.getElementsByClassName('user__table')[0];
                userScreen.style.opacity = '.5';
                return <AddUserLayout unmount={context.unmountAddUser.bind(context)}/>
            }
        }

        function userCreated(){
            if(type == types.CREATED){
                setTimeout(() => {
                    context.setState({type: null});
                }, 1500)
                return<Alert severity="success">User created</Alert>
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
               {userCreated()}
               {addUser()}
               <div className="user__header user__header--size">
                    {deleteButton()}
                    {clearButton()}
                    <button className="user__button user__button--create" 
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
                {this.props.users.length > 14 ? 
                    <div className="user-pagination">
                        <Pagination count={10} variant="outlined"/>
                    </div>: null }
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