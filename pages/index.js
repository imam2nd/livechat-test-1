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
!function(){var e=document.createElement("div");e.id="myAliceWebChat";var t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src="https://myalice-webchat-v2.netlify.app/index.js";var a=document.body.getElementsByTagName("script");(a=a[a.length-1]).parentNode.insertBefore(t,a),a.parentNode.insertBefore(e,a),t.addEventListener("load",function(){MyAliceWebChat.init({selector:"#myAliceWebChat",  platformId: '21438',primaryId: 'c79457165eb411efac3466c4aa8b4f06',token: '0b4df78b4612b16bcf92b8db2a36a677cd9a450d617d7f38',})})}();
  `,
          }}
        />
      </footer>
    </>
  );
}

export default Masuma;
