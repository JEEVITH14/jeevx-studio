# EmailJS Setup Guide

This guide will help you set up EmailJS for the contact form functionality.

## Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps
5. Note down your **Service ID**

## Step 3: Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template structure:

```
Subject: New Contact Form Submission from {{from_name}}

Hello {{to_name}},

You have received a new contact form submission:

Name: {{from_name}}
Email: {{from_email}}
Company: {{company}}
Budget: {{budget}}

Message:
{{message}}

Best regards,
{{from_name}}
```

4. Save the template and note down your **Template ID**

## Step 4: Get Your Public Key

1. Go to "Account" → "API Keys"
2. Copy your **Public Key**

## Step 5: Update Configuration

1. Open `src/lib/emailjs-config.ts`
2. Replace the placeholder values with your actual credentials:

```typescript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_yujx89j',
  TEMPLATE_ID: 'template_tgig0ya', 
  PUBLIC_KEY: 'ftiESsVvRy0Yr00x4',
}
```

## Step 6: Test the Form

1. Start your development server: `npm run dev`
2. Go to the contact form
3. Fill out the form and submit
4. Check your email to confirm the message was received

## Features

- **Real Email Delivery**: Sends actual emails to your inbox
- **Form Validation**: Client-side validation before sending
- **Error Handling**: Shows error messages if sending fails
- **Success Feedback**: Toast notifications for successful submissions
- **Loading States**: Shows "Sending..." while processing
- **Form Reset**: Clears form after successful submission

## Security Notes

- The public key is safe to use in client-side code
- EmailJS handles the email sending server-side
- No sensitive data is stored in your application
- All form data is sent directly to your email

## Troubleshooting

### Common Issues:

1. **"Failed to send message"**
   - Check your EmailJS credentials
   - Verify your service is properly connected
   - Ensure your template variables match the code

2. **"Service not found"**
   - Double-check your Service ID
   - Make sure your email service is active

3. **"Template not found"**
   - Verify your Template ID
   - Check that your template is published

### Debug Mode:

Add this to see detailed error information:

```typescript
// In ContactSection.tsx, add this before the emailjs.send call:
console.log('Sending email with params:', templateParams)
```

## Free Plan Limits

- 200 emails per month
- Basic email templates
- Standard support

For higher limits, consider upgrading to a paid plan.

## Alternative Setup

If you prefer to use environment variables:

1. Create a `.env` file in your project root:
```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

2. Update the config file:
```typescript
export const EMAILJS_CONFIG = {
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
}
```

This keeps your credentials out of your code repository. 