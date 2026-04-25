import React from 'react';
import { Map, CloudRain, Users, Wifi } from 'lucide-react';
import { Button } from '../ui/Button';

const EnvironmentalFactors = () => {
  return (
    <div>
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2">Environmental Factors</h3>
        <p className="text-gray-400">
          Configure terrain features, civilian considerations, and technology environment parameters.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 bg-gray-800 rounded-lg border border-gray-700">
          <h4 className="text-lg font-medium mb-4 flex items-center">
            <Map className="mr-2 h-5 w-5 text-blue-400" />
            Terrain Features
          </h4>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Key Terrain
              </label>
              <textarea
                className="w-full h-20 rounded-md bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-sm py-2 px-3"
                placeholder="Hills, buildings, bridges, choke points..."
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Obstacles
              </label>
              <div className="flex flex-wrap gap-2">
                {['Rivers', 'Minefields', 'Urban areas', 'Dense vegetation'].map((obstacle) => (
                  <div key={obstacle} className="flex items-center">
                    <input
                      type="checkbox"
                      id={obstacle.replace(/\s+/g, '')}
                      className="rounded border-gray-600 text-blue-600 focus:ring-blue-500 h-4 w-4"
                    />
                    <label htmlFor={obstacle.replace(/\s+/g, '')} className="ml-2 text-sm text-gray-300">
                      {obstacle}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Cover and Concealment
              </label>
              <div className="flex space-x-4">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="natural"
                    name="cover"
                    className="border-gray-600 text-blue-600 focus:ring-blue-500 h-4 w-4"
                  />
                  <label htmlFor="natural" className="ml-2 text-sm text-gray-300">
                    Natural
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="manmade"
                    name="cover"
                    className="border-gray-600 text-blue-600 focus:ring-blue-500 h-4 w-4"
                  />
                  <label htmlFor="manmade" className="ml-2 text-sm text-gray-300">
                    Man-made
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="mixed"
                    name="cover"
                    className="border-gray-600 text-blue-600 focus:ring-blue-500 h-4 w-4"
                  />
                  <label htmlFor="mixed" className="ml-2 text-sm text-gray-300">
                    Mixed
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="p-4 bg-gray-800 rounded-lg border border-gray-700">
          <h4 className="text-lg font-medium mb-4 flex items-center">
            <CloudRain className="mr-2 h-5 w-5 text-blue-400" />
            Weather Conditions
          </h4>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Primary Weather Condition
              </label>
              <select
                className="w-full rounded-md bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-sm py-2 px-3"
              >
                <option value="">Select Weather Condition</option>
                <option>Clear</option>
                <option>Rain</option>
                <option>Snow</option>
                <option>Fog</option>
                <option>Sandstorm</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Time of Day
              </label>
              <select
                className="w-full rounded-md bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-sm py-2 px-3"
              >
                <option value="">Select Time of Day</option>
                <option>Dawn</option>
                <option>Day</option>
                <option>Dusk</option>
                <option>Night</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Weather Impact
              </label>
              <div className="grid grid-cols-2 gap-2">
                {['Visibility', 'Mobility', 'Communications', 'Sensors', 'Air Support'].map((impact) => (
                  <div key={impact} className="flex items-center">
                    <input
                      type="checkbox"
                      id={impact}
                      className="rounded border-gray-600 text-blue-600 focus:ring-blue-500 h-4 w-4"
                    />
                    <label htmlFor={impact} className="ml-2 text-sm text-gray-300">
                      {impact}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 bg-gray-800 rounded-lg border border-gray-700">
          <h4 className="text-lg font-medium mb-4 flex items-center">
            <Users className="mr-2 h-5 w-5 text-blue-400" />
            Civilian Considerations
          </h4>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Population Density
              </label>
              <select
                className="w-full rounded-md bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-sm py-2 px-3"
              >
                <option value="">Select Population Density</option>
                <option>None</option>
                <option>Sparse</option>
                <option>Moderate</option>
                <option>Dense</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Infrastructure
              </label>
              <div className="flex flex-wrap gap-2">
                {['Roads', 'Bridges', 'Communications', 'Power grid'].map((infra) => (
                  <div key={infra} className="flex items-center">
                    <input
                      type="checkbox"
                      id={infra}
                      className="rounded border-gray-600 text-blue-600 focus:ring-blue-500 h-4 w-4"
                    />
                    <label htmlFor={infra} className="ml-2 text-sm text-gray-300">
                      {infra}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Humanitarian Concerns
              </label>
              <textarea
                className="w-full h-20 rounded-md bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-sm py-2 px-3"
                placeholder="Refugee movement, medical facilities, cultural sites..."
              />
            </div>
          </div>
        </div>
        
        <div className="p-4 bg-gray-800 rounded-lg border border-gray-700">
          <h4 className="text-lg font-medium mb-4 flex items-center">
            <Wifi className="mr-2 h-5 w-5 text-blue-400" />
            Technology Environment
          </h4>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Communications
              </label>
              <div className="flex space-x-4">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="secure"
                    name="comms"
                    className="border-gray-600 text-blue-600 focus:ring-blue-500 h-4 w-4"
                  />
                  <label htmlFor="secure" className="ml-2 text-sm text-gray-300">
                    Secure
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="degraded"
                    name="comms"
                    className="border-gray-600 text-blue-600 focus:ring-blue-500 h-4 w-4"
                  />
                  <label htmlFor="degraded" className="ml-2 text-sm text-gray-300">
                    Degraded
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="jammed"
                    name="comms"
                    className="border-gray-600 text-blue-600 focus:ring-blue-500 h-4 w-4"
                  />
                  <label htmlFor="jammed" className="ml-2 text-sm text-gray-300">
                    Jammed
                  </label>
                </div>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Surveillance
              </label>
              <div className="flex flex-wrap gap-2">
                {['Satellite', 'Drone', 'Ground sensors'].map((surveillance) => (
                  <div key={surveillance} className="flex items-center">
                    <input
                      type="checkbox"
                      id={surveillance}
                      className="rounded border-gray-600 text-blue-600 focus:ring-blue-500 h-4 w-4"
                    />
                    <label htmlFor={surveillance} className="ml-2 text-sm text-gray-300">
                      {surveillance}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Electronic Warfare
              </label>
              <div className="flex flex-wrap gap-2">
                {['Active jamming', 'Cyber attacks', 'GPS denial'].map((ew) => (
                  <div key={ew} className="flex items-center">
                    <input
                      type="checkbox"
                      id={ew.replace(/\s+/g, '')}
                      className="rounded border-gray-600 text-blue-600 focus:ring-blue-500 h-4 w-4"
                    />
                    <label htmlFor={ew.replace(/\s+/g, '')} className="ml-2 text-sm text-gray-300">
                      {ew}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-6 p-4 bg-gray-800 rounded-lg border border-gray-700">
        <h4 className="text-lg font-medium mb-4">
          WARSIM Environmental Integration
        </h4>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Weather Data
            </label>
            <input
              type="text"
              className="w-full rounded-md bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-sm py-2 px-3"
              placeholder="From WARSIM meteorological model"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Terrain Effects
            </label>
            <input
              type="text"
              className="w-full rounded-md bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-sm py-2 px-3"
              placeholder="WARSIM terrain coefficient applications"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Visibility Conditions
            </label>
            <input
              type="text"
              className="w-full rounded-md bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-sm py-2 px-3"
              placeholder="WARSIM line-of-sight calculations"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Movement Restrictions
            </label>
            <input
              type="text"
              className="w-full rounded-md bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-sm py-2 px-3"
              placeholder="WARSIM mobility corridor analysis"
            />
          </div>
        </div>
      </div>
      
      <div className="mt-6 flex justify-end space-x-3">
        <Button variant="outline">
          Reset to WARSIM Values
        </Button>
        <Button>
          Save Environmental Configuration
        </Button>
      </div>
    </div>
  );
};

export default EnvironmentalFactors;