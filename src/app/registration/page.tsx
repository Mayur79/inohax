'use client'

import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronRightIcon, PlusIcon, XIcon, UserIcon, LinkIcon, Users2Icon, PhoneIcon, MailIcon, FolderIcon } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface TeamMember {
  name: string;
  socialMediaLink: string;
}

export default function EnhancedRegistrationForm() {
  const { handleSubmit, control, register } = useForm();
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([
    { name: '', socialMediaLink: '' },
    { name: '', socialMediaLink: '' },
    { name: '', socialMediaLink: '' }
  ]);

  const addTeamMember = () => {
    setTeamMembers([...teamMembers, { name: '', socialMediaLink: '' }])
  }

  const removeTeamMember = (index: number) => {
    if (teamMembers.length > 3) {
      const updatedMembers = teamMembers.filter((_, i) => i !== index)
      setTeamMembers(updatedMembers)
    }
  }

  const handleTeamMemberChange = (index: number, field: keyof TeamMember, value: string) => {
    const updatedMembers = [...teamMembers];
    updatedMembers[index][field] = value;
    setTeamMembers(updatedMembers);
  }

  const onSubmit = async (data: any) => {
    const payload = {
      ...data,
      teamMembers,
    };

    try {
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
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred while submitting the form. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold tracking-tight mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-500">
              Inohax 1.0 Registration
            </span>
          </h1>
          
        </div>
        
        <Card className="backdrop-blur-lg bg-black/30 border border-gray-700 shadow-2xl shadow-gray-500/20">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center text-gray-300">Team Registration</CardTitle>
            <CardDescription className="text-center text-gray-400">Enter your team's details below</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="teamName" className="text-gray-300">Team Name *</Label>
                    <div className="relative">
                      <Users2Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5" />
                      <Input 
                        id="teamName" 
                        {...register('teamName', { required: true })}
                        className="bg-gray-900/30 border-gray-700 text-white placeholder-gray-500 pl-10" 
                        placeholder="Enter team name"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="teamLeaderName" className="text-gray-300">Team Leader Name *</Label>
                    <div className="relative">
                      <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5" />
                      <Input 
                        id="teamLeaderName" 
                        {...register('teamLeaderName', { required: true })}
                        className="bg-gray-900/30 border-gray-700 text-white placeholder-gray-500 pl-10" 
                        placeholder="Enter leader name"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="teamLeaderPhone" className="text-gray-300">Team Leader Phone *</Label>
                    <div className="relative">
                      <PhoneIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5" />
                      <Input 
                        id="teamLeaderPhone" 
                        {...register('teamLeaderPhone', { required: true })}
                        type="tel" 
                        className="bg-gray-900/30 border-gray-700 text-white placeholder-gray-500 pl-10" 
                        placeholder="Enter phone number"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="teamLeaderEmail" className="text-gray-300">Team Leader Email *</Label>
                    <div className="relative">
                      <MailIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5" />
                      <Input 
                        id="teamLeaderEmail" 
                        {...register('teamLeaderEmail', { required: true })}
                        type="email" 
                        className="bg-gray-900/30 border-gray-700 text-white placeholder-gray-500 pl-10" 
                        placeholder="Enter email address"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-300">Team Members</h3>
                  <AnimatePresence>
                    {teamMembers.map((member, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-4 mb-4"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-lg font-medium text-gray-300">Team Member {index + 1}</h4>
                          {index >= 3 && (
                            <Button 
                              type="button"
                              onClick={() => removeTeamMember(index)}
                              variant="ghost"
                              size="icon"
                              className="text-red-500 hover:text-red-400 hover:bg-red-500/20"
                            >
                              <XIcon className="h-5 w-5" />
                            </Button>
                          )}
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor={`memberName${index}`} className="text-gray-400">
                              Name {index < 3 ? '*' : ''}
                            </Label>
                            <div className="relative">
                              <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5" />
                              <Controller
                                name={`teamMembers[${index}].name`}
                                control={control}
                                defaultValue={member.name}
                                rules={{ required: index < 3 }}
                                render={({ field }) => (
                                  <Input 
                                    {...field}
                                    id={`memberName${index}`}
                                    onChange={(e) => {
                                      handleTeamMemberChange(index, 'name', e.target.value);
                                      field.onChange(e);
                                    }}
                                    className="bg-gray-900/30 border-gray-700 text-white placeholder-gray-500 pl-10"
                                    placeholder="Enter name"
                                  />
                                )}
                              />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor={`memberLink${index}`} className="text-gray-400">
                              Social Media Link {index < 3 ? '*' : ''}
                            </Label>
                            <div className="relative">
                              <LinkIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5" />
                              <Controller
                                name={`teamMembers[${index}].socialMediaLink`}
                                control={control}
                                defaultValue={member.socialMediaLink}
                                rules={{ required: index < 3 }}
                                render={({ field }) => (
                                  <Input 
                                    {...field}
                                    id={`memberLink${index}`}
                                    onChange={(e) => {
                                      handleTeamMemberChange(index, 'socialMediaLink', e.target.value);
                                      field.onChange(e);
                                    }}
                                    className="bg-gray-900/30 border-gray-700 text-white placeholder-gray-500 pl-10"
                                    placeholder="Enter social media link"
                                  />
                                )}
                              />
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                  <Button 
                    type="button"
                    onClick={addTeamMember}
                    className="w-full bg-gray-700 hover:bg-gray-600 text-white transition-all duration-300 ease-in-out transform hover:scale-105"
                  >
                    <PlusIcon className="h-5 w-5 mr-2" />
                    Add Team Member
                  </Button>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-300">Project Details</h3>
                  <div className="space-y-2">
                    <Label htmlFor="projectDomain" className="text-gray-300">Project Domain</Label>
                    <Controller
                      name="projectDomain"
                      control={control}
                      render={({ field }) => (
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <SelectTrigger className="bg-gray-900/30 border-gray-700 text-white">
                            <SelectValue placeholder="Select project domain" />
                          </SelectTrigger>
                          <SelectContent className="bg-gray-900 border-gray-700 text-white">
                            <SelectItem value="edtech">EdTech</SelectItem>
                            <SelectItem value="hrtech">HR Tech</SelectItem>
                            <SelectItem value="web3">Web3</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      )}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="projectLink" className="text-gray-300">Project Link *</Label>
                    <div className="relative">
                      <FolderIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5" />
                      <Input 
                        id="projectLink" 
                        {...register('projectLink', { required: true })}
                        className="bg-gray-900/30 border-gray-700 text-white placeholder-gray-500 pl-10" 
                        placeholder="Enter project link"
                      />
                    </div>
                    <p className="text-sm text-gray-400">Upload project details and paste the link here</p>
                  </div>
                </div>
              </div>

              <Button type="submit" className="w-full bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-800 hover:to-black text-white font-bold py-3 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
                Submit Registration
                <ChevronRightIcon className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}