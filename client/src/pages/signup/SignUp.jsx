import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";
import { useEffect, useState } from "react";
import useSignup from "../../hooks/useSignup";

const SignUp = () => {
	const [inputs,setInputs] = useState({
		fullName:'',
		username:'',
		password:'',
		confirmpassword:'',
		gender:''
	})
	// useEffect(() => {
	//   console.log(inputs);
	// })
	
	const handleCheckboxChange = (gender) => {
		setInputs({...inputs,gender});
	}

	const {signup,loading} = useSignup();
	const handleSubmit = (e) => {
		e.preventDefault();
		signup(inputs);
	}

	return (
		<div className="bg-cover bg-fixed min-h-screen bg-[url('https://img.freepik.com/free-photo/woman-stretching-her-body-yoga-poses-sunset-beach_1286-67.jpg?t=st=1738583278~exp=1738586878~hmac=bbe307188f08fa9bef122a3922922f0f94e86ea8ec027b37bbc2bd42bf617288&w=1060')]">

		<div className='flex min-h-screen flex-col items-center justify-center w-96 mx-auto'>
			<div className='w-full text-white p-6 rounded-lg shadow-md bg-gray-800/60 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
				<h1 className='text-3xl font-semibold text-center text-gray-300'>
					Sign Up <span className='text-purple-200'> YogVeda </span>
				</h1>

				<form onSubmit={handleSubmit}> 
					<div className="flex flex-col gap-5 py-5">
					<div>
						{/* <label className='label p-2'>
							<span className='text-base label-text'>Full Name</span>
						</label> */}
						<input
							value={inputs.fullName}
							onChange={(e)=> setInputs({...inputs,fullName : e.target.value})}
						 	type='text' placeholder="Enter Full Name" className='border w-full input input-bordered h-10 rounded bg-surface-a20/60 px-5' />
					</div>

					<div>
						{/* <label className='label p-2 '>
							<span className='text-base label-text'>Username</span>
						</label> */}
						<input
							value={inputs.username}
							placeholder='Enter username'
							onChange={(e)=> setInputs({...inputs,username : e.target.value})}
						 type='text' className='w-full border input input-bordered h-10 rounded bg-surface-a20/60 px-5  ' />
					</div>

					<div>
						{/* <label className='label'>
							<span className='text-base label-text'>Password</span>
						</label> */}
						<input
							type='password'
							placeholder='Enter Password'
							value={inputs.password}
							onChange={(e)=> setInputs({...inputs,password : e.target.value})}
							className='w-full input border h-10 rounded bg-surface-a20/60 px-5'
						/>
					</div>

					<div>
						{/* <label className='label'>
							<span className='text-base label-text'>Confirm Password</span>
						</label> */}
						<input
							type='password'
							placeholder='Confirm Password'
							value={inputs.confirmpassword}
							onChange={(e)=> setInputs({...inputs,confirmpassword : e.target.value})}
							className='w-full input border h-10 rounded bg-surface-a20/60 px-5'
						/>
					</div>

					<GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />
					</div>
					<Link to={'/login'} className='text-sm hover:underline hover:text-primary-a30 mt-2 inline-block' href='#'>
						Already have an account? Login
					</Link>

					<div>
						<button
							disabled={loading}
						 	className='bg-violet-900 hover:bg-violet-950 w-full p-1 rounded mt-2'>
								{loading? 	<svg aria-hidden="true" class="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        										<path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        										<path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    										</svg> : "Sign Up"}
						</button>
					</div>
				</form>
			</div>
		</div>
		</div>
	);
};
export default SignUp;