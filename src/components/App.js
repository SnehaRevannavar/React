import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Users from './Users';
import Create from './Create';
import Navigation from './Navigation';
import {Route, Switch} from 'react-router-dom';
import Home from './Home';
import View from './View';
import PageNotFound from './PageNotFound';
import PrivateRoute from './PrivateRoute';

class App extends Component {

   state = {
     userdata : []
   }

  onCreateUser = (userobj) => {
    console.log("ertyui");
    this.store.dispatch();
    // this.setState((state) => {
    //   return{
    //     userdata:[...state.userdata,userobj]
    //   }
    // });
    //console.log(state);
  }
  onDeleteUser = (username)=>{
    //alert('In Parent : '+username);

    // this.setState((state)=>{
    //   return {
    //     userdata:
    //       state.userdata.filter((item,index)=>{
    //         return item.username != username;
    //       })
    //   }
    // })

    this.store.dispatch();
  }
  render() {
      // const elem=React.createElement('div',null,'Sample Content');
      // const elem1=React.createElement('div',null,'Hi');
      // const cntr=React.createElement('div',{'id':'cntr'},elem,elem1);
      // return cntr;

      // const list=React.createElement('ul',null,
      //   React.createElement('li',null,'Item1'),
      //   React.createElement('li',null,'Item2'),
      //   React.createElement('li',null,'Item3'),
      //   React.createElement('li',null,'Item4')
      // );
      // return list;

      // const list=<ul>
      //   <li>Item1</li>
      //   <li>Item2</li>
      //   <li>Item3</li>
      //   <li>Item4</li>
      //   <li>Item5</li>
      //   </ul>
      //   return list;

      // return <div>
      //   <Users users = {[
      //     {username:'User1',location:'Location1'},
      //     {username:'User2',location:'Location2'}
      //   ]}/>
      //    <Users users = {[
      //     {username:'User3',location:'Location3'},
      //     {username:'User4',location:'Location4'}
      //   ]}/>
      // </div>;

      return <div>
        {/* <Users users={this.state.userdata} onDeleteUser={this.onDeleteUser}/>
        <Create onCreateUser={this.onCreateUser}/> */}
          <Navigation/>
          <Switch>
            <Route path="/" component={Home} exact/>
            <PrivateRoute path="/users"  render={()=>{
              return <Users /*store={this.props.store}*/ />
            }} />
            {/* <Route path="/create" render={({history})=>{
              return <Create onCreateUser={this.onCreateUser} history={history}/>
            }}/> */}
            <PrivateRoute path="/create" render={()=>{
              return <Create store={this.props.store} /*onCreateUser={this.onCreateUser}*//>
            }}/>
            <Route path="/view/:id" render={({history,match})=>{
              return <View history={history} match={match}/>
            }}
            />
            <Route component={PageNotFound}/>
          </Switch>
        </div>
  }
}

export default App;
