import React, { Component } from 'react'

    
export class AddTodo extends Component {
    state={
        title: ''
    }
    
    change = (e) => this.setState({ title: e.target.value} );

    submit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ''});
    }

    render() {
        return (
            <form style={{display: 'flex'}} onSubmit={this.submit}>
                <input  type='text' name='title' placeholder='Add TODOs' style={{padding: '10px', flex: '10'}} 
                value = {this.state.title} onChange = {this.change}>

                </input>
                <input type='submit' value="Add" className='subbtn'>
                </input>
            </form>
        )
    }
}

export default AddTodo

