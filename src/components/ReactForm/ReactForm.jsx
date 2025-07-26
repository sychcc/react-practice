import React, { useState } from "react";

import "./reactForm.css";

const FormPractice = () => {
  // All form data state
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    bio: "",
    country: "",
    gender: "",
    interests: [],
    agreeTerms: false,
    newsletter: false,
  });

  // Error messages state
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle input changes
  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    // Clear error message for this field
    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    }
  };

  // Handle checkbox array (interests)
  const handleInterestChange = (interest) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((item) => item !== interest)
        : [...prev.interests, interest],
    }));
  };

  // Form validation
  const validateForm = () => {
    const newErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
    } else if (formData.username.length < 3) {
      newErrors.username = "Username must be at least 3 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email format";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!formData.country) {
      newErrors.country = "Please select a country";
    }

    if (!formData.gender) {
      newErrors.gender = "Please select gender";
    }

    if (!formData.agreeTerms) {
      newErrors.agreeTerms = "Please agree to terms and conditions";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitted(true);
      console.log("Form submitted successfully:", formData);
    }
  };

  // Reset form
  const resetForm = () => {
    setFormData({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      bio: "",
      country: "",
      gender: "",
      interests: [],
      agreeTerms: false,
      newsletter: false,
    });
    setErrors({});
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <div className="form-container">
        <div className="success-page">
          <div className="success-icon">✅</div>
          <h2 className="success-title">Registration Successful!</h2>
          <div className="success-data">
            <h3>Submitted Data:</h3>
            <p>
              <strong>Username:</strong> {formData.username}
            </p>
            <p>
              <strong>Email:</strong> {formData.email}
            </p>
            <p>
              <strong>Country:</strong> {formData.country}
            </p>
            <p>
              <strong>Gender:</strong> {formData.gender}
            </p>
            <p>
              <strong>Interests:</strong>{" "}
              {formData.interests.join(", ") || "None"}
            </p>
            <p>
              <strong>Bio:</strong> {formData.bio || "Not provided"}
            </p>
            <p>
              <strong>Newsletter:</strong> {formData.newsletter ? "Yes" : "No"}
            </p>
          </div>
          <button className="btn btn-primary" onClick={resetForm}>
            Fill Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="form-container">
      <h1 className="form-title">User Registration Form</h1>

      <div className="form-content">
        {/* Username */}
        <div className="form-group">
          <label className="form-label">Username *</label>
          <input
            type="text"
            value={formData.username}
            onChange={(e) => handleInputChange("username", e.target.value)}
            placeholder="Enter your username"
            className={`form-input ${errors.username ? "error" : ""}`}
          />
          {errors.username && (
            <p className="error-message">{errors.username}</p>
          )}
          <p className="info-text">
            Current input: "{formData.username}" (length:{" "}
            {formData.username.length})
          </p>
        </div>

        {/* Email */}
        <div className="form-group">
          <label className="form-label">Email *</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            placeholder="Enter your email"
            className={`form-input ${errors.email ? "error" : ""}`}
          />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>

        {/* Password */}
        <div className="form-group">
          <label className="form-label">Password *</label>
          <input
            type="password"
            value={formData.password}
            onChange={(e) => handleInputChange("password", e.target.value)}
            placeholder="Enter your password"
            className={`form-input ${errors.password ? "error" : ""}`}
          />
          {errors.password && (
            <p className="error-message">{errors.password}</p>
          )}
        </div>

        {/* Confirm Password */}
        <div className="form-group">
          <label className="form-label">Confirm Password *</label>
          <input
            type="password"
            value={formData.confirmPassword}
            onChange={(e) =>
              handleInputChange("confirmPassword", e.target.value)
            }
            placeholder="Confirm your password"
            className={`form-input ${errors.confirmPassword ? "error" : ""}`}
          />
          {errors.confirmPassword && (
            <p className="error-message">{errors.confirmPassword}</p>
          )}
          {formData.password && formData.confirmPassword && (
            <p
              className={`status-text ${
                formData.password === formData.confirmPassword
                  ? "success"
                  : "error"
              }`}
            >
              {formData.password === formData.confirmPassword
                ? "✅ Passwords match"
                : "❌ Passwords do not match"}
            </p>
          )}
        </div>

        {/* Bio */}
        <div className="form-group">
          <label className="form-label">Bio</label>
          <textarea
            value={formData.bio}
            onChange={(e) => handleInputChange("bio", e.target.value)}
            placeholder="Tell us about yourself..."
            rows={3}
            className="form-textarea"
          />
          <p className="info-text">
            Character count: {formData.bio.length}/200
          </p>
        </div>

        {/* Country */}
        <div className="form-group">
          <label className="form-label">Country *</label>
          <select
            value={formData.country}
            onChange={(e) => handleInputChange("country", e.target.value)}
            className={`form-select ${errors.country ? "error" : ""}`}
          >
            <option value="">Select your country</option>
            <option value="usa">United States</option>
            <option value="canada">Canada</option>
            <option value="uk">United Kingdom</option>
            <option value="australia">Australia</option>
            <option value="germany">Germany</option>
            <option value="france">France</option>
            <option value="japan">Japan</option>
            <option value="other">Taiwan</option>
          </select>
          {errors.country && <p className="error-message">{errors.country}</p>}
          {formData.country && (
            <p className="success-text">
              Selected:{" "}
              {formData.country === "usa"
                ? "United States"
                : formData.country === "canada"
                ? "Canada"
                : formData.country === "uk"
                ? "United Kingdom"
                : formData.country === "australia"
                ? "Australia"
                : formData.country === "germany"
                ? "Germany"
                : formData.country === "france"
                ? "France"
                : formData.country === "japan"
                ? "Japan"
                : "Other"}
            </p>
          )}
        </div>

        {/* Gender */}
        <div className="form-group">
          <label className="form-label">Gender *</label>
          <div className="radio-group">
            <label className="radio-item">
              <input
                type="radio"
                value="male"
                checked={formData.gender === "male"}
                onChange={(e) => handleInputChange("gender", e.target.value)}
              />
              Male
            </label>
            <label className="radio-item">
              <input
                type="radio"
                value="female"
                checked={formData.gender === "female"}
                onChange={(e) => handleInputChange("gender", e.target.value)}
              />
              Female
            </label>
            <label className="radio-item">
              <input
                type="radio"
                value="other"
                checked={formData.gender === "other"}
                onChange={(e) => handleInputChange("gender", e.target.value)}
              />
              Other
            </label>
            <label className="radio-item">
              <input
                type="radio"
                value="prefer_not_to_say"
                checked={formData.gender === "prefer_not_to_say"}
                onChange={(e) => handleInputChange("gender", e.target.value)}
              />
              Prefer not to say
            </label>
          </div>
          {errors.gender && <p className="error-message">{errors.gender}</p>}
          {formData.gender && (
            <p className="success-text">
              Selected:{" "}
              {formData.gender === "male"
                ? "Male"
                : formData.gender === "female"
                ? "Female"
                : formData.gender === "other"
                ? "Other"
                : "Prefer not to say"}
            </p>
          )}
        </div>

        {/* Interests */}
        <div className="form-group">
          <label className="form-label">Interests</label>
          <div className="checkbox-grid">
            {[
              "Programming",
              "Reading",
              "Sports",
              "Music",
              "Travel",
              "Cooking",
              "Gaming",
              "Photography",
            ].map((interest) => (
              <label key={interest} className="checkbox-item">
                <input
                  type="checkbox"
                  checked={formData.interests.includes(interest)}
                  onChange={() => handleInterestChange(interest)}
                />
                {interest}
              </label>
            ))}
          </div>
          <p className="info-text">
            Selected {formData.interests.length} items:{" "}
            {formData.interests.join(", ") || "None"}
          </p>
        </div>

        {/* Terms */}
        <div className="form-group">
          <label className="checkbox-item">
            <input
              type="checkbox"
              checked={formData.agreeTerms}
              onChange={(e) =>
                handleInputChange("agreeTerms", e.target.checked)
              }
            />
            I agree to the Terms and Conditions *
          </label>
          {errors.agreeTerms && (
            <p className="error-message">{errors.agreeTerms}</p>
          )}
        </div>

        {/* Newsletter */}
        <div className="form-group">
          <label className="checkbox-item">
            <input
              type="checkbox"
              checked={formData.newsletter}
              onChange={(e) =>
                handleInputChange("newsletter", e.target.checked)
              }
            />
            Subscribe to newsletter (optional)
          </label>
        </div>

        {/* Status */}
        <div className="status-box">
          <h3>📊 Real-time Status</h3>
          <div className="status-content">
            <p>
              Form completion:{" "}
              {
                Object.values(formData).filter((v) =>
                  Array.isArray(v)
                    ? v.length > 0
                    : typeof v === "boolean"
                    ? v === true
                    : v !== ""
                ).length
              }
              /10
            </p>
            <p>Error count: {Object.keys(errors).length}</p>
            <p>
              Can submit:{" "}
              {Object.keys(errors).length === 0 && formData.agreeTerms
                ? "✅"
                : "❌"}
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="button-group">
          <button className="btn btn-primary" onClick={handleSubmit}>
            Register
          </button>
          <button className="btn btn-secondary" onClick={resetForm}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormPractice;
