import React, { useState } from 'react';
import { Filter, Database, Upload, Check, ChevronRight } from 'lucide-react';
import ScenarioSelector from './scenarios/ScenarioSelector';
import BrigadeLevel from './operational/BrigadeLevel';
import BattalionLevel from './operational/BattalionLevel';
import CompanyLevel from './operational/CompanyLevel';
import EnvironmentalFactors from './environment/EnvironmentalFactors';
import ExecutionTimeline from './execution/ExecutionTimeline';
import VictoryConditions from './assessment/VictoryConditions';
import SpecialInstructions from './instructions/SpecialInstructions';
import ExconMaster from './excon/ExconMaster';

type ActiveTab = 
  | 'scenario'
  | 'excon'
  | 'brigade'
  | 'battalion'
  | 'company'
  | 'environment'
  | 'timeline'
  | 'victory'
  | 'instructions';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState<ActiveTab>('scenario');
  const [importProgress, setImportProgress] = useState(0);
  
  const handleImport = () => {
    setImportProgress(0);
    const interval = setInterval(() => {
      setImportProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 300);
  };

  return (
    <div className="bg-gray-900 rounded-lg shadow-xl overflow-hidden">
      <div className="p-6 bg-gradient-to-r from-blue-900 to-navy-900 border-b border-gray-700">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Mission Command Integration</h2>
            <p className="mt-1 text-blue-300">Connect WARSIM scenarios with Altitude Assault drone operations</p>
          </div>
          
          <div className="mt-4 md:mt-0 flex space-x-3">
            <button 
              onClick={handleImport}
              className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md font-medium transition-colors"
            >
              <Upload size={18} className="mr-2" />
              Import WARSIM
            </button>
            
            <button className="flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 rounded-md font-medium transition-colors">
              <Check size={18} className="mr-2" />
              Save Configuration
            </button>
          </div>
        </div>
        
        {importProgress > 0 && (
          <div className="mt-4">
            <div className="flex justify-between text-xs mb-1">
              <span>Importing WARSIM data...</span>
              <span>{importProgress}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div 
                className="bg-blue-500 h-2 rounded-full transition-all duration-300" 
                style={{ width: `${importProgress}%` }}
              ></div>
            </div>
          </div>
        )}
      </div>
      
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-64 p-4 bg-gray-800 border-r border-gray-700">
          <nav className="space-y-1">
            {[
              { id: 'scenario', label: 'WARSIM Scenario', icon: <Database size={18} /> },
              { id: 'excon', label: 'EXCON Master', icon: <Filter size={18} /> },
              { id: 'brigade', label: 'Brigade Level', icon: <ChevronRight size={18} /> },
              { id: 'battalion', label: 'Battalion Level', icon: <ChevronRight size={18} /> },
              { id: 'company', label: 'Company Level', icon: <ChevronRight size={18} /> },
              { id: 'environment', label: 'Environmental Factors', icon: <ChevronRight size={18} /> },
              { id: 'timeline', label: 'Execution Timeline', icon: <ChevronRight size={18} /> },
              { id: 'victory', label: 'Victory Conditions', icon: <ChevronRight size={18} /> },
              { id: 'instructions', label: 'Special Instructions', icon: <ChevronRight size={18} /> },
            ].map((item) => (
              <button
                key={item.id}
                className={`flex items-center w-full px-3 py-2 text-left rounded-md transition-colors ${
                  activeTab === item.id 
                    ? 'bg-blue-900 text-blue-100' 
                    : 'text-gray-300 hover:bg-gray-700'
                }`}
                onClick={() => setActiveTab(item.id as ActiveTab)}
              >
                <span className="mr-3">{item.icon}</span>
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </div>
        
        <div className="flex-1 p-6 overflow-auto">
          {activeTab === 'scenario' && <ScenarioSelector />}
          {activeTab === 'excon' && <ExconMaster />}
          {activeTab === 'brigade' && <BrigadeLevel />}
          {activeTab === 'battalion' && <BattalionLevel />}
          {activeTab === 'company' && <CompanyLevel />}
          {activeTab === 'environment' && <EnvironmentalFactors />}
          {activeTab === 'timeline' && <ExecutionTimeline />}
          {activeTab === 'victory' && <VictoryConditions />}
          {activeTab === 'instructions' && <SpecialInstructions />}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;