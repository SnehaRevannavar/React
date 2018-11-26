import React, { Component } from 'react';
import serializeForm from 'form-serialize';
import {Prompt, withRouter} from 'react-router-dom';
import {add_user} from '../actions/Users';

class Create extends Component {

    state = {
        users : '',
        valid:true
    }
    
    
    createUser = (event) => {
        //alert("Hello");
        
        event.preventDefault();
        var updateState = {};
        updateState.valid=true;
        this.setState(updateState);
        console.log(this.props);
        
        var userObj = serializeForm(event.target,{hash:true});
        
        this.props.store.dispatch(add_user(userObj));
        this.props.history.push('/users');
        return false;
        // this.setState({
        //     username : ' ',
        //     location : ' ',
        //     valid : true
        // });

    }

    // componentDidMount(){
    //     this.props.store.subscribe(()=>{
    //         console.log(this.props.store.getState());
    //         this.setState({
    //             users : this.props.store.getState()
    //         });
    //     });
    //     this.setState({
    //         users : this.props.store.getState()
    //     });
    // }

    trackInput = (event) => {
        var updateState ={};
        updateState[event.target.name] = event.target.value;
        updateState.valid=false;
        this.setState(updateState);
    }
    render() {
        return <div>
            <Prompt when={this.state.valid==false}
                message="Leaving this page will lose your data"/>
            <form onSubmit={this.createUser}>
                <input type="text" onChange={this.trackInput} placeholder="Username" name="username"/><br/>
                <input type="text" onChange={this.trackInput} placeholder="Location" name="location"/><br/>
                <button>Create</button>
            </form>
        </div>

    }
}

export default withRouter(Create);