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
                <p>Antes de invertir, es esencial realizar simulaciones para evaluar estrategias de mercado y asegurar la seguridad de tu cuenta contra fraudes. Esta fase preparatoria es clave para un inicio sólido en el trading.</p>
              </div>
              <div>
                <h3>Aprobar Challenge</h3>
                <p>En esta etapa, los traders enfrentan desafíos que prueban su capacidad para generar ganancias consistentes. Es crucial seguir las señales de expertos, colaborar con otros traders y gestionar el riesgo adecuadamente para superar esta fase.</p>
              </div>
              <div>
                <h3>Cuenta Fondeada</h3>
                <p>Con la cuenta ya fondeada, el enfoque se centra en ejecutar un plan de trading bien estructurado, llevar un registro detallado de operaciones y, idealmente, recibir orientación de un mentor para optimizar las estrategias y asegurar el éxito a largo plazo.</p>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default SectionFour
