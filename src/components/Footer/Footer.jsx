import styles from './Footer.module.css'
import { ReactComponent as Logo } from 'assets/icons/logo_s.svg'
import { ReactComponent as Facebook } from 'assets/icons/facebook.svg'
import { ReactComponent as Instagram } from 'assets/icons/instagram.svg'
import { ReactComponent as Whatsapp } from 'assets/icons/whatsapp.svg'
import linksData from './linksData'
import { useContext } from 'react'
import { ThemeContext } from 'context/ThemeContext'

export default function Footer() {
  const { theme } = useContext(ThemeContext)

  function LinkSection() {
    return (
      linksData.map(item => (
        <section className={styles.footerSection} key={item.id}>
          <h2 
            className={styles.sectionTitle}
            style={theme.footer.titleStyle}
          >
            {item.title}
          </h2>
          <div className={styles.sectionContent}>
            {item.links.map(link => (
              <a 
                className={styles.pageLink} 
                href={link.href} 
                key={link.id}
                style={theme.footer.linkStyle}>
                {link.title}
              </a>
            ))}
          </div>
        </section> 
      ))
    )
  }

  return (
    <footer 
      className={styles.footerContainer}
      style={theme.footer.footerStyle}
    >
      <section className={styles.footerLogoSection}>
        <div className={styles.footerLogoBox}>
          <Logo 
            className={styles.alphaLogo}
            // style={theme.footer.iconStyle}
          />
        </div>
      </section>
      <LinkSection />
      <section className={styles.footerSection}>
        <h2 
          className={styles.sectionTitle}
          style={theme.footer.titleStyle}
        >
          追蹤 ALPHA Shop
        </h2>
        <div 
          className={styles.telInfo}
          style={theme.footer.linkStyle}
        >
          +886 02123-45678
        </div>
        <div className={styles.socialIconGroup}>
          <Facebook className={styles.icon} />
          <Instagram className={styles.icon} />
          <Whatsapp className={styles.icon} />
        </div>
      </section>
    </footer>
  )
}