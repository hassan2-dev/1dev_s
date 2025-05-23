import React from 'react';
import { Check } from 'lucide-react';

interface ServiceFeature {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
}

interface ServiceCardProps {
  service: ServiceFeature;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="p-6">
        <div className="mb-4">{service.icon}</div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
        <p className="text-gray-600 mb-6">{service.description}</p>
        <ul className="space-y-2">
          {service.features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <span className="flex-shrink-0 w-5 h-5 bg-teal-100 rounded-full flex items-center justify-center mr-2">
                <Check className="w-3 h-3 text-teal-600" />
              </span>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceCard;