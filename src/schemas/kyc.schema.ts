import { z } from 'zod';

export const submitKycSchema = z.object({
    documentType: z.enum(['passport', 'drivers-license', 'national-id', 'utility-bill', 'bank-statement'], {
        required_error: 'Document type is required'
    }),
    documentNumber: z.string().optional(),
    documentFront: z.string({
        required_error: 'Front document image is required'
    }),
    documentBack: z.string().optional(),
    selfie: z.string().optional(),
    firstName: z.string().min(1, 'First name is required'),
    lastName: z.string().min(1, 'Last name is required'),
    dateOfBirth: z.string({
        required_error: 'Date of birth is required'
    }),
    address: z.any().optional(),
    ssn: z.string().optional()
});
