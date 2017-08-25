import React from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';

import {observable, action , computed} from 'mobx';


class AddTodo extends React.Component {

    @observable newtodo = {
       S_No: 0,
       id: uuid.v4(),
       
    }
    // constructor() {
    //     super();
    //     this.state = {   
    //         newTodo: {}
    //     } 
    //     this.update = this.update.bind(this)
   
    // }


    handelSubmit(e) {
        

        if (this.refs.NewTodo.value === '') {
            alert('Title is required');
        } else {
            this.setState({ 
                newTodo: {
                   S_No: this.state.S_No,
                    id: uuid.v4(),
                    NewTodo: this.refs.NewTodo.value,
                    TodoDate: this.refs.TodoDate.value,
                    status: "Incomplete"
                }
            }, function(){
                this.props.addTodo(this.state.newTodo)
            })
        }
        console.log(this.state.newTodo);
        e.preventDefault();
    }

     update() {
            this.setState({ S_No: this.state.S_No + 1})
    }

    render() {
           
        return (
            <div className="container">
                <h1> Add A TODO </h1>
                <form onSubmit={this.handelSubmit.bind(this)}>
                    <div className="form-group col-md-4">
                       <b> <label> What To do </label> <br /></b>
                     <input className="form-control "  type="text" ref="NewTodo" />
                    </div>
                    
                     <div className="form-group col-md-4 ">
                       <b> <label> When To do </label> <br />
                        <input className="form-control" type="datetime-local" ref="TodoDate" /></b>
                    </div>
                
                     <div  className="form-group col-md-4 ">
                       <b> <label ref="status"> Status : </label>  </b> <br/> 
                       {this.state.status} (it is set by default)
                       <br/>
                       </div>
                       <div className="col-md-12 ">
                    <input className="btn btn-primary"  onClick={this.update} type="submit" value="Submit" />
                     </div> 
            
                </form>
            </div>
        )
    }
}

AddTodo.propTypes= {
  todo: PropTypes.array,
  addTodo: PropTypes.func

}


export default AddTodo;