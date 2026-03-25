"use client";

import { useRef, useState } from "react";
import { Button } from "./button";

type ApplicationFormProps = {
  selectedPosition: string;
};

type FormDataType = {
  name: string;
  email: string;
  phone: string;
  coverLetter: string;
};

export function ApplicationForm({ selectedPosition }: ApplicationFormProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    email: "",
    phone: "",
    coverLetter: "",
  });

  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    setResumeFile(file);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!resumeFile) {
      alert("Please upload your resume.");
      return;
    }

    if (resumeFile.size > 10 * 1024 * 1024) {
      alert("File size must be under 10MB.");
      return;
    }

    setIsSubmitting(true);

    try {
      const submitData = new FormData();

      submitData.append("fullName", formData.name);
      submitData.append("email", formData.email);
      submitData.append("phone", formData.phone);
      submitData.append("coverLetter", formData.coverLetter);
      submitData.append("jobTitle", selectedPosition);
      submitData.append("attachment", resumeFile);
      submitData.append("_subject", `New Job Application - ${selectedPosition}`);
      submitData.append("_replyto", formData.email);

      const response = await fetch(
        "https://formsubmit.co/ajax/adarshv978@gmail.com",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: submitData,
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.message || "Failed to send application");
      }

      alert("Application submitted successfully!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        coverLetter: "",
      });

      setResumeFile(null);

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } catch (error) {
      console.error(error);
      alert(
        error instanceof Error
          ? error.message
          : "Something went wrong while submitting the application."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      encType="multipart/form-data"
      className="space-y-5"
    >
      <div>
        <label
          htmlFor="position"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Position
        </label>
        <input
          id="position"
          type="text"
          value={selectedPosition}
          readOnly
          className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 text-gray-700 outline-none"
        />
      </div>

      <div>
        <label
          htmlFor="name"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Full Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-indigo-600"
        />
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-indigo-600"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-indigo-600"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="resume"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Upload Resume
        </label>
        <input
          ref={fileInputRef}
          id="resume"
          name="attachment"
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleFileChange}
          required
          className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none file:mr-4 file:rounded-md file:border-0 file:bg-indigo-600 file:px-4 file:py-2 file:text-white hover:file:bg-indigo-700"
        />
        {resumeFile && (
          <p className="mt-2 text-sm text-gray-600">
            Selected file: {resumeFile.name}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="coverLetter"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Cover Letter
        </label>
        <textarea
          id="coverLetter"
          name="coverLetter"
          value={formData.coverLetter}
          onChange={handleChange}
          rows={5}
          required
          className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-indigo-600"
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 disabled:opacity-60"
      >
        {isSubmitting ? "Submitting..." : "Submit Application"}
      </Button>
    </form>
  );
}