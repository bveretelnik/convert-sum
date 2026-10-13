import styles from './CheckboxToggle.module.scss';

const CheckboxToggle = ({ checked, setChecked }) => {
  return (
    <label className={styles.checkboxToggle}>
      <input
        type="checkbox"
        checked={checked}
        onChange={e => setChecked(e.target.checked)}
      />
      <span>Додати 1 грн до податку</span>
    </label>
  );
};

export default CheckboxToggle;
