import React, {Component} from 'react';
import Menu from '../component/menu';
import Layout from '../layouts/layout';

function Dessert(){
    return(
      <div class="content">
      <div>
                <nav>
                    <Menu />
                </nav>
            </div>
      <ul>
          <li id="Dessert">Chocolate Lava (25)<p><img src ="baru.jpg"/></p></li>
          <li id="Dessert">Boba Brown Sugar(25)<p><img src="baru6.jpg"/></p></li>
          <li id="Dessert">Cheese Milkbath(35) <p><img src="baru2.jpg"/></p></li>
          <li id="Dessert">Soes with Boba(20)<p><img src="baru4.jpg" /></p></li>
          <li id="Dessert">Oreo Cheesecake(25)<p><img src="baru3.jpg" /></p></li>
          <li id="Dessert">Lotus Biscuit lava(35)<p><img src="baru5.jpg" /></p></li>
      </ul>
  </div>
    )
  }

export default Dessert;  