'use client';

import styles from '@/styles/home-sections/2s.module.scss';
import SecundaryButton from '../buttons/SecundaryButton';
import { VscVariableGroup } from "react-icons/vsc";
import { MdAutoGraph, MdCircleNotifications } from "react-icons/md";
import { BiBot } from "react-icons/bi";

function SectionTwo() {
  return (
    <div className={styles.section_two}>
        <div className={styles.section_two_container}>
            <div className={` ${styles.section_two_content_image}`}></div>
            <div className={styles.section_two_content_text}>
                <h2>TOMA EL CONTROL TOTAL DE TU OPERATIVA DESDE UNA SOLA PLATAFORMA.</h2>
                <div className={styles.list_container}>
                  <ul>
                    <li>
                        <div className={styles.li_title}>
                          <VscVariableGroup size={20} />
                          <h4>VARIABLES PRE-DEFINIDAS</h4>
                        </div>
                        <p>Configura parámetros como lotaje, drawdown máximo, take profit y stop loss por adelantado para simplificar tu trading.</p>
                    </li>
                    <li>
                      <div className={styles.li_title}>
                        <MdAutoGraph size={20} />
                        <h4>AUTOMATIZA LA RECEPCIÓN DE SEÑALES</h4>
                      </div>
                      <p>Recibe señales de trading en tiempo real y ejecuta automáticamente tus operaciones en función de las condiciones del mercado.</p>
                    </li>
                    <li>
                      <div className={styles.li_title}>
                        <MdCircleNotifications size={20} />
                        <h4>NOTIFICACIONES EN TIEMPO REAL</h4>
                      </div>
                      <p> Mantente informado sobre el drawdown diario, drawdown máximo y operaciones abiertas cerca del fin de semana. </p>
                    </li>
                  </ul>
                </div>

                <SecundaryButton
                  onClick={() => console.log('SOLÍCITA UNA DEMO')}
                >
                      <h3>SOLÍCITA UNA DEMO</h3>
                </SecundaryButton>
            </div>
        </div>
    </div>
  )
}

export default SectionTwo
