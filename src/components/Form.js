import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)

    /*
            TODO - set initial state for link name and URL 
        */

            this.state = {

              linkName: '',
  
              url: ''
  
          }
  }

  handleChange = (event) => {
    /*
            TODO - Logic for changing state based on form changes
        */
            if(event.target.id === "link")

            this.setState({ linkName: event.target.value}); // update the linkname in state

        else

            this.setState({ url: event.target.value});    
  }

  onFormSubmit = (event) => {
    // to prevent page reload on form submit
    event.preventDefault()

    /*
            TODO - Logic for calling props to handle submission and setting state changes
        */
            let changes2Link = {linkName: this.state.linkName, url: this.state.url};

            this.props.addNew(changes2Link);
    
            this.setState({ linkName: '', url: ''}); 
  }

  render() {
    return (
      <form>
        {/* TODO - Logic for returning a form element with labels and inputs for link name and URL */}
        <label htmlFor="link">Link Name : </label>
        <input type="text" id="link" value={this.state.linkName} onChange={(event) =>this.handleChange(event)}/>   
        <label htmlFor="url">URL : </label>

        <input type="text" id="url" value={this.state.url} onChange={(event) =>this.handleChange(event)}/>

        <button type="submit" onClick={(e)=>this.onFormSubmit(e)}>Submit</button>                    
      

      
      </form>
    )
  }
}

export default Form
