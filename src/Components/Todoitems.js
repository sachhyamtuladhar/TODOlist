import React, { Component } from 'react'
import PropTypes from 'prop-types';


export class Todoitem extends Component {
    getStyle = () => {
       return {
           textDecoration: this.props.todo.completed ? 'line-through' : 'none',
           background: this.props.todo.completed? '#75d085':'#eee',
           padding: '5px',
           borderBottom: '1px #ccc dotted',

        }
    }

   

    render() {
        const {id,title} =this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                <input type="checkbox" onChange={this.props.markComp.bind(this,id)}/> {' '} 
                {title}
                { <button onClick={this.props.delTodo.bind(this,id)} style={btnStyle}>delete</button>}</p>
            </div>
        )
    }
}

Todoitem.propTypes = {
    todo: PropTypes.object.isRequired
}
  
const btnStyle = {
    background: '#a90000',
    color: '#fff',
    padding: '2px 2px',
    borderRadius: '8px',
    cursor: 'pointer',
    float: 'right',
    border: '1px solid #000',
    width: '80px'
}


export default Todoitem
