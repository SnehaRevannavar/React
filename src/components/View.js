import React, {Component} from 'react';

class View extends Component{
    render(){
        return <div>
            {
                JSON.stringify(this.props.match.params.id)
            }
        </div>
    }
}

export default View;