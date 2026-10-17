(function(){
const P=[
{id:1,n:"Bunny Belle",s:"Sweet",p:32.99,c:"#ffe0ef",h:"#f6a6c9",b:"#ff8fc1",a:"#fff",t:"ears",tag:"Bestseller",d:"A sleepy-eyed bunny girl with floppy pink ears and a heart-patch dress. She loves naps, carrots and sitting at the very front of your shelf."},
{id:2,n:"Star Fairy",s:"Magic",p:34.99,c:"#e8dcff",h:"#8b6df0",b:"#b79cff",a:"#ffd84a",t:"twin",tag:"New",d:"Twin pigtails, a lilac gown and a pocket full of wishes. Star Fairy sprinkles a little extra sparkle on every collection."},
{id:3,n:"Sakura Mage",s:"Magic",p:36.99,c:"#ffd9e6",h:"#ff7fa8",b:"#ffffff",a:"#e83a86",t:"bun",d:"A cherry-blossom apprentice with a tidy hair bun and a very serious spellbook. Her spells mostly turn into confetti."},
{id:4,n:"Kitty Kiko",s:"Sweet",p:29.99,c:"#fff0c9",h:"#4a3a55",b:"#ffcf5c",a:"#ff6f91",t:"cat",d:"Mischievous, curious and always landing on her feet. Kitty Kiko comes in a sunny yellow outfit with a tiny pink bow."},
{id:5,n:"Moon Witch Mia",s:"Magic",p:39.99,c:"#d9d8ff",h:"#3b3a8c",b:"#6a63d6",a:"#ffe27a",t:"long",tag:"Limited",d:"Midnight-blue hair, a starry cloak and a limited-edition glow. Mia only comes out when the moon is full."},
{id:6,n:"Berry Princess",s:"Sweet",p:37.99,c:"#ffd6d6",h:"#e0524f",b:"#ff6f91",a:"#ffe27a",t:"twin",d:"Royal, rosy and berry-sweet. Her crown-yellow accents make her the star of any dessert-themed display."},
{id:7,n:"Sunny Surfer",s:"Adventure",p:31.99,c:"#d3f3ee",h:"#f2b84b",b:"#2fc4b2",a:"#fff",t:"long",d:"Golden waves, a teal swimsuit and zero fear of big water. Sunny Surfer brings summer to your desk all year round."},
{id:8,n:"Cloud Dancer",s:"Adventure",p:33.99,c:"#d5e8ff",h:"#6aa7ff",b:"#9fc9ff",a:"#fff",t:"bun",d:"She twirls on tiptoes through the sky with a sky-blue bun and a fluffy white scarf. Poseable arms for every dance move."}];
const SERIES={Sweet:{ic:"🍓",c:"#ffd3e6",t:"Soft pastels, snuggly ears and dessert-sweet outfits."},Magic:{ic:"✨",c:"#e6dcff",t:"Spellbooks, stars and a little bit of moonlight."},Adventure:{ic:"🌈",c:"#c8f3e8",t:"Beaches, clouds and big-hearted explorers."}};
const S="#ffe0cc";
function fig(p){
 const H=p.h;let back="";
 if(p.t==="long")back=`<rect x="38" y="44" width="124" height="128" rx="56" fill="${H}"/>`;
 if(p.t==="twin")back=`<circle cx="30" cy="112" r="26" fill="${H}"/><circle cx="170" cy="112" r="26" fill="${H}"/>`;
 if(p.t==="bun")back=`<circle cx="100" cy="18" r="22" fill="${H}"/>`;
 if(p.t==="ears")back=`<ellipse cx="68" cy="22" rx="15" ry="38" fill="${H}"/><ellipse cx="132" cy="22" rx="15" ry="38" fill="${H}"/><ellipse class="ns" cx="68" cy="26" rx="7" ry="26" fill="#ffc2dc"/><ellipse class="ns" cx="132" cy="26" rx="7" ry="26" fill="#ffc2dc"/>`;
 if(p.t==="cat")back=`<path d="M46 52 L52 6 L88 36Z M154 52 L148 6 L112 36Z" fill="${H}"/><path class="ns" d="M56 40 L58 20 L74 34Z M144 40 L142 20 L126 34Z" fill="#ffc2dc"/>`;
 return `<svg class="fig" viewBox="0 0 200 250" role="img" aria-label="${p.n} cute figure">${back}
 <rect x="80" y="196" width="15" height="30" rx="7" fill="${S}"/><rect x="105" y="196" width="15" height="30" rx="7" fill="${S}"/>
 <ellipse cx="86" cy="230" rx="14" ry="9" fill="${p.a}"/><ellipse cx="114" cy="230" rx="14" ry="9" fill="${p.a}"/>
 <ellipse cx="62" cy="168" rx="9" ry="16" fill="${S}"/><ellipse cx="138" cy="168" rx="9" ry="16" fill="${S}"/>
 <path d="M74 142 L126 142 L150 206 L50 206Z" fill="${p.b}"/><path d="M88 142 L112 142 L100 160Z" fill="${p.a}"/>
 <ellipse cx="100" cy="86" rx="62" ry="56" fill="${S}"/>
 <path d="M38 86 Q44 24 100 26 Q156 24 162 86 Q138 50 100 56 Q62 50 38 86Z" fill="${H}"/>
 <ellipse cx="76" cy="94" rx="8" ry="11" fill="#2a1b3d"/><ellipse cx="124" cy="94" rx="8" ry="11" fill="#2a1b3d"/>
 <circle class="ns" cx="79" cy="90" r="3.5" fill="#fff"/><circle class="ns" cx="127" cy="90" r="3.5" fill="#fff"/>
 <ellipse class="ns" cx="58" cy="110" rx="9" ry="6" fill="#ff8fb3" opacity=".7"/><ellipse class="ns" cx="142" cy="110" rx="9" ry="6" fill="#ff8fb3" opacity=".7"/>
 <path d="M92 112 Q100 120 108 112" fill="none" stroke-linecap="round"/>
 <path d="M142 46 l4 9 10 1-8 6 3 10-9-6-9 6 3-10-8-6 10-1z" fill="${p.a}"/></svg>`}
const star=(c,s)=>`<svg width="${s}" height="${s}" viewBox="0 0 40 40"><path d="M20 3l5 12 13 1-10 8 3 13-11-7-11 7 3-13L2 16l13-1z" fill="${c}" stroke="#2b1646" stroke-width="2.5" stroke-linejoin="round"/></svg>`;
const $=(s,r=document)=>r.querySelector(s);
const fmt=n=>"$"+n.toFixed(2);
const FREE=60;
let cart={};
try{cart=JSON.parse(localStorage.getItem("actionary-cart")||"{}")}catch(e){cart={}}
function save(){try{localStorage.setItem("actionary-cart",JSON.stringify(cart))}catch(e){}}
function card(p){return `<article class="pc"><a class="art" href="product.html?id=${p.id}" style="--c:${p.c}" aria-label="View ${p.n}">${p.tag?`<span class="tag">${p.tag}</span>`:""}${fig(p)}</a>
<div class="info"><h3><a href="product.html?id=${p.id}">${p.n}</a></h3><span class="meta">${p.s} series · 5-inch, poseable</span>
<div class="row"><span class="price">${fmt(p.p)}</span><button class="btn small add" data-id="${p.id}">Add</button></div></div></article>`}
function render(){
 const ids=Object.keys(cart);let n=0,sum=0;
 $("#items").innerHTML=ids.length?ids.map(id=>{const p=P.find(x=>x.id==id),q=cart[id];n+=q;sum+=q*p.p;
 return `<div class="it" style="--c:${p.c}"><div class="sw">${fig(p)}</div><div><b>${p.n}</b><span class="muted">${fmt(p.p)}</span>
 <div class="qty"><button data-d="-1" data-id="${id}" aria-label="Remove one ${p.n}">−</button>${q}<button data-d="1" data-id="${id}" aria-label="Add one ${p.n}">+</button></div></div><b>${fmt(q*p.p)}</b></div>`}).join(""):`<p class="empty">Your cart is empty.<br>Add a cute figure to get started!</p>`;
 $("#count").textContent=n;$("#sum").textContent=fmt(sum);$("#co").disabled=!n;
 const left=FREE-sum;
 $("#shipmsg").textContent=!n?`Free shipping on orders over ${fmt(FREE)}`:left>0?`Add ${fmt(left)} more for free shipping!`:"You've unlocked free shipping! 🎉";
 $("#bar").style.width=Math.min(100,sum/FREE*100)+"%"}
function toggle(on){$("#cart").classList.toggle("on",on);$("#veil").classList.toggle("on",on);$("#cart").setAttribute("aria-hidden",!on);if(on)$("#close").focus()}
function add(id,q){cart[id]=(cart[id]||0)+(q||1);save();render();toggle(true)}

// chrome
const page=document.body.dataset.page;
const nav=[["index.html","Home","home"],["shop.html","Shop","shop"],["about.html","About","about"],["contact.html","Contact","contact"]];
$("#site-header").outerHTML=`<header class="site"><div class="wrap nav">
<a class="logo" href="index.html"><span class="mark">★</span><span>Action<b>ary</b></span></a>
<nav class="menu" id="menu" aria-label="Main">${nav.map(n=>`<a href="${n[0]}"${n[2]===page?' aria-current="page"':""}>${n[1]}</a>`).join("")}</nav>
<button class="cartbtn" id="open" aria-label="Open cart">Cart <span id="count">0</span></button>
<button class="burger" id="burger" aria-label="Menu" aria-expanded="false">☰</button></div></header>`;
$("#site-footer").outerHTML=`<footer class="site"><div class="wrap"><div class="fgrid">
<div><a class="logo" href="index.html"><span class="mark">★</span><span>Action<b>ary</b></span></a><p>Original cute collectible girl figures, designed with love and a lot of glitter.</p></div>
<div><h4>Shop</h4><ul><li><a href="shop.html">All figures</a></li><li><a href="shop.html?s=Sweet">Sweet series</a></li><li><a href="shop.html?s=Magic">Magic series</a></li><li><a href="shop.html?s=Adventure">Adventure series</a></li></ul></div>
<div><h4>Company</h4><ul><li><a href="about.html">Our story</a></li><li><a href="contact.html">Contact</a></li><li><a href="contact.html#faq">FAQ</a></li></ul></div>
<div><h4>Say hi</h4><ul><li><a href="mailto:support@actionary.example">support@actionary.example</a></li><li>Mon–Fri, 10am–6pm</li></ul></div></div>
<div class="legal"><span>© 2026 Actionary. All figures are original cute designs.</span><span>Demo store — no real orders are placed.</span></div></div></footer>
<div class="veil" id="veil"></div>
<aside id="cart" aria-label="Shopping cart" aria-hidden="true">
<div class="chead"><h2>Your cart</h2><button class="x" id="close" aria-label="Close cart">×</button></div>
<div class="ship"><span id="shipmsg"></span><div class="bar"><i id="bar"></i></div></div>
<div id="items"></div>
<div class="total"><span>Total</span><span id="sum">$0.00</span></div>
<button class="btn" id="co">Checkout</button></aside>`;
document.addEventListener("click",e=>{
 const t=e.target.closest("button");if(!t)return;
 if(t.classList.contains("add")&&t.dataset.id)add(+t.dataset.id,1);
 else if(t.dataset.d){const id=t.dataset.id;cart[id]+=+t.dataset.d;if(cart[id]<1)delete cart[id];save();render()}
 else if(t.id==="open")toggle(true);
 else if(t.id==="close")toggle(false);
 else if(t.id==="burger"){const m=$("#menu").classList.toggle("on");t.setAttribute("aria-expanded",m)}
 else if(t.id==="co"){cart={};save();render();$("#items").innerHTML='<p class="empty">🎉 Order placed. Thank you!<br>(Demo checkout — nothing was charged.)</p>'}
});
$("#veil").onclick=()=>toggle(false);
document.addEventListener("keydown",e=>{if(e.key==="Escape")toggle(false)});
document.querySelectorAll("form.nl").forEach(f=>f.addEventListener("submit",e=>{e.preventDefault();const m=f.parentElement.querySelector(".nlmsg");if(m)m.textContent="You're in! Check your inbox for 10% off. 💌";f.reset()}));
render();
window.A={P,SERIES,fig,fmt,card,star,$,add};
})();
