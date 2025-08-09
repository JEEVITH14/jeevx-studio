// EmailJS Configuration
// Replace these values with your actual EmailJS credentials

export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_vqg54nd', // Your EmailJS service ID
  TEMPLATE_ID: 'template_tgig0ya', // Your EmailJS template ID
  PUBLIC_KEY: 'ftiESsVvRy0Yr00x4', // Your EmailJS public key 
}

// EmailJS Template Variables
export interface EmailTemplateParams {
  from_name: string
  from_email: string
  company: string
  message: string
  to_name: string
}

// EmailJS Template Example:
/*
Subject: New Contact Form Submission from {{from_name}}

Hello {{to_name}},

You have received a new contact form submission:

Name: {{from_name}}
Email: {{from_email}}
Company: {{company}}

Message:
{{message}}

Best regards,
{{from_name}}
*/ 