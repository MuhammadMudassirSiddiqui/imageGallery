import React from "react";
import { motion } from "framer-motion";

import useFireStore from "../hooks/useFireStore";

function ImageGrid({ setSelectedImage }) {
  const { docs } = useFireStore("images");
  console.log(docs);
  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <motion.div
            key={doc.id}
            className="img-wrap"
            layout
            whileHover={{ opacity: 1 }}
            onClick={() => setSelectedImage(doc.url)}
          >
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              src={doc.url}
              alt=""
            />
          </motion.div>
        ))}
    </div>
  );
}

export default ImageGrid;
