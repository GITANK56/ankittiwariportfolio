
import "./Skills.scss";
import { useRef } from "react";
import { motion, useInView, } from "framer-motion";

const variants = {
    initial: {
        x: -500,
        y: 100,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren:  0.1,
        },
    },
};

const Skills = () => {
    const ref = useRef();

    const isInView = useInView(ref, { margin: "-100px" });

    return (
        <motion.div 
            className="skills" 
            variants={variants} 
            initial="initial" 
            ref={ref} 
            animate={"animate"}
        >
            <motion.div className="textContainer" variants={variants}>
                <p>
                As a AIML student, I strive to use
                <br/> data for real-world impact.
                </p>
                <hr />
            </motion.div>
            <motion.div className="titleContainer" variants={variants}>
                <div className="title">
                    <img src="/people.webp" alt=""/>
                    <h1>
                        <motion.b whileHover={{color:"orange"}}>Unlocking</motion.b> Insights
                    </h1>
                </div>
                <div className="title">
                    <h1>
                        <motion.b whileHover={{color:"orange"}}>Through My</motion.b> Skills.
                    </h1>
                    <button>WHAT SKILLS I HAVE?</button>
                </div>
            </motion.div>
            <motion.div className="listContainer" variants={variants}>
                <motion.div className="box" whileHover={{
                    background: "lightgray", color: "black"}}
                >
                    <h2>Machine Learning</h2>
                    <p>
                    Machine Learning Journey: Continuously exploring
                    and applying advanced algorithms to extract insights,
                    inform decision-making, and drive innovation.
                    </p>
                    <button>Go</button>
                </motion.div>
                <motion.div className="box" whileHover={{
                    background: "lightgray", color: "black"}}
                    >
                    <h2>Python</h2>
                    <p>
                    "Python Proficiency: Harnessing the versatility
                    of Python for seamless data analysis, automation,
                    and innovation."
                    </p>
                    <button>Go</button>
                </motion.div>
                <motion.div className="box" whileHover={{
                    background: "lightgray", color: "black"}}
                >
                    <h2>MySQL</h2>
                    <p>
                    "MySQL Fluency: Utilizing SQL proficiency to
                    manage and analyze data effectively, facilitating
                    insights and informed decision-making processes."
                    </p>
                    <button>Go</button>
                </motion.div>
                <motion.div className="box" whileHover={{
                    background: "lightgray", color: "black"}}
                >
                    <h2>C++</h2>
                    <p>
                    C++ Proficiency: Harnessing the power of C++ for 
                    robust software development, optimizing performance
                    and driving innovation.
                    </p>
                    <button>Go</button>
                </motion.div>
            </motion.div>

        </motion.div>
    )
}

export default Skills