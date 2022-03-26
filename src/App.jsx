import Title from '/src/components/Title';
import UsersList from '/src/components/UsersList';
import users from '/src/users';

const App = () => (
	<UsersList users={users}>
		<Title>Listado de usuarios</Title>
	</UsersList>
);

export default App;
