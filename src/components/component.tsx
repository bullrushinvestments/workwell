import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useMediaQuery } from 'react-responsive';

interface BusinessSpecification {
  id: number;
  name: string;
  description: string;
}

const CreateBusinessSpecification: React.FC = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const [specifications, setSpecifications] = useState<BusinessSpecification[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSpecifications = async () => {
      try {
        const response = await axios.get<BusinessSpecification[]>('https://api.example.com/business-specifications');
        setSpecifications(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load business specifications.');
        setLoading(false);
      }
    };

    fetchSpecifications();
  }, []);

  if (loading) return <div className="text-center py-10">Loading...</div>;
  if (error) return <div role="alert" aria-live="assertive">{error}</div>;

  return (
    <div className={clsx('p-6', isMobile ? 'max-w-sm mx-auto' : 'max-w-screen-lg mx-auto')}>
      {specifications.map(spec => (
        <div key={spec.id} className="mb-4 border-b pb-2 last:border-none">
          <h3 className="text-xl font-semibold">{spec.name}</h3>
          <p dangerouslySetInnerHTML={{ __html: spec.description }} />
        </div>
      ))}
    </div>
  );
};

export default CreateBusinessSpecification;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useMediaQuery } from 'react-responsive';

interface BusinessSpecification {
  id: number;
  name: string;
  description: string;
}

const CreateBusinessSpecification: React.FC = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const [specifications, setSpecifications] = useState<BusinessSpecification[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSpecifications = async () => {
      try {
        const response = await axios.get<BusinessSpecification[]>('https://api.example.com/business-specifications');
        setSpecifications(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load business specifications.');
        setLoading(false);
      }
    };

    fetchSpecifications();
  }, []);

  if (loading) return <div className="text-center py-10">Loading...</div>;
  if (error) return <div role="alert" aria-live="assertive">{error}</div>;

  return (
    <div className={clsx('p-6', isMobile ? 'max-w-sm mx-auto' : 'max-w-screen-lg mx-auto')}>
      {specifications.map(spec => (
        <div key={spec.id} className="mb-4 border-b pb-2 last:border-none">
          <h3 className="text-xl font-semibold">{spec.name}</h3>
          <p dangerouslySetInnerHTML={{ __html: spec.description }} />
        </div>
      ))}
    </div>
  );
};

export default CreateBusinessSpecification;