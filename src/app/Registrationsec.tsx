'use client';
import { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';

interface IFormData {
  teamName: string;
  teamLeaderName: string;
  teamLeaderPhoneNumber: string;
  teamLeaderEmailAddress: string;
  teamMembers: string[]; // This should be an array of strings
  projectDomain?: string;
  socialProjectLink?: string;
  socialProfiles: string[]; // This should be an array of strings
}

export default function Registration() {
  const [formData, setFormData] = useState<IFormData>({
    teamName: '',
    teamLeaderName: '',
    teamLeaderPhoneNumber: '',
    teamLeaderEmailAddress: '',
    teamMembers: ['', '', '', '', ''], // Initializing as an array of 5 empty strings
    projectDomain: '',
    socialProjectLink: '',
    socialProfiles: ['', '', '', '', ''], // Initializing as an array of 5 empty strings
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleArrayChange = (index: number, e: ChangeEvent<HTMLInputElement>, field: keyof IFormData) => {
    const updatedArray = [...(formData[field] || [])]; // Ensure field is treated as an array
    updatedArray[index] = e.target.value;
    setFormData({ ...formData, [field]: updatedArray });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/registration', formData);
      alert(response.data.message);
    } catch (error) {
      alert('Error submitting form');
    }
  };

  return (
    <div>
      <h1>Inohax 1.0 Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Team Name*:</label>
          <input type="text" name="teamName" value={formData.teamName} onChange={handleChange} required />
        </div>

        <div>
          <label>Team Leader Name*:</label>
          <input type="text" name="teamLeaderName" value={formData.teamLeaderName} onChange={handleChange} required />
        </div>

        <div>
          <label>Team Leader Phone Number*:</label>
          <input type="text" name="teamLeaderPhoneNumber" value={formData.teamLeaderPhoneNumber} onChange={handleChange} required />
        </div>

        <div>
          <label>Team Leader Email Address*:</label>
          <input type="email" name="teamLeaderEmailAddress" value={formData.teamLeaderEmailAddress} onChange={handleChange} required />
        </div>

        <h3>Team Members:</h3>
        {[...Array(5)].map((_, index) => (
          <div key={index}>
            <label>{`Team Member ${index + 1} Name${index < 3 ? '*' : ''}:`}</label>
            <input
              type="text"
              value={formData.teamMembers[index]}
              onChange={(e) => handleArrayChange(index, e, 'teamMembers')}
              required={index < 3}
            />
          </div>
        ))}

        <h3>Project Information:</h3>
        <div>
          <label>Project Domain:</label>
          <input type="text" name="projectDomain" value={formData.projectDomain} onChange={handleChange} />
        </div>

        <div>
          <label>Inovact Social Project/Idea Link:</label>
          <input type="text" name="socialProjectLink" value={formData.socialProjectLink} onChange={handleChange} />
        </div>

        <h3>Inovact Social Profiles for Team Members:</h3>
        {[...Array(5)].map((_, index) => (
          <div key={index}>
            <label>{`Team Member ${index + 1} Inovact Social Link${index < 3 ? '*' : ''}:`}</label>
            <input
              type="text"
              value={formData.socialProfiles[index]}
              onChange={(e) => handleArrayChange(index, e, 'socialProfiles')}
              required={index < 3}
            />
          </div>
        ))}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
