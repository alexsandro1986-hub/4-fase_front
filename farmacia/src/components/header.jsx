import './Header.css'
import { FiAlignJustify } from "react-icons/fi";
import { IoHomeSharp } from "react-icons/io5";
import { MdProductionQuantityLimits } from "react-icons/md";
import { IoIosContact } from "react-icons/io";
function Header() {


  return (
    <div className="header-container">

      <div className='logo-titulo'>
        <img src="./images/logo.png" alt="" />
        <h1 className='titulo'> Farmacia Popular</h1>
      </div>

      <div >
        <div className="btn-expandir">
          <FiAlignJustify />
        </div>

        <ul>
          <li className='item-menu'>
            <a href="#">
              <span className='icon'><IoHomeSharp /></span>
              <span className='txt-link'> Home </span>
            </a>

          </li>
          <li className='item-menu'>
            <a href="#">
              <span className='icon'><MdProductionQuantityLimits /></span>
              <span className='txt-link'> Produtos </span>
            </a>

          </li>
          <li className='item-menu'>
            <a href="#">
              <span className='icon'><IoIosContact /></span>
              <span className='txt-link'> Conta </span>
            </a>

          </li>

        </ul>
      </div>
    </div>
  )
}

export default Header