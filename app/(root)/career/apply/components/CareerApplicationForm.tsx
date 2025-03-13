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
import { motion } from 'framer-motion';
import { CheckCircle, Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

// Mock job positions
const positions = [
  { value: 'senior-frontend-developer', label: 'Senior Frontend Developer' },
  { value: 'ux-ui-designer', label: 'UX/UI Designer' },
  { value: 'devops-engineer', label: 'DevOps Engineer' },
  { value: 'product-manager', label: 'Product Manager' },
  { value: 'marketing-specialist', label: 'Marketing Specialist' },
  { value: 'customer-support', label: 'Customer Support' },
  { value: 'other', label: 'Other' },
];

// Form schema
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

export default function ApplicationForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      position: '',
      otherPosition: '',
      experience: '',
      coverLetter: '',
      resume: undefined,
    },
  });

  const position = form.watch('position');

  async function onSubmit(data: FormValues) {
    setIsSubmitting(true);

    try {
      console.log('Form data:', data);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsSubmitted(true);
      form.reset();
      setTimeout(() => {
        router.push('/career/thank-you');
      }, 2000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full p-6"
      >
        <Card className="w-full p-6">
          <CardContent className="flex flex-col items-center justify-center space-y-4 pt-6">
            <CheckCircle className="h-16 w-16 text-green-500" />
            <h2 className="text-2xl font-bold">Application Submitted!</h2>
            <p className="text-center text-muted-foreground">
              Thank you for your interest in joining our team. We&#39;ve received your application
              and will review it shortly.
            </p>
            <p className="text-center text-muted-foreground">
              You&#39;ll be redirected to a confirmation page in a moment...
            </p>
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full px-16 py-12"
    >
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="mb-6"
      >
        <h2 className="text-7xl pb-10 border-b border-black/15">Application Form</h2>
      </motion.div>
      <Card className="w-full p-6 rounded-none shadow-none border-0">
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
                        <Input
                          className="bg-[#F1F1F1]/50 py-5 border-x-0 border-t-0 border-b-1 rounded-none border-black/55"
                          placeholder="John"
                          {...field}
                        />
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
                        <Input
                          className="bg-[#F1F1F1]/50 py-5 border-x-0 border-t-0 border-b-1 rounded-none border-black/55"
                          placeholder="Doe"
                          {...field}
                        />
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
                        <Input
                          className="bg-[#F1F1F1]/50 py-5 border-x-0 border-t-0 border-b-1 rounded-none border-black/55"
                          type="email"
                          placeholder="john.doe@example.com"
                          {...field}
                        />
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
                        <Input
                          className="bg-[#F1F1F1]/50 py-5 border-x-0 border-t-0 border-b-1 rounded-none border-black/55"
                          placeholder="+1 (555) 123-4567"
                          {...field}
                        />
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
                          <SelectTrigger className="bg-[#F1F1F1]/50 py-5 border-x-0 border-t-0 border-b-1 rounded-none border-black/55">
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
                          <Input
                            className="bg-[#F1F1F1]/50 py-5 border-x-0 border-t-0 border-b-1 rounded-none border-black/55"
                            placeholder="Enter position title"
                            {...field}
                          />
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
                        className="min-h-[120px] bg-[#F1F1F1]/50 py-5 border-x-0 border-t-0 border-b-1 rounded-none border-black/55"
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
                        className="min-h-[150px] bg-[#F1F1F1]/50 py-5 border-x-0 border-t-0 border-b-1 rounded-none border-black/55"
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
                        className="bg-[#F1F1F1]/50 py-5 border-x-0 border-t-0 border-b-1 rounded-none border-black/55 cursor-pointer"
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

              <Button type="submit" className="w-full py-6 rounded-none" disabled={isSubmitting}>
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
    </motion.div>
  );
}
