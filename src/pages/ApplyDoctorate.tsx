
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Upload, FileText, Award, CheckCircle, Clock, User } from "lucide-react";

const ApplyDoctorate = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    personalInfo: {
      fullName: "",
      dateOfBirth: "",
      gender: "",
      nationality: "",
      phone: "",
      email: "",
      address: "",
      state: "",
      country: ""
    },
    qualifications: {
      highestEducation: "",
      institution: "",
      yearOfGraduation: "",
      fieldOfStudy: "",
      workExperience: "",
      currentPosition: "",
      organization: ""
    },
    achievements: {
      socialWork: "",
      awards: "",
      publications: "",
      community: "",
      specialContribution: ""
    },
    documents: {
      photo: null,
      resume: null,
      certificates: null,
      recommendations: null
    }
  });

  const steps = [
    { number: 1, title: "Personal Information", icon: User },
    { number: 2, title: "Qualifications", icon: FileText },
    { number: 3, title: "Achievements", icon: Award },
    { number: 4, title: "Documents", icon: Upload },
    { number: 5, title: "Review & Submit", icon: CheckCircle }
  ];

  const eligibilityCriteria = [
    "Minimum 5 years of experience in social work or community service",
    "Demonstrated leadership in humanitarian activities",
    "Positive impact on society through various initiatives",
    "Recognition from community or government organizations",
    "Commitment to NHGPF's mission and values"
  ];

  const handleInputChange = (section, field, value) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const handleFileUpload = (field, file) => {
    setFormData(prev => ({
      ...prev,
      documents: {
        ...prev.documents,
        [field]: file
      }
    }));
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="fullName">Full Name *</Label>
                <Input
                  id="fullName"
                  value={formData.personalInfo.fullName}
                  onChange={(e) => handleInputChange('personalInfo', 'fullName', e.target.value)}
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                <Input
                  id="dateOfBirth"
                  type="date"
                  value={formData.personalInfo.dateOfBirth}
                  onChange={(e) => handleInputChange('personalInfo', 'dateOfBirth', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="gender">Gender *</Label>
                <Select onValueChange={(value) => handleInputChange('personalInfo', 'gender', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="nationality">Nationality *</Label>
                <Input
                  id="nationality"
                  value={formData.personalInfo.nationality}
                  onChange={(e) => handleInputChange('personalInfo', 'nationality', e.target.value)}
                  placeholder="Enter your nationality"
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  value={formData.personalInfo.phone}
                  onChange={(e) => handleInputChange('personalInfo', 'phone', e.target.value)}
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.personalInfo.email}
                  onChange={(e) => handleInputChange('personalInfo', 'email', e.target.value)}
                  placeholder="Enter your email address"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="address">Complete Address *</Label>
              <Textarea
                id="address"
                value={formData.personalInfo.address}
                onChange={(e) => handleInputChange('personalInfo', 'address', e.target.value)}
                placeholder="Enter your complete address"
                rows={3}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="state">State *</Label>
                <Input
                  id="state"
                  value={formData.personalInfo.state}
                  onChange={(e) => handleInputChange('personalInfo', 'state', e.target.value)}
                  placeholder="Enter your state"
                />
              </div>
              <div>
                <Label htmlFor="country">Country *</Label>
                <Input
                  id="country"
                  value={formData.personalInfo.country}
                  onChange={(e) => handleInputChange('personalInfo', 'country', e.target.value)}
                  placeholder="Enter your country"
                />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">Educational Qualifications & Experience</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="highestEducation">Highest Education *</Label>
                <Select onValueChange={(value) => handleInputChange('qualifications', 'highestEducation', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select highest education" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="diploma">Diploma</SelectItem>
                    <SelectItem value="bachelor">Bachelor's Degree</SelectItem>
                    <SelectItem value="master">Master's Degree</SelectItem>
                    <SelectItem value="phd">PhD</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="institution">Institution Name *</Label>
                <Input
                  id="institution"
                  value={formData.qualifications.institution}
                  onChange={(e) => handleInputChange('qualifications', 'institution', e.target.value)}
                  placeholder="Enter institution name"
                />
              </div>
              <div>
                <Label htmlFor="yearOfGraduation">Year of Graduation *</Label>
                <Input
                  id="yearOfGraduation"
                  type="number"
                  value={formData.qualifications.yearOfGraduation}
                  onChange={(e) => handleInputChange('qualifications', 'yearOfGraduation', e.target.value)}
                  placeholder="Enter graduation year"
                />
              </div>
              <div>
                <Label htmlFor="fieldOfStudy">Field of Study *</Label>
                <Input
                  id="fieldOfStudy"
                  value={formData.qualifications.fieldOfStudy}
                  onChange={(e) => handleInputChange('qualifications', 'fieldOfStudy', e.target.value)}
                  placeholder="Enter field of study"
                />
              </div>
              <div>
                <Label htmlFor="workExperience">Years of Work Experience *</Label>
                <Input
                  id="workExperience"
                  type="number"
                  value={formData.qualifications.workExperience}
                  onChange={(e) => handleInputChange('qualifications', 'workExperience', e.target.value)}
                  placeholder="Enter years of experience"
                />
              </div>
              <div>
                <Label htmlFor="currentPosition">Current Position *</Label>
                <Input
                  id="currentPosition"
                  value={formData.qualifications.currentPosition}
                  onChange={(e) => handleInputChange('qualifications', 'currentPosition', e.target.value)}
                  placeholder="Enter current position"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="organization">Current Organization *</Label>
              <Input
                id="organization"
                value={formData.qualifications.organization}
                onChange={(e) => handleInputChange('qualifications', 'organization', e.target.value)}
                placeholder="Enter current organization name"
              />
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">Achievements & Contributions</h3>
            <div>
              <Label htmlFor="socialWork">Social Work Experience *</Label>
              <Textarea
                id="socialWork"
                value={formData.achievements.socialWork}
                onChange={(e) => handleInputChange('achievements', 'socialWork', e.target.value)}
                placeholder="Describe your social work experience and impact..."
                rows={4}
              />
            </div>
            <div>
              <Label htmlFor="awards">Awards & Recognitions</Label>
              <Textarea
                id="awards"
                value={formData.achievements.awards}
                onChange={(e) => handleInputChange('achievements', 'awards', e.target.value)}
                placeholder="List any awards, recognitions, or honors received..."
                rows={3}
              />
            </div>
            <div>
              <Label htmlFor="publications">Publications & Research</Label>
              <Textarea
                id="publications"
                value={formData.achievements.publications}
                onChange={(e) => handleInputChange('achievements', 'publications', e.target.value)}
                placeholder="List any publications, research work, or academic contributions..."
                rows={3}
              />
            </div>
            <div>
              <Label htmlFor="community">Community Impact *</Label>
              <Textarea
                id="community"
                value={formData.achievements.community}
                onChange={(e) => handleInputChange('achievements', 'community', e.target.value)}
                placeholder="Describe your impact on community development and social welfare..."
                rows={4}
              />
            </div>
            <div>
              <Label htmlFor="specialContribution">Special Contribution to Humanity *</Label>
              <Textarea
                id="specialContribution"
                value={formData.achievements.specialContribution}
                onChange={(e) => handleInputChange('achievements', 'specialContribution', e.target.value)}
                placeholder="Describe your special contribution that makes you eligible for this doctorate..."
                rows={4}
              />
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">Document Upload</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="photo">Recent Photograph *</Label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Upload className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                  <p className="text-sm text-gray-600 mb-2">Upload recent passport size photo</p>
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileUpload('photo', e.target.files[0])}
                    className="hidden"
                    id="photo-upload"
                  />
                  <Button variant="outline" onClick={() => document.getElementById('photo-upload').click()}>
                    Choose File
                  </Button>
                  {formData.documents.photo && (
                    <p className="text-sm text-green-600 mt-2">{formData.documents.photo.name}</p>
                  )}
                </div>
              </div>
              
              <div>
                <Label htmlFor="resume">Resume/CV *</Label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <FileText className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                  <p className="text-sm text-gray-600 mb-2">Upload your detailed resume</p>
                  <Input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={(e) => handleFileUpload('resume', e.target.files[0])}
                    className="hidden"
                    id="resume-upload"
                  />
                  <Button variant="outline" onClick={() => document.getElementById('resume-upload').click()}>
                    Choose File
                  </Button>
                  {formData.documents.resume && (
                    <p className="text-sm text-green-600 mt-2">{formData.documents.resume.name}</p>
                  )}
                </div>
              </div>
              
              <div>
                <Label htmlFor="certificates">Educational Certificates *</Label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <FileText className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                  <p className="text-sm text-gray-600 mb-2">Upload educational certificates</p>
                  <Input
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    multiple
                    onChange={(e) => handleFileUpload('certificates', e.target.files)}
                    className="hidden"
                    id="certificates-upload"
                  />
                  <Button variant="outline" onClick={() => document.getElementById('certificates-upload').click()}>
                    Choose Files
                  </Button>
                  {formData.documents.certificates && (
                    <p className="text-sm text-green-600 mt-2">
                      {formData.documents.certificates.length} file(s) selected
                    </p>
                  )}
                </div>
              </div>
              
              <div>
                <Label htmlFor="recommendations">Recommendation Letters</Label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <FileText className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                  <p className="text-sm text-gray-600 mb-2">Upload recommendation letters</p>
                  <Input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    multiple
                    onChange={(e) => handleFileUpload('recommendations', e.target.files)}
                    className="hidden"
                    id="recommendations-upload"
                  />
                  <Button variant="outline" onClick={() => document.getElementById('recommendations-upload').click()}>
                    Choose Files
                  </Button>
                  {formData.documents.recommendations && (
                    <p className="text-sm text-green-600 mt-2">
                      {formData.documents.recommendations.length} file(s) selected
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">Review & Submit Application</h3>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold mb-3">Application Summary</h4>
              <div className="space-y-2 text-sm">
                <p><strong>Name:</strong> {formData.personalInfo.fullName}</p>
                <p><strong>Email:</strong> {formData.personalInfo.email}</p>
                <p><strong>Phone:</strong> {formData.personalInfo.phone}</p>
                <p><strong>Highest Education:</strong> {formData.qualifications.highestEducation}</p>
                <p><strong>Work Experience:</strong> {formData.qualifications.workExperience} years</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms" className="text-sm">
                  I agree to the terms and conditions and confirm that all information provided is accurate.
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="privacy" />
                <Label htmlFor="privacy" className="text-sm">
                  I consent to the processing of my personal data for the purpose of this application.
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="communication" />
                <Label htmlFor="communication" className="text-sm">
                  I agree to receive communications regarding my application and NHGPF activities.
                </Label>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Award className="h-16 w-16 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Apply for Doctorate</h1>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto">
              Join our community of distinguished individuals making a difference in the world
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle className="text-lg">Application Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {steps.map((step) => {
                    const IconComponent = step.icon;
                    return (
                      <div
                        key={step.number}
                        className={`flex items-center space-x-3 p-2 rounded ${
                          currentStep === step.number
                            ? "bg-blue-100 text-blue-700"
                            : currentStep > step.number
                            ? "bg-green-100 text-green-700"
                            : "text-gray-500"
                        }`}
                      >
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            currentStep === step.number
                              ? "bg-blue-600 text-white"
                              : currentStep > step.number
                              ? "bg-green-600 text-white"
                              : "bg-gray-300"
                          }`}
                        >
                          {currentStep > step.number ? (
                            <CheckCircle className="h-4 w-4" />
                          ) : (
                            <IconComponent className="h-4 w-4" />
                          )}
                        </div>
                        <span className="text-sm font-medium">{step.title}</span>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Eligibility Criteria */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg">Eligibility Criteria</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  {eligibilityCriteria.map((criteria, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>{criteria}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Main Form */}
          <div className="lg:col-span-3">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <span>Step {currentStep} of {steps.length}</span>
                  <Badge variant="outline">
                    <Clock className="h-3 w-3 mr-1" />
                    {currentStep * 5-10} min
                  </Badge>
                </CardTitle>
                <CardDescription>
                  Complete all sections to submit your doctorate application
                </CardDescription>
              </CardHeader>
              <CardContent>
                {renderStepContent()}

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8">
                  <Button
                    variant="outline"
                    onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                    disabled={currentStep === 1}
                  >
                    Previous
                  </Button>
                  <div className="space-x-2">
                    {currentStep < steps.length ? (
                      <Button
                        onClick={() => setCurrentStep(Math.min(steps.length, currentStep + 1))}
                      >
                        Next
                      </Button>
                    ) : (
                      <Button className="bg-green-600 hover:bg-green-700">
                        Submit Application
                      </Button>
                    )}
                    <Button variant="outline">
                      Save as Draft
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyDoctorate;
