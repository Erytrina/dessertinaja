import React, {Component} from 'react';
import Menu from '../component/menu';
import Layout from '../layouts/layout';

function Header(){
  return (
    <header>
    <div>
        <nav>
            <Menu />
        </nav>
    </div>
    <h1>Payment</h1>
    <div class="box">
        <label>Makanan : </label><br/><input type="text"id="_makanan" />
        <label>Minuman :</label><br/><input type="text"id="_minuman" />
        <label>Alamat :</label><br/><input type="text" id="_alamat" />
        <button class="t1" onclick="tambah()">Tambah</button>
        <button class="t1" onclick="hasil()">Hasil</button><br />
    </div>
    <center>
        <label id="view"></label>
    </center>
</header>
   )
}

class Semua extends Component{

        render(){
            return(
                <div>
                    <Header />
                </div>
            )
        }
    }
export default Semua;

