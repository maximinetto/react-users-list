import UserRole from './UserRole';
import styles from '/src/components/UserCard.module.css';
import UserStatus from '/src/components/UserStatus';

const UserCard = ({ name, role, active }) => (
	<div className={styles.user} key={name}>
		<div className={styles.name}>
			<span>{name}</span>
		</div>
		<div className={styles.status}>
			<UserStatus active={active} />
		</div>
		<div className={styles.role}>
			<UserRole role={role} />
		</div>
	</div>
);

export default UserCard;
