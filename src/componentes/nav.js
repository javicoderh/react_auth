import './componentes.css';
import { Link, Route } from "wouter";
import Greeting from './page2';

function NavBar() {
return(
  <div>
<nav>  
<Link  href='/'>
  <a>inicio - </a>
</Link>
<Link  href='/greeting'>
  <a>pag2 - </a>
</Link>
<Link  href='/step'>
    <a>pag3 -</a>  
    </Link>
<Link  href='/almost'>
    <a> pag4 - </a>
</Link>
<Link  href='/done'>
    <a>pag5 - </a>
</Link>
  </nav>
<Greeting/>
</div>)
};


export default NavBar
