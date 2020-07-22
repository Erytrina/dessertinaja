import Link from 'next/link';

function Menu() {
return(
    <ul>  
        <li><Link href="/index"><a> Beranda </a></Link></li>
        <li><Link href="/menu"><a> Menu </a></Link></li>
        <li><Link href="/payment"><a> Pembayaran </a></Link></li>               
    </ul>
);
}

export default Menu;