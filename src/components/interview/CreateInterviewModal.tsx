import React, { useState } from 'react';
import { X } from 'lucide-react';
import { InterviewSetup } from '../../types/interview';

interface CreateInterviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (setup: InterviewSetup) => void;
}

export const CreateInterviewModal: React.FC<CreateInterviewModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  const [step, setStep] = useState(1);
  const [setup, setSetup] = useState<InterviewSetup>({
    role: '',
    yearsOfExperience: 0,
    skills: [],
  });
  const [currentSkill, setCurrentSkill] = useState('');

  const handleAddSkill = () => {
    if (currentSkill.trim() && !setup.skills.includes(currentSkill.trim())) {
      setSetup((prev) => ({
        ...prev,
        skills: [...prev.skills, currentSkill.trim()],
      }));
      setCurrentSkill('');
    }
  };

  const handleRemoveSkill = (skillToRemove: string) => {
    setSetup((prev) => ({
      ...prev,
      skills: prev.skills.filter((skill) => skill !== skillToRemove),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(setup);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Create Interview</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Role Title
                </label>
                <input
                  type="text"
                  value={setup.role}
                  onChange={(e) => setSetup((prev) => ({ ...prev, role: e.target.value }))}
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-orange-500"
                  placeholder="e.g., Frontend Developer"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Years of Experience
                </label>
                <input
                  type="number"
                  min="0"
                  max="50"
                  value={setup.yearsOfExperience}
                  onChange={(e) =>
                    setSetup((prev) => ({
                      ...prev,
                      yearsOfExperience: parseInt(e.target.value) || 0,
                    }))
                  }
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>

              <button
                type="button"
                onClick={() => setStep(2)}
                className="w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition"
              >
                Next
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Skills to Test
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={currentSkill}
                    onChange={(e) => setCurrentSkill(e.target.value)}
                    className="flex-1 p-2 border rounded-lg focus:ring-2 focus:ring-orange-500"
                    placeholder="e.g., React"
                  />
                  <button
                    type="button"
                    onClick={handleAddSkill}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition"
                  >
                    Add
                  </button>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {setup.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full flex items-center gap-1"
                  >
                    {skill}
                    <button
                      type="button"
                      onClick={() => handleRemoveSkill(skill)}
                      className="text-orange-600 hover:text-orange-700"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </span>
                ))}
              </div>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200 transition"
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={setup.skills.length === 0}
                  className="flex-1 bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition disabled:opacity-50"
                >
                  Create Interview
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};