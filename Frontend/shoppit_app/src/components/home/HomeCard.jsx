import styles from './HomeCard.module.css'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../../api'


const HomeCard = ({ product }) => {
  return (
    <div className={`col-md-3 ${styles.col}`}>
    <Link to="/detail" className={styles.link}>
    <div className={styles.card}>
        <div className={styles.cardImgWrapper}>
            <img
            src={`${BASE_URL}${product.image}`}
            className={styles.cardImgTop}
            alt="Product Image"
            />
        </div>
        <div className={styles.cardBody}>
            <h5 className={`${styles.cardTitle} mb-1`}>{product.name}</h5>
            <h6 className={`${styles.cardText} mb-2`}>{"$"}{product.price}</h6>
        </div>
    </div>
    </Link>
    </div>
  )
}

export default HomeCard