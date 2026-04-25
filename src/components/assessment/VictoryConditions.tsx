import React, { useState } from 'react';
import { Target, AlertCircle, Flag, XCircle } from 'lucide-react';
import { Button } from '../ui/Button';

interface Objective {
  id: string;
  description: string;
  type: 'primary' | 'secondary';
  completed: boolean;
}

const VictoryConditions = () => {
  const [objectives, setObjectives] = useState<Objective[]>([
    { id: '1', description: 'Secure key terrain features in Grid AB123456', type: 'primary', completed: false },
    { id: '2', description: 'Establish blocking positions along MSR GOLD', type: 'primary', completed: false },
    { id: '3', description: 'Maintain communication links with adjacent units', type: 'secondary', completed: false }
  ]);
  
  const [failureConditions, setFailureConditions] = useState([
    { id: '1', description: 'Casualty rate exceeds 30% of combat strength', active: true },
    { id: '2', description: 'Loss of command and control for > 2 hours', active: true },
    { id: '3', description: 'Enemy breakthrough of main defensive line', active: true }
  ]);
  
  const toggleObjectiveCompletion = (id: string) => {
    setObjectives(objectives.map(obj => 
      obj.id === id ? { ...obj, completed: !obj.completed } : obj
    ));
  };
  
  const toggleFailureCondition = (id: string) => {
    setFailureConditions(conditions => 
      conditions.map(condition =>
        condition.id === id ? { ...condition, active: !condition.active } : condition
      )
    );
  };

  return (
    <div>
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2">Victory Conditions & Assessment</h3>
        <p className="text-gray-400">
          Define mission success criteria and failure conditions for scenario completion.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-6">
          <div className="p-4 bg-gray-800 rounded-lg border border-gray-700">
            <h4 className="text-lg font-medium mb-4 flex items-center">
              <Target className="mr-2 h-5 w-5 text-blue-400" />
              Primary Objectives
            </h4>
            
            <div className="space-y-3">
              {objectives.filter(obj => obj.type === 'primary').map((objective) => (
                <div
                  key={objective.id}
                  className={`p-3 rounded-md border ${
                    objective.completed
                      ? 'bg-green-900 bg-opacity-20 border-green-700'
                      : 'bg-gray-700 border-gray-600'
                  }`}
                >
                  <div className="flex items-start">
                    <div className="flex-1">
                      <p className="text-sm">{objective.description}</p>
                    </div>
                    <button
                      onClick={() => toggleObjectiveCompletion(objective.id)}
                      className={`ml-3 p-1 rounded-md transition-colors ${
                        objective.completed
                          ? 'text-green-400 hover:text-green-300'
                          : 'text-gray-400 hover:text-gray-300'
                      }`}
                    >
                      {objective.completed ? (
                        <Flag className="h-5 w-5" />
                      ) : (
                        <Target className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="p-4 bg-gray-800 rounded-lg border border-gray-700">
            <h4 className="text-lg font-medium mb-4 flex items-center">
              <Flag className="mr-2 h-5 w-5 text-blue-400" />
              Secondary Objectives
            </h4>
            
            <div className="space-y-3">
              {objectives.filter(obj => obj.type === 'secondary').map((objective) => (
                <div
                  key={objective.id}
                  className={`p-3 rounded-md border ${
                    objective.completed
                      ? 'bg-green-900 bg-opacity-20 border-green-700'
                      : 'bg-gray-700 border-gray-600'
                  }`}
                >
                  <div className="flex items-start">
                    <div className="flex-1">
                      <p className="text-sm">{objective.description}</p>
                    </div>
                    <button
                      onClick={() => toggleObjectiveCompletion(objective.id)}
                      className={`ml-3 p-1 rounded-md transition-colors ${
                        objective.completed
                          ? 'text-green-400 hover:text-green-300'
                          : 'text-gray-400 hover:text-gray-300'
                      }`}
                    >
                      {objective.completed ? (
                        <Flag className="h-5 w-5" />
                      ) : (
                        <Target className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="p-4 bg-gray-800 rounded-lg border border-gray-700">
            <h4 className="text-lg font-medium mb-4 flex items-center">
              <XCircle className="mr-2 h-5 w-5 text-red-400" />
              Failure Conditions
            </h4>
            
            <div className="space-y-3">
              {failureConditions.map((condition) => (
                <div
                  key={condition.id}
                  className={`p-3 rounded-md border ${
                    condition.active
                      ? 'bg-red-900 bg-opacity-20 border-red-700'
                      : 'bg-gray-700 border-gray-600'
                  }`}
                >
                  <div className="flex items-start">
                    <div className="flex-1">
                      <p className="text-sm">{condition.description}</p>
                    </div>
                    <button
                      onClick={() => toggleFailureCondition(condition.id)}
                      className={`ml-3 p-1 rounded-md transition-colors ${
                        condition.active
                          ? 'text-red-400 hover:text-red-300'
                          : 'text-gray-400 hover:text-gray-300'
                      }`}
                    >
                      <AlertCircle className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="p-4 bg-gray-800 rounded-lg border border-gray-700">
            <h4 className="text-lg font-medium mb-4">
              WARSIM Assessment Integration
            </h4>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Assessment Method
                </label>
                <select
                  className="w-full rounded-md bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-sm py-2 px-3"
                >
                  <option value="">Select Method</option>
                  <option>Automated WARSIM scoring</option>
                  <option>Manual controller assessment</option>
                  <option>Hybrid evaluation</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Success Metrics
                </label>
                <div className="space-y-2">
                  {['Force ratios', 'Territory control', 'Casualty rates', 'Mission timing'].map((metric) => (
                    <div key={metric} className="flex items-center">
                      <input
                        type="checkbox"
                        id={metric.replace(/\s+/g, '')}
                        className="rounded border-gray-600 text-blue-600 focus:ring-blue-500 h-4 w-4"
                      />
                      <label htmlFor={metric.replace(/\s+/g, '')} className="ml-2 text-sm text-gray-300">
                        {metric}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Data Collection Points
                </label>
                <div className="space-y-2">
                  {['Phase transitions', 'Key events', 'Time-based intervals', 'Critical incidents'].map((point) => (
                    <div key={point} className="flex items-center">
                      <input
                        type="checkbox"
                        id={point.replace(/\s+/g, '')}
                        className="rounded border-gray-600 text-blue-600 focus:ring-blue-500 h-4 w-4"
                      />
                      <label htmlFor={point.replace(/\s+/g, '')} className="ml-2 text-sm text-gray-300">
                        {point}
                      </label>
                    </div>
                  ))}
                </div>
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
          Save Victory Conditions
        </Button>
      </div>
    </div>
  );
};

export default VictoryConditions;