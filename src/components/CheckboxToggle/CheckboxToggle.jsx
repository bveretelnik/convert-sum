import styles from './CheckboxToggle.module.scss';

const CheckboxToggle = ({ checked, setChecked }) => {
  return (
    <label className={styles.checkboxToggle}>
      <input
        type="checkbox"
        checked={checked}
        onChange={e => setChecked(e.target.checked)}
      />
      <span>{`${checked ? 'OFF' : 'ON'} add value`}</span>
    </label>
  );
};

export default CheckboxToggle;
