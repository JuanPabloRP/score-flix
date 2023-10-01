import { Link } from 'react-router-dom';
import DropDown from '../../components/Dropdown';
import { Enum_Rol } from '../../utils/Enums';
import ButtonLoading from '../../components/ButtonLoading';
import useFormData from '../../hooks/useFormData';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { useEffect } from 'react';

const SignUp = () => {
	const [passwords, setPasswords] = useState({
		password: '',
		confirmarPassword: '',
	});

	useEffect(() => {}, [passwords]);

	const { form, formData, updateFormData } = useFormData();

	const submitForm = (e) => {
		e.preventDefault();

		const { target } = e;

		const passValue = target[2].value;
		const confPassValue = target[3].value;

		if (!(passValue === confPassValue)) {
			toast.error('Error al registrar', {
				position: 'top-right',
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: 'colored',
			});

			return;
		}

		toast.success('😎 Wow so easy!', {
			position: 'top-right',
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: 'colored',
		});
	};

	const onChangePassword = (e, field) => {
		const newValue = e.target.value;

		setPasswords((prevValue) => ({
			...prevValue,
			[field]: newValue,
		}));

		console.log(passwords);
	};

	return (
		<>
			<header className="sm:mx-auto sm:w-full sm:max-w-sm">
				<h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-white">
					Regístrate
				</h2>
			</header>

			<main className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
				<form className="space-y-6" onSubmit={submitForm}>
					<section className="relative z-0 w-full group">
						<input
							type="text"
							name="floating_full_name"
							id="floating_full_name"
							className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
							placeholder=" "
							required
						/>
						<label
							for="floating_full_name"
							className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
						>
							Full name
						</label>
					</section>

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
							onChange={(e) => onChangePassword(e, 'password')}
							value={passwords.password}
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

					<section className="relative z-0 w-full mb-6 group">
						<input
							type="password"
							name="repeat_password"
							id="confirmarPassword"
							required
							onChange={(e) => onChangePassword(e, 'confirmarPassword')}
							value={passwords.confirmarPassword}
							className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2  border-green-800 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer  ${
								passwords.confirmarPassword.length > 0 &&
								passwords.password.length > 0
									? passwords.confirmarPassword === passwords.password
										? ' border-green-500 dark:border-green-500'
										: ' border-b-red-500 dark:border-b-red-500'
									: null
							}`}
							placeholder=" "
						/>
						<label
							for="floating_repeat_password"
							className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
						>
							Confirm password
						</label>
					</section>
{/* 
					<DropDown
						label="Rol deseado:"
						name="rol"
						defaultValue=""
						required={true}
						options={Enum_Rol}
						hidden={false}
					/>
 */}
					<section className="flex w-full">
						<ButtonLoading
							disabled={false}
							loading={false}
							text={'Regístrarse'}
						/>
					</section>
					<section>
						<Link to={'/sf/movies'}>Ir</Link>
					</section>
				</form>

				<button className="mx-auto mt-4 w-full border-2 rounded-md border-gray-400 hover:bg-gray-200">
					Regístrate con Google
				</button>

				<p className="mt-10 text-center text-sm text-gray-500">
					¿Ya estás registrado?{' '}
					<Link
						to="/auth/signin"
						className="font-semibold leading-6 text-blue-600 hover:text-blue-500"
					>
						Inicia sesión
					</Link>
				</p>
			</main>
		</>
	);
};

export default SignUp;
