'use client';

import styles from '@/styles/home-sections/3s.module.scss';
import { ProHowItWorksPoint } from '../howItWorks/ProHowItWorksPoint';
import { PainPointIconTwo } from '../icons/PainPointIconTwo';
import { PainPointIconThree } from '../icons/PainPointIconThree';
import SecundaryButton from '../buttons/SecundaryButton';

function SectionThree() {
    return (
      <div className={styles.section_three}>
          <div className={styles.section_three_container}>
            <div className={styles.section_three_content}>
              <div>
                <div className={styles.section_three_text}>
                  <h2>POTENCIA TU OPERATIVA CON INTELIGENCIA ARTIFICIAL</h2>
                  <p>Conoce las soluciones que te permitirán automatizar tus procesos y mejorar la toma de decisiones.</p>
                </div>
                <div className={styles.points_container}>
                  <ProHowItWorksPoint
                    rounded="br"
                    number={1}
                    icon={<PainPointIconTwo />}
                    title="MENTOR DE TRADING CON INTELIGENCIA ARTIFICIAL"
                    content="Recibe consejos personalizados sobre tus mejores días para operar, activos más rentables y estrategias más efectivas."
                  />
                  <ProHowItWorksPoint
                    rounded="br"
                    number={2}
                    icon={<PainPointIconTwo />}
                    title="PLANES DE TRADING INTELIGENTES"
                    content="Crea o selecciona planes de trading adaptados a tu estilo, con opciones flexibles o rígidas para mantener la disciplina."
                  />
                  <ProHowItWorksPoint
                    number={3}
                    rounded="br"
                    icon={<PainPointIconThree />}
                    title="AUTOMATIZA AL 100% TUS OPERACIONES DE TRADING"
                    content="Ejecuta tus estrategias de trading de forma automática, sin intervención humana, las 24 horas del día, los 7 días de la semana."
                  />
                </div>
              </div>
            </div>
            <div className={styles.section_three_content}>
              <div></div>
              <div className={styles.section_three_cta}>
                  <h3>SOLUCIONES AVANZADAS PARA EL TRADING ACTUAL</h3>
                  <p>
                  Explora y descubre cómo la inteligencia artificial y el aprendizaje automático pueden ser herramientas clave para optimizar tus estrategias de trading. Aprende a utilizar estas tecnologías avanzadas para analizar grandes volúmenes de datos, identificar patrones de mercado en tiempo real y mejorar significativamente tus resultados en el trading.
                  </p>
                  <SecundaryButton
                    bgwhite
                    onClick={() => console.log('SOLICITA UNA DEMO')}
                  >
                    <h3>SOLICITA UNA DEMO</h3>
                  </SecundaryButton>
              </div>
            </div>
          </div>
      </div>
    )
  }
  
  export default SectionThree
  