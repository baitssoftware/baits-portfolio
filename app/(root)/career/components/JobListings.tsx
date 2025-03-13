import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';

// Mock job data - in a real application, this would come from an API or database
const jobs = [
  {
    id: 1,
    title: 'Senior Frontend Developer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    description:
      "We're looking for an experienced Frontend Developer to join our team and help build amazing user experiences.",
    requirements: [
      '5+ years of experience with React',
      'Strong TypeScript skills',
      'Experience with Next.js',
    ],
  },
  {
    id: 2,
    title: 'UX/UI Designer',
    department: 'Design',
    location: 'New York, NY',
    type: 'Full-time',
    description:
      'Join our design team to create beautiful and intuitive user interfaces for our products.',
    requirements: [
      '3+ years of UX/UI design experience',
      'Proficiency in Figma',
      'Portfolio showcasing your work',
    ],
  },
  {
    id: 3,
    title: 'DevOps Engineer',
    department: 'Operations',
    location: 'Remote',
    type: 'Full-time',
    description: 'Help us build and maintain our cloud infrastructure and deployment pipelines.',
    requirements: [
      'Experience with AWS or GCP',
      'Knowledge of Docker and Kubernetes',
      'CI/CD pipeline experience',
    ],
  },
  {
    id: 4,
    title: 'Senior Frontend Developer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    description:
      "We're looking for an experienced Frontend Developer to join our team and help build amazing user experiences.",
    requirements: [
      '5+ years of experience with React',
      'Strong TypeScript skills',
      'Experience with Next.js',
    ],
  },
];

export default function JobListings() {
  return (
    <div className="grid mt-8 md:grid-cols-2 lg:grid-cols-4">
      {jobs.map((job) => (
        <Card
          key={job.id}
          className="flex flex-col rounded-none hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-orange-100"
        >
          <CardHeader>
            <div className="flex justify-between items-start">
              <CardTitle>{job.title}</CardTitle>
              <Badge variant="outline">{job.type}</Badge>
            </div>
            <CardDescription>
              {job.department} • {job.location}
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <p className="text-sm text-muted-foreground mb-4">{job.description}</p>
            <div className="space-y-2">
              <h4 className="text-sm font-medium">Requirements:</h4>
              <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                {job.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </div>
          </CardContent>
          <CardFooter>
            <Link href={`/apply?position=${job.title}`} className="w-full">
              {/* w-[calc(100%+3rem)] rounded-none -mx-6 */}
              <Button variant="outline" className="w-full rounded-none ">
                Apply Now
              </Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
