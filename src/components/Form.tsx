// import React from 'react';
// import { useState } from 'react';
// import { SubmitHandler, useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as Yup from 'yup';
// import './Form.css';

// type UserSubmitForm = {
//   name: string;
//   age: number;
//   email: string;
//   password: string;
//   confirmPassword: string;
//   gender: string;
//   acceptTerms: boolean;
//   country: string;
//   picture: File | null | FileList;
// };

// const validationSchema: Yup.ObjectSchema<UserSubmitForm> = Yup.object().shape({
//   name: Yup.string()
//     .required('Name is required')
//     .matches(/^[A-Z][a-z]*$/, 'Name should start with an uppercase letter'),
//   age: Yup.number()
//     .positive('Age should be a positive number')
//     .required('Age is required'),
//   email: Yup.string().required('Email is required').email('Email is invalid'),
//   password: Yup.string()
//     .required('Please enter a password')
//     .min(5, 'Password too short')
//     .test('isValidPass', ' is not valid', (value, context) => {
//       const hasUpperCase = /[A-Z]/.test(value);
//       const hasLowerCase = /[a-z]/.test(value);
//       const hasNumber = /[0-9]/.test(value);
//       const hasSymbole = /[!@#%&]/.test(value);
//       let validConditions = 0;
//       const numberOfMustBeValidConditions = 3;
//       const conditions = [hasLowerCase, hasUpperCase, hasNumber, hasSymbole];
//       conditions.forEach((condition) => (condition ? validConditions++ : null));
//       if (validConditions >= numberOfMustBeValidConditions) {
//         return true;
//       }
//       return false;
//     }),
//   confirmPassword: Yup.string()
//     .required('Confirm Password is required')
//     .oneOf([Yup.ref('password')], 'Confirm Password does not match'),
//   gender: Yup.string().required('Gender is required'),
//   acceptTerms: Yup.bool().oneOf([true], 'Accept Terms is required'),
//   country: Yup.string().notOneOf(['Select Country'], 'Country is required'),
// });

// const countries = ['Select Country', 'Uzbekistan', 'Saudi Arabia', 'Palestine'];

// const Form: React.FC = () => {
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm<UserSubmitForm>({
//     resolver: yupResolver(validationSchema),
//     defaultValues: {
//       country: '',
//       picture: null,
//       gender: 'male',
//     },
//   });

//   const [showPassword, setShowPassword] = useState(false);
//   const toggleShowPassword = () => {
//     setShowPassword((prev) => !prev);
//   };

//   const onSubmit: SubmitHandler<UserSubmitForm> = (data: UserSubmitForm) => {
//     const passwordValue = data.password;
//     validationSchema
//       .validate({ password: passwordValue })
//       .then(() => {
//         console.log(JSON.stringify(data, null, 2));
//       })
//       .catch((validationError) => {
//         console.error(validationError.message);
//       });
//   };

//   return (
//     <div className="register-form">
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div className="form-group">
//           <label htmlFor="name">Name</label>
//           <input
//             type="text"
//             {...register('name')}
//             className={`form-control ${errors.name ? 'is-invalid' : ''}`}
//           />
//           <div className="invalid-feedback">{errors.name?.message}</div>
//         </div>

//         <div className="form-group">
//           <label htmlFor="age">Age</label>
//           <input
//             type="number"
//             {...register('age')}
//             className={`form-control ${errors.age ? 'is-invalid' : ''}`}
//           />
//           <div className="invalid-feedback">{errors.age?.message}</div>
//         </div>

//         <div className="form-group">
//           <label>Email</label>
//           <input
//             type="text"
//             {...register('email')}
//             className={`form-control ${errors.email ? 'is-invalid' : ''}`}
//           />
//           <div className="invalid-feedback">{errors.email?.message}</div>
//         </div>

//         <div className="form-group">
//           <label>Password</label>
//           <div className="password-input-container">
//             <input
//               type={showPassword ? 'text' : 'password'}
//               {...register('password')}
//               className={`form-control ${errors.password ? 'is-invalid' : ''}`}
//             />
//             <input
//               type="checkbox"
//               id="showPassword"
//               onClick={toggleShowPassword}
//             />
//             <label htmlFor="showPassword">Show Password</label>
//           </div>
//           <div className="invalid-feedback">{errors.password?.message}</div>
//         </div>
//         <div className="form-group">
//           <label>Confirm Password</label>
//           <input
//             type="password"
//             {...register('confirmPassword')}
//             className={`form-control ${
//               errors.confirmPassword ? 'is-invalid' : ''
//             }`}
//           />
//           <div className="invalid-feedback">
//             {errors.confirmPassword?.message}
//           </div>
//         </div>

//         <div className="form-group">
//           <label htmlFor="gender">Gender</label>
//           <select
//             {...register('gender')}
//             className={`form-control ${errors.gender ? 'is-invalid' : ''}`}
//           >
//             <option value="">Select Gender</option>
//             <option value="male">Male</option>
//             <option value="female">Female</option>
//             <option value="other">Other</option>
//           </select>
//           <div className="invalid-feedback">{errors.gender?.message}</div>
//         </div>

//         <div className="form-group">
//           <label htmlFor="picture">Upload Picture</label>
//           <input
//             type="file"
//             {...register('picture')}
//             className={`form-control ${errors.picture ? 'is-invalid' : ''}`}
//           />
//           <div className="invalid-feedback">{errors.picture?.message}</div>
//         </div>

//         <div className="form-group">
//           <label htmlFor="country">Select Country</label>
//           <select
//             {...register('country')}
//             className={`form-control ${errors.country ? 'is-invalid' : ''}`}
//           >
//             {countries.map((country, index) => (
//               <option key={index} value={country}>
//                 {country}
//               </option>
//             ))}
//           </select>
//           <div className="invalid-feedback">{errors.country?.message}</div>
//         </div>

//         <div className="form-group form-check">
//           <input
//             type="checkbox"
//             {...register('acceptTerms')}
//             className={`form-check-input ${
//               errors.acceptTerms ? 'is-invalid' : ''
//             }`}
//           />
//           <label htmlFor="acceptTerms" className="form-check-label">
//             I have read and agree to the Terms
//           </label>
//           <div className="invalid-feedback">{errors.acceptTerms?.message}</div>
//         </div>

//         <div className="form-group btns">
//           <button type="submit" className="btn btn-primary">
//             Register
//           </button>
//           <button
//             type="button"
//             onClick={() => reset()}
//             className="btn btn-warning"
//           >
//             Reset
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Form;
