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
				<h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
					Regístrate
				</h2>
			</header>

			<main className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
				<form className="space-y-6" onSubmit={submitForm}>
					<section>
						<label
							htmlFor="fullName"
							className="block text-sm font-medium leading-6 text-gray-900"
						>
							Nombre completo
						</label>
						<article className="mt-2">
							<input
								id="fullName"
								name="fullName"
								type="text"
								autoComplete="fullName"
								required
								className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							/>
						</article>
					</section>
					<section>
						<label
							htmlFor="email"
							className="block text-sm font-medium leading-6 text-gray-900"
						>
							Correo electronico
						</label>
						<article className="mt-2">
							<input
								id="email"
								name="email"
								type="email"
								autoComplete="email"
								required
								className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							/>
						</article>
					</section>
					<section>
						<article className="flex items-center justify-between">
							<label
								htmlFor="password"
								className="block text-sm font-medium leading-6 text-gray-900"
							>
								Contraseña
							</label>
						</article>
						<article className="mt-2">
							<input
								id="password"
								name="password"
								type="password"
								autoComplete="current-password"
								required
								onChange={(e) => onChangePassword(e, 'password')}
								value={passwords.password}
								className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							/>
						</article>
					</section>

					<section>
						<article className="flex items-center justify-between">
							<label
								htmlFor="confirmarPassword"
								className="block text-sm font-medium leading-6 text-gray-900"
							>
								Confirmar contraseña
							</label>
						</article>
						<article className="mt-2">
							<input
								id="confirmarPassword"
								name="confirmarPassword"
								type="password"
								required
								onChange={(e) => onChangePassword(e, 'confirmarPassword')}
								value={passwords.confirmarPassword}
								className={`block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
									passwords.confirmarPassword.length > 0 &&
									passwords.password.length > 0
										? passwords.confirmarPassword === passwords.password
											? 'bg-green-200'
											: 'bg-red-200'
										: null
								}`}
							/>
						</article>
					</section>

					<DropDown
						label="Rol deseado:"
						name="rol"
						defaultValue=""
						required={true}
						options={Enum_Rol}
						hidden={false}
					/>

					<section>
						<ButtonLoading
							disabled={false}
							loading={false}
							text={'Regístrarse'}
						/>
					</section>
				</form>

				<button className="mx-auto mt-4 w-full border-2 rounded-md border-gray-400 hover:bg-gray-200">
					Regístrate con Google
				</button>

				<p className="mt-10 text-center text-sm text-gray-500">
					¿Ya estás registrado?{' '}
					<Link
						to="/auth/signin"
						className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
					>
						Inicia sesión
					</Link>
				</p>
			</main>
		</>
	);
};

export default SignUp;
