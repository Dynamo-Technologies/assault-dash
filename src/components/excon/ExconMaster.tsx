import React, { useState } from 'react';
import { MessageSquare, AlertCircle, FileCheck } from 'lucide-react';
import { Button } from '../ui/Button';

const llmOptions = [
  { id: 'gpt4', name: 'ChatGPT 4.0' },
  { id: 'claude4', name: 'Claude 4.0' },
  { id: 'llama75b', name: 'Llama 75b' }
];

const ExconMaster = () => {
  const [selectedLLM, setSelectedLLM] = useState<string[]>([]);
  const [exconNotes, setExconNotes] = useState(
    `MASTER SCENARIO EVENT LIST (MSEL) INTEGRATION:
- Key decision points and timeline
- Predetermined outcomes and branch scenarios  
- White cell interventions and adjustments
- Assessment criteria and learning objectives

BATTLE DAMAGE ASSESSMENT (BDA) PARAMETERS:
- Casualty generation rules
- Equipment loss ratios
- Resupply and reconstitution timelines
- Medical evacuation procedures

COMMUNICATIONS ENVIRONMENT:
- Radio frequencies and call signs
- Encryption keys and authentication
- Communications degradation timeline
- Cyber warfare effects on communications

INTELLIGENCE PICTURE:
- Initial enemy situation template (SITTEMP)
- Enemy courses of action (ECOA)
- Intelligence collection plan
- Predetermined intelligence reports timeline

SPECIAL INSTRUCTIONS:
- Safety constraints and real-world considerations
- Weather and environmental effects
- Coalition/joint force integration requirements
- Observer-controller guidance and intervention points`
  );
  
  const [classification, setClassification] = useState('UNCLASSIFIED');
  const [outcomes, setOutcomes] = useState('');
  const [dataFiles, setDataFiles] = useState('');
  const [processingStatus, setProcessingStatus] = useState<null | 'processing' | 'complete'>(null);

  const handleLLMToggle = (llmId: string) => {
    setSelectedLLM(prev => 
      prev.includes(llmId) 
        ? prev.filter(id => id !== llmId) 
        : [...prev, llmId]
    );
  };

  const handleProcessNotes = () => {
    setProcessingStatus('processing');
    
    // Simulate processing
    setTimeout(() => {
      setProcessingStatus('complete');
    }, 2000);
  };

  return (
    <div>
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2">EXCON (Exercise Controller) Master Scenario</h3>
        <div className="flex items-center mb-4">
          <span className="text-sm font-medium mr-2">Classification:</span>
          <span className="px-2 py-1 bg-green-900 text-green-300 rounded text-xs font-bold">
            {classification}
          </span>
        </div>
        <p className="text-gray-400 mb-4">
          This section allows Exercise Controllers to document scenario details and use AI assistance for processing.
        </p>
      </div>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Exercise Controller Notes
          </label>
          <textarea
            value={exconNotes}
            onChange={(e) => setExconNotes(e.target.value)}
            className="w-full h-64 rounded-md bg-gray-800 border border-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 p-3 text-sm font-mono"
            placeholder="Enter EXCON notes here..."
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Select AI Model for Processing
          </label>
          <div className="flex flex-wrap gap-3">
            {llmOptions.map((llm) => (
              <button
                key={llm.id}
                onClick={() => handleLLMToggle(llm.id)}
                className={`px-4 py-2 rounded-md text-sm font-medium border ${
                  selectedLLM.includes(llm.id)
                    ? 'bg-blue-900 border-blue-500 text-blue-100'
                    : 'bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700'
                } transition-colors`}
              >
                <span className={selectedLLM.includes(llm.id) ? 'text-blue-300' : 'text-gray-400'}>
                  {llm.name}
                </span>
              </button>
            ))}
          </div>
        </div>
        
        <Button 
          onClick={handleProcessNotes}
          className="w-full"
          disabled={selectedLLM.length === 0 || processingStatus === 'processing'}
        >
          {processingStatus === 'processing' ? (
            <>Processing Notes...</>
          ) : processingStatus === 'complete' ? (
            <>
              <FileCheck className="mr-2 h-4 w-4" /> 
              Processing Complete
            </>
          ) : (
            <>
              <MessageSquare className="mr-2 h-4 w-4" /> 
              Process with AI
            </>
          )}
        </Button>
        
        {processingStatus === 'complete' && (
          <div className="p-4 bg-green-900 bg-opacity-20 border border-green-700 rounded-lg">
            <div className="flex items-start">
              <FileCheck className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
              <div>
                <h4 className="font-medium text-green-300">AI Processing Complete</h4>
                <p className="text-sm text-gray-300 mt-1">
                  The AI has analyzed your EXCON notes and extracted key information.
                  Relevant data has been mapped to appropriate sections in the scenario configuration.
                </p>
              </div>
            </div>
          </div>
        )}
        
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            EXCON Scenario Outcomes
          </label>
          <textarea
            value={outcomes}
            onChange={(e) => setOutcomes(e.target.value)}
            className="w-full h-32 rounded-md bg-gray-800 border border-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 p-3 text-sm"
            placeholder="Enter predetermined results, learning objectives, and assessment focus areas..."
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            WARSIM Data Files
          </label>
          <textarea
            value={dataFiles}
            onChange={(e) => setDataFiles(e.target.value)}
            className="w-full h-24 rounded-md bg-gray-800 border border-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 p-3 text-sm"
            placeholder="List associated data files, order of battle files, or terrain databases..."
          />
        </div>
        
        <div className="p-4 bg-yellow-900 bg-opacity-20 border border-yellow-700 rounded-lg">
          <div className="flex items-start">
            <AlertCircle className="h-5 w-5 text-yellow-400 mr-2 mt-0.5" />
            <div>
              <h4 className="font-medium text-yellow-300">Classification Reminder</h4>
              <p className="text-sm text-gray-300 mt-1">
                All content in this system must remain UNCLASSIFIED. Do not enter any classified information.
                If you need to reference classified materials, use appropriate code names or unclassified summaries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExconMaster;