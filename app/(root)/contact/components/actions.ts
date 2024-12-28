"use server";

interface FormData {
  name: string;
  company: string;
  goal: string;
  date: string;
  budget: string;
  email: string;
  details?: string;
  privacyPolicy: boolean;
}

export async function submitInquiry(data: FormData) {
  // Simulate a delay to show loading state
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Here you would typically send the data to your backend service
  console.log("Form submitted:", data);

  return { success: true };
}
