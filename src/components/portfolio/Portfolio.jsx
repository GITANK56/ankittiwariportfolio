import "./portfolio.scss"
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from 'react';

const items = [
    {
        id:1,
        title: "Crop Disease Prediction Model ",
        img: "/po1.jpeg",
        desc: "Developed a cutting-edge crop disease prediction model leveraging machine learning algorithms. This innovative solution accurately detects and predicts crop diseases, enabling proactive measures to be taken by farmers to prevent crop loss and optimize agricultural yield. By harnessing the power of data science",
    },
    {
        id:2,
        title: "Language Translator Chatbot",
        img: "/po2.jpg",
        desc: "Designed and implemented a language translator chatbot utilizing natural language processing (NLP), azure and machine learning algorithms. This chatbot seamlessly translates conversations in real-time between multiple languages, providing users with a convenient and efficient communication tool. Leveraging advanced NLP techniques, the chatbot accurately understands and interprets user input, delivering precise translations for a wide range of languages.",
    },
];

const Single = ({ item }) => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({ 
        target: ref, 
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-300", "-300"]);

    return (
        <section ref = {ref}>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer">
                        <img src={item.img} alt="" />
                    </div>
                <motion.div className="textContainer" style={{y}}>
                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>
                    <button>See Demo</button>
                </motion. div>
                </div>
            </div>
        </section>
    );
};

const Portfolio = ()  => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({ 
        target: ref, 
        offset:["end end" , "start start"],
    });
   
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
         damping: 30,
     });


    return (
    <div className="portfolio" ref={ref}>
        <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
        </div>
        {items.map((item) => (
            <Single item={item} key={item.id} />
        ))}
    </div>
    );
};

export default Portfolio;