import styles from '@/styles/home-sections/1s.module.scss';
import { Cards, CardsItems } from '@/data/cards/cards';

function SectionOne() {
  return (
    <div  className={styles.section_one}>
        <div className={styles.grid_container}>
            <div className={styles.grid_container_up}>

                {Cards.map((card) => {
                    return (
                        <div 
                            key={card.id} 
                            className={styles.item}
                            style={{backgroundImage: `url(${card.imageUrl})`}}
                        >
                           <div className={styles.item_content}>
                                <h3>{card.title}</h3>
                                <p>{card.description}</p>
                           </div>
                        </div>
                    );
                })}
             
            </div>
            <div className={styles.grid_container_down}>
            {CardsItems.map((card) => {
                    return (
                        <div 
                            key={card.id} 
                            className={styles.item}
                            style={{backgroundImage: `url(${card.imageUrl})`}}
                        >
                            <div className={styles.item_content}>
                                <h3>{card.title}</h3>
                                <p>{card.description}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    </div>
  )
}

export default SectionOne
