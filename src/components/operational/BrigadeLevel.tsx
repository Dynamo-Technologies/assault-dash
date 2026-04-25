import React, { useState } from 'react';
import { Shield, Users, Truck, Plane } from 'lucide-react';
import FormField from '../ui/FormField';
import { Button } from '../ui/Button';

const BrigadeLevel = () => {
  const [brigadeType, setBrigadeType] = useState('');
  const [brigadeSize, setBrigadeSize] = useState('');
  const [commanderRank, setCommanderRank] = useState('');
  
  const brigadeTypes = [
    'Infantry BCT',
    'Armored BCT',
    'Stryker BCT',
    'Marine Expeditionary Brigade',
    'Airborne',
    'Air Assault'
  ];
  
  return (
    <div>
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2">Brigade Level (Strategic Command)</h3>
        <p className="text-gray-400">
          Configure the primary force structure and supporting elements at the brigade level.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-6">
          <div className="p-4 bg-gray-800 rounded-lg border border-gray-700">
            <h4 className="text-lg font-medium mb-4 flex items-center">
              <Shield className="mr-2 h-5 w-5 text-blue-400" />
              Primary Force Structure
            </h4>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Brigade Type
                </label>
                <select
                  value={brigadeType}
                  onChange={(e) => setBrigadeType(e.target.value)}
                  className="w-full rounded-md bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-sm py-2 px-3"
                >
                  <option value="">Select Brigade Type</option>
                  {brigadeTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
              
              <FormField
                id="brigadeSize"
                label="Brigade Size"
                type="text"
                value={brigadeSize}
                onChange={(e) => setBrigadeSize(e.target.value)}
                placeholder="3,000-5,000 personnel"
              />
            </div>
          </div>
          
          <div className="p-4 bg-gray-800 rounded-lg border border-gray-700">
            <h4 className="text-lg font-medium mb-4 flex items-center">
              <Users className="mr-2 h-5 w-5 text-blue-400" />
              Command Structure
            </h4>
            
            <div className="space-y-4">
              <FormField
                id="commanderRank"
                label="Brigade Commander"
                type="text"
                value={commanderRank}
                onChange={(e) => setCommanderRank(e.target.value)}
                placeholder="Rank and experience level"
              />
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Staff Sections
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {['S1-Personnel', 'S2-Intelligence', 'S3-Operations', 'S4-Logistics', 'S6-Communications'].map((section) => (
                    <div key={section} className="flex items-center">
                      <input
                        type="checkbox"
                        id={section}
                        className="rounded border-gray-600 text-blue-600 focus:ring-blue-500 h-4 w-4"
                      />
                      <label htmlFor={section} className="ml-2 text-sm text-gray-300">
                        {section}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="p-4 bg-gray-800 rounded-lg border border-gray-700">
            <h4 className="text-lg font-medium mb-4 flex items-center">
              <Plane className="mr-2 h-5 w-5 text-blue-400" />
              Supporting Elements
            </h4>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Artillery Support
                </label>
                <select
                  className="w-full rounded-md bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-sm py-2 px-3"
                >
                  <option value="">Select Artillery Support</option>
                  <option>Field Artillery Battalion</option>
                  <option>Multiple Launch Rocket System</option>
                  <option>Naval Fire Support</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Air Support
                </label>
                <select
                  className="w-full rounded-md bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-sm py-2 px-3"
                >
                  <option value="">Select Air Support</option>
                  <option>Close Air Support</option>
                  <option>Attack Aviation</option>
                  <option>Transport Aviation</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Logistics
                </label>
                <select
                  className="w-full rounded-md bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-sm py-2 px-3"
                >
                  <option value="">Select Logistics</option>
                  <option>Forward Support Company</option>
                  <option>Brigade Support Battalion</option>
                </select>
              </div>
            </div>
          </div>
          
          <div className="p-4 bg-gray-800 rounded-lg border border-gray-700">
            <h4 className="text-lg font-medium mb-4 flex items-center">
              <Truck className="mr-2 h-5 w-5 text-blue-400" />
              WARSIM Integration Parameters
            </h4>
            
            <div className="space-y-4">
              <FormField
                id="uic"
                label="Unit Identification Code (UIC)"
                type="text"
                value=""
                onChange={() => {}}
                placeholder="From WARSIM database"
              />
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Force Structure
                </label>
                <div className="flex space-x-4">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="warsimOrbat"
                      name="forceStructure"
                      className="border-gray-600 text-blue-600 focus:ring-blue-500 h-4 w-4"
                    />
                    <label htmlFor="warsimOrbat" className="ml-2 text-sm text-gray-300">
                      WARSIM ORBAT
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="modified"
                      name="forceStructure"
                      className="border-gray-600 text-blue-600 focus:ring-blue-500 h-4 w-4"
                    />
                    <label htmlFor="modified" className="ml-2 text-sm text-gray-300">
                      Modified
                    </label>
                  </div>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Training Readiness
                </label>
                <select
                  className="w-full rounded-md bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-sm py-2 px-3"
                >
                  <option value="">Select C-Rating</option>
                  <option>C1 - Fully Combat Ready</option>
                  <option>C2 - Substantially Combat Ready</option>
                  <option>C3 - Marginally Combat Ready</option>
                  <option>C4 - Not Combat Ready</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-6 p-4 bg-gray-800 rounded-lg border border-gray-700">
        <h4 className="text-lg font-medium mb-4 flex items-center">
          <Shield className="mr-2 h-5 w-5 text-red-400" />
          Opposition Force (OPFOR)
        </h4>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Enemy Brigade
            </label>
            <input
              type="text"
              className="w-full rounded-md bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-sm py-2 px-3"
              placeholder="Type and composition"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Enemy Capabilities
            </label>
            <select
              className="w-full rounded-md bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-sm py-2 px-3"
            >
              <option value="">Select Capability</option>
              <option>Conventional</option>
              <option>Irregular</option>
              <option>Hybrid warfare</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Enemy Assets
            </label>
            <select
              className="w-full rounded-md bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-sm py-2 px-3"
            >
              <option value="">Select Assets</option>
              <option>Air defense</option>
              <option>Armor</option>
              <option>Artillery</option>
              <option>Electronic warfare</option>
            </select>
          </div>
        </div>
      </div>
      
      <div className="mt-6 flex justify-end space-x-3">
        <Button variant="outline">
          Reset to WARSIM Values
        </Button>
        <Button>
          Save Brigade Configuration
        </Button>
      </div>
    </div>
  );
};

export default BrigadeLevel;