/**
 * API service layer — currently uses local data.
 * Replace fetch calls with real endpoints when Django backend is ready.
 *
 * Future base URL: process.env.VITE_API_URL || 'https://api.virtualexecutives.co'
 */

import emailjs from '@emailjs/browser';
import { services } from '../data/services.js';
import { projects } from '../data/projects.js';
import { testimonials } from '../data/testimonials.js';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

// Simulate async API response
const simulate = (data, delay = 300) =>
  new Promise((resolve) => setTimeout(() => resolve(data), delay));

export async function getServices() {
  return simulate(services);
}

export async function getProjects() {
  return simulate(projects);
}

export async function getTestimonials() {
  return simulate(testimonials);
}

export async function submitContact(data) {
  const templateParams = {
    name: data.fullName,
    from_name: data.fullName,
    from_email: data.email,
    phone: data.phone || 'Not provided',
    company: data.company || 'Not provided',
    service: data.service || 'Not specified',
    budget: data.budget || 'Not specified',
    subject: data.subject,
    message: data.message,
  };

  const response = await emailjs.send(
    EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID,
    templateParams,
    EMAILJS_PUBLIC_KEY
  );

  try {
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );
    return { success: true, message: 'Your message has been received.', response };
  } catch (err) {
    console.error('EmailJS error:', err);
    throw err;
  }
}



export async function getSiteSettings() {
  return simulate({
    siteName: 'Virtual Executives',
    tagline: 'Remote Talent. Digital Execution. Real Growth.',
  });
}