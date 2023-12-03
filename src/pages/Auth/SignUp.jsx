import { Link, useNavigate } from 'react-router-dom';
import useFormData from '../../hooks/useFormData';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { useEffect } from 'react';
import { URL_API } from '../../utils/CONSTANTS';
import { useAuthContext } from '../../context/authContext';
import { v4 as uuidv4 } from 'uuid';

const SignUp = () => {
	const [passwords, setPasswords] = useState({
		password: '',
		confirmarPassword: '',
	});

	const { setToken } = useAuthContext();

	const navigate = useNavigate();

	useEffect(() => {}, [passwords]);

	const { form, formData, updateFormData } = useFormData();

	const submitForm = async (e) => {
		e.preventDefault();

		const { target } = e;
		const { fullName, email, password, confirmarPassword } = target;

		if (password.value !== confirmarPassword.value) {
			return toast.error('Las contraseñas son distintas ', {
				position: 'top-right',
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: 'colored',
			});
		}

		if (password.value.length < 8 || confirmarPassword.value.length < 8) {
			return toast.error(
				'La contraseña debe de tener minimo de 8 caracteres ',
				{
					position: 'top-right',
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: 'colored',
				}
			);
		}

		try {
			const res = await fetch(`${URL_API}/auth/register`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					userId: uuidv4(),
					fullName: fullName.value,
					email: email.value,
					password: password.value,
				}),
			});

			if (!res.ok) {
				const { error } = await res.json();

				console.log(error);
				throw new Error(error);
			}
			const data = await res.json();
			console.log(data);

			setToken(data.token);

			
			navigate('/sf/movies');

			toast.success('Registrado', {
				position: 'top-right',
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: 'colored',
			});

		} catch (error) {
			toast.error(`${error.message}`, {
				position: 'top-right',
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: 'colored',
			});

			console.log(error);
		}
	};

	const onChangePassword = (e, field) => {
		const newValue = e.target.value;

		setPasswords((prevValue) => ({
			...prevValue,
			[field]: newValue,
		}));
	};

	return (
		<>
			<header className="sm:mx-auto sm:w-full sm:max-w-sm">
				<h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-white">
					Regístrate
				</h2>
			</header>

			<main className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
				<form className="space-y-6" onSubmit={(e) => submitForm(e)}>
					<section className="relative z-0 w-full group">
						<input
							type="text"
							name="fullName"
							id="fullName"
							className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
							placeholder=" "
							required
						/>
						<label
							htmlFor="fullName"
							className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
						>
							Full name
						</label>
					</section>

					<section className="relative z-0 w-full mb-6 group">
						<input
							type="email"
							name="email"
							id="email"
							className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
							placeholder=" "
							required
						/>
						<label
							htmlFor="email"
							className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
						>
							Email address
						</label>
					</section>

					<section className="relative z-0 w-full mb-6 group">
						<input
							type="password"
							name="password"
							id="password"
							required
							onChange={(e) => onChangePassword(e, 'password')}
							value={passwords.password}
							className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
							placeholder=" "
						/>
						<label
							htmlFor="password"
							className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
						>
							Password
						</label>
					</section>

					<section className="relative z-0 w-full mb-6 group">
						<input
							type="password"
							name="confirmarPassword"
							id="confirmarPassword"
							required
							onChange={(e) => onChangePassword(e, 'confirmarPassword')}
							value={passwords.confirmarPassword}
							className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2  border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer  ${
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
							htmlFor="confirmarPassword"
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
					/>*/}

					{/* <section className="flex w-full">
						<ButtonLoading
							disabled={false}
							loading={false}
							text={'Regístrarse'}
						/>
					</section> */}
					<section className="flex w-full">
						<button
							className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full mx-auto sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
							to={'/sf/movies'}
						>
							Regístrarse
						</button>
					</section>
				</form>

				{/* <button className="mx-auto mt-4 w-full border-2 rounded-md border-gray-400 hover:bg-gray-200">
					Regístrate con Google
				</button> */}

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
