import "./Navbar.scss"
import {motion} from "framer-motion"
import Sidebar from "../Sidebar/Sidebar"
const Navbar = () => {
    return(
        <div className="Navbar">
            <Sidebar />
            <div className="wrapper"> 
                <motion.span
                initial={{opacity: 0, scale: 0.5}}
                animate={{opacity: 1, scale: 1}}
                transition={{duration: 0.5 }}
                >Ankit Tiwari</motion.span>
                <div className="social">
                    <a href = "https://www.linkedin.com/in/ankit01tiwari"><img src="/linkedin (3).png" alt="" /></a>
                    <a href = "https://github.com/GITANK56"><img src="/github (2).png" alt="" /></a>
                    <a href = "https://www.instagram.com/_.ankit022/"><img src="/instagram.png" alt="" /></a>
                </div>
            </div>
        </div>
    )
}

export default Navbar