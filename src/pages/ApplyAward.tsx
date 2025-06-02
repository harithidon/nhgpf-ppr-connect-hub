
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Upload, Trophy, User, FileText, CheckCircle, Star } from "lucide-react";

const ApplyAward = () => {
  const [applicationType, setApplicationType] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [formData, setFormData] = useState({
    applicantInfo: {
      fullName: "",
      phone: "",
      email: "",
      relationship: "",
      organization: ""
    },
    nomineeInfo: {
      fullName: "",
      dateOfBirth: "",
      phone: "",
      email: "",
      address: "",
      state: "",
      profession: "",
      organization: ""
    },
    nomination: {
      category: "",
      reason: "",
      achievements: "",
      impact: "",
      duration: "",
      evidence: ""
    },
    documents: {
      nomineePhoto: null,
      supportingDocs: null,
      recommendations: null
    }
  });

  const awardCategories = [
    {
      id: "police-excellence",
      title: "Police Excellence Award",
      description: "For outstanding police officers who have demonstrated exceptional service",
      icon: "🛡️",
      criteria: ["Exceptional duty performance", "Community trust building", "Crime prevention initiatives"]
    },
    {
      id: "social-work",
      title: "Social Work Excellence",
      description: "For individuals making significant impact in social welfare",
      icon: "❤️",
      criteria: ["Community service", "Social impact", "Volunteer leadership"]
    },
    {
      id: "women-empowerment",
      title: "Women Empowerment Award",
      description: "For contributions to women's safety, rights, and empowerment",
      icon: "👩",
      criteria: ["Women's rights advocacy", "Safety initiatives", "Empowerment programs"]
    },
    {
      id: "youth-development",
      title: "Youth Development Award",
      description: "For exceptional work in youth development and guidance",
      icon: "🌟",
      criteria: ["Youth mentoring", "Skill development", "Career guidance"]
    },
    {
      id: "healthcare",
      title: "Healthcare Service Award",
      description: "For outstanding contributions to healthcare and medical services",
      icon: "🏥",
      criteria: ["Medical service", "Healthcare accessibility", "Community health"]
    },
    {
      id: "education",
      title: "Educational Excellence Award",
      description: "For significant contributions to education and literacy",
      icon: "📚",
      criteria: ["Educational innovation", "Literacy programs", "Student development"]
    }
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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Trophy className="h-16 w-16 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Apply for Award</h1>
            <p className="text-xl text-yellow-100 max-w-2xl mx-auto">
              Nominate deserving individuals who have made exceptional contributions to society
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Application Type Selection */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Application Type</CardTitle>
              <CardDescription>
                Choose whether you are applying for yourself or nominating someone else
              </CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup value={applicationType} onValueChange={setApplicationType}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="self" id="self" />
                  <Label htmlFor="self">Self Application - I am applying for myself</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="nomination" id="nomination" />
                  <Label htmlFor="nomination">Nomination - I am nominating someone else</Label>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>

          {applicationType && (
            <>
              {/* Award Categories */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Select Award Category</CardTitle>
                  <CardDescription>
                    Choose the most appropriate category for this {applicationType === "self" ? "application" : "nomination"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {awardCategories.map((category) => (
                      <div
                        key={category.id}
                        className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                          selectedCategory === category.id
                            ? "border-yellow-500 bg-yellow-50"
                            : "border-gray-200 hover:border-yellow-300"
                        }`}
                        onClick={() => {
                          setSelectedCategory(category.id);
                          handleInputChange('nomination', 'category', category.title);
                        }}
                      >
                        <div className="text-center">
                          <div className="text-3xl mb-2">{category.icon}</div>
                          <h3 className="font-semibold text-lg mb-2">{category.title}</h3>
                          <p className="text-sm text-gray-600 mb-3">{category.description}</p>
                          <div className="space-y-1">
                            {category.criteria.map((criteria, index) => (
                              <div key={index} className="flex items-center text-xs text-gray-500">
                                <CheckCircle className="h-3 w-3 mr-1 text-green-500" />
                                {criteria}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {selectedCategory && (
                <>
                  {/* Applicant Information */}
                  {applicationType === "nomination" && (
                    <Card className="mb-8">
                      <CardHeader>
                        <CardTitle className="flex items-center space-x-2">
                          <User className="h-5 w-5" />
                          <span>Your Information (Nominator)</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="applicantName">Your Full Name *</Label>
                            <Input
                              id="applicantName"
                              value={formData.applicantInfo.fullName}
                              onChange={(e) => handleInputChange('applicantInfo', 'fullName', e.target.value)}
                              placeholder="Enter your full name"
                            />
                          </div>
                          <div>
                            <Label htmlFor="applicantPhone">Your Phone Number *</Label>
                            <Input
                              id="applicantPhone"
                              value={formData.applicantInfo.phone}
                              onChange={(e) => handleInputChange('applicantInfo', 'phone', e.target.value)}
                              placeholder="Enter your phone number"
                            />
                          </div>
                          <div>
                            <Label htmlFor="applicantEmail">Your Email Address *</Label>
                            <Input
                              id="applicantEmail"
                              type="email"
                              value={formData.applicantInfo.email}
                              onChange={(e) => handleInputChange('applicantInfo', 'email', e.target.value)}
                              placeholder="Enter your email address"
                            />
                          </div>
                          <div>
                            <Label htmlFor="relationship">Relationship with Nominee *</Label>
                            <Select onValueChange={(value) => handleInputChange('applicantInfo', 'relationship', value)}>
                              <SelectTrigger>
                                <SelectValue placeholder="Select relationship" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="colleague">Colleague</SelectItem>
                                <SelectItem value="supervisor">Supervisor</SelectItem>
                                <SelectItem value="friend">Friend</SelectItem>
                                <SelectItem value="community-member">Community Member</SelectItem>
                                <SelectItem value="beneficiary">Beneficiary</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="applicantOrg">Your Organization/Institution</Label>
                          <Input
                            id="applicantOrg"
                            value={formData.applicantInfo.organization}
                            onChange={(e) => handleInputChange('applicantInfo', 'organization', e.target.value)}
                            placeholder="Enter your organization name"
                          />
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {/* Nominee Information */}
                  <Card className="mb-8">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Star className="h-5 w-5" />
                        <span>
                          {applicationType === "self" ? "Your Information" : "Nominee Information"}
                        </span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="nomineeName">
                            {applicationType === "self" ? "Your Full Name" : "Nominee Full Name"} *
                          </Label>
                          <Input
                            id="nomineeName"
                            value={formData.nomineeInfo.fullName}
                            onChange={(e) => handleInputChange('nomineeInfo', 'fullName', e.target.value)}
                            placeholder="Enter full name"
                          />
                        </div>
                        <div>
                          <Label htmlFor="nomineeDob">Date of Birth *</Label>
                          <Input
                            id="nomineeDob"
                            type="date"
                            value={formData.nomineeInfo.dateOfBirth}
                            onChange={(e) => handleInputChange('nomineeInfo', 'dateOfBirth', e.target.value)}
                          />
                        </div>
                        <div>
                          <Label htmlFor="nomineePhone">Phone Number *</Label>
                          <Input
                            id="nomineePhone"
                            value={formData.nomineeInfo.phone}
                            onChange={(e) => handleInputChange('nomineeInfo', 'phone', e.target.value)}
                            placeholder="Enter phone number"
                          />
                        </div>
                        <div>
                          <Label htmlFor="nomineeEmail">Email Address *</Label>
                          <Input
                            id="nomineeEmail"
                            type="email"
                            value={formData.nomineeInfo.email}
                            onChange={(e) => handleInputChange('nomineeInfo', 'email', e.target.value)}
                            placeholder="Enter email address"
                          />
                        </div>
                        <div>
                          <Label htmlFor="profession">Profession/Field *</Label>
                          <Input
                            id="profession"
                            value={formData.nomineeInfo.profession}
                            onChange={(e) => handleInputChange('nomineeInfo', 'profession', e.target.value)}
                            placeholder="Enter profession or field of work"
                          />
                        </div>
                        <div>
                          <Label htmlFor="nomineeState">State *</Label>
                          <Input
                            id="nomineeState"
                            value={formData.nomineeInfo.state}
                            onChange={(e) => handleInputChange('nomineeInfo', 'state', e.target.value)}
                            placeholder="Enter state"
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="nomineeAddress">Complete Address *</Label>
                        <Textarea
                          id="nomineeAddress"
                          value={formData.nomineeInfo.address}
                          onChange={(e) => handleInputChange('nomineeInfo', 'address', e.target.value)}
                          placeholder="Enter complete address"
                          rows={3}
                        />
                      </div>
                      <div>
                        <Label htmlFor="nomineeOrg">Organization/Institution *</Label>
                        <Input
                          id="nomineeOrg"
                          value={formData.nomineeInfo.organization}
                          onChange={(e) => handleInputChange('nomineeInfo', 'organization', e.target.value)}
                          placeholder="Enter organization or institution name"
                        />
                      </div>
                    </CardContent>
                  </Card>

                  {/* Nomination Details */}
                  <Card className="mb-8">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Trophy className="h-5 w-5" />
                        <span>Award Nomination Details</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <Label htmlFor="reason">Reason for Nomination *</Label>
                        <Textarea
                          id="reason"
                          value={formData.nomination.reason}
                          onChange={(e) => handleInputChange('nomination', 'reason', e.target.value)}
                          placeholder="Explain why this person deserves this award..."
                          rows={4}
                        />
                      </div>
                      <div>
                        <Label htmlFor="achievements">Key Achievements *</Label>
                        <Textarea
                          id="achievements"
                          value={formData.nomination.achievements}
                          onChange={(e) => handleInputChange('nomination', 'achievements', e.target.value)}
                          placeholder="List the key achievements and accomplishments..."
                          rows={4}
                        />
                      </div>
                      <div>
                        <Label htmlFor="impact">Impact on Community/Society *</Label>
                        <Textarea
                          id="impact"
                          value={formData.nomination.impact}
                          onChange={(e) => handleInputChange('nomination', 'impact', e.target.value)}
                          placeholder="Describe the positive impact on community or society..."
                          rows={4}
                        />
                      </div>
                      <div>
                        <Label htmlFor="duration">Duration of Service/Work *</Label>
                        <Input
                          id="duration"
                          value={formData.nomination.duration}
                          onChange={(e) => handleInputChange('nomination', 'duration', e.target.value)}
                          placeholder="e.g., 5 years, 2010-2024"
                        />
                      </div>
                      <div>
                        <Label htmlFor="evidence">Supporting Evidence</Label>
                        <Textarea
                          id="evidence"
                          value={formData.nomination.evidence}
                          onChange={(e) => handleInputChange('nomination', 'evidence', e.target.value)}
                          placeholder="Any additional evidence or references that support this nomination..."
                          rows={3}
                        />
                      </div>
                    </CardContent>
                  </Card>

                  {/* Document Upload */}
                  <Card className="mb-8">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <FileText className="h-5 w-5" />
                        <span>Supporting Documents</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="nomineePhoto">
                            {applicationType === "self" ? "Your Photograph" : "Nominee Photograph"} *
                          </Label>
                          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                            <Upload className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                            <p className="text-sm text-gray-600 mb-2">Upload recent photograph</p>
                            <Input
                              type="file"
                              accept="image/*"
                              onChange={(e) => handleFileUpload('nomineePhoto', e.target.files[0])}
                              className="hidden"
                              id="photo-upload"
                            />
                            <Button variant="outline" onClick={() => document.getElementById('photo-upload').click()}>
                              Choose File
                            </Button>
                            {formData.documents.nomineePhoto && (
                              <p className="text-sm text-green-600 mt-2">{formData.documents.nomineePhoto.name}</p>
                            )}
                          </div>
                        </div>
                        
                        <div>
                          <Label htmlFor="supportingDocs">Supporting Documents</Label>
                          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                            <FileText className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                            <p className="text-sm text-gray-600 mb-2">Upload certificates, awards, etc.</p>
                            <Input
                              type="file"
                              accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                              multiple
                              onChange={(e) => handleFileUpload('supportingDocs', e.target.files)}
                              className="hidden"
                              id="docs-upload"
                            />
                            <Button variant="outline" onClick={() => document.getElementById('docs-upload').click()}>
                              Choose Files
                            </Button>
                            {formData.documents.supportingDocs && (
                              <p className="text-sm text-green-600 mt-2">
                                {formData.documents.supportingDocs.length} file(s) selected
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="recommendations">Recommendation Letters</Label>
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                          <FileText className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                          <p className="text-sm text-gray-600 mb-2">Upload recommendation letters from colleagues, supervisors, or community leaders</p>
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
                    </CardContent>
                  </Card>

                  {/* Terms and Submit */}
                  <Card>
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="accuracy" />
                          <Label htmlFor="accuracy" className="text-sm">
                            I confirm that all information provided is accurate and truthful.
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="consent" />
                          <Label htmlFor="consent" className="text-sm">
                            {applicationType === "self" 
                              ? "I consent to the processing of my personal data for this award application."
                              : "I have obtained consent from the nominee for this award nomination."
                            }
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="terms" />
                          <Label htmlFor="terms" className="text-sm">
                            I agree to the terms and conditions of the award program.
                          </Label>
                        </div>
                      </div>
                      
                      <div className="flex justify-end space-x-4 mt-8">
                        <Button variant="outline">Save as Draft</Button>
                        <Button className="bg-yellow-600 hover:bg-yellow-700">
                          Submit {applicationType === "self" ? "Application" : "Nomination"}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ApplyAward;
