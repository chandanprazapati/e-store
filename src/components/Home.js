import Button from "react-bootstrap/Button";
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="home-set">
        <motion.div
          style={{
            height: "80vh",
          }}
          animate={{
            translateY: "20px",
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <img
            src="a-logo.jpg"
            width="100%"
            height="90%"
            alt=""
            className="home-img"
          />
        </motion.div>
        <div style={{ textAlign: "center" }}>
          <Link to="/Cards">
            <Button variant="outline-success" className="col-lg-3">
              SHOP NOW
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
