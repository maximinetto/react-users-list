import styles from '/src/components/UserStatus.module.css';

export default function UserStatus({ active }) {
	const activeClassname = active ? styles.active : styles.inactive;

	return (
		<span className={activeClassname}>{active ? 'Activo' : 'Inactivo'}</span>
	);
}
