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
        Shuvo A.
      </div>
      <footer>
        <Script
          id="myAliceWebChat"
          dangerouslySetInnerHTML={{
            __html: `
!function(){var e=document.createElement("div");e.id="myAliceWebChat";var t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src="https://livechat.myalice.ai/index.js";var a=document.body.getElementsByTagName("script");(a=a[a.length-1]).parentNode.insertBefore(t,a),a.parentNode.insertBefore(e,a),t.addEventListener("load",function(){MyAliceWebChat.init({selector:"#myAliceWebChat",platformId:"12685",primaryId:"b443eba25e8111edaa4c8607f61f5277",token:"694c3213850d5616c2728e3a8d0de155204398b9e555857f"})})}();
  `,
          }}
        />
      </footer>
    </>
  );
}

export default Masuma;
