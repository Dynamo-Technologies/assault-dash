import React, { useState } from 'react';
import { Shield, Users, AlertCircle, FileCheck } from 'lucide-react';
import { Button } from '../ui/Button';

const SpecialInstructions = () => {
  const [roe, setRoe] = useState('');
  const [coordination, setCoordination] = useState('');
  const [constraints, setConstraints] = useState('');
  const [innovation, setInnovation] = useState('');
  const [exportPath, setExportPath] = useState('');
  const [warsimVersion, setWarsimVersion] = useState('');
  const [compatibility, setCompatibility] = useState('');
  const [savedStatus, setSavedStatus] = useState<'unsaved' | 'saving' | 'saved'>('unsaved');

  const handleSave = () => {
    setSavedStatus('saving');
    setTimeout(() => {
      setSavedStatus('saved');
    }, 1500);
  };

  return (
    <div>
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2">Special Instructions</h3>
        <p className="text-gray-400">
          Configure rules of engagement, coordination requirements, and resource constraints.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-6">
          <div className="p-4 bg-gray-800 rounded-lg border border-gray-700">
            <h4 className="text-lg font-medium mb-4 flex items-center">
              <Shield className="mr-2 h-5 w-5 text-blue-400" />
              Rules of Engagement
            </h4>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  ROE Details
                </label>
                <textarea
                  value={roe}
                  onChange={(e) => setRoe(e.target.value)}
                  className="w-full h-32 rounded-md bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-sm py-2 px-3"
                  placeholder="Specify restrictions on use of force..."
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Force Protection Status
                </label>
                <select
                  className="w-full rounded-md bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-sm py-2 px-3"
                >
                  <option value="">Select Status</option>
                  <option>FPCON Alpha</option>
                  <option>FPCON Bravo</option>
                  <option>FPCON Charlie</option>
                  <option>FPCON Delta</option>
                </select>
              </div>
            </div>
          </div>
          
          <div className="p-4 bg-gray-800 rounded-lg border border-gray-700">
            <h4 className="text-lg font-medium mb-4 flex items-center">
              <Users className="mr-2 h-5 w-5 text-blue-400" />
              Coordination Requirements
            </h4>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Joint Operations
                </label>
                <textarea
                  value={coordination}
                  onChange={(e) => setCoordination(e.target.value)}
                  className="w-full h-32 rounded-md bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-sm py-2 px-3"
                  placeholder="Specify coordination with coalition forces and civilian authorities..."
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Required Coordination
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {['Air Space', 'Fire Support', 'Intelligence', 'Logistics', 'Medical'].map((coord) => (
                    <div key={coord} className="flex items-center">
                      <input
                        type="checkbox"
                        id={coord.replace(/\s+/g, '')}
                        className="rounded border-gray-600 text-blue-600 focus:ring-blue-500 h-4 w-4"
                      />
                      <label htmlFor={coord.replace(/\s+/g, '')} className="ml-2 text-sm text-gray-300">
                        {coord}
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
              <AlertCircle className="mr-2 h-5 w-5 text-blue-400" />
              Resource Constraints
            </h4>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Limitations
                </label>
                <textarea
                  value={constraints}
                  onChange={(e) => setConstraints(e.target.value)}
                  className="w-full h-32 rounded-md bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-sm py-2 px-3"
                  placeholder="Specify ammunition limits, fuel restrictions, time pressures..."
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Innovation Opportunities
                </label>
                <textarea
                  value={innovation}
                  onChange={(e) => setInnovation(e.target.value)}
                  className="w-full h-32 rounded-md bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-sm py-2 px-3"
                  placeholder="Specify experimental tactics, new technology, adaptive strategies..."
                />
              </div>
            </div>
          </div>
          
          <div className="p-4 bg-gray-800 rounded-lg border border-gray-700">
            <h4 className="text-lg font-medium mb-4">
              WARSIM Data Export/Integration
            </h4>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Scenario File Export
                </label>
                <input
                  type="text"
                  value={exportPath}
                  onChange={(e) => setExportPath(e.target.value)}
                  className="w-full rounded-md bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-sm py-2 px-3"
                  placeholder=".warsim file path/Database connection string"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  WARSIM Version
                </label>
                <input
                  type="text"
                  value={warsimVersion}
                  onChange={(e) => setWarsimVersion(e.target.value)}
                  className="w-full rounded-md bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-sm py-2 px-3"
                  placeholder="Software version and patch level"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Compatibility Notes
                </label>
                <textarea
                  value={compatibility}
                  onChange={(e) => setCompatibility(e.target.value)}
                  className="w-full h-20 rounded-md bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-sm py-2 px-3"
                  placeholder="Any modifications needed for import/export..."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          {savedStatus === 'saved' && (
            <>
              <FileCheck className="h-5 w-5 text-green-400" />
              <span className="text-green-400 text-sm">Changes saved</span>
            </>
          )}
        </div>
        
        <div className="flex space-x-3">
          <Button variant="outline">
            Reset to WARSIM Values
          </Button>
          <Button
            onClick={handleSave}
            disabled={savedStatus === 'saving'}
          >
            {savedStatus === 'saving' ? 'Saving...' : 'Save Instructions'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SpecialInstructions;