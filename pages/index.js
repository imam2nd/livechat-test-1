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
!function(){var e=document.createElement("div");e.id="myAliceWebChat";var t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src="https://myalice-webchat-v2.netlify.app/index.js";var a=document.body.getElementsByTagName("script");(a=a[a.length-1]).parentNode.insertBefore(t,a),a.parentNode.insertBefore(e,a),t.addEventListener("load",function(){MyAliceWebChat.init({selector:"#myAliceWebChat",platformId:"22477",primaryId:"8b0deafc9d9111ef89a12efc3f46ddf7",token:"59968540dcb038318bb35efb96f4699c4bf2d4bba965a44e"})})}(); `,
          }}
        />
      </footer>
    </div>
  );
}

export default Masuma;
