import styles from '@/styles/footers/PrincipalFooter.module.scss';

export default function PrincipalFooter() {


  function getCurrentYear() {
    return new Date().getFullYear();
  }

  const currentYear = getCurrentYear();


  return (
    <div className={styles.footer}>
        <footer>
            <div className={styles.logo}>
            
            </div>
            <div className={styles.footer_text_container}>
                <h4> © {currentYear} - Todos los derechos reservados </h4>
                <p></p>
            </div>
        </footer>
    </div>
  )
}
