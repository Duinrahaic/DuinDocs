"use client"

import React, { useState } from 'react';
import { treadmillData } from '@/data/treadmills';

// Feature name mapping
const featureNameMap: Record<string, string> = {
  "speedControl": "Speed Control",
  "inclineControl": "Incline Control",
  "heartRate": "Heart Rate Monitor"
};

// Weight class categorization using kg ranges
const getWeightClass = (weight?: { maxUser: number; unit: string }) => {
  if (!weight) return "Not Specified";

  // Convert to kg if in pounds
  const maxUserKg = weight.unit === 'lb' ? weight.maxUser * 0.453592 : weight.maxUser;

  if (maxUserKg < 120) return "Under 120 kg";
  if (maxUserKg < 130) return "120-130 kg";
  if (maxUserKg < 140) return "130-140 kg";
  return "140+ kg";
};

// Transform data for display
const treadmills = treadmillData.treadmills.map(t => {
  const features = t.features.map(f => featureNameMap[f] || f);

  const weightClass = getWeightClass(t.weight);

  // Collect all notes
  const allNotes: string[] = [];
  if (t.sharedNotes && t.sharedNotes.length > 0) {
    allNotes.push(...t.sharedNotes);
  }
  t.vendorApps.forEach(app => {
    if (app.notes && app.notes.length > 0) {
      allNotes.push(...app.notes);
    }
  });

  return {
    make: t.make,
    model: t.model,
    features: features.join(', '),
    rawFeatures: t.features,
    driver: t.driver,
    vendorApps: t.vendorApps.filter(app => app.supported).map(app => app.name),
    weight: t.weight,
    weightClass: weightClass,
    notes: allNotes,
    source: t.source
  };
});

// Categorize features into groups
const categorizeFeatures = () => {
  const vendorAppsSet = new Set<string>();
  const driversSet = new Set<string>();
  const featuresSet = new Set<string>();
  const weightClassesMap = new Map<string, number>();

  treadmills.forEach(treadmill => {
    // Add vendor apps
    treadmill.vendorApps.forEach(app => vendorAppsSet.add(app));

    // Add driver
    driversSet.add(treadmill.driver);

    // Add features
    treadmill.rawFeatures.forEach(feature => {
      const displayName = featureNameMap[feature] || feature;
      featuresSet.add(displayName);
    });

    // Count weight classes
    const count = weightClassesMap.get(treadmill.weightClass) || 0;
    weightClassesMap.set(treadmill.weightClass, count + 1);
  });

  // Custom sort for weight classes
  const weightClassOrder = [
    "Under 120 kg",
    "120-130 kg",
    "130-140 kg",
    "140+ kg",
    "Not Specified"
  ];

  const sortedWeightClasses = Array.from(weightClassesMap.keys()).sort((a, b) => {
    return weightClassOrder.indexOf(a) - weightClassOrder.indexOf(b);
  });

  return {
    vendorApps: Array.from(vendorAppsSet).sort(),
    drivers: Array.from(driversSet).sort(),
    features: Array.from(featuresSet).sort(),
    weightClasses: sortedWeightClasses,
    weightClassCounts: weightClassesMap
  };
};

type TreadmillInfo = {
  make: string;
  model: string;
  features: string;
  rawFeatures: string[];
  driver: string;
  vendorApps: string[];
  weight?: { maxUser: number; unit: string };
  weightClass: string;
  notes: string[];
  source?: { name: string; url: string };
};

export const TreadmillTable = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [showFeatureDropdown, setShowFeatureDropdown] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTreadmill, setSelectedTreadmill] = useState<TreadmillInfo | null>(null);
  const itemsPerPage = 15;

  const categorizedFeatures = categorizeFeatures();

  // Calculate counts for each filter option based on current filters
  const getFilterCounts = () => {
    const vendorAppCounts = new Map<string, number>();
    const driverCounts = new Map<string, number>();
    const featureCounts = new Map<string, number>();
    const weightClassCounts = new Map<string, number>();

    // For each treadmill, check if it matches all currently selected filters EXCEPT the one we're counting
    treadmills.forEach(treadmill => {
      const treadmillMatches = (excludeFeature?: string) => {
        if (selectedFeatures.length === 0) return true;

        return selectedFeatures
          .filter(f => f !== excludeFeature)
          .every(feature => {
            if (treadmill.features.includes(feature)) return true;
            if (treadmill.weightClass === feature) return true;
            return false;
          });
      };

      // Count vendor apps
      treadmill.vendorApps.forEach(app => {
        if (treadmillMatches(app)) {
          vendorAppCounts.set(app, (vendorAppCounts.get(app) || 0) + 1);
        }
      });

      // Count drivers
      if (treadmillMatches(treadmill.driver)) {
        driverCounts.set(treadmill.driver, (driverCounts.get(treadmill.driver) || 0) + 1);
      }

      // Count features
      treadmill.rawFeatures.forEach(feature => {
        const displayName = featureNameMap[feature] || feature;
        if (treadmillMatches(displayName)) {
          featureCounts.set(displayName, (featureCounts.get(displayName) || 0) + 1);
        }
      });

      // Count weight classes
      if (treadmillMatches(treadmill.weightClass)) {
        weightClassCounts.set(treadmill.weightClass, (weightClassCounts.get(treadmill.weightClass) || 0) + 1);
      }
    });

    return { vendorAppCounts, driverCounts, featureCounts, weightClassCounts };
  };

  const filterCounts = getFilterCounts();

  const toggleFeature = (feature: string) => {
    setSelectedFeatures(prev =>
      prev.includes(feature)
        ? prev.filter(f => f !== feature)
        : [...prev, feature]
    );
    setCurrentPage(1);
  };

  const clearFilters = () => {
    setSelectedFeatures([]);
    setSearchTerm('');
    setCurrentPage(1);
  };

  const filteredTreadmills = treadmills.filter(treadmill => {
    // Search filter
    const searchLower = searchTerm.toLowerCase();
    const matchesSearch = searchTerm === '' || (
      treadmill.make.toLowerCase().includes(searchLower) ||
      treadmill.model.toLowerCase().includes(searchLower) ||
      treadmill.features.toLowerCase().includes(searchLower)||
      treadmill.driver.toLowerCase().includes(searchLower)
    );

    // Feature filter - check if all selected features match
    const matchesFeatures = selectedFeatures.length === 0 ||
      selectedFeatures.every(feature => {
        // Check if it's in features string
        if (treadmill.features.includes(feature)) return true;
        // Check if it's the weight class
        if (treadmill.weightClass === feature) return true;
        // Check if it's the driver
        if (treadmill.driver === feature) return true;
        // Check if it's in vendor apps
        if (treadmill.vendorApps.includes(feature)) return true;
        return false;
      });

    return matchesSearch && matchesFeatures;
  });

  // Pagination
  const totalPages = Math.ceil(filteredTreadmills.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedTreadmills = filteredTreadmills.slice(startIndex, endIndex);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div className="my-9">
      <div className="mb-4 space-y-3">
        <div className="flex gap-3 items-start">
          <input
            type="text"
            placeholder="Search by make, model, or features..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="flex-1 px-4 py-2 border border-gray-600 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <div className="relative flex-1">
            <button
              onClick={() => setShowFeatureDropdown(!showFeatureDropdown)}
              className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-800 text-white text-left focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center justify-between"
            >
              <span>
                {selectedFeatures.length === 0
                  ? 'Filter by features...'
                  : `${selectedFeatures.length} feature${selectedFeatures.length > 1 ? 's' : ''} selected`}
              </span>
              <span className="text-gray-400">{showFeatureDropdown ? '▲' : '▼'}</span>
            </button>

          {showFeatureDropdown && (
            <div className="absolute z-10 w-full mt-1 bg-gray-800 border border-gray-600 rounded-lg shadow-lg max-h-64 overflow-y-auto">
              {/* Vendor Apps Section */}
              {categorizedFeatures.vendorApps.length > 0 && (
                <div>
                  <div className="px-4 py-2 bg-gray-900 border-b border-gray-700 text-xs font-semibold text-gray-400 uppercase tracking-wider sticky top-0">
                    Vendor Apps
                  </div>
                  {categorizedFeatures.vendorApps.map(feature => {
                    const count = filterCounts.vendorAppCounts.get(feature) || 0;
                    return (
                      <label
                        key={feature}
                        className="flex items-center justify-between px-4 py-2 hover:bg-gray-700 cursor-pointer"
                      >
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            checked={selectedFeatures.includes(feature)}
                            onChange={() => toggleFeature(feature)}
                            className="mr-3 w-4 h-4 rounded border-gray-600 bg-gray-700 text-blue-500 focus:ring-2 focus:ring-blue-500"
                          />
                          <span className="text-white text-sm">{feature}</span>
                        </div>
                        <span className="text-gray-400 text-xs">({count})</span>
                      </label>
                    );
                  })}
                </div>
              )}

              {/* Drivers Section */}
              {categorizedFeatures.drivers.length > 0 && (
                <div>
                  <div className="px-4 py-2 bg-gray-900 border-b border-gray-700 text-xs font-semibold text-gray-400 uppercase tracking-wider sticky top-0">
                    Drivers
                  </div>
                  {categorizedFeatures.drivers.map(feature => {
                    const count = filterCounts.driverCounts.get(feature) || 0;
                    return (
                      <label
                        key={feature}
                        className="flex items-center justify-between px-4 py-2 hover:bg-gray-700 cursor-pointer"
                      >
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            checked={selectedFeatures.includes(feature)}
                            onChange={() => toggleFeature(feature)}
                            className="mr-3 w-4 h-4 rounded border-gray-600 bg-gray-700 text-blue-500 focus:ring-2 focus:ring-blue-500"
                          />
                          <span className="text-white text-sm">{feature}</span>
                        </div>
                        <span className="text-gray-400 text-xs">({count})</span>
                      </label>
                    );
                  })}
                </div>
              )}

              {/* Features Section */}
              {categorizedFeatures.features.length > 0 && (
                <div>
                  <div className="px-4 py-2 bg-gray-900 border-b border-gray-700 text-xs font-semibold text-gray-400 uppercase tracking-wider sticky top-0">
                    Features
                  </div>
                  {categorizedFeatures.features.map(feature => {
                    const count = filterCounts.featureCounts.get(feature) || 0;
                    return (
                      <label
                        key={feature}
                        className="flex items-center justify-between px-4 py-2 hover:bg-gray-700 cursor-pointer"
                      >
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            checked={selectedFeatures.includes(feature)}
                            onChange={() => toggleFeature(feature)}
                            className="mr-3 w-4 h-4 rounded border-gray-600 bg-gray-700 text-blue-500 focus:ring-2 focus:ring-blue-500"
                          />
                          <span className="text-white text-sm">{feature}</span>
                        </div>
                        <span className="text-gray-400 text-xs">({count})</span>
                      </label>
                    );
                  })}
                </div>
              )}

              {/* Weight Classes Section */}
              {categorizedFeatures.weightClasses.length > 0 && (
                <div>
                  <div className="px-4 py-2 bg-gray-900 border-b border-gray-700 text-xs font-semibold text-gray-400 uppercase tracking-wider sticky top-0">
                    Weight Capacity
                  </div>
                  {categorizedFeatures.weightClasses.map(weightClass => {
                    const count = filterCounts.weightClassCounts.get(weightClass) || 0;
                    return (
                      <label
                        key={weightClass}
                        className="flex items-center justify-between px-4 py-2 hover:bg-gray-700 cursor-pointer"
                      >
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            checked={selectedFeatures.includes(weightClass)}
                            onChange={() => toggleFeature(weightClass)}
                            className="mr-3 w-4 h-4 rounded border-gray-600 bg-gray-700 text-blue-500 focus:ring-2 focus:ring-blue-500"
                          />
                          <span className="text-white text-sm">{weightClass}</span>
                        </div>
                        <span className="text-gray-400 text-xs">({count})</span>
                      </label>
                    );
                  })}
                </div>
              )}
            </div>
          )}
          </div>

          <button
            onClick={clearFilters}
            className="px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 hover:bg-gray-600 text-white font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={selectedFeatures.length === 0 && !searchTerm}
          >
            Clear
          </button>
        </div>
      </div>
      <div className="border border-gray-600 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse mt-0 mb-0">
            <thead>
              <tr className="bg-gray-800 border-b border-gray-700">
                <th className="px-4 py-3 text-left font-semibold">Make</th>
                <th className="px-4 py-3 text-left font-semibold">Model</th>
                <th className="px-4 py-3 text-left font-semibold">Driver</th>
                <th className="px-4 py-3 text-left font-semibold">Features</th>
                <th className="w-8"></th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: itemsPerPage }, (_, index) => {
                const treadmill = paginatedTreadmills[index];
                if (treadmill) {
                  return (
                    <tr key={index} className="border-b border-gray-700 hover:bg-gray-800/50">
                      <td className="px-4 py-3">{treadmill.make}</td>
                      <td className="px-4 py-3">{treadmill.model}</td>
                      <td className="px-4 py-3 text-sm text-gray-300">{treadmill.driver}</td>
                      <td className="px-4 py-3 text-sm text-gray-300">{treadmill.features}</td>
                      <td className="px-2 py-3 text-center w-8">
                        <button
                          onClick={() => setSelectedTreadmill(treadmill)}
                          className="inline-flex items-center justify-center hover:bg-gray-700 rounded p-1 transition-colors"
                          aria-label="View details"
                        >
                          <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  );
                } else {
                  return (
                    <tr key={`empty-${index}`} className="border-b border-gray-700">
                      <td className="px-4 py-3">&nbsp;</td>
                      <td className="px-4 py-3">&nbsp;</td>
                      <td className="px-4 py-3">&nbsp;</td>
                      <td className="px-4 py-3">&nbsp;</td>
                      <td className="px-2 py-3 w-8">&nbsp;</td>
                    </tr>
                  );
                }
              })}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-between px-4 py-3 bg-gray-800 border-t border-gray-700">
        <div className="text-sm text-gray-400">
          {filteredTreadmills.length} {filteredTreadmills.length === 1 ? 'treadmill' : 'treadmills'}
          {filteredTreadmills.length !== treadmills.length && ` (filtered from ${treadmills.length} total)`}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 border border-gray-600 rounded-lg bg-gray-800 text-white hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Previous
          </button>

          <div className="flex gap-1">
            {Array.from({ length: Math.max(1, totalPages) }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-3 py-1 rounded-lg transition-colors ${
                  currentPage === page
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-800 text-white hover:bg-gray-700 border border-gray-600'
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          <button
            onClick={() => setCurrentPage(prev => Math.min(Math.max(1, totalPages), prev + 1))}
            disabled={currentPage === totalPages || totalPages <= 1}
            className="px-3 py-1 border border-gray-600 rounded-lg bg-gray-800 text-white hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Next
          </button>
        </div>
        </div>
      </div>

      {/* Modal */}
      {selectedTreadmill && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedTreadmill(null)}
        >
          <div
            className="bg-gray-900 border border-gray-700 rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 bg-gray-900 border-b border-gray-700 px-6 py-4 flex items-center justify-between">
              <h2 className="mt-0 mb-0 text-xl font-bold text-blue-400">
                {selectedTreadmill.make} {selectedTreadmill.model}
              </h2>
              <button
                onClick={() => setSelectedTreadmill(null)}
                className="text-gray-400 hover:text-white transition-colors p-1 hover:bg-gray-800 rounded"
                aria-label="Close"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Content */}
            <div className="px-6 py-5 space-y-5">
              {/* Driver */}
              <div>
                <div className="text-xs text-gray-400 uppercase tracking-wider mb-2 font-semibold">Driver</div>
                <div className="text-base">{selectedTreadmill.driver}</div>
              </div>

              {/* Features */}
              <div>
                <div className="text-xs text-gray-400 uppercase tracking-wider mb-2 font-semibold">Features</div>
                <div className="flex flex-wrap gap-2">
                  {selectedTreadmill.rawFeatures.map(f => (
                    <span key={f} className="px-3 py-1.5 bg-gray-800 rounded-md text-sm">
                      {featureNameMap[f] || f}
                    </span>
                  ))}
                </div>
              </div>

              {/* Vendor Apps */}
              {selectedTreadmill.vendorApps.length > 0 && (
                <div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider mb-2 font-semibold">Vendor Apps</div>
                  <div className="flex flex-wrap gap-2">
                    {selectedTreadmill.vendorApps.map(app => (
                      <span key={app} className="px-3 py-1.5 bg-green-900/30 text-green-400 rounded-md text-sm font-medium">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Weight Capacity */}
              {selectedTreadmill.weight && (
                <div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider mb-2 font-semibold">Weight Capacity</div>
                  <div className="text-base">
                    {selectedTreadmill.weight.maxUser} {selectedTreadmill.weight.unit}
                    {selectedTreadmill.weight.unit === 'lb' && (
                      <span className="text-gray-400 text-sm ml-2">
                        ({Math.round(selectedTreadmill.weight.maxUser * 0.453592)} kg)
                      </span>
                    )}
                  </div>
                </div>
              )}

              {/* Notes */}
              {selectedTreadmill.notes.length > 0 && (
                <div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider mb-2 font-semibold">Notes</div>
                  <div className="space-y-2 text-sm text-gray-300 bg-gray-800/50 rounded-md p-4">
                    {selectedTreadmill.notes.map((note, i) => (
                      <div key={i} className="flex">
                        <span className="text-blue-400 mr-2">•</span>
                        <span>{note}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="sticky bottom-0 bg-gray-900 border-t border-gray-700 px-6 py-4 flex items-center justify-between">
              {selectedTreadmill.source ? (
                <div className="text-sm text-gray-400">
                  Source: <a
                    href={selectedTreadmill.source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 underline"
                  >
                    {selectedTreadmill.source.name}
                  </a>
                </div>
              ) : (
                <div></div>
              )}
              <button
                onClick={() => setSelectedTreadmill(null)}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
