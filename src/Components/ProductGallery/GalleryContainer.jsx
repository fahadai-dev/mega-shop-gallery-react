import { useState } from 'react';
import ProductCard from './ProductCard';
import styles from './GalleryContainer.module.css';

const products = [
  { id: 1, name: "Gaming Laptop", price: 450, category: "Accessories", image: "https://picsum.photos/id/1/500/300" },
  { id: 2, name: "Mechanical Keyboard", price: 120, category: "Hardware", image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500" },
  { id: 3, name: "Wireless Headset", price: 80, category: "Audio", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500" },
  { id: 4, name: "Smart Watch", price: 150, category: "Wearables", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500" },
];

const GalleryContainer = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Mega Shop Gallery</h1>
      
      <div className={styles.searchBox}>
        <input 
          type="text" 
          placeholder="Search products..." 
          className={styles.searchInput}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className={styles.grid}>
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default GalleryContainer;