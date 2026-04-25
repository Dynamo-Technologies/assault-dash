import React, { useState } from 'react';
import { Users, Crosshair, Map } from 'lucide-react';
import { Button } from '../ui/Button';

interface Company {
  id: string;
  name: string;
  type: string;
  personnel: string;
  weapons: string;
  vehicles: string;
  equipment: string;
  mission: string;
  location: string;
}

const CompanyLevel = () => {
  const [companies, setCompanies] = useState<Company[]>([
    { 
      id: '1', 
      name: 'Alpha Company',
      type: 'Rifle', 
      personnel: '150', 
      weapons: 'M4 Carbines, M249 SAWs, M240B MGs, M320 GLs',
      vehicles: 'HMMWV, MRAP',
      equipment: 'PRC-117G, PAS-13 Thermal Sights, PSQ-20 NVGs',
      mission: 'Secure crossroads at grid AB123456',
      location: 'Grid AB123456'
    },
    { 
      id: '2', 
      name: 'Bravo Company',
      type: 'Heavy Weapons', 
      personnel: '120', 
      weapons: 'M4 Carbines, Mk19 GMGs, M2 .50 cal HMGs, Javelin ATGMs',
      vehicles: 'M1126 Stryker ICV',
      equipment: 'Surveillance Drones, Tactical Datalinks',
      mission: 'Provide support by fire from ridge line at grid AB234567',
      location: 'Grid AB234567'
    }
  ]);
  
  const [selectedCompany, setSelectedCompany] = useState<string | null>(null);
  
  const companyTypes = [
    'Rifle',
    'Heavy Weapons',
    'Tank',
    'Engineer',
    'Aviation',
    'Special Operations'
  ];
  
  const addCompany = () => {
    const newId = (companies.length + 1).toString();
    const newName = `${String.fromCharCode(65 + companies.length)} Company`;
    setCompanies([...companies, {
      id: newId,
      name: newName,
      type: '',
      personnel: '',
      weapons: '',
      vehicles: '',
      equipment: '',
      mission: '',
      location: ''
    }]);
    setSelectedCompany(newId);
  };
  
  const updateCompany = (id: string, field: keyof Company, value: string) => {
    setCompanies(companies.map(co => 
      co.id === id ? { ...co, [field]: value } : co
    ));
  };
  
  const deleteCompany = (id: string) => {
    setCompanies(companies.filter(co => co.id !== id));
    if (selectedCompany === id) {
      setSelectedCompany(null);
    }
  };

  return (
    <div>
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2">Company Level (Tactical Execution)</h3>
        <p className="text-gray-400">
          Configure primary companies and specialized teams at the company level.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <div className="p-4 bg-gray-800 rounded-lg border border-gray-700">
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-lg font-medium flex items-center">
                <Users className="mr-2 h-5 w-5 text-blue-400" />
                Primary Companies
              </h4>
              <Button 
                size="sm" 
                onClick={addCompany}
                disabled={companies.length >= 6}
              >
                Add Company
              </Button>
            </div>
            
            <div className="space-y-2">
              {companies.map(company => (
                <button
                  key={company.id}
                  onClick={() => setSelectedCompany(company.id)}
                  className={`w-full text-left p-3 rounded-md transition-colors ${
                    selectedCompany === company.id
                      ? 'bg-blue-900 border border-blue-700'
                      : 'bg-gray-700 border border-gray-600 hover:bg-gray-600'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium">
                      {company.name}
                    </span>
                    <span className="text-xs px-2 py-1 rounded-full bg-gray-800 text-gray-300">
                      {company.type || 'Unassigned'}
                    </span>
                  </div>
                  <div className="text-sm text-gray-400 mt-1">
                    Personnel: {company.personnel || 'Not specified'}
                  </div>
                </button>
              ))}
              
              {companies.length === 0 && (
                <div className="text-center p-4 text-gray-500 italic text-sm">
                  No companies added. Click "Add Company" to create one.
                </div>
              )}
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-gray-800 rounded-lg border border-gray-700">
            <h4 className="text-lg font-medium mb-4 flex items-center">
              <Crosshair className="mr-2 h-5 w-5 text-blue-400" />
              Specialized Teams
            </h4>
            
            <div className="space-y-3">
              {[
                'Electronic Warfare Team',
                'Intelligence Team',
                'Medical Team',
                'Engineer Team',
                'Aviation Team'
              ].map((team) => (
                <div key={team} className="flex items-center">
                  <input
                    type="checkbox"
                    id={team.replace(/\s+/g, '')}
                    className="rounded border-gray-600 text-blue-600 focus:ring-blue-500 h-4 w-4"
                  />
                  <label htmlFor={team.replace(/\s+/g, '')} className="ml-2 text-sm text-gray-300">
                    {team}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="md:col-span-2">
          {selectedCompany ? (
            <div className="p-4 bg-gray-800 rounded-lg border border-gray-700">
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-lg font-medium">
                  {companies.find(co => co.id === selectedCompany)?.name || 'Company Configuration'}
                </h4>
                <Button 
                  variant="destructive" 
                  size="sm" 
                  onClick={() => deleteCompany(selectedCompany)}
                >
                  Delete Company
                </Button>
              </div>
              
              {companies.find(co => co.id === selectedCompany) && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        value={companies.find(co => co.id === selectedCompany)?.name || ''}
                        onChange={(e) => updateCompany(selectedCompany, 'name', e.target.value)}
                        className="w-full rounded-md bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-sm py-2 px-3"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Company Type
                      </label>
                      <select
                        value={companies.find(co => co.id === selectedCompany)?.type || ''}
                        onChange={(e) => updateCompany(selectedCompany, 'type', e.target.value)}
                        className="w-full rounded-md bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-sm py-2 px-3"
                      >
                        <option value="">Select Company Type</option>
                        {companyTypes.map(type => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Personnel
                    </label>
                    <input
                      type="text"
                      value={companies.find(co => co.id === selectedCompany)?.personnel || ''}
                      onChange={(e) => updateCompany(selectedCompany, 'personnel', e.target.value)}
                      placeholder="100-200 soldiers"
                      className="w-full rounded-md bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-sm py-2 px-3"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Equipment Loadout
                    </label>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-gray-400 mb-1">
                          Primary Weapons
                        </label>
                        <textarea
                          value={companies.find(co => co.id === selectedCompany)?.weapons || ''}
                          onChange={(e) => updateCompany(selectedCompany, 'weapons', e.target.value)}
                          placeholder="Individual and crew-served weapons"
                          className="w-full h-20 rounded-md bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-sm py-2 px-3"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-xs font-medium text-gray-400 mb-1">
                          Vehicles
                        </label>
                        <textarea
                          value={companies.find(co => co.id === selectedCompany)?.vehicles || ''}
                          onChange={(e) => updateCompany(selectedCompany, 'vehicles', e.target.value)}
                          placeholder="Transport/Combat vehicles"
                          className="w-full h-20 rounded-md bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-sm py-2 px-3"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-xs font-medium text-gray-400 mb-1">
                          Special Equipment
                        </label>
                        <textarea
                          value={companies.find(co => co.id === selectedCompany)?.equipment || ''}
                          onChange={(e) => updateCompany(selectedCompany, 'equipment', e.target.value)}
                          placeholder="Communication/Surveillance/Specialized tools"
                          className="w-full h-20 rounded-md bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-sm py-2 px-3"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Tactical Mission
                    </label>
                    <textarea
                      value={companies.find(co => co.id === selectedCompany)?.mission || ''}
                      onChange={(e) => updateCompany(selectedCompany, 'mission', e.target.value)}
                      placeholder="Specific objective and method"
                      className="w-full h-20 rounded-md bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-sm py-2 px-3"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Deployment Location
                    </label>
                    <div className="flex">
                      <input
                        type="text"
                        value={companies.find(co => co.id === selectedCompany)?.location || ''}
                        onChange={(e) => updateCompany(selectedCompany, 'location', e.target.value)}
                        placeholder="Grid coordinate or terrain feature"
                        className="flex-1 rounded-l-md bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-sm py-2 px-3"
                      />
                      <button
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 rounded-r-md flex items-center"
                      >
                        <Map size={16} className="mr-1" />
                        Map
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="h-full flex items-center justify-center p-8 bg-gray-800 rounded-lg border border-gray-700">
              <div className="text-center">
                <Users className="h-10 w-10 text-gray-500 mx-auto mb-3" />
                <p className="text-gray-400">
                  Select a company from the list or add a new one to configure its details.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <div className="mt-6 flex justify-end space-x-3">
        <Button variant="outline">
          Reset to WARSIM Values
        </Button>
        <Button>
          Save Company Configuration
        </Button>
      </div>
    </div>
  );
};

export default CompanyLevel;