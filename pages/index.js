import Script from "next/script";

import styles from "../styles/Home.module.css";

function Masuma() {
  return (
    <>
      <div
        style={{
          fontSize: "20px",
          background: "#bbf7d0",
          fontWeight: 600,
          width: "fit-content",
          padding: "15px",
          borderRadius: "20px",
          margin: "10px",
          cursor: "default",
          color: "white",
        }}
      >
        Masuma
      </div>
      <footer>
        <Script
          id="myAliceWebChat"
          dangerouslySetInnerHTML={{
            __html: `
!function(){var e=document.createElement("div");e.id="myAliceWebChat";var t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src="https://livechat.myalice.ai/index.js";var a=document.body.getElementsByTagName("script");(a=a[a.length-1]).parentNode.insertBefore(t,a),a.parentNode.insertBefore(e,a),t.addEventListener("load",function(){MyAliceWebChat.init({selector:"#myAliceWebChat",platformId:"12575",primaryId:"d930527c584911ed806dbecceb818bde",token:"7d1a62f06009580a98fc84f19a01bb1f1167f57c6e8ae3d6"})})}();
  `,
          }}
        />
      </footer>
    </>
  );
}

export default Masuma;
