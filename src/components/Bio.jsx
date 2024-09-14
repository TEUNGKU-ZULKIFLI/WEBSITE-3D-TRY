import React from "react";
import '/src/App.css';
import { motion } from "framer-motion";

function Bio() {
    return (
        <motion.div style={{ height: "50px" }}>
            <motion.h1
                initial={{ opacity: 0, y: -50, x: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                Hello, World!
            </motion.h1>
            <motion.h2
                initial={{ opacity: 0, y: -50, x: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                I'm Teungku 👨‍💻
            </motion.h2>
            <motion.p
                initial={{ opacity: 0, y: 50, x: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                I am a software engineer who loves to code and create things. I am
                passionate about learning new technologies and building cool projects.
                I am a self-taught developer who is always looking to improve my skills
                and learn new things.
            </motion.p>
        </motion.div>
    );
}

export default Bio;
