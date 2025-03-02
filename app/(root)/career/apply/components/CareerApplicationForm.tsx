'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import { CheckCircle, Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

// Mock job positions - in a real application, this would come from an API or database
const positions = [
  { value: 'senior-frontend-developer', label: 'Senior Frontend Developer' },
  { value: 'ux-ui-designer', label: 'UX/UI Designer' },
  { value: 'devops-engineer', label: 'DevOps Engineer' },
  { value: 'product-manager', label: 'Product Manager' },
  { value: 'marketing-specialist', label: 'Marketing Specialist' },
  { value: 'customer-support', label: 'Customer Support' },
  { value: 'other', label: 'Other' },
];

const formSchema = z.object({
  firstName: z.string().min(2, { message: 'First name must be at least 2 characters.' }),
  lastName: z.string().min(2, { message: 'Last name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().min(10, { message: 'Please enter a valid phone number.' }).optional(),
  position: z.string({ required_error: 'Please select a position.' }),
  otherPosition: z.string().optional(),
  experience: z.string().min(1, { message: 'Please describe your experience.' }),
  coverLetter: z.string().optional(),
  resume: z
    .instanceof(File, { message: 'Please upload your resume.' })
    .refine((file) => file.size <= 5000000, { message: 'File size should be less than 5MB.' })
    .refine(
      (file) =>
        [
          'application/pdf',
          'application/msword',
          'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        ].includes(file.type),
      { message: 'File must be PDF or Word document.' },
    ),
});

type FormValues = z.infer<typeof formSchema>;

export default function ApplicationForm({ preselectedPosition }: { preselectedPosition?: string }) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Find the position value that matches the preselected position label
  const defaultPosition = preselectedPosition
    ? positions.find((p) => p.label === preselectedPosition)?.value || ''
    : '';

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      position: defaultPosition,
      otherPosition: '',
      experience: '',
      coverLetter: '',
      resume: undefined, // Initialize resume as undefined
    },
  });

  const position = form.watch('position');

  async function onSubmit(data: FormValues) {
    setIsSubmitting(true);

    try {
      // In a real application, you would submit this data to your server
      // using a fetch request or a server action
      console.log('Form data:', data);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setIsSubmitted(true);
      //   toast({
      //     title: 'Application submitted successfully!',
      //     description: "We'll review your application and get back to you soon.",
      //   });

      // Reset form after successful submission
      form.reset();

      // Redirect to thank you page after a delay
      setTimeout(() => {
        router.push('/apply/thank-you');
      }, 2000);
    } catch (error) {
      console.error('Error submitting form:', error);
      //   toast({
      //     title: 'Error submitting application',
      //     description: 'There was a problem submitting your application. Please try again.',
      //     variant: 'destructive',
      //   });
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSubmitted) {
    return (
      <Card className="w-full p-6">
        <CardContent className="flex flex-col items-center justify-center space-y-4 pt-6">
          <CheckCircle className="h-16 w-16 text-green-500" />
          <h2 className="text-2xl font-bold">Application Submitted!</h2>
          <p className="text-center text-muted-foreground">
            Thank you for your interest in joining our team. We&#39;ve received your application and
            will review it shortly.
          </p>
          <p className="text-center text-muted-foreground">
            You&#39;ll be redirected to a confirmation page in a moment...
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full p-6">
      <CardContent className="pt-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name *</FormLabel>
                    <FormControl>
                      <Input placeholder="John" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name *</FormLabel>
                    <FormControl>
                      <Input placeholder="Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email *</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="john.doe@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input placeholder="+1 (555) 123-4567" {...field} />
                    </FormControl>
                    <FormDescription>Optional but recommended</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <FormField
                control={form.control}
                name="position"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Position *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a position" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {positions.map((position) => (
                          <SelectItem key={position.value} value={position.value}>
                            {position.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {position === 'other' && (
                <FormField
                  control={form.control}
                  name="otherPosition"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Specify Position *</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter position title" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}
            </div>

            <FormField
              control={form.control}
              name="experience"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Relevant Experience *</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Briefly describe your relevant experience and skills for this position."
                      className="min-h-[120px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="coverLetter"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cover Letter</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us why you're interested in this position and why you'd be a good fit."
                      className="min-h-[150px]"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>Optional</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="resume"
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              render={({ field: { value, onChange, ...fieldProps } }) => (
                <FormItem>
                  <FormLabel>Resume/CV *</FormLabel>
                  <FormControl>
                    <Input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          onChange(file);
                        }
                      }}
                      {...fieldProps}
                    />
                  </FormControl>
                  <FormDescription>
                    Upload your resume (PDF or Word document, max 5MB)
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                'Submit Application'
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
