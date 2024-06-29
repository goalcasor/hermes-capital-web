import styles from '@/styles/buttons/TerciaryButton.module.scss'

export default function TerciaryButton() {
  return (
    <button className={styles.button}>
        <div className={styles.blob1}></div>
        <div className={styles.blob2}></div>
        <div className={styles.inner}>Realism</div>
    </button>
  )
}
