!function(){function e(e,t={}){return new Promise((r,l)=>{let n=document.createElement("script");n.src=e,Object.keys(t).forEach(e=>{n.setAttribute(e,t[e])}),n.onload=r,n.onerror=l,document.head.appendChild(n)})}function t(e){let t=document.createElement("div");t.textContent="BLOCKED",t.style.position="fixed",t.style.left=`${e.clientX}px`,t.style.top=`${e.clientY}px`,t.style.backgroundColor="rgba(0, 0, 0, 0.8)",t.style.color="white",t.style.padding="5px 10px",t.style.borderRadius="4px",t.style.zIndex="999999",t.style.fontFamily="Arial, sans-serif",t.style.fontSize="14px",t.style.pointerEvents="none",t.style.animation="fadeOut 1.5s forwards";let r=document.createElement("style");r.textContent=`
            @keyframes fadeOut {
                0% { opacity: 1; transform: translateY(0); }
                100% { opacity: 0; transform: translateY(-20px); }
            }
        `,document.head.appendChild(r),document.body.appendChild(t),setTimeout(()=>{t.remove(),r.remove()},1500)}document.addEventListener("contextmenu",e=>{e.preventDefault(),t(e)}),document.addEventListener("selectstart",e=>{e.preventDefault(),t(e)});let r=document.createElement("style");r.textContent=`
        * {
            -webkit-user-select: none !important;
            -moz-user-select: none !important;
            -ms-user-select: none !important;
            user-select: none !important;
        }
    `,document.head.appendChild(r);let l=[{url:"https://cdn.jsdelivr.net/npm/disable-devtool@0.2.5",attributes:{"disable-devtool-auto":"",md5:"b841d410dd9a2e513225935dfc4a2de8"}},{url:"https://autoplay.tellbot.com.br/tracker.js",attributes:{}}];!async function(){for(let t of l)try{await e(t.url,t.attributes),console.log(`✅ Disabled: ${t.url}`)}catch(r){console.error(`❌ Fail Disable: ${t.url}`,r)}}(),setTimeout(()=>{document.querySelectorAll('script[src*="disable-devtool"], script[src*="tellbot"]').forEach(e=>e.remove())},3e3)}();
