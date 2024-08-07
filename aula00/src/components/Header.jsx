import './Header.css'
import { Pizza } from './icons/Pizza'

function Header() {
 const iconBig={
  width:'145px',
  height: '145px'
}


  return (
    <div className="header-container">
      <h1>Página aahhka</h1>
      <Pizza  style={iconBig}/>
    </div>
  )
}

export default Header
