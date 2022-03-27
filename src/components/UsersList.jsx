import UserCard from '/src/components/UserCard';
import styles from '/src/components/UsersList.module.css';

const UsersList = ({ users, children }) => (
	<div className={styles.list}>
		{children}
		{users.length > 0 ? (
			users.map(user => <UserCard {...user} key={user.name} />)
		) : (
			<p>No hay usuario registrados</p>
		)}
	</div>
);

export default UsersList;
