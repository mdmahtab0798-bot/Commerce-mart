// Commerce Mart demo storefront. Replace the WhatsApp number below with your business number.
const WHATSAPP_NUMBER = "918709228064"; // Example format: 919876543210 (country code, no + or spaces)
let products = [
 {id:1,name:"Everyday Sneakers",hi:"रोज़ाना पहनने वाले जूते",category:"Fashion",hiCat:"फैशन",emoji:"👟",price:799,old:999,desc:"Comfortable everyday footwear",hiDesc:"आरामदायक रोज़ाना फुटवियर",tag:"Popular"},
 {id:2,name:"Wireless Headphones",hi:"वायरलेस हेडफोन",category:"Electronics",hiCat:"इलेक्ट्रॉनिक्स",emoji:"🎧",price:1299,old:1799,desc:"Music and calls on the go",hiDesc:"म्यूज़िक और कॉल के लिए",tag:"Deal"},
 {id:3,name:"Smartphone Stand",hi:"मोबाइल स्टैंड",category:"Electronics",hiCat:"इलेक्ट्रॉनिक्स",emoji:"📱",price:249,old:349,desc:"Desk-friendly adjustable stand",hiDesc:"टेबल के लिए एडजस्टेबल स्टैंड",tag:"Value"},
 {id:4,name:"Travel Backpack",hi:"ट्रैवल बैकपैक",category:"Fashion",hiCat:"फैशन",emoji:"🎒",price:699,old:899,desc:"Useful for college and travel",hiDesc:"कॉलेज और यात्रा के लिए",tag:"Popular"},
 {id:5,name:"Kitchen Storage Set",hi:"किचन स्टोरेज सेट",category:"Home",hiCat:"घर का सामान",emoji:"🍱",price:499,old:649,desc:"Keep everyday essentials organized",hiDesc:"रोज़मर्रा का सामान व्यवस्थित रखें",tag:"Deal"},
 {id:6,name:"Desk Lamp",hi:"डेस्क लैंप",category:"Home",hiCat:"घर का सामान",emoji:"💡",price:599,old:799,desc:"A handy light for your study desk",hiDesc:"स्टडी टेबल के लिए उपयोगी लाइट",tag:"New"},
 {id:7,name:"Skincare Combo",hi:"स्किनकेयर कॉम्बो",category:"Beauty",hiCat:"ब्यूटी",emoji:"🧴",price:399,old:499,desc:"Daily personal-care essentials",hiDesc:"रोज़ाना पर्सनल केयर के लिए",tag:"Value"},
 {id:8,name:"Water Bottle",hi:"पानी की बोतल",category:"Sports",hiCat:"स्पोर्ट्स",emoji:"🥤",price:299,old:399,desc:"Reusable bottle for daily use",hiDesc:"रोज़ाना इस्तेमाल के लिए",tag:"Popular"},
 {id:9,name:"Notebook Pack",hi:"नोटबुक पैक",category:"Books",hiCat:"किताबें",emoji:"📚",price:199,old:249,desc:"For notes, study and planning",hiDesc:"नोट्स, पढ़ाई और प्लानिंग के लिए",tag:"Value"},
 {id:10,name:"Plush Teddy",hi:"सॉफ्ट टॉय टेडी",category:"Toys",hiCat:"खिलौने",emoji:"🧸",price:349,old:449,desc:"A cute gift for someone special",hiDesc:"किसी खास के लिए प्यारा उपहार",tag:"Gift"},
 {id:11,name:"Everyday Watch",hi:"रोज़ाना की घड़ी",category:"Fashion",hiCat:"फैशन",emoji:"⌚",price:899,old:1199,desc:"Simple style for everyday wear",hiDesc:"रोज़ाना पहनने के लिए सरल स्टाइल",tag:"New"},
 {id:12,name:"Coffee Mug Set",hi:"कॉफी मग सेट",category:"Home",hiCat:"घर का सामान",emoji:"☕",price:299,old:399,desc:"A cheerful set for your kitchen",hiDesc:"आपकी किचन के लिए सुंदर सेट",tag:"Deal"}
// Load products added from this browser
try {
  const savedProducts = JSON.parse(
    localStorage.getItem("commerceMartProducts") || "[]"
  );
  products.push(...savedProducts);
} catch (e) {
  console.log("Saved products could not be loaded");
 }];
const categories = [
 {id:"all",en:"All products",hi:"सभी प्रोडक्ट",emoji:"✨"},
 {id:"Fashion",en:"Fashion",hi:"फैशन",emoji:"👟"},
 {id:"Electronics",en:"Electronics",hi:"इलेक्ट्रॉनिक्स",emoji:"🎧"},
 {id:"Home",en:"Home & Kitchen",hi:"घर और किचन",emoji:"🏠"},
 {id:"Beauty",en:"Beauty",hi:"ब्यूटी",emoji:"🧴"},
 {id:"Sports",en:"Sports",hi:"स्पोर्ट्स",emoji:"⚽"},
 {id:"Books",en:"Books & Stationery",hi:"किताबें",emoji:"📚"},
 {id:"Toys",en:"Toys & Games",hi:"खिलौने",emoji:"🧸"}
];
let lang = "en";
let activeCategory = "all";
let cart = {};
const $ = s => document.querySelector(s);
const money = n => "₹" + Number(n).toLocaleString("en-IN");
function tr(en,hi){return lang==="hi"?hi:en}
function renderCategories(){
  $("#categories").innerHTML = categories.filter(c=>c.id!=="all").map(c=>`<button class="category-card ${activeCategory===c.id?"active":""}" data-category="${c.id}"><span class="category-emoji">${c.emoji}</span><strong>${lang==="hi"?c.hi:c.en}</strong><small>${lang==="hi"?"प्रोडक्ट देखें":"Explore"}</small></button>`).join("");
  $("#categoryFilter").innerHTML = `<option value="all">${tr("All categories","सभी कैटेगरी")}</option>` + categories.filter(c=>c.id!=="all").map(c=>`<option value="${c.id}">${lang==="hi"?c.hi:c.en}</option>`).join("");
  $("#categoryFilter").value=activeCategory;
}
function renderProducts(){
  const q=$("#searchInput").value.trim().toLowerCase();
  const list=products.filter(p=>(activeCategory==="all"||p.category===activeCategory) && (!q || [p.name,p.hi,p.category,p.hiCat,p.desc,p.hiDesc].some(v=>v.toLowerCase().includes(q))));
  $("#resultCount").textContent=`${list.length} ${tr("items","प्रोडक्ट")}`;
  $("#productGrid").innerHTML=list.length?list.map(p=>`<article class="product-card"><div class="product-image"><span class="tag">${p.tag}</span>${p.emoji}</div><div class="product-info"><span class="category-label">${lang==="hi"?p.hiCat:p.category}</span><h3>${lang==="hi"?p.hi:p.name}</h3><p>${lang==="hi"?p.hiDesc:p.desc}</p><div class="price-row"><span class="price">${money(p.price)}</span><span class="old-price">${money(p.old)}</span></div><button class="add-button" data-add="${p.id}">＋ ${tr("Add to cart","कार्ट में जोड़ें")}</button></div></article>`).join(""):`<div class="empty-state">${tr("No products found. Try another search.","कोई प्रोडक्ट नहीं मिला। दूसरी खोज करें।")}</div>`;
}
function renderCart(){
 const entries=Object.entries(cart).filter(([id,qty])=>qty>0);
 $("#cartCount").textContent=entries.reduce((s,[id,q])=>s+q,0);
 $("#cartTotal").textContent=money(entries.reduce((s,[id,q])=>s+products.find(p=>p.id===Number(id)).price*q,0));
 $("#cartItems").innerHTML=entries.length?entries.map(([id,qty])=>{const p=products.find(x=>x.id===Number(id));return `<div class="cart-line"><div class="cart-emoji">${p.emoji}</div><div class="cart-desc"><strong>${lang==="hi"?p.hi:p.name}</strong><small>${money(p.price)} × ${qty} = ${money(p.price*qty)}</small></div><div class="qty-controls"><button data-change="${id}" data-delta="-1" aria-label="Decrease quantity">−</button><b>${qty}</b><button data-change="${id}" data-delta="1" aria-label="Increase quantity">+</button></div></div>`}).join(""):`<p class="muted">${tr("Your cart is empty. Add a product to get started.","आपका कार्ट खाली है। शुरू करने के लिए कोई प्रोडक्ट जोड़ें।")}</p>`;
}
function addToCart(id){cart[id]=(cart[id]||0)+1;renderCart()}
function orderWhatsApp(){
 const entries=Object.entries(cart).filter(([id,qty])=>qty>0);
 if(!entries.length){alert(tr("Please add a product to your cart first.","कृपया पहले कार्ट में प्रोडक्ट जोड़ें।"));return}
 if(WHATSAPP_NUMBER.includes("X")){alert(tr("Store setup needed: open app.js and replace WHATSAPP_NUMBER with your WhatsApp number, including country code 91.","स्टोर सेटअप बाकी है: app.js में WHATSAPP_NUMBER की जगह अपना WhatsApp नंबर country code 91 के साथ डालें।"));return}
 const lines=entries.map(([id,qty])=>{const p=products.find(x=>x.id===Number(id));return `• ${lang==="hi"?p.hi:p.name} x${qty} — ${money(p.price*qty)}`});
 const total=entries.reduce((s,[id,q])=>s+products.find(p=>p.id===Number(id)).price*q,0);
 const msg=`Hello Commerce Mart! I want to place an order / मैं ऑर्डर करना चाहता/चाहती हूँ:\n\n${lines.join("\n")}\n\nEstimated total / अनुमानित कुल: ${money(total)}\n\nName / नाम:\nAddress / पता:\nPIN code / पिन कोड:\nPlease confirm stock, delivery charges and final price. / कृपया स्टॉक, डिलीवरी चार्ज और अंतिम कीमत की पुष्टि करें।`;
 window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`,"_blank","noopener");
}
document.addEventListener("click",e=>{
 const add=e.target.closest("[data-add]"); if(add){addToCart(Number(add.dataset.add));return}
 const change=e.target.closest("[data-change]");if(change){const id=change.dataset.change;cart[id]=(cart[id]||0)+Number(change.dataset.delta);if(cart[id]<=0)delete cart[id];renderCart();return}
 const cat=e.target.closest("[data-category]");if(cat){activeCategory=cat.dataset.category;renderCategories();renderProducts();$("#products").scrollIntoView({behavior:"smooth"});}
});
$("#categoryFilter").addEventListener("change",e=>{activeCategory=e.target.value;renderCategories();renderProducts()});
$("#searchInput").addEventListener("input",renderProducts);
$("#langBtn").addEventListener("click",()=>{lang=lang==="en"?"hi":"en";document.documentElement.lang=lang;document.querySelectorAll("[data-en][data-hi]").forEach(el=>el.textContent=lang==="hi"?el.dataset.hi:el.dataset.en);$("#langBtn").textContent=lang==="hi"?"English":"हिंदी";$("#searchInput").placeholder=tr("Search products / प्रोडक्ट खोजें","प्रोडक्ट खोजें / Search products");renderCategories();renderProducts();renderCart()});
$("#cartJump").addEventListener("click",()=>$("#cart").scrollIntoView({behavior:"smooth"}));
$("#whatsappOrder").addEventListener("click",orderWhatsApp);
$("#contactLink").addEventListener("click",e=>{e.preventDefault();orderWhatsApp()});
$("#year").textContent=new Date().getFullYear();
renderCategories();renderProducts();renderCart();
if("serviceWorker" in navigator && location.protocol.startsWith("http")) navigator.serviceWorker.register("./sw.js").catch(()=>{});
<section id="product-manager" style="padding:20px;max-width:500px;margin:auto">
  <h2>➕ Add New Product</h2>

  <form id="product-form">
    <label>Product Name</label>
    <input id="new-name" required
      placeholder="जैसे Wireless Headphones"
      style="display:block;width:100%;padding:12px;margin:8px 0">

    <label>Price (₹)</label>
    <input id="new-price" type="number" min="1" required
      placeholder="799"
      style="display:block;width:100%;padding:12px;margin:8px 0">

    <label>Old Price (₹), optional</label>
    <input id="new-old-price" type="number" min="0"
      placeholder="999"
      style="display:block;width:100%;padding:12px;margin:8px 0">

    <label>Category</label>
    <select id="new-category"
      style="display:block;width:100%;padding:12px;margin:8px 0">
      <option>Electronics</option>
      <option>Fashion</option>
      <option>Home</option>
      <option>Beauty</option>
      <option>Other</option>
    </select>

    <label>Product Photo URL (optional)</label>
    <input id="new-image" type="url"
      placeholder="https://example.com/photo.jpg"
      style="display:block;width:100%;padding:12px;margin:8px 0">

    <button type="submit"
      style="padding:12px 20px;margin-top:12px">
      Add Product
    </button>
  </form>

  <p id="product-message" role="status"></p>
</section>
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("product-form");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const product = {
      id: Date.now(),
      name: document.getElementById("new-name").value.trim(),
      price: Number(document.getElementById("new-price").value),
      old: Number(document.getElementById("new-old-price").value) || 0,
      category: document.getElementById("new-category").value,
      image: document.getElementById("new-image").value.trim()
    };

    if (!product.name || product.price <= 0) {
      alert("Product name aur sahi price bhariye.");
      return;
    }

    try {
      const saved = JSON.parse(
        localStorage.getItem("commerceMartProducts") || "[]"
      );

      saved.push(product);
      localStorage.setItem(
        "commerceMartProducts",
        JSON.stringify(saved)
      );

      document.getElementById("product-message").textContent =
        "Product is browser mein save ho gaya.";

      form.reset();
    } catch (error) {
      alert("Product save nahi hua. Browser storage check karein.");
    }
  });
});
