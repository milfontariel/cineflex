import './style.css';
import { Link } from 'react-router-dom';

export default function Header(){
  return (
    <Link to="/">
      <div className="header">
        <h1 className="logo">CINEFLEX</h1>
      </div>
    </Link>
  )
}