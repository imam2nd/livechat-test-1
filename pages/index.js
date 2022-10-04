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
    (function () {
  var div = document.createElement('div');
  div.id = 'myAliceWebChat';
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.async = true;
  script.src = 'https://livechat.myalice.ai/index.js';
  var lel = document.body.getElementsByTagName('script');
  var el = lel[lel.length - 1];
  el.parentNode.insertBefore(script, el);
  el.parentNode.insertBefore(div, el);
  script.addEventListener('load', function () {
    MyAliceWebChat.init({ selector: '#myAliceWebChat',
                     platformId: '1954',
                     primaryId: '79b88f08420f11ed89192a090cf1c0fc',
                     token: 'dc84ec56e26841510b04e6dd6f99ee9f5abf7412bd11144b' });
  });
})();
  `,
          }}
        />
      </footer>
    </>
  );
}

export default Masuma;
