import React, { useState } from 'react';
import { motion } from 'framer-motion';

const AppointmentBooking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    reason: '',
  });
  const [step, setStep] = useState(1);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Appointment booked:', formData);
    alert('Appointment booked successfully!');
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      reason: '',
    });
    setStep(1);
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return '';
    return new Date(dateStr).toLocaleDateString();
  };

  const formatTime = (timeStr) => {
    if (!timeStr) return '';
    return new Date(`2000/01/01 ${timeStr}`).toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  const ReviewField = ({ label, value }) => (
    <div className="mb-2">
      <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">{label}</p>
      <p className="text-sm text-gray-900 dark:text-white">{value || 'Not provided'}</p>
    </div>
  );

  // Updated input classes to handle autofill
  const inputClasses = `mt-2 block w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors duration-200 ease-in-out text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500
  [&:-webkit-autofill]:!fill-none 
  [&:-webkit-autofill]:[transition:background-color_9999999s_ease-in-out_0s]
  [&:-webkit-autofill]:!appearance-auto
  [&:-webkit-autofill]:[box-shadow:0_0_0px_1000px_rgba(0,0,0,0)_inset]
  dark:[&:-webkit-autofill]:[-webkit-text-fill-color:white]
  [&:-webkit-autofill]:[-webkit-text-fill-color:rgb(17,24,39)]
  [&:-webkit-autofill]:!bg-[rgba(0,0,0,0)]`;

  const labelClasses = "block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1";
  const buttonClasses = "px-6 py-3 rounded-xl shadow-lg text-sm font-medium text-white transition-all duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2";

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="backdrop-blur-xl bg-white/20 dark:bg-gray-800/20 p-8 rounded-3xl shadow-2xl max-w-lg mx-auto"
    >
      <h3 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">
        Book an Appointment
      </h3>
      <div className="mb-6">
        <div className="flex justify-between items-center">
          {[1, 2, 3, 4].map((num) => (
            <div
              key={num}
              className={`w-3 h-3 rounded-full ${
                step >= num
                  ? 'bg-cyan-500'
                  : 'bg-gray-500'
              }`}
            />
          ))}
        </div>
        <div className="text-center mt-2 text-sm text-gray-600 dark:text-gray-400">
          Step {step} of 4
        </div>
      </div>
      <form className="space-y-6">
        {step === 1 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className={labelClasses}>
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                  className={inputClasses}
                />
              </div>
              <div>
                <label htmlFor="email" className={labelClasses}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email address"
                  className={inputClasses}
                />
              </div>
              <button
                type="button"
                onClick={handleNext}
                className={`${buttonClasses} w-full bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700`}
              >
                Next
              </button>
            </div>
          </motion.div>
        )}
        {step === 2 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="space-y-6">
              <div>
                <label htmlFor="phone" className={labelClasses}>
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Enter your phone number"
                  className={inputClasses}
                />
              </div>
              <div>
                <label htmlFor="date" className={labelClasses}>
                  Preferred Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className={`${inputClasses} text-gray-700 dark:text-gray-300`}
                />
              </div>
              <div>
                <label htmlFor="time" className={labelClasses}>
                  Preferred Time
                </label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className={`${inputClasses} text-gray-700 dark:text-gray-300`}
                />
              </div>
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={handleBack}
                  className={`${buttonClasses} flex-1 bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700`}
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className={`${buttonClasses} flex-1 bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700`}
                >
                  Next
                </button>
              </div>
            </div>
          </motion.div>
        )}
        {step === 3 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="space-y-6">
              <div>
                <label htmlFor="reason" className={labelClasses}>
                  Reason for Visit
                </label>
                <textarea
                  id="reason"
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  required
                  placeholder="Please describe the reason for your visit"
                  rows="4"
                  className={`${inputClasses} resize-none`}
                ></textarea>
              </div>
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={handleBack}
                  className={`${buttonClasses} flex-1 bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700`}
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className={`${buttonClasses} flex-1 bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700`}
                >
                  Review
                </button>
              </div>
            </div>
          </motion.div>
        )}
        {step === 4 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="space-y-4">
              <div className="bg-white/30 dark:bg-gray-800/30 rounded-xl p-4 backdrop-blur-sm">
                <h4 className="text-base font-semibold mb-3 text-gray-900 dark:text-white">Review Your Information</h4>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                  <ReviewField label="Name" value={formData.name} />
                  <ReviewField label="Email" value={formData.email} />
                  <ReviewField label="Phone" value={formData.phone} />
                  <ReviewField label="Date" value={formatDate(formData.date)} />
                  <ReviewField label="Time" value={formatTime(formData.time)} />
                </div>
                <div className="mt-3">
                  <ReviewField label="Reason for Visit" value={formData.reason} />
                </div>
              </div>
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={handleBack}
                  className={`${buttonClasses} flex-1 bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700`}
                >
                  Back
                </button>
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className={`${buttonClasses} flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700`}
                >
                  Confirm
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </form>
    </motion.div>
  );
};

export default AppointmentBooking;