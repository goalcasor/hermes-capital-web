'use client'

import styles from '@/styles/home-sections/4s.module.scss';
import SecundaryButton from '../buttons/SecundaryButton';

function SectionFour() {
  return (
    <div className={styles.section_four}>
      <div className={styles.section_four_container}>
          <div className={`${styles.section_four_content} ${styles.section_four_content_up}`}>
            <div></div>
            <div></div>
          </div>
          <div className={`${styles.section_four_content} ${styles.section_four_content_down}`}>
            <div></div>
            <div>
              <h2>¿Quieres saber más?</h2>
              <p>Conoce más sobre nosotros y nuestros servicios.</p>
              <SecundaryButton 
                onClick={() => console.log('Descubre más')}
              >
                <h3>Descubre más</h3>
              </SecundaryButton>
            </div>
          </div>
      </div>
    </div>
  )
}

export default SectionFour
