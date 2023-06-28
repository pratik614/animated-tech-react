import React from "react";
import vg from "../assets/2.webp";
import "../styles/Home.scss"

import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>TechFixIt</h1>
          <p>Your Go-To Destination for Tech Fixes!</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />

        <div>
          <p>
          TechFixit is your ultimate destination for all your tech-related needs.
                        We specialize in providing efficient and reliable solutions to tackle a wide range of tech challenges.
                        With our expert team of technicians and cutting-edge tools, we strive to simplify your tech experience and empower you to make the most of your devices.
                        Whether it's troubleshooting, software installations, or hardware repairs, TechFixit is here to ensure smooth functioning and enhance your technological journey. Trust us to fix it, because at TechFixit, we believe that every tech problem has a solution!
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
          At TechFixit, we are a team of passionate tech enthusiasts dedicated to providing top-notch solutions to your technology-related problems. With our extensive knowledge and expertise, we aim to simplify and enhance your digital experience.

                        Our mission is to be your go-to destination for all things tech. Whether you're facing software glitches, hardware malfunctions, or need assistance with setting up your devices, we've got you covered. We strive to deliver efficient and effective solutions tailored to your specific needs, ensuring that you can make the most out of your technology.

                        With a customer-centric approach, we prioritize your satisfaction and strive to exceed your expectations. Our team is committed to providing exceptional customer service, prompt responses, and reliable assistance. Trust us to address your tech issues and provide you with peace of mind, knowing that your technology is in capable hands.

                        Choose TechFixit for reliable and comprehensive tech solutions. Let us handle the complexities while you enjoy a seamless and hassle-free tech experience.
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>

          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;