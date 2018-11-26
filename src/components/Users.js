import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {delete_user,get_users} from '../actions/Users';
import {connect} from  'react-redux';

class Users extends Component {
    state = {
        users : []
    }

    onDeleteUser = (username)=>{
        //alert(username);
        this.props.store.dispatch(delete_user(username));
    }

    componentDidMount(){

        this.props.dispatch(get_users());
        // this.props.store.subscribe(()=>{
        //     console.log(this.props.store.getState());
        //     this.setState({
        //         users : this.props.store.getState()
        //     });
        // });
        // this.setState({
        //     users : this.props.store.getState()
        // });
    }

    render() {
        const users = this.props.data;   
        // const users = [
        //     {username:'User1',location:'Location1'},
        //     {username:'User1',location:'Location2'},
        //     {username:'User1',location:'Location3'},
        //     {username:'User1',location:'Location4'}
        // ];

        const list = <div>
        <ul>
             {
                users && users.map((item,index) => {
                 return <li key={index}>
                 {
                     item.username+', '+item.location
                 }
                 <Link to={'/view/'+index}>View</Link>
                 <button onClick = {()=>this.onDeleteUser(item.username)}>Delete</button>
                 </li>
             })
             }
         </ul>
         </div>
        //  const list1 = <div>
        //      {
        //          this.state.userdata
        //      }
        //     </div>

         return list;

    }
}

function mapStateToProps(data){
    return {
        data : data.Users
    };
}

export default connect(mapStateToProps)(Users);

