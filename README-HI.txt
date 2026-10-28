COMMERCE MART — शुरुआती वेबसाइट फाइलें

इस ZIP में:
- index.html: वेबसाइट का पेज
- style.css: डिजाइन
- app.js: प्रोडक्ट, खोज, कार्ट, भाषा और WhatsApp ऑर्डर
- manifest.json + sw.js: PWA इंस्टॉल/ऑफलाइन बेसिक सपोर्ट
- icon.svg: ऐप आइकन

महत्वपूर्ण सेटअप:
1. app.js खोलें।
2. सबसे ऊपर WHATSAPP_NUMBER = "91XXXXXXXXXX" को अपने बिजनेस WhatsApp नंबर से बदलें।
   उदाहरण: भारत का नंबर 9876543210 हो तो "919876543210" लिखें। +, स्पेस या डैश न डालें।
3. app.js में products सूची के डेमो प्रोडक्ट, कीमतें और विवरण अपने असली प्रोडक्ट के अनुसार बदलें।
4. कीमतें, स्टॉक, डिलीवरी और रिटर्न नियम ग्राहक से ऑर्डर लेने से पहले साफ रखें।

मुफ्त में ऑनलाइन प्रकाशित करना:
- GitHub पर अकाउंट बनाएं और नया public repository बनाएं।
- इन सभी फाइलों को repository के root में upload करें।
- Repository Settings > Pages में जाकर deploy from branch चुनें, branch main और folder /(root) चुनें, फिर Save करें।
- प्रकाशित URL खोलकर मोबाइल पर टेस्ट करें।
- PWA इंस्टॉल विकल्प HTTPS पर, समर्थित ब्राउज़र/डिवाइस में ही दिखेगा।

सीमाएं:
- यह शुरुआती demo storefront है, पूर्ण marketplace नहीं।
- अभी असली payment gateway, customer login, inventory database, admin panel या automatic courier tracking शामिल नहीं हैं।
- WhatsApp नंबर सेट किए बिना WhatsApp ऑर्डर काम नहीं करेगा।
- सप्लायर की अनुमति के बिना उनकी फोटो/ब्रांड सामग्री इस्तेमाल न करें।
