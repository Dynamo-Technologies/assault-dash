import React, { useState } from 'react';
import { Clock, Flag, AlertTriangle } from 'lucide-react';
import { Button } from '../ui/Button';

interface Phase {
  id: string;
  name: string;
  duration: string;
  brigadeActions: string;
  battalionActions: string;
  companyActions: string;
}

const ExecutionTimeline = () => {
  const [phases, setPhases] = useState<Phase[]>([
    {
      id: '1',
      name: 'Phase 1: Initial Movement',
      duration: '0-6 hours',
      brigadeActions: 'Overall movement and positioning',
      battalionActions: 'Specific movements per battalion',
      companyActions: 'Detailed tactical movements'
    },
    {
      id: '2',
      name: 'Phase 2: Main Effort',
      duration: '6-24 hours',
      brigadeActions: 'Command decisions and resource allocation',
      battalionActions: 'Engagement and support coordination',
      companyActions: 'Direct combat and specialized missions'
    },
    {
      id: '3',
      name: 'Phase 3: Consolidation',
      duration: '24+ hours',
      brigadeActions: 'Consolidation and next objectives',
      battalionActions: 'Reorganization and sustainment',
      companyActions: 'Local security and preparation for follow-on missions'
    }
  ]);

  const [selectedPhase, setSelectedPhase] = useState<string | null>(null);
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [timeCompression, setTimeCompression] = useState('1:1');

  const addPhase = () => {
    const newId = (phases.length + 1).toString();
    setPhases([...phases, {
      id: newId,
      name: `Phase ${newId}`,
      duration: '',
      brigadeActions: '',
      battalionActions: '',
      companyActions: ''
    }]);
    setSelectedPhase(newId);
  };

  const updatePhase = (id: string, field: keyof Phase, value: string) => {
    setPhases(phases.map(phase =>
      phase.id === id ? { ...phase, [field]: value } : phase
    ));
  };

  const deletePhase = (id: string) => {
    setPhases(phases.filter(phase => phase.id !== id));
    if (selectedPhase === id) {
      setSelectedPhase(null);
    }
  };

  return (
    <div>
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2">Execution Timeline</h3>
        <p className="text-gray-400">
          Configure the operational timeline and phase-based execution plan.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <div className="p-4 bg-gray-800 rounded-lg border border-gray-700">
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-lg font-medium flex items-center">
                <Clock className="mr-2 h-5 w-5 text-blue-400" />
                Operation Phases
              </h4>
              <Button
                size="sm"
                onClick={addPhase}
                disabled={phases.length >= 6}
              >
                Add Phase
              </Button>
            </div>

            <div className="space-y-2">
              {phases.map(phase => (
                <button
                  key={phase.id}
                  onClick={() => setSelectedPhase(phase.id)}
                  className={`w-full text-left p-3 rounded-md transition-colors ${
                    selectedPhase === phase.id
                      ? 'bg-blue-900 border border-blue-700'
                      : 'bg-gray-700 border border-gray-600 hover:bg-gray-600'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium">
                      {phase.name}
                    </span>
                    <span className="text-xs px-2 py-1 rounded-full bg-gray-800 text-gray-300">
                      {phase.duration || 'No duration set'}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 p-4 bg-gray-800 rounded-lg border border-gray-700">
            <h4 className="text-lg font-medium mb-4 flex items-center">
              <Flag className="mr-2 h-5 w-5 text-blue-400" />
              WARSIM Timeline Integration
            </h4>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  STARTEX (Exercise Start)
                </label>
                <input
                  type="datetime-local"
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                  className="w-full rounded-md bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-sm py-2 px-3"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  ENDEX (Exercise End)
                </label>
                <input
                  type="datetime-local"
                  value={endTime}
                  onChange={(e) => setEndTime(e.target.value)}
                  className="w-full rounded-md bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-sm py-2 px-3"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Time Compression Ratio
                </label>
                <select
                  value={timeCompression}
                  onChange={(e) => setTimeCompression(e.target.value)}
                  className="w-full rounded-md bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-sm py-2 px-3"
                >
                  <option value="1:1">1:1 (Real-time)</option>
                  <option value="2:1">2:1 (Double-speed)</option>
                  <option value="4:1">4:1 (Quad-speed)</option>
                  <option value="6:1">6:1 (6x speed)</option>
                  <option value="12:1">12:1 (12x speed)</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-2">
          {selectedPhase ? (
            <div className="p-4 bg-gray-800 rounded-lg border border-gray-700">
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-lg font-medium">
                  Phase Configuration
                </h4>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => deletePhase(selectedPhase)}
                >
                  Delete Phase
                </Button>
              </div>

              {phases.find(phase => phase.id === selectedPhase) && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Phase Name
                    </label>
                    <input
                      type="text"
                      value={phases.find(phase => phase.id === selectedPhase)?.name || ''}
                      onChange={(e) => updatePhase(selectedPhase, 'name', e.target.value)}
                      className="w-full rounded-md bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-sm py-2 px-3"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Duration
                    </label>
                    <input
                      type="text"
                      value={phases.find(phase => phase.id === selectedPhase)?.duration || ''}
                      onChange={(e) => updatePhase(selectedPhase, 'duration', e.target.value)}
                      placeholder="e.g., 0-6 hours, 6-24 hours"
                      className="w-full rounded-md bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-sm py-2 px-3"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Brigade Actions
                    </label>
                    <textarea
                      value={phases.find(phase => phase.id === selectedPhase)?.brigadeActions || ''}
                      onChange={(e) => updatePhase(selectedPhase, 'brigadeActions', e.target.value)}
                      placeholder="Describe brigade-level actions for this phase"
                      className="w-full h-24 rounded-md bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-sm py-2 px-3"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Battalion Actions
                    </label>
                    <textarea
                      value={phases.find(phase => phase.id === selectedPhase)?.battalionActions || ''}
                      onChange={(e) => updatePhase(selectedPhase, 'battalionActions', e.target.value)}
                      placeholder="Describe battalion-level actions for this phase"
                      className="w-full h-24 rounded-md bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-sm py-2 px-3"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Company Actions
                    </label>
                    <textarea
                      value={phases.find(phase => phase.id === selectedPhase)?.companyActions || ''}
                      onChange={(e) => updatePhase(selectedPhase, 'companyActions', e.target.value)}
                      placeholder="Describe company-level actions for this phase"
                      className="w-full h-24 rounded-md bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-sm py-2 px-3"
                    />
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="h-full flex items-center justify-center p-8 bg-gray-800 rounded-lg border border-gray-700">
              <div className="text-center">
                <Clock className="h-10 w-10 text-gray-500 mx-auto mb-3" />
                <p className="text-gray-400">
                  Select a phase from the list or add a new one to configure its details.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="mt-6 p-4 bg-gray-800 rounded-lg border border-gray-700">
        <div className="flex items-start">
          <AlertTriangle className="h-5 w-5 text-yellow-400 mr-2 mt-0.5" />
          <div>
            <h4 className="font-medium text-yellow-300">Timeline Synchronization</h4>
            <p className="text-sm text-gray-300 mt-1">
              Ensure all phase timings align with WARSIM STARTEX and ENDEX times. Time compression settings will affect how the timeline is executed in Altitude Assault.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 flex justify-end space-x-3">
        <Button variant="outline">
          Reset to WARSIM Values
        </Button>
        <Button>
          Save Timeline Configuration
        </Button>
      </div>
    </div>
  );
};

export default ExecutionTimeline;