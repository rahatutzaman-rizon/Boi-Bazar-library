import { useContext, useEffect, useState } from "react";

// import icons from react icons
import {  FaMap } from "react-icons/fa6";
import { Link } from "react-router-dom";
import sun from "./light.png";
import moon from "./dark.png";
import { AuthContext } from "../../contexts/AuthProvider";
//import Logout from "../Logout";




const Navbar = () => {

        
const {user,logOut}=useContext(AuthContext)
console.log(user)
   
    const [isSticky, setIsSticky] = useState(false);

    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
      );
         // update state on toggle
    const handleToggle = (e) => {
        if (e.target.checked) {
          setTheme("dark");
        } else {
          setTheme("light");
        }
      };
    
      // set theme state in localstorage on mount & also update localstorage on state change
      useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        // add custom data-theme attribute to html tag required to update theme using DaisyUI
        document.querySelector("html").setAttribute("data-theme", localTheme);
      }, [theme]);
  
      

    const handlelogout=()=>{
        logOut().then()
      }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            }
            else {
                setIsSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const navItems = [
        { link: "Home", path: "/" },
        
        { link: "All", path: "/all-book" },
        { link: "Donate", path: "/donate" },
        { link: "Borrow Book", path: "/borrow" },
        { link: "Donation Book", path: "/add-book " },
        { link: "Dashbord", path: "/admin/dashboard" },
        { link: "Login", path: "/login" },
    ];
    return (
        <header className="w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300">
            <nav className={`py-4 lg:px-4 px-4 ${isSticky ? "sticky top-0 left-0 right-0 bg-teal-300" : ""
                }`}>
                <div className="flex justify-between items-center text-base gap-2">
                    <Link to="/" className="text-3xl font-bold text-purple-500  flex items-center "><FaMap className="inline-block"/>বই বাজার</Link>

                    <button className="btn btn-square btn-ghost">
          <label className="swap swap-rotate w-12 h-12">
            <input
              type="checkbox"
              onChange={handleToggle}
              // show toggle image based on localstorage theme
              checked={theme === "light" ? false : true}
            />
            {/* light theme sun image */}
            <img src={sun} alt="light" className="w-8 h-8 swap-on" />
            {/* dark theme moon image */}
            <img src={moon} alt="dark" className="w-8 h-8 swap-off" />
          </label>
        </button>
                    <ul className="md:flex space-x-2 hidden navitems  ">

                        {
                            navItems.map(({ link, path }) => <Link key={link} to={path}  className="link block font-bold  text-sm  cursor-pointer uppercase text-black hover:text-blue-700">
                                {link}
                            </Link>)
                        }
                    </ul>
                    { 
        user &&(
          <button onClick={handlelogout} className="btn btn-success">logout</button>
        )
      }
  
  <p>{user?.email}</p>

 
        
                </div>

                
                    
 


        
                
            </nav>
        </header>
    );
};

export default Navbar;