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
                     platformId: '1955',
                     primaryId: 'a461db34427c11ed8bd85efc283496f8',
                     token: 'b38ce7e0fc9691e3b0343b6808808d469bc6b9ca08ad5073' });
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
