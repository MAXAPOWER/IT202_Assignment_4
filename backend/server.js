const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 8067;

app.use(cors());
app.use(express.json());
app.use('/images', express.static(path.join(__dirname, '..', 'images')));

const products = [
  {
    id: 1,
    name: "ASUS ROG Strix XG27UCDS 26.5-inch 4K UHD 165Hz Gaming QD-OLED Monitor",
    price: 699.99,
    description: "The ROG Strix OLED XG27UCDS is a 27-inch, 165Hz 4K gaming monitor.",
    image: "images/ASUSmonitor.webp"
  },
  {
    id: 2,
    name: "Dell 27 Plus S2725QS 27-inch 4K UHD 120Hz LED Monitor",
    price: 229.99,
    description: "27-inch 4K monitor with up to 120Hz refresh rate and dual 5W speakers for elevated entertainment.",
    image: "images/DellMonitor120hz.webp"
  },
  {
    id: 3,
    name: "LG UltraGear 27GX704A-B 26.-inch 2K QHD 240Hz Gaming Monitor",
    price: 799.99,
    description: "The brilliant OLED monitor takes colors to a new level of vividness.",
    image: "images/LGMonitor240hz.webp"
  },
  {
    id: 4,
    name: "Samsung Odyssey G5 S32CG55 32-inch 2K WQHD 165Hz Curved Monitor",
    price: 249.99,
    description: "165Hz refresh rate, lightning-fast 1ms (GTG) response time, and AMD FreeSync Premium support.",
    image: "images/SamsungMonitor180hz.webp"
  }
];

let selectedProduct = null;

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.post('/api/select-product', (req, res) => {
  const { productId } = req.body;
  selectedProduct = products.find(p => p.id === productId);

  if (selectedProduct) {
    res.json({ success: true, message: 'Monitor selected', product: selectedProduct });
  } else {
    res.status(404).json({ success: false, message: 'Monitor not found' });
  }
});

app.get('/api/selected-product', (req, res) => {
  if (selectedProduct) {
    res.json(selectedProduct);
  } else {
    res.status(404).json({ message: 'Error: No monitor selected' });
  }
});

app.post('/api/submit-order', (req, res) => {
  res.json({ message: "Your monitor will be delivered soon." });
});

app.listen(PORT, () => {
  console.log(`Monitor Market(tm) server running on http://localhost:${PORT}`);
});