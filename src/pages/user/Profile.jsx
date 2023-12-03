import { useUserContext } from '../../context/userContext';

const Profile = () => {
	const { userData } = useUserContext();
	console.log(userData);
	return (
		<>
			<header>
				<img src="" alt="" />
				<h1>{userData.fullName}</h1>
				<section>
					<p></p>
					<p></p>
					<p></p>
				</section>
			</header>
			<main></main>
		</>
	);
};

export default Profile;
