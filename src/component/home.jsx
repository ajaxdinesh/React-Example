import React, {Component} from 'react';

export class Home extends Component {
    constructor(props){
        super();
        this.age = props.age;
        this.state = {
            age:props.age
        }
    }
    onMakeOlder(){
        this.setState({
            age:this.state.age + 3
        })
    }
    render(){
       
        return(
            <div>
                <p>Age: {this.state.age}</p>
                <button onClick={this.onMakeOlder.bind(this)}>Make Old Age</button>
            </div>
        );
    }
}