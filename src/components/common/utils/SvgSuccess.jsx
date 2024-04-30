import React from 'react'
import { motion } from "framer-motion";

const SvgSuccess = () => {
  return (
    <motion.div
                    initial={{ rotate: 0,x:20 }}
                    whileInView={{ rotate: 360 ,x:0}}
                    viewport={{ once: false }}
                    transition={{ ease: "easeOut", duration: 1 }}
                  >
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </motion.div>
  )
}

export default SvgSuccess
