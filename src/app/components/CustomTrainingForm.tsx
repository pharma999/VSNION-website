"use client";

import { useState } from "react";
import { Send, Users, Clock, Target, CreditCard } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

type CustomTrainingFormData = {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  phone: string;
  teamSize: string;
  currentSkillLevel: string;
  desiredTopics: string;
  preferredDuration: string;
  trainingFormat: string;
  budget: string;
  timeline: string;
  additionalRequirements: string;
};

export function CustomTrainingForm({ onClose }: { onClose?: () => void }) {
  const [formData, setFormData] = useState<CustomTrainingFormData>({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    teamSize: "",
    currentSkillLevel: "",
    desiredTopics: "",
    preferredDuration: "",
    trainingFormat: "",
    budget: "",
    timeline: "",
    additionalRequirements: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/adarshv978@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            ...formData,
            _subject: `Custom Training Request from ${formData.firstName} ${formData.lastName} - ${formData.company}`,
            formType: "Custom Training Request",
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.message || "Failed to send request");
      }

      alert("Custom training request sent successfully! We'll get back to you within 24 hours.");

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        phone: "",
        teamSize: "",
        currentSkillLevel: "",
        desiredTopics: "",
        preferredDuration: "",
        trainingFormat: "",
        budget: "",
        timeline: "",
        additionalRequirements: "",
      });

      // Close modal if onClose prop is provided
      if (onClose) {
        onClose();
      }
    } catch (error) {
      console.error(error);
      alert(
        error instanceof Error
          ? error.message
          : "Something went wrong while sending your request."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Personal Information */}
      <div className="space-y-4">
        <h4 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
          <Users className="w-5 h-5 text-indigo-600" />
          Personal Information
        </h4>

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
              First Name *
            </label>
            <Input
              id="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="John"
              className="w-full"
              required
            />
          </div>

          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
              Last Name *
            </label>
            <Input
              id="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Doe"
              className="w-full"
              required
            />
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email *
            </label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className="w-full"
              required
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+1 (555) 123-4567"
              className="w-full"
            />
          </div>
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
            Company/Organization *
          </label>
          <Input
            id="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Your Company Name"
            className="w-full"
            required
          />
        </div>
      </div>

      {/* Training Requirements */}
      <div className="space-y-4">
        <h4 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
          <Target className="w-5 h-5 text-indigo-600" />
          Training Requirements
        </h4>

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label htmlFor="teamSize" className="block text-sm font-medium text-gray-700 mb-2">
              Team Size *
            </label>
            <select
              id="teamSize"
              value={formData.teamSize}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              required
            >
              <option value="">Select team size</option>
              <option value="1-5">1-5 people</option>
              <option value="6-10">6-10 people</option>
              <option value="11-25">11-25 people</option>
              <option value="26-50">26-50 people</option>
              <option value="50+">50+ people</option>
            </select>
          </div>

          <div>
            <label htmlFor="currentSkillLevel" className="block text-sm font-medium text-gray-700 mb-2">
              Current Skill Level *
            </label>
            <select
              id="currentSkillLevel"
              value={formData.currentSkillLevel}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              required
            >
              <option value="">Select skill level</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
              <option value="Mixed">Mixed skill levels</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="desiredTopics" className="block text-sm font-medium text-gray-700 mb-2">
            Desired Topics/Technologies *
          </label>
          <Textarea
            id="desiredTopics"
            value={formData.desiredTopics}
            onChange={handleChange}
            placeholder="e.g., React, Node.js, AWS, Machine Learning, DevOps, etc."
            className="w-full min-h-20"
            required
          />
        </div>
      </div>

      {/* Training Preferences */}
      <div className="space-y-4">
        <h4 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
          <Clock className="w-5 h-5 text-indigo-600" />
          Training Preferences
        </h4>

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label htmlFor="preferredDuration" className="block text-sm font-medium text-gray-700 mb-2">
              Preferred Duration
            </label>
            <select
              id="preferredDuration"
              value={formData.preferredDuration}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="">Select duration</option>
              <option value="1-2 weeks">1-2 weeks</option>
              <option value="3-4 weeks">3-4 weeks</option>
              <option value="1-2 months">1-2 months</option>
              <option value="3-6 months">3-6 months</option>
              <option value="6+ months">6+ months</option>
              <option value="Flexible">Flexible</option>
            </select>
          </div>

          <div>
            <label htmlFor="trainingFormat" className="block text-sm font-medium text-gray-700 mb-2">
              Training Format
            </label>
            <select
              id="trainingFormat"
              value={formData.trainingFormat}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="">Select format</option>
              <option value="Online Live">Online Live Sessions</option>
              <option value="In-Person">In-Person Training</option>
              <option value="Hybrid">Hybrid (Online + In-Person)</option>
              <option value="Self-Paced">Self-Paced Online</option>
              <option value="Blended">Blended Learning</option>
            </select>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
              Budget Range
            </label>
            <select
              id="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="">Select budget range</option>
              <option value="₹5,000 - ₹10,000">₹5,000 - ₹10,000</option>
              <option value="₹10,000 - ₹25,000">₹10,000 - ₹25,000</option>
              <option value="₹25,000 - ₹50,000">₹25,000 - ₹50,000</option>
              <option value="₹50,000+">₹50,000+</option>
              <option value="Discuss">Let's discuss</option>
            </select>
          </div>

          <div>
            <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
              Preferred Start Date
            </label>
            <select
              id="timeline"
              value={formData.timeline}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="">Select timeline</option>
              <option value="ASAP">As soon as possible</option>
              <option value="Within 1 month">Within 1 month</option>
              <option value="Within 3 months">Within 3 months</option>
              <option value="Within 6 months">Within 6 months</option>
              <option value="Flexible">Flexible</option>
            </select>
          </div>
        </div>
      </div>

      {/* Additional Requirements */}
      <div className="space-y-4">
        <h4 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
          <CreditCard className="w-5 h-5 text-indigo-600" />
          Additional Requirements
        </h4>

        <div>
          <label htmlFor="additionalRequirements" className="block text-sm font-medium text-gray-700 mb-2">
            Additional Information
          </label>
          <Textarea
            id="additionalRequirements"
            value={formData.additionalRequirements}
            onChange={handleChange}
            placeholder="Any specific requirements, learning objectives, or additional information you'd like us to know..."
            className="w-full min-h-24"
          />
        </div>
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 disabled:opacity-60"
      >
        {isSubmitting ? "Sending Request..." : "Send Custom Training Request"}
        <Send className="ml-2 h-5 w-5" />
      </Button>

      <p className="text-center text-sm text-gray-500">
        We'll review your requirements and get back to you within 24 hours with a customized proposal.
      </p>
    </form>
  );
}