'use client'

import styles from '@/styles/home-sections/hero.module.scss'
import PrimaryButton from '../buttons/PrimaryButton'
import SecundaryButton from '../buttons/SecundaryButton'

function Hero() {

  return (
    <div className={styles.hero}>
        <div className={styles.hero_container} >
            <div className={styles.hero_text_container}>
                <div>
                    <h1 className={styles.title}>HERMES CAPITAL</h1>
                    <h2 className={styles.sub_title}>THE GOOD TRADE</h2>
                </div>
                <p className={styles.text}>{/* Somos la firma líder brindado herramientas digitales que ayudan a nuestros clientes a gestionar sus portafolios de inversión.  */}Hermes Capital es una innovadora plataforma de software con Inteligencia Artificial diseñada para simplificar el trading para principiantes y optimizar las operativas de traders experimentados. </p>
                
                <div className={styles.hero_buttons_container}>
                    <PrimaryButton 
                        onClick={() => console.log('click')}
                    >
                        <h3>{'DESCUBRE MÁS'}</h3>
                    </PrimaryButton>

                    <SecundaryButton 
                        onClick={() => console.log('click')}
                        bgwhite={true}
                    >
                        <h3>{'ACCESO TOTAL'}</h3>
                    </SecundaryButton>
                </div>

            </div>
            <div className={styles.hero_}>
            </div>
        </div>
    </div>
  )
}

export default Hero
