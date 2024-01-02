import React, { Component } from 'react'
import '../App.css'

class Todo extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         todos : [],
         currentValue : ""
      }
    }
    handleChange= (e) => {
        console.log(this.state.currentValue)
        this.setState({
            currentValue: e.target.value
        })
    }
    handleSubmite = (e) => {
        e.preventDefault()
        console.log('Submit')

        let newToDo = this.state.todos
        newToDo.push(this.state.currentValue)

        this.setState({
            todos : newToDo,
            currentValue : ""
        })
    }
    handleDelete = (e) =>{
        let newToDo = [...this.state.todos]
        newToDo.splice(e,1)
        this.setState({
            todos : newToDo
        })

    }
    handleUpdate = (e) =>{
        let modifiedString =prompt('Enter new data')
        if(modifiedString !==null){
            let newdata = this.state.todos
            newdata[e] = modifiedString .trim();
            this.setState(()=>{
                return { todos : newdata}

            })
            

        }
    }
    
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmite}>
            <input type="text" value={this.state.currentValue} onChange={this.handleChange} />
            <button type='submit'>Add TODO</button>
        </form>
        <div>
            {
                this.state.todos.map((r,ind) => {
                    return( <div key={ind}>

                        <p>{r}</p>
                        <button  onClick={() => this.handleDelete(ind)} >Delete</button>
                        <button onClick={() => this.handleUpdate(ind)}> Update</button>
                    </div>
                    )
                })
            }
        </div>
      </div>
    )
  }
}
export default Todo