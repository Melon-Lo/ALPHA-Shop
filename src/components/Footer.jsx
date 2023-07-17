import styles from './Footer.module.css'
import { ReactComponent as Logo } from 'assets/icons/logo_s.svg'
import { ReactComponent as Facebook } from 'assets/icons/facebook.svg'
import { ReactComponent as Instagram } from 'assets/icons/instagram.svg'
import { ReactComponent as Whatsapp } from 'assets/icons/whatsapp.svg'

export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <section className={styles.footerLogoSection}>
        <div className={styles.footerLogoBox}>
          <Logo className={styles.alphaLogo}/>
        </div>
      </section>
      <section className={styles.footerSection}>
        <h2 className={styles.sectionTitle}>客戶服務</h2>
        <div className={styles.sectionContent}>
          <a className={styles.pageLink} href="">運送說明</a>
          <a className={styles.pageLink} href="">退換貨相關</a>
          <a className={styles.pageLink} href="">付款資訊</a>
          <a className={styles.pageLink} href="">FAQ</a>
        </div>
      </section>
      <section className={styles.footerSection}>
        <h2 className={styles.sectionTitle}>關於我們</h2>
        <div className={styles.sectionContent}>
          <a className={styles.pageLink} href="">品牌故事</a>
          <a className={styles.pageLink} href="">媒體聯繫</a>
          <a className={styles.pageLink} href="">Press Kit</a>
        </div>
      </section>
      <section className={styles.footerSection}>
        <h2 className={styles.sectionTitle}>資訊</h2>
        <div className={styles.sectionContent}>
          <a className={styles.pageLink} href="">隱私權政策</a>
          <a className={styles.pageLink} href="">Cookie</a>
          <a className={styles.pageLink} href="">GDPR</a>
        </div>
      </section>
      <section className={styles.footerSection}>
        <h2 className={styles.sectionTitle}>追蹤 ALPHA Shop</h2>
        <div className={styles.telInfo}>+886 02123-45678</div>
        <div className={styles.socialIconGroup}>
          <Facebook className={styles.icon} />
          <Instagram className={styles.icon} />
          <Whatsapp className={styles.icon} />
        </div>
      </section>
    </footer>
  )
}