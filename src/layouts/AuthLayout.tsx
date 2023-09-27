import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AuthLayout = () => {
	return (
		<main className="flex min-h-screen flex-1 flex-col justify-center item-center px-6 py-12 lg:px-8">
			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="colored"
			/>
			<Link className="inline mx-auto" to="/">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="icon icon-tabler icon-tabler-arrow-left flex justify-center self-center text-center mx-auto mb-10 cursor-pointer"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					strokeWidth="2"
					stroke="currentColor"
					fill="none"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
					<path d="M5 12l14 0"></path>
					<path d="M5 12l6 6"></path>
					<path d="M5 12l6 -6"></path>
				</svg>
			</Link>
			<Outlet />
		</main>
	);
};

export default AuthLayout;
