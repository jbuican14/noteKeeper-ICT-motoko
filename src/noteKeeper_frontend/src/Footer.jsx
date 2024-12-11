import styles from './Footer.module.css'

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <p className={styles.p}>Copyright ⓒ {year}</p>
    </footer>
  );
}

export default Footer;