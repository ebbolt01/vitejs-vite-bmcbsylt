import { FormData } from '../types';

export async function submitForm(formData: FormData) {
  try {
    // Enviar a PHP
    const response = await fetch('/api/contact.php', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Enviar a Google Sheets
    await fetch('/api/sheets', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response.ok;
  } catch (error) {
    console.error('Error submitting form:', error);
    return false;
  }
}