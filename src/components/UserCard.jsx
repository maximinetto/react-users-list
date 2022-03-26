const UserCard = ({ name, role, active }) => (
	<div className='user' key={name}>
		<span className='name'>{name}</span>
		<span className='active'>{active ? 'Activo' : 'Inactivo'}</span>
		<span className='role'>{role}</span>
	</div>
);

export default UserCard;
