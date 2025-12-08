import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { Spinner } from '@chakra-ui/react';

interface Requirement {
  id: number;
  name: string;
  description?: string;
  isEssential: boolean;
}

interface GatherRequirementsProps {
  businessType: string;
}

const GatherRequirements: React.FC<GatherRequirementsProps> = ({ businessType }) => {
  const [requirements, setRequirements] = useState<Requirement[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRequirements = async () => {
      try {
        const response = await axios.get(`https://api.example.com/requirements?businessType=${businessType}`);
        setRequirements(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load requirements');
        setLoading(false);
      }
    };

    fetchRequirements();
  }, [businessType]);

  if (loading) return <Spinner className="mx-auto my-10" thickness="4px" speed="0.65s" emptyColor="gray.200" color="blue.500" size="xl" />;
  
  if (error) return <div className={clsx('text-center', 'my-10')}>{error}</div>;

  return (
    <div className="px-4 py-6">
      {requirements.map((requirement, index) => (
        <div key={index} className={`mb-4 ${requirement.isEssential ? 'border-red-500' : ''}`}>
          <h3 className="text-lg font-medium mb-2">{requirement.name}</h3>
          <p className="text-gray-700">
            {requirement.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default GatherRequirements;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { Spinner } from '@chakra-ui/react';

interface Requirement {
  id: number;
  name: string;
  description?: string;
  isEssential: boolean;
}

interface GatherRequirementsProps {
  businessType: string;
}

const GatherRequirements: React.FC<GatherRequirementsProps> = ({ businessType }) => {
  const [requirements, setRequirements] = useState<Requirement[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRequirements = async () => {
      try {
        const response = await axios.get(`https://api.example.com/requirements?businessType=${businessType}`);
        setRequirements(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load requirements');
        setLoading(false);
      }
    };

    fetchRequirements();
  }, [businessType]);

  if (loading) return <Spinner className="mx-auto my-10" thickness="4px" speed="0.65s" emptyColor="gray.200" color="blue.500" size="xl" />;
  
  if (error) return <div className={clsx('text-center', 'my-10')}>{error}</div>;

  return (
    <div className="px-4 py-6">
      {requirements.map((requirement, index) => (
        <div key={index} className={`mb-4 ${requirement.isEssential ? 'border-red-500' : ''}`}>
          <h3 className="text-lg font-medium mb-2">{requirement.name}</h3>
          <p className="text-gray-700">
            {requirement.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default GatherRequirements;