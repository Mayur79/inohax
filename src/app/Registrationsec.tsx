'use client';
import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';

const Registration: React.FC = () => {
  const { handleSubmit, control, register } = useForm();
  const [teamMembers, setTeamMembers] = useState([{ name: '', socialMediaLink: '' }]);

  const addTeamMember = () => {
    setTeamMembers([...teamMembers, { name: '', socialMediaLink: '' }]);
  };

  // Handle input changes for team members
  const handleTeamMemberChange = (index: number, field: keyof typeof teamMembers[0], value: string) => {
    const updatedMembers = [...teamMembers];
    updatedMembers[index][field] = value;
    setTeamMembers(updatedMembers);
  };

  const onSubmit = async (data: any) => {
    const payload = {
      ...data,
      teamMembers,
    };

    const response = await fetch('/api/registration', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      alert('Registration successful!');
    } else {
      alert('Registration failed!');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Team Name*</label>
        <input {...register('teamName', { required: true })} />
      </div>
      <div>
        <label>Team Leader Name*</label>
        <input {...register('teamLeaderName', { required: true })} />
      </div>
      <div>
        <label>Team Leader Phone Number*</label>
        <input
          {...register('teamLeaderPhone', { required: true })}
          onChange={(e) => {
            // Remove the handleTeamMemberChange call for teamLeaderPhone
            // as it's not part of the teamMembers array
            e.target.value; // This line is added to use the event, preventing unused variable warning
          }}
        />
      </div>
      <div>
        <label>Team Leader Email Address*</label>
        <input {...register('teamLeaderEmail', { required: true })} />
      </div>

      <h3>Team Members:</h3>
      {teamMembers.map((member, index) => (
        <div key={index}>
          <label>Team Member {index + 1} Name*</label>
          <Controller
            name={`teamMembers[${index}].name`}
            control={control}
            defaultValue={member.name}
            render={({ field }) => (
              <input
                {...field}
                required
                onChange={(e) => {
                  handleTeamMemberChange(index, 'name', e.target.value);
                  field.onChange(e); // Call the field's onChange to update react-hook-form state
                }}
              />
            )}
          />

          <label>Team Member {index + 1} Social Media Link</label>
          <Controller
            name={`teamMembers[${index}].socialMediaLink`}
            control={control}
            defaultValue={member.socialMediaLink}
            render={({ field }) => (
              <input
                {...field}
                onChange={(e) => {
                  handleTeamMemberChange(index, 'socialMediaLink', e.target.value);
                  field.onChange(e); // Call the field's onChange to update react-hook-form state
                }}
              />
            )}
          />
        </div>
      ))}
      <button type="button" onClick={addTeamMember}>Add Team Member</button>

      <div>
        <label>Project Domain</label>
        <input {...register('projectDomain')} />
      </div>
      <div>
        <label>Project Link</label>
        <input {...register('projectLink')} />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default Registration;
