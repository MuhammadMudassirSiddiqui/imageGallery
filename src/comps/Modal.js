import React from "react";
import { motion } from "framer-motion";

function Modal({ selectedImage, setSelectedImage }) {
  const imageHandler = (e) => {
    if (e.target.className == "backdrop") {
      setSelectedImage(null);
    }
  };

  return (
    <motion.div
      className="backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={imageHandler}
    >
      <motion.img
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        src={selectedImage}
        alt=""
      />
    </motion.div>
  );
}

export default Modal;
