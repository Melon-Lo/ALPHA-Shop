import styles from './Footer.module.css'
import { ReactComponent as Logo } from 'assets/icons/logo_s.svg'
import { ReactComponent as Facebook } from 'assets/icons/facebook.svg'
import { ReactComponent as Instagram } from 'assets/icons/instagram.svg'
import { ReactComponent as Whatsapp } from 'assets/icons/whatsapp.svg'
import linksData from './linksData'

export default function Footer() {

  function LinkSection() {
    return (
      linksData.map(item => (
        <section className={styles.footerSection} key={item.id}>
          <h2 className={styles.sectionTitle}>{item.title}</h2>
          <div className={styles.sectionContent}>
            {item.links.map(link => (
              <a className={styles.pageLink} href={link.href} key={link.id}>{link.title}</a>
            ))}
          </div>
        </section> 
      ))
    )
  }

  return (
    <footer className={styles.footerContainer}>
      <section className={styles.footerLogoSection}>
        <div className={styles.footerLogoBox}>
          <Logo className={styles.alphaLogo}/>
        </div>
      </section>
      <LinkSection />
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