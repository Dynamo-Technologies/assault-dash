import React, { useState } from 'react';
import { Users, Target, Radio, Database } from 'lucide-react';
import { Button } from '../ui/Button';

interface Battalion {
  id: string;
  type: string;
  strength: string;
  equipment: string;
  role: string;
}

const BattalionLevel = () => {
  const [battalions, setBattalions] = useState<Battalion[]>([
    { id: '1', type: 'Infantry', strength: '650', equipment: 'M4 Carbines, M249 SAWs, M240B MGs', role: 'Main effort' },
    { id: '2', type: 'Tank', strength: '580', equipment: 'M1A2 Abrams, M2 Bradley IFVs', role: 'Supporting effort' }
  ]);
  
  const [selectedBattalion, setSelectedBattalion] = useState<string | null>(null);
  
  const battalionTypes = [
    'Infantry',
    'Tank',
    'Artillery',
    'Engineer',
    'Aviation',
    'Special Forces'
  ];
  
  const missionRoles = [
    'Main effort',
    'Supporting effort',
    'Reserve',
    'Reconnaissance'
  ];
  
  const addBattalion = () => {
    const newId = (battalions.length + 1).toString();
    setBattalions([...battalions, {
      id: newId,
      type: '',
      strength: '',
      equipment: '',
      role: ''
    }]);
    setSelectedBattalion(newId);
  };
  
  const updateBattalion = (id: string, field: keyof Battalion, value: string) => {
    setBattalions(battalions.map(bn => 
      bn.id === id ? { ...bn, [field]: value } : bn
    ));
  };
  
  const deleteBattalion = (id: string) => {
    setBattalions(battalions.filter(bn => bn.id !== id));
    if (selectedBattalion === id) {
      setSelectedBattalion(null);
    }
  };

  return (
    <div>
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2">Battalion Level (Operational Control)</h3>
        <p className="text-gray-400">
          Configure primary battalions and specialized assets at the battalion level.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <div className="p-4 bg-gray-800 rounded-lg border border-gray-700">
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-lg font-medium flex items-center">
                <Users className="mr-2 h-5 w-5 text-blue-400" />
                Primary Battalions
              </h4>
              <Button 
                size="sm" 
                onClick={addBattalion}
                disabled={battalions.length >= 4}
              >
                Add Battalion
              </Button>
            </div>
            
            <div className="space-y-2">
              {battalions.map(battalion => (
                <button
                  key={battalion.id}
                  onClick={() => setSelectedBattalion(battalion.id)}
                  className={`w-full text-left p-3 rounded-md transition-colors ${
                    selectedBattalion === battalion.id
                      ? 'bg-blue-900 border border-blue-700'
                      : 'bg-gray-700 border border-gray-600 hover:bg-gray-600'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium">
                      {battalion.type || 'Unnamed Battalion'}
                    </span>
                    <span className="text-xs px-2 py-1 rounded-full bg-gray-800 text-gray-300">
                      {battalion.role || 'Unassigned'}
                    </span>
                  </div>
                  <div className="text-sm text-gray-400 mt-1">
                    Strength: {battalion.strength || 'Not specified'}
                  </div>
                </button>
              ))}
              
              {battalions.length === 0 && (
                <div className="text-center p-4 text-gray-500 italic text-sm">
                  No battalions added. Click "Add Battalion" to create one.
                </div>
              )}
            </div>
          </div>
        </div>
        
        <div className="md:col-span-2">
          {selectedBattalion ? (
            <div className="p-4 bg-gray-800 rounded-lg border border-gray-700">
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-lg font-medium">
                  Battalion Configuration
                </h4>
                <Button 
                  variant="destructive" 
                  size="sm" 
                  onClick={() => deleteBattalion(selectedBattalion)}
                >
                  Delete Battalion
                </Button>
              </div>
              
              {battalions.find(bn => bn.id === selectedBattalion) && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Battalion Type
                    </label>
                    <select
                      value={battalions.find(bn => bn.id === selectedBattalion)?.type || ''}
                      onChange={(e) => updateBattalion(selectedBattalion, 'type', e.target.value)}
                      className="w-full rounded-md bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-sm py-2 px-3"
                    >
                      <option value="">Select Battalion Type</option>
                      {battalionTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Strength
                    </label>
                    <input
                      type="text"
                      value={battalions.find(bn => bn.id === selectedBattalion)?.strength || ''}
                      onChange={(e) => updateBattalion(selectedBattalion, 'strength', e.target.value)}
                      placeholder="400-800 personnel"
                      className="w-full rounded-md bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-sm py-2 px-3"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Primary Equipment
                    </label>
                    <textarea
                      value={battalions.find(bn => bn.id === selectedBattalion)?.equipment || ''}
                      onChange={(e) => updateBattalion(selectedBattalion, 'equipment', e.target.value)}
                      placeholder="Vehicles, weapons systems, specialized gear"
                      className="w-full h-20 rounded-md bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-sm py-2 px-3"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Mission Role
                    </label>
                    <select
                      value={battalions.find(bn => bn.id === selectedBattalion)?.role || ''}
                      onChange={(e) => updateBattalion(selectedBattalion, 'role', e.target.value)}
                      className="w-full rounded-md bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-sm py-2 px-3"
                    >
                      <option value="">Select Mission Role</option>
                      {missionRoles.map(role => (
                        <option key={role} value={role}>{role}</option>
                      ))}
                    </select>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="h-full flex items-center justify-center p-8 bg-gray-800 rounded-lg border border-gray-700">
              <div className="text-center">
                <Target className="h-10 w-10 text-gray-500 mx-auto mb-3" />
                <p className="text-gray-400">
                  Select a battalion from the list or add a new one to configure its details.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 bg-gray-800 rounded-lg border border-gray-700">
          <h4 className="text-lg font-medium mb-4 flex items-center">
            <Radio className="mr-2 h-5 w-5 text-blue-400" />
            Specialized Battalion Assets
          </h4>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Intelligence/Electronic Warfare
              </label>
              <select
                className="w-full rounded-md bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-sm py-2 px-3"
              >
                <option value="">Select Asset</option>
                <option>SIGINT Company</option>
                <option>Cyber Operations</option>
                <option>Electronic Attack</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Combat Support
              </label>
              <select
                className="w-full rounded-md bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-sm py-2 px-3"
              >
                <option value="">Select Support</option>
                <option>Engineer Company</option>
                <option>Air Defense</option>
                <option>Chemical, Biological, Radiological, Nuclear (CBRN)</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Combat Service Support
              </label>
              <select
                className="w-full rounded-md bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-sm py-2 px-3"
              >
                <option value="">Select Service Support</option>
                <option>Medical Company</option>
                <option>Maintenance Company</option>
                <option>Supply Company</option>
              </select>
            </div>
          </div>
        </div>
        
        <div className="p-4 bg-gray-800 rounded-lg border border-gray-700">
          <h4 className="text-lg font-medium mb-4 flex items-center">
            <Database className="mr-2 h-5 w-5 text-blue-400" />
            WARSIM Battle Tracking
          </h4>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Battle Tracking Number (BTN)
              </label>
              <input
                type="text"
                className="w-full rounded-md bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-sm py-2 px-3"
                placeholder="From WARSIM system"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Automated Battle Effects
              </label>
              <div className="flex flex-wrap gap-2">
                {['Casualties', 'Equipment losses', 'Ammunition consumption'].map((effect) => (
                  <div key={effect} className="flex items-center">
                    <input
                      type="checkbox"
                      id={effect.replace(/\s+/g, '')}
                      className="rounded border-gray-600 text-blue-600 focus:ring-blue-500 h-4 w-4"
                    />
                    <label htmlFor={effect.replace(/\s+/g, '')} className="ml-2 text-sm text-gray-300">
                      {effect}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                WARSIM Adjudication
              </label>
              <div className="flex space-x-4">
                {['Automatic', 'Controller intervention', 'Mixed mode'].map((mode) => (
                  <div key={mode} className="flex items-center">
                    <input
                      type="radio"
                      id={mode.replace(/\s+/g, '')}
                      name="adjudication"
                      className="border-gray-600 text-blue-600 focus:ring-blue-500 h-4 w-4"
                    />
                    <label htmlFor={mode.replace(/\s+/g, '')} className="ml-2 text-sm text-gray-300">
                      {mode}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-6 flex justify-end space-x-3">
        <Button variant="outline">
          Reset to WARSIM Values
        </Button>
        <Button>
          Save Battalion Configuration
        </Button>
      </div>
    </div>
  );
};

export default BattalionLevel;