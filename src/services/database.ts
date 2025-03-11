
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client (these would be replaced with your actual keys)
const supabaseUrl = 'https://xtbrqxclmpddndmrghyk.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh0YnJxeGNsbXBkZG5kbXJnaHlrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE2NzY3NDgsImV4cCI6MjA1NzI1Mjc0OH0.e_8pche58Nf_7O2lIBQTwQ9DWbYmTpq5y_3ROpkd2VA';

// Create a single supabase client for the entire app
const supabase = createClient(supabaseUrl, supabaseKey);

// Waitlist form submission
export const submitWaitlistEntry = async (data: { name: string; email: string }) => {
  try {
    const { error } = await supabase
      .from('waitlist')
      .insert([data]);
      
    if (error) throw error;
    return { success: true };
  } catch (error) {
    console.error('Error submitting to waitlist:', error);
    return { success: false, error };
  }
};

// Join Movement form submission
export const submitJoinMovement = async (data: { 
  name: string; 
  email: string; 
  phone?: string;
  age?: string;
}) => {
  try {
    const { error } = await supabase
      .from('movement_joiners')
      .insert([data]);
      
    if (error) throw error;
    return { success: true };
  } catch (error) {
    console.error('Error submitting to movement:', error);
    return { success: false, error };
  }
};

// Survey data submission
export const submitSurveyData = async (data: any) => {
  try {
    const { error } = await supabase
      .from('survey_responses')
      .insert([data]);
      
    if (error) throw error;
    return { success: true };
  } catch (error) {
    console.error('Error submitting survey data:', error);
    return { success: false, error };
  }
};

// Function to handle form submission with fallback
export const submitFormData = async (formType: 'waitlist' | 'movement' | 'survey', data: any) => {
  try {
    // First try submitting to Supabase
    switch (formType) {
      case 'waitlist':
        return await submitWaitlistEntry(data);
      case 'movement':
        return await submitJoinMovement(data);
      case 'survey':
        return await submitSurveyData(data);
      default:
        throw new Error('Invalid form type');
    }
  } catch (error) {
    // If Supabase fails, we can store data in localStorage as a fallback
    try {
      // Get existing data or initialize empty array
      const existingData = JSON.parse(localStorage.getItem(`livrr_${formType}_data`) || '[]');
      
      // Add timestamp to data
      const dataWithTimestamp = {
        ...data,
        submittedAt: new Date().toISOString()
      };
      
      // Add new submission to array
      existingData.push(dataWithTimestamp);
      
      // Save back to localStorage
      localStorage.setItem(`livrr_${formType}_data`, JSON.stringify(existingData));
      
      return { success: true, storedLocally: true };
    } catch (localError) {
      console.error('Failed to store in localStorage:', localError);
      return { success: false, error: localError };
    }
  }
};
