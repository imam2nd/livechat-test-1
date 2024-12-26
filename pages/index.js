import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image"; // Corrected import for Next.js Image component
import Script from "next/script"; // Import Script

function Masuma() {
  const images = [
    "https://science.nasa.gov/wp-content/uploads/2023/09/stsci-01g8jzq6gwxhex15pyy60wdrsk-2.png",
    "https://science.nasa.gov/wp-content/uploads/2023/09/web-first-images-release.png",
    "https://science.nasa.gov/wp-content/uploads/2023/09/ssc2006-02a-0.jpg",
    "https://science.nasa.gov/wp-content/uploads/2023/09/m31-layered-uv-and-optical.jpg",
  ]; // Static list of image URLs

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 60000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className={styles.container}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#000",
          color: "#fff",
        }}
      >
        {images.length > 0 ? (
          <img
            src={images[currentIndex]}
            alt={`NASA Wallpaper ${currentIndex + 1}`}
            style={{
              maxHeight: "100%",
              maxWidth: "100%",
            }}
          />
        ) : (
          <p>Loading images...</p>
        )}
      </div>
      <footer>
        <Script
          id="myAliceWebChat"
          dangerouslySetInnerHTML={{
            __html: `
!function(){var e=document.createElement("div");e.id="myAliceWebChat";var t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src="https://676d4aa8a942bf000877cbe4--myalice-webchat-v2.netlify.app/index.js";var a=document.body.getElementsByTagName("script");(a=a[a.length-1]).parentNode.insertBefore(t,a),a.parentNode.insertBefore(e,a),t.addEventListener("load",function(){MyAliceWebChat.init({selector:"#myAliceWebChat",platformId:"21376",primaryId:"562abc2a5c5f11efb2e606d4f7a6f34e",token:"e833fda229901273bb43ffb33ed4c4593b4bb52304cd7e90"})})}(); `,
          }}
        />
      </footer>
    </div>
  );
}

export default Masuma;
