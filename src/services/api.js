/**
 * API service layer — currently uses local data.
 * Replace fetch calls with real endpoints when Django backend is ready.
 *
 * Future base URL: process.env.VITE_API_URL || 'https://api.virtualexecutives.co'
 */

import { services } from '../data/services.js';
import { projects } from '../data/projects.js';
import { testimonials } from '../data/testimonials.js';

// Simulate async API response
const simulate = (data, delay = 300) =>
  new Promise((resolve) => setTimeout(() => resolve(data), delay));

export async function getServices() {
  // Future: return fetch('/api/services/').then(r => r.json())
  return simulate(services);
}

export async function getProjects() {
  // Future: return fetch('/api/projects/').then(r => r.json())
  return simulate(projects);
}

export async function getTestimonials() {
  // Future: return fetch('/api/testimonials/').then(r => r.json())
  return simulate(testimonials);
}

export async function submitContact(data) {
  // Future: return fetch('/api/contact/', { method: 'POST', body: JSON.stringify(data), headers: { 'Content-Type': 'application/json' } }).then(r => r.json())
  console.log('[Contact Form Submission]', data);
  return simulate({ success: true, message: 'Your message has been received.' }, 1000);
}

export async function getSiteSettings() {
  // Future: return fetch('/api/site-settings/').then(r => r.json())
  return simulate({
    siteName: 'Virtual Executives',
    tagline: 'Remote Talent. Digital Execution. Real Growth.',
  });
}
