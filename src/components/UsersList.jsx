import UserCard from '/src/components/UserCard';

const UsersList = ({ users, children }) => (
	<div className='list'>
		{children}
		{users.map(user => (
			<UserCard {...user} key={user.name} />
		))}
	</div>
);

export default UsersList;
