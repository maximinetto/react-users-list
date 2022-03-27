import styles from '/src/components/UserRole.module.css';

function UserRole({ role }) {
	const ROLE_STYLES = {
		teacher: ['Profesor', styles.teacher],
		student: ['Alumno', styles.student],
		other: ['Otro', styles.other]
	};

	const [roleName, roleClassname] = ROLE_STYLES[role] || ROLE_STYLES.other;

	return <span className={`${styles.role} ${roleClassname}`}>{roleName}</span>;
}

export default UserRole;
