'use client'

import styles from '@/styles/home-sections/4s.module.scss';
import SecundaryButton from '../buttons/SecundaryButton';
import MultiCurrencyIcon from '../icons/MultiCurrencyIcon';
import X11Icon from '../icons/X11Icon';
import TradingIcon from '../icons/TradingIcon';

function SectionFour() {
  return (
    <div className={styles.section_four}>
      <div className={styles.section_four_container}>
          <div className={`${styles.section_four_content} ${styles.section_four_content_up}`}>
            <div >
              <h2>
                DOMINA Y GESTIONA TUS CUENTAS DE FONDEO
              </h2>
              <p>
              Hermes Challenge  ofrece un sistema de trading colaborativo único para firmas de fondeo. Opera tu cuenta dentro de nuestra plataforma, recibe señales de expertos y participa en el ecosistema de trading colaborativo. Con herramientas especializadas para cada fase, desde la preparación hasta la gestión de cuentas fondeadas, maximiza tus posibilidades de éxito en el trading profesional.
              </p>
              <div className={styles.icons_container}>
                <TradingIcon />
                <X11Icon />
                <MultiCurrencyIcon />
              </div>
            </div>
            <div></div>
          </div>
          <div className={`${styles.section_four_content} ${styles.section_four_content_down}`}>
            <div>
              <h2>¿QUIERES SABER MÁS?</h2>
              <p>
                Descubre cómo Hermes Challenge puede ayudarte a mejorar tus habilidades de trading y a alcanzar tus objetivos financieros.
              </p>
              <div>
                <SecundaryButton 
                  onClick={() => console.log('Descubre más')}
                >
                  <h3>Descubre más</h3>
                </SecundaryButton>
              </div>
            </div>
            <div className={styles.section_four_content_down_right_card}>
              <div>
                <h3>Previo a la Compra</h3>
                <p>Antes de realizar cualquier inversión, es crucial llevar a cabo una simulación de pruebas para evaluar diferentes estrategias de mercado sin riesgo. Además, la protección de la cuenta es fundamental para asegurar que tus activos estén seguros contra accesos no autorizados o fraudes.</p>
              </div>
              <div>
                <h3>Aprobar Challenge</h3>
                <p>Para avanzar, los traders deben superar ciertos desafíos que demuestran su habilidad para generar ganancias de manera consistente. Esto incluye seguir señales de traders experimentados, participar en trading colaborativo para aprender de otros, y mantener un control estricto del DrawDown (DD) para gestionar las pérdidas.</p>
              </div>
              <div>
                <h3>Cuenta Fondeada</h3>
                <p>Una vez que la cuenta está fondeada, es esencial desarrollar un plan de trading sólido, mantener una bitácora de todas las operaciones para analizar el desempeño y, si es posible, trabajar con un mentor de trading que pueda guiar y mejorar las estrategias de inversión.</p>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default SectionFour
