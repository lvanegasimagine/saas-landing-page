'use client'

import { motion } from "framer-motion"

const MotionSpan = ({...rest}) => {
    return (
        <motion.span {...rest}/>
    )
}

export default MotionSpan