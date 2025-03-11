
import { useState } from 'react';
import { submitFormData } from '@/services/database';
import { useToast } from './use-toast';

type FormType = 'waitlist' | 'movement' | 'survey';

interface UseFormSubmissionProps {
  formType: FormType;
  successMessage: {
    title: string;
    description: string;
  };
  onSuccess?: () => void;
}

export const useFormSubmission = ({ 
  formType, 
  successMessage, 
  onSuccess 
}: UseFormSubmissionProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const submitForm = async (data: any) => {
    setIsSubmitting(true);
    setError(null);

    try {
      const result = await submitFormData(formType, data);
      
      setIsSubmitting(false);
      
      if (result.success) {
        toast({
          title: successMessage.title,
          description: `${successMessage.description}${
            result.storedLocally ? ' (Stored locally for now)' : ''
          }`,
        });
        
        if (onSuccess) {
          onSuccess();
        }
        
        return true;
      } else {
        throw new Error('Submission failed');
      }
    } catch (err) {
      setIsSubmitting(false);
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
      
      toast({
        title: 'Error',
        description: 'There was a problem submitting your information. Please try again.',
      });
      
      return false;
    }
  };

  return {
    isSubmitting,
    error,
    submitForm
  };
};

export default useFormSubmission;
