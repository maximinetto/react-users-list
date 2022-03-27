import UsersList from '/src/components/UsersList';
import users from '/src/users';

const App = () => (
	<UsersList users={users}>
		<h1>Listado de usuarios</h1>
	</UsersList>
);

export default App;
