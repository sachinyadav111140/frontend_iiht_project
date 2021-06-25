import React, { Component } from 'react';  
import Multiselect from 'multiselect-react-dropdown';  
import makeAnimated from 'react-select/animated';  
import axios from 'axios';  
  
const animatedComponents = makeAnimated();  
export class dropdown extends Component {  
        constructor(props) {  
                super(props)  
                this.multiselectRef = React.createRef();
                this.state = {  
                        country: [
                {name:"india"},{name:"dubai"},{name:"pakistan"},{name:"england"},{name:"australoa"}
                        
                            ],  
                            result:[]
                          
                }  
this.submit=this.submit.bind(this);
            }  
      
       submit()
       {
           let ans=this.multiselectRef.current.getSelectedItems();
    
   console.log(ans);
           let b=[];
           ans.map(a=>(
            (b.push(a.name))));
        console.log(b);
        }
        render() {  
                return (  
                  <div>
                    <Multiselect options={this.state.country} displayValue="name" ref={this.multiselectRef}/>
              <button onClick={this.submit}>submit</button>
              </div>
                    )  
        }  
}  
export default dropdown