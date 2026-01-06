
// Fix: Added React import to resolve 'Cannot find namespace React' for React.ReactNode
import React from 'react';

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BenefitItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Testimonial {
  text: string;
  author: string;
  role: string;
}