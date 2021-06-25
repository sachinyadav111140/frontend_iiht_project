import React, { Component } from 'react'
import { Button } from 'reactstrap'
export default class compareCompany extends Component {
    render() {
        return (
            <div>
 <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle row" type="button" id="dropdownMenuButton1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Select First Company
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">company 1</a>
    <a class="dropdown-item" href="#">company 2</a>
    <a class="dropdown-item" href="#">company 3</a>
  </div>
</div>
<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle row" type="button" id="dropdownMenuButton2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Select Second Company
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">company 1</a>
    <a class="dropdown-item" href="#">company 2</a>
    <a class="dropdown-item" href="#">company 3</a>
  </div>
</div>
            </div>
        )
    }
}
