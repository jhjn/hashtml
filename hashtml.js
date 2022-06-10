const k = window.location.hash.slice(1).split("").map((c) => c.charCodeAt(0));
document.getElementById("decrypted").innerHTML=document.getElementById("encrypted").innerHTML.match(/.{1,2}/g).map((h)=>parseInt(h,16)).map((v)=>k.reduce((a,b)=>a^b,v)).map((c)=>String.fromCharCode(c)).join("");

