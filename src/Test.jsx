import {motion} from "framer-motion";

const Test = () =>{



    const variants = {
        visible:{opacity: 1, x:800, transition:{type:"spring", stiffness:100, damping:100}},
        hidden:{opacity: 0},
    }
    return (
        <div className="course">
            <motion.div 
            className="box" 
            variants={variants}
            // initial={{opacity: 0.5, scale: 0.5}}
            // transition={{duration: 2}}
            animate={open ? "visible" : "hidden"}
            ></motion.div>
            <button onClick={()=>setOpen(prev=>!prev)}>Click</button>
        </div>
    )
}

export default Test