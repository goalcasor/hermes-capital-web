'use client'

import Image from "next/image";
import styles from '@/styles/headers/header.module.scss'
import SecundaryButton from "../buttons/SecundaryButton";
import logo from '../../../public/images/logo.png';

const Header = () => {
    return (
        <header
          className={styles.header}
        >
          
          <div className={styles.header_container}>
            <Image 
                src={logo}
                alt="logo"
                width={100}
                height={100}
            />

            <SecundaryButton 
                onClick={() => console.log('click')}
            > 
              <h4>Acceso</h4> 
            </SecundaryButton>
          </div>
        </header>
    );
};

export default Header;