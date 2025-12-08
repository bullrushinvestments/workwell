import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';

interface TestimonialFormInputs {
  name: string;
  email: string;
  message: string;
}

const WriteTestimonial: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<TestimonialFormInputs>();

  const onSubmit: SubmitHandler<TestimonialFormInputs> = (data) => {
    setLoading(true);
    axios.post('/api/testimonials', data)
      .then(response => {
        console.log('Testimonial submitted successfully:', response.data);
        reset();
      })
      .catch(err => {
        setError(`Failed to submit testimonial: ${err.message}`);
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded shadow-md">
      <h2 className="text-xl font-semibold mb-4">Write a Testimonial</h2>
      {error && <p role="alert" className="mb-4 text-red-500">{error}</p>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-1">Name:</label>
          <input
            id="name"
            type="text"
            {...register('name', { required: 'Name is required' })}
            className={`w-full p-2 border rounded ${errors.name ? 'border-red-500' : ''}`}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1">Email:</label>
          <input
            id="email"
            type="email"
            {...register('email', { required: 'Email is required' })}
            className={`w-full p-2 border rounded ${errors.email ? 'border-red-500' : ''}`}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block mb-1">Message:</label>
          <textarea
            id="message"
            {...register('message', { required: 'Message is required' })}
            rows={5}
            className={`w-full p-2 border rounded ${errors.message ? 'border-red-500' : ''}`}
          />
        </div>
        <button type="submit" disabled={loading} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          {loading ? 'Submitting...' : 'Submit Testimonial'}
        </button>
      </form>
    </div>
  );
};

export default WriteTestimonial;

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';

interface TestimonialFormInputs {
  name: string;
  email: string;
  message: string;
}

const WriteTestimonial: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<TestimonialFormInputs>();

  const onSubmit: SubmitHandler<TestimonialFormInputs> = (data) => {
    setLoading(true);
    axios.post('/api/testimonials', data)
      .then(response => {
        console.log('Testimonial submitted successfully:', response.data);
        reset();
      })
      .catch(err => {
        setError(`Failed to submit testimonial: ${err.message}`);
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded shadow-md">
      <h2 className="text-xl font-semibold mb-4">Write a Testimonial</h2>
      {error && <p role="alert" className="mb-4 text-red-500">{error}</p>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-1">Name:</label>
          <input
            id="name"
            type="text"
            {...register('name', { required: 'Name is required' })}
            className={`w-full p-2 border rounded ${errors.name ? 'border-red-500' : ''}`}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1">Email:</label>
          <input
            id="email"
            type="email"
            {...register('email', { required: 'Email is required' })}
            className={`w-full p-2 border rounded ${errors.email ? 'border-red-500' : ''}`}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block mb-1">Message:</label>
          <textarea
            id="message"
            {...register('message', { required: 'Message is required' })}
            rows={5}
            className={`w-full p-2 border rounded ${errors.message ? 'border-red-500' : ''}`}
          />
        </div>
        <button type="submit" disabled={loading} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          {loading ? 'Submitting...' : 'Submit Testimonial'}
        </button>
      </form>
    </div>
  );
};

export default WriteTestimonial;