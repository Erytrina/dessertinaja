import React, {Component} from 'react';
import Menu from '../component/menu';
import Layout from '../layouts/layout';

function Drink(){
    return(
      <div class="content">
      <div>
                <nav>
                    <Menu />
                </nav>
            </div>
      <ul>
          <li id="Drink">Chocolate Milkshake(20)<p><img src="baru7.jpg" /></p></li>
          <li id="Drink">Regal Coffee(20)<p><img src="baru1.jpg" /></p></li>
          <li id="Drink">Dalgona Coffee(20)<p><img src="baru8.jpg" /></p></li>
      </ul>
  </div>
    )
    
  }
  export default Drink;  