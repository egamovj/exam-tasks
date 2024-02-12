/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import Modal from 'react-modal';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import './Form.css';

type UserSubmitForm = {
  fullname: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  age: number;
  acceptTerms: boolean;
  picture: FileList;
};

const Forms: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState<UserSubmitForm | null>(null);

  const validationSchema = Yup.object().shape({
    fullname: Yup.string().required('Fullname is required'),
    username: Yup.string()
      .required('Username is required')
      .min(6, 'Username must be at least 6 characters')
      .max(20, 'Username must not exceed 20 characters'),
    email: Yup.string().required('Email is required').email('Email is invalid'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters')
      .max(40, 'Password must not exceed 40 characters'),
    confirmPassword: Yup.string()
      .required('Confirm Password is required')
      .oneOf([Yup.ref('password')], 'Confirm Password does not match'),
    age: Yup.number()
      .positive('Age should be a positive number')
      .required('Age is required'),
    acceptTerms: Yup.bool().oneOf([true], 'Accept Terms is required'),
    picture: Yup.mixed()
      .test(
        'fileSize',
        'File size is too large',
        (value) => value && value[0].size <= 1048576
      )
      .test(
        'fileType',
        'Invalid file type, only PNG and JPEG are allowed',
        (value) =>
          value &&
          (value[0].type === 'image/png' || value[0].type === 'image/jpeg')
      ),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UserSubmitForm>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: any) => {
    setFormData(data);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="register-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            {...register('fullname')}
            className={`form-control ${errors.fullname ? 'is-invalid' : ''}`}
          />
          <div className="invalid-feedback">{errors.fullname?.message}</div>
        </div>

        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            {...register('username')}
            className={`form-control ${errors.username ? 'is-invalid' : ''}`}
          />
          <div className="invalid-feedback">{errors.username?.message}</div>
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="text"
            {...register('email')}
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
          />
          <div className="invalid-feedback">{errors.email?.message}</div>
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            {...register('password')}
            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
          />
          <div className="invalid-feedback">{errors.password?.message}</div>
        </div>

        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            {...register('confirmPassword')}
            className={`form-control ${
              errors.confirmPassword ? 'is-invalid' : ''
            }`}
          />
          <div className="invalid-feedback">
            {errors.confirmPassword?.message}
          </div>
        </div>

        <div className="form-group">
          <label>Age</label>
          <input
            type="number"
            {...register('age')}
            className={`form-control ${errors.age ? 'is-invalid' : ''}`}
          />
          <div className="invalid-feedback">{errors.age?.message}</div>
        </div>

        <div className="form-group">
          <label>Upload Picture</label>
          <input
            type="file"
            {...register('picture')}
            className={`form-control ${errors.picture ? 'is-invalid' : ''}`}
          />
          <div className="invalid-feedback">{errors.picture?.message}</div>
        </div>

        <div className="form-group">
          <input
            type="checkbox"
            {...register('acceptTerms')}
            className={`form-check-input ${
              errors.acceptTerms ? 'is-invalid' : ''
            }`}
          />
          <label htmlFor="acceptTerms" className="form-check-label">
            I have read and agree to the Terms
          </label>
          <div className="invalid-feedback">{errors.acceptTerms?.message}</div>
        </div>

        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            Register
          </button>
          <button
            type="button"
            onClick={() => reset()}
            className="btn btn-warning float-right"
          >
            Reset
          </button>
        </div>
      </form>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Form Data Modal"
      >
        <h2>Form Data</h2>
        {formData && <pre>{JSON.stringify(formData, null, 2)}</pre>}
        <button onClick={closeModal}>Close Modal</button>
      </Modal>
    </div>
  );
};

export default Forms;
