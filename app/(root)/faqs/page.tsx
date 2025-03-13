'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useState } from 'react';

const FAQ = () => {
  const [openItem, setOpenItem] = useState<string | null>('item-0');

  const faqItems = [
    {
      question: 'What tech stack do you primarily use for web development?',
      description:
        "Our primary tech stack includes React Next JS for frontend development, Laravel for backend PHP development, and we use both MySQL and MongoDB for databases depending on project requirements. We're proficient in JavaScript, TypeScript, and Python, and we use tools like Mongoose for MongoDB object modeling.",
    },
    {
      question: 'Can you handle both frontend and backend development?',
      description:
        "We're a full-stack development team. We excel in frontend development with React and TypeScript, and we're equally skilled in backend development using Laravel and Node.js. This allows us to provide end-to-end solutions for web applications.",
    },
    {
      question: 'Do you have experience with large-scale, data-intensive applications?',
      description:
        'Yes, we have extensive experience building large-scale, data-intensive applications. We use MongoDB for handling large volumes of unstructured data and MySQL for complex relational data. Our team is skilled in optimizing database queries and designing efficient data models to ensure high performance even with large datasets.',
    },
    {
      question: 'How do you ensure the security of web applications?',
      description:
        'Security is a top priority in all our projects. We implement best practices such as data encryption, secure authentication methods, and protection against common vulnerabilities like SQL injection and XSS attacks. We also perform regular security audits and keep all libraries and frameworks up-to-date.',
    },
    {
      question: 'Can you integrate third-party APIs and services into our application?',
      description:
        "We have extensive experience integrating a wide range of third-party APIs and services. Whether it's payment gateways, social media APIs, cloud services, or any other external service, we can seamlessly integrate them into your application while ensuring optimal performance and security.",
    },
    {
      question: 'Do you provide ongoing maintenance and support after the project is launched?',
      description:
        'Yes, we offer comprehensive maintenance and support services post-launch. This includes bug fixes, security updates, performance optimization, and feature enhancements. We can set up a maintenance contract tailored to your specific needs to ensure your application continues to run smoothly and stays up-to-date.',
    },
    {
      question: 'How do you handle project management and communication during development?',
      description:
        "We follow an Agile development methodology, typically using Scrum or Kanban depending on the project needs. We use project management tools like Jira or Trello for task tracking, and we maintain regular communication through channels like Slack and scheduled video calls. We provide frequent updates and demos to ensure you're always in the loop about the project's progress.",
    },
    {
      question: 'Can you work with our existing codebase or do you prefer to start from scratch?',
      description:
        "We're comfortable with both scenarios. We can efficiently work with and improve existing codebases, performing code audits and refactoring as needed. However, if starting from scratch is more beneficial for your project's long-term success, we can also build your application from the ground up using the latest best practices and technologies.",
    },
  ];

  return (
    <div className="pb-12 sm:pb-16 md:pb-24">
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl pt-10 sm:pt-16 md:pt-20 py-8 sm:py-12 md:py-16 px-4 sm:px-8 md:px-16 border-b border-black/15">
        A few things you may want to ask us:
      </h2>
      <div>
        <Accordion
          type="single"
          collapsible
          defaultValue="item-0"
          value={openItem || undefined}
          onValueChange={(value) => setOpenItem(value)}
        >
          {faqItems.map((item, idx) => (
            <AccordionItem key={idx} className="border-b border-black/15" value={`item-${idx}`}>
              <AccordionTrigger className="hover:no-underline px-4 sm:px-8 md:px-16 py-4 sm:py-6">
                {/* Mobile layout (default) */}
                <div className="flex flex-col space-y-2 w-full lg:hidden">
                  <h2 className="text-left text-lg sm:text-xl font-normal">{item.question}</h2>
                  <div className="flex justify-between items-center">
                    <h2
                      className={`text-sm ${openItem === `item-${idx}` ? 'visible' : 'invisible'}`}
                    >
                      Description:
                    </h2>
                    <h2
                      className={`text-sm ${
                        openItem === `item-${idx}` ? 'opacity-30' : 'opacity-100'
                      }`}
                    >
                      READ
                    </h2>
                  </div>
                </div>

                {/* Desktop layout (lg and above) */}
                <div className="hidden lg:grid grid-cols-4 items-center justify-between text-lg md:text-2xl font-normal w-full">
                  <h2 className="col-span-2 text-left">{item.question}</h2>
                  <h2
                    className={`col-span-1 ${openItem === `item-${idx}` ? 'visible' : 'invisible'}`}
                  >
                    Description:
                  </h2>
                  <h2
                    className={`col-span-1 text-end ${
                      openItem === `item-${idx}` ? 'opacity-30' : 'opacity-100'
                    }`}
                  >
                    READ
                  </h2>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                {/* Mobile layout (default) */}
                <div className="px-4 sm:px-8 md:px-16 py-6 sm:py-8 md:py-12 lg:hidden">
                  <p className="text-sm sm:text-base">{item.description}</p>
                </div>

                {/* Desktop layout (lg and above) */}
                <div className="hidden lg:grid grid-cols-4 items-start justify-between text-lg md:text-2xl font-normal w-full px-4 md:px-16 py-16">
                  <h2 className="col-span-2"></h2>
                  <div className="col-span-2">
                    <p className="text-base md:text-xl">{item.description}</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
