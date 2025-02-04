import { useState } from "react";
import Link from "../Link/Link";
import { RiMenu2Fill} from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";

const NavBar = () => {

      const [open, setOpen] = useState(false)



      const routes = [
            { id: 1, path: "/", name: "Home" },
            { id: 2, path: "/about", name: "About" },
            { id: 3, path: "/contact", name: "Contact" },
            { id: 4, path: "/services", name: "Services" },
            { id: 5, path: "/blog", name: "Blog" },
      ];
      return (
            <nav className="text-black bg-yellow-200 p-8 px-6">
                  <div className="md:hidden " onClick={() =>{setOpen(!open)}}>
                        {
                              open === true ? <AiOutlineClose></AiOutlineClose>:
                              <RiMenu2Fill className="text-2xl " ></RiMenu2Fill>
                        }
                        
                  </div>
                  <ul className={`md:flex absolute md:static duration-1000
                        ${open? 'top-20' : '-top-60'}
                        bg-yellow-200 `}>
                        {
                              routes.map(route => <Link key={route.id} route={route}></Link>)
                        }
                  </ul>
            </nav>
      );
};

export default NavBar;