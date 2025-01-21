"use client";

import { useState } from "react";

export default function CareerForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    resume: null,
    coverLetter: null,
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple validation
    if (!formData.firstName || !formData.lastName || !formData.phone || !formData.email || !formData.resume) {
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    // Simulating form submission
    try {
      console.log("Form submitted:", formData);
      setSuccessMessage("Your application has been submitted successfully!");
      setErrorMessage("");
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        resume: null,
        coverLetter: null,
      });
    } catch {
      setErrorMessage("Failed to submit the application.");
      setSuccessMessage("");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Employment Application Form</h2>
      {successMessage && (
        <div className="alert alert-success" role="alert">
          {successMessage}
        </div>
      )}
      {errorMessage && (
        <div className="alert alert-danger" role="alert">
          {errorMessage}
        </div>
      )}
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="firstName" className="form-label">
              First Name <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Enter your first name"
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="lastName" className="form-label">
              Last Name <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Enter your last name"
              required
            />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone Number <span className="text-danger">*</span>
          </label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email Address <span className="text-danger">*</span>
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="resume" className="form-label">
            Upload Resume <span className="text-danger">*</span>
          </label>
          <input
            type="file"
            className="form-control"
            id="resume"
            name="resume"
            onChange={handleFileChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="coverLetter" className="form-label">
            Upload Cover Letter (Optional)
          </label>
          <input
            type="file"
            className="form-control"
            id="coverLetter"
            name="coverLetter"
            onChange={handleFileChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit Application
        </button>
      </form>
    </div>
  );
}
