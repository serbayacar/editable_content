import React from 'react'
import classes from '../assets/EditableTagInput.css';

class EditableTagInput extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            tags: [{ text:'Name' ,value:'{Name}' },
            { text:'Email' ,value:'{Email}' },
            { text:'Address' ,value:'{Address}' }],
        }

        this.handleDropdownSelected = this.handleDropdownSelected.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = () => {
        console.log('Click happened');
    }

    handleDropdownSelected = (e) => {
        console.log('Click happened');
        debugger;

        const val = e.target.value;
        const exactValue = document.getElementById('displayValue').innerHTML;
        const newValue = exactValue + val;

        var element = document.createElement("button");
        //Assign different attributes to the element. 
        element.className = '.tag-item'; // Really? You want the default value to be the type string?
        element.innerText = val;
        element.contentEditable= false;

        document.getElementById('displayValue').appendChild(element); 
        document.getElementById('idValue').value = newValue;

        console.log( document.getElementById('idValue').value)
    }

    render() {
      return (

        <div className='selectable-component' style={classes}>
            <select className='selectable-select'  style={classes} onChange={this.handleDropdownSelected} >
                {this.state.tags.map((item, key) => {
                    return <option key={key} value={item.value}>{item.text}</option>;
                })}
            </select>
            <div contentEditable='true' className='selectable-input' name="displayValue" id="displayValue" style={classes} ></div>
            <input name="idValue" id="idValue" type="hidden" />
        </div>
      );
    }
  }

  export default EditableTagInput;