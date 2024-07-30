'use client'

import { motion } from "framer-motion"

const MotionImage = ({...rest}) => {
    return (
        <motion.img {...rest}/>
    )
}

export default MotionImage