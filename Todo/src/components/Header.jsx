import Logo from "../logo.png"

function Header() {
  return (
    <div>
   <nav className="navbar bg-body-tertiary">
     <div className="d-flex justify-content-around align-items-center w-100">
       <img src={Logo} alt="Logo" width="160px" className="rounded" />
       <span className="application-title fs-2 fw-bold">Todo Application</span>  
     </div>
   </nav>

    </div>
  )
}

export default Header
