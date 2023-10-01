import { Link } from 'react-router-dom';
import ButtonLoading from '../../components/ButtonLoading';

const SignIn = () => {
	return (
		<>
			<section className="sm:mx-auto sm:w-full sm:max-w-sm">
				<h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900  dark:text-gray-200">
					Inicia sesión
				</h2>
			</section>

			<section className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm  dark:text-gray-200">
				<form className="space-y-6">
					<section className="relative z-0 w-full mb-6 group">
						<input
							type="email"
							name="floating_email"
							id="floating_email"
							className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
							placeholder=" "
							required
						/>
						<label
							for="floating_email"
							className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
						>
							Email address
						</label>
					</section>

					<section className="relative z-0 w-full mb-6 group">
						<input
							type="password"
							name="floating_password"
							id="password"
							required
							className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
							placeholder=" "
						/>
						<label
							for="floating_password"
							className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
						>
							Password
						</label>
					</section>

					<section className="flex w-full">
						<ButtonLoading
							disabled={false}
							loading={false}
							text={'Iniciar sesión'}
						/>
					</section>
					<section>
						<Link to={'/sf/movies'}>Ir</Link>
					</section>
				</form>

				<button className="mx-auto mt-4 w-full border-2 rounded-md border-gray-400 hover:bg-gray-200">
					Inicia sesión con Google
				</button>

				<p className="mt-10 text-center text-sm text-gray-500">
					¿No estás registrado?{' '}
					<Link
						to="/auth/signup"
						className="font-semibold leading-6 text-blue-600 hover:text-blue-500"
					>
						Regístrate
					</Link>
				</p>
			</section>
		</>
	);
};

export default SignIn;
