import React, {Component} from 'react';
import Menu from '../component/menu';
import Link from 'next/link';
import Layout from '../layouts/layout';

function Header(){
  return (
    <header>
             <div>
                <nav>
                    <Menu />
                </nav>
            </div>
                        <div class="container">
                            <div id="content">
                                <h1>DESSERT IN AJA BANYUWANGI</h1>
                                <p />PILIH MENU YANG KAMU MAU : 
                                <p>
            <ul>
            <li><Link href="/menu/dessert"><a>DESSSERT</a></Link></li> 
            <li><Link href="/menu/drink"><a>DRINK</a></Link></li>
            </ul>
                 </p>              
                            </div>
                        </div>
                    </header>
  )
   
}

class Proyek extends Component{
  render(){
    return (
      <div>
      <Header />
      <Layout />
      </div>
    )
  }
}

export default Proyek;