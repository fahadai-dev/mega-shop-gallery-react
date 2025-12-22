import styles from './ProductCard.module.css';

const ProductCard = ({ product }) => {
  return (
    <div className={styles.card}>
      <img src={product.image} alt={product.name} className={styles.image} />
      <div className={styles.info}>
        <h3 className={styles.name}>{product.name}</h3>
        <p className={styles.category}>{product.category}</p>
        <div className={styles.footer}>
          <span className={styles.price}>${product.price}</span>
          <button className={styles.btn}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
