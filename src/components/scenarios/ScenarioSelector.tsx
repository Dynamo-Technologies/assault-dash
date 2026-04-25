import React, { useState } from 'react';
import { Calendar, Clock, Filter, FileText } from 'lucide-react';
import FormField from '../ui/FormField';
import { Button } from '../ui/Button';

interface Scenario {
  id: string;
  name: string;
  date: string;
  time: string;
  status: 'new' | 'existing' | 'modified';
}

const mockScenarios: Scenario[] = [
  { id: 'WS-2025-001', name: 'Operation Desert Shield', date: '2025-03-15', time: '09:00', status: 'existing' },
  { id: 'WS-2025-002', name: 'Defensive Line Echo', date: '2025-04-22', time: '14:30', status: 'modified' },
  { id: 'WS-2025-003', name: 'Urban Combat Alpha', date: '2025-05-10', time: '06:15', status: 'new' },
  { id: 'WS-2025-004', name: 'Air Assault Bravo', date: '2025-06-01', time: '23:45', status: 'existing' }
];

const ScenarioSelector = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [selectedScenario, setSelectedScenario] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredScenarios = mockScenarios.filter(scenario => {
    const matchesSearch = scenario.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          scenario.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDate = !startDate || scenario.date >= startDate;
    const matchesEndDate = !endDate || scenario.date <= endDate;
    
    return matchesSearch && matchesDate && matchesEndDate;
  });

  return (
    <div>
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-4">WARSIM Scenario Integration</h3>
        <p className="text-gray-400">
          Select a WARSIM scenario to import. You can filter scenarios by date, time, or search for specific names.
        </p>
      </div>
      
      <div className="p-4 bg-gray-800 rounded-lg mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <FormField
            id="startDate"
            label="Start Date"
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            icon={<Calendar size={18} />}
          />
          
          <FormField
            id="endDate"
            label="End Date"
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            icon={<Calendar size={18} />}
          />
          
          <FormField
            id="searchScenario"
            label="Search Scenarios"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by name or ID..."
            icon={<Filter size={18} />}
          />
        </div>
        
        <Button variant="outline" size="sm" className="w-full">
          Apply Filters
        </Button>
      </div>
      
      <div className="overflow-hidden rounded-lg border border-gray-700">
        <table className="w-full text-sm">
          <thead className="bg-gray-800">
            <tr>
              <th className="px-4 py-3 text-left">Scenario ID</th>
              <th className="px-4 py-3 text-left">Name</th>
              <th className="px-4 py-3 text-left">Date</th>
              <th className="px-4 py-3 text-left">Time</th>
              <th className="px-4 py-3 text-left">Status</th>
              <th className="px-4 py-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {filteredScenarios.map((scenario) => (
              <tr 
                key={scenario.id} 
                className={`${
                  selectedScenario === scenario.id 
                    ? 'bg-blue-900 bg-opacity-30' 
                    : 'hover:bg-gray-800'
                } transition-colors`}
              >
                <td className="px-4 py-3 font-mono text-blue-400">{scenario.id}</td>
                <td className="px-4 py-3 font-medium">{scenario.name}</td>
                <td className="px-4 py-3 text-gray-300">{scenario.date}</td>
                <td className="px-4 py-3 text-gray-300">{scenario.time}</td>
                <td className="px-4 py-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    scenario.status === 'new' 
                      ? 'bg-green-900 text-green-300' 
                      : scenario.status === 'modified' 
                        ? 'bg-yellow-900 text-yellow-300' 
                        : 'bg-blue-900 text-blue-300'
                  }`}>
                    {scenario.status.charAt(0).toUpperCase() + scenario.status.slice(1)}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <Button
                    size="sm"
                    variant={selectedScenario === scenario.id ? "default" : "outline"}
                    onClick={() => setSelectedScenario(scenario.id)}
                  >
                    {selectedScenario === scenario.id ? 'Selected' : 'Select'}
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {selectedScenario && (
        <div className="mt-6 p-4 bg-blue-900 bg-opacity-20 border border-blue-700 rounded-lg">
          <div className="flex items-center">
            <FileText className="h-6 w-6 text-blue-400 mr-2" />
            <h4 className="text-lg font-medium">Selected Scenario: {mockScenarios.find(s => s.id === selectedScenario)?.name}</h4>
          </div>
          <p className="mt-2 text-gray-300">
            This scenario will be used as the base for integration with Altitude Assault. 
            Proceed to the EXCON Master tab to continue configuration.
          </p>
          <div className="flex mt-4 space-x-3">
            <Button>
              Load Full Scenario
            </Button>
            <Button variant="outline">
              View Details
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScenarioSelector;