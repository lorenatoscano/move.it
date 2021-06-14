import styles from '../styles/components/Profile.module.css';

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/lorenatoscano.png" alt="Lorena" />
      <div>
        <strong>Lorena Toscano</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Nível 1
        </p>
      </div>
    </div>
  );
}