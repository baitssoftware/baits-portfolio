'use client';

import AnimatedButton from '@/components/shared/button/AnimatedButton';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';
import {
  AlertTriangle,
  BookOpenCheck,
  FileCheck,
  FileClock,
  FileWarning,
  GlobeLock,
  Handshake,
  LockKeyhole,
  LucideIcon,
  Scale,
  ShieldCheck,
} from 'lucide-react';
import React from 'react';
import Hero from './components/Hero';

interface PolicySectionProps {
  title: string;
  children: React.ReactNode;
  icon: LucideIcon;
}

const PolicySection: React.FC<PolicySectionProps> = ({ title, children, icon: Icon }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="mb-12 bg-white p-8 rounded-lg shadow-sm border border-gray-100"
  >
    <div className="flex items-center mb-5 gap-3">
      <div className="bg-orange-50 w-10 h-10 flex items-center justify-center rounded-md">
        <Icon className="w-5 h-5 text-orange-600" />
      </div>
      <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
    </div>
    <div className="text-gray-700 text-base leading-relaxed space-y-4 ml-2 border-l-2 border-gray-100 pl-6">
      {children}
    </div>
  </motion.div>
);

interface CardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ icon: Icon, title, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="bg-white p-8 rounded-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-orange-200 h-full flex flex-col"
  >
    <div className="mb-5 bg-orange-50 w-14 h-14 flex items-center justify-center rounded-md">
      <Icon className="w-7 h-7 text-orange-600" />
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 text-base leading-relaxed flex-grow">{description}</p>
  </motion.div>
);

interface PolicySection {
  title: string;
  icon: LucideIcon;
  content: {
    subtitle: string;
    text: string;
  }[];
}

interface TableOfContentsProps {
  sections: PolicySection[];
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ sections }) => (
  <div className="bg-gray-50 p-6 rounded-lg mb-10 sticky top-10">
    <h4 className="text-lg font-semibold mb-4 text-gray-900">Table of Contents</h4>
    <ul className="space-y-2">
      {sections.map((section, index) => (
        <li key={index}>
          <a
            href={`#section-${index + 1}`}
            className="text-orange-600 hover:text-orange-800 hover:underline flex items-center gap-2"
          >
            <span className="text-sm font-medium bg-orange-100 text-orange-700 w-6 h-6 flex items-center justify-center rounded-full">
              {index + 1}
            </span>
            <span>{section.title}</span>
          </a>
        </li>
      ))}
    </ul>
  </div>
);

interface FAQItem {
  q: string;
  a: string;
}

export default function TermsAndConditions(): React.ReactElement {
  const keyPrinciples: CardProps[] = [
    {
      icon: ShieldCheck,
      title: 'Privacy Protection',
      description:
        'We implement industry-leading security measures and encryption to safeguard your personal information. Our privacy framework complies with GDPR, CCPA, and other global privacy regulations to ensure your data is protected.',
    },
    {
      icon: Scale,
      title: 'Fair & Transparent',
      description:
        "Our terms are written in plain language with no hidden clauses. We clearly outline our mutual rights and responsibilities, providing a balanced agreement that respects both parties' interests.",
    },
    {
      icon: GlobeLock,
      title: 'Global Compliance',
      description:
        'Our terms are designed to comply with international regulations and standards across multiple jurisdictions, ensuring legal protection regardless of your location.',
    },
    {
      icon: Handshake,
      title: 'User-First Approach',
      description:
        'We prioritize user experience and rights throughout our terms. Our policies are designed to protect your interests while maintaining the integrity and quality of our services.',
    },
  ];

  const policySections: PolicySection[] = [
    {
      title: 'Service Agreement',
      icon: FileCheck,
      content: [
        {
          subtitle: 'Acceptance of Terms',
          text: 'By accessing or using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our services.',
        },
        {
          subtitle: 'Modifications to Terms',
          text: 'We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services following any changes indicates your acceptance of the revised Terms.',
        },
        {
          subtitle: 'Eligibility',
          text: 'You must be at least 18 years old or have legal parental or guardian consent to use our services. By using our services, you represent and warrant that you meet all eligibility requirements.',
        },
      ],
    },
    {
      title: 'User Conduct & Responsibilities',
      icon: AlertTriangle,
      content: [
        {
          subtitle: 'Prohibited Activities',
          text: 'You agree not to engage in any activity that interferes with or disrupts the services (or the servers and networks connected to the services). You may not attempt to gain unauthorized access to any portion of the services or any other systems or networks connected to the services.',
        },
        {
          subtitle: 'Content Guidelines',
          text: 'You are solely responsible for any content you post, upload, or otherwise make available through our services. Content must not violate any applicable laws or infringe upon the rights of others.',
        },
        {
          subtitle: 'Account Security',
          text: 'You are responsible for maintaining the security of your account and password. We cannot and will not be liable for any loss or damage from your failure to comply with this security obligation.',
        },
      ],
    },
    {
      title: 'Intellectual Property Rights',
      icon: BookOpenCheck,
      content: [
        {
          subtitle: 'Our Intellectual Property',
          text: 'All content, features, and functionality available through our services, including but not limited to text, graphics, logos, icons, images, audio clips, and software, are owned by us, our licensors, or other providers and are protected by copyright, trademark, patent, and other intellectual property laws.',
        },
        {
          subtitle: 'Limited License',
          text: 'We grant you a limited, non-exclusive, non-transferable, and revocable license to access and use our services for personal, non-commercial purposes in accordance with these Terms.',
        },
        {
          subtitle: 'User Content License',
          text: 'By posting content on or through our services, you grant us a non-exclusive, royalty-free, transferable, sublicensable, worldwide license to use, store, display, reproduce, modify, and distribute your content in connection with the operation of our services.',
        },
      ],
    },
    {
      title: 'Privacy & Data Protection',
      icon: LockKeyhole,
      content: [
        {
          subtitle: 'Data Collection',
          text: 'We collect and process personal data as described in our Privacy Policy. By using our services, you consent to such processing and you warrant that all data provided by you is accurate.',
        },
        {
          subtitle: 'Data Security',
          text: 'We implement appropriate technical and organizational measures to protect personal data against accidental or unlawful destruction, loss, alteration, unauthorized disclosure, or access.',
        },
        {
          subtitle: 'Third-Party Service Providers',
          text: 'We may employ third-party companies and individuals to facilitate our services, provide services on our behalf, or assist us in analyzing how our services are used. These third parties have access to your personal data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.',
        },
      ],
    },
    {
      title: 'Disclaimers & Limitations',
      icon: FileWarning,
      content: [
        {
          subtitle: 'Service Availability',
          text: "Our services are provided on an 'as is' and 'as available' basis. We do not guarantee that our services will be uninterrupted, timely, secure, or error-free.",
        },
        {
          subtitle: 'Limitation of Liability',
          text: 'To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or goodwill, resulting from your access to or use of, or inability to access or use, our services.',
        },
        {
          subtitle: 'Indemnification',
          text: "You agree to defend, indemnify, and hold us harmless from and against any claims, liabilities, damages, losses, and expenses, including reasonable attorney's fees, arising out of or in any way connected with your access to or use of our services or your violation of these Terms.",
        },
      ],
    },
    {
      title: 'Termination & Dispute Resolution',
      icon: FileClock,
      content: [
        {
          subtitle: 'Term and Termination',
          text: 'These Terms shall remain in full force and effect while you use our services. We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason, including if you breach these Terms.',
        },
        {
          subtitle: 'Governing Law',
          text: 'These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law principles.',
        },
        {
          subtitle: 'Dispute Resolution',
          text: 'Any dispute arising out of or relating to these Terms, including their formation, interpretation, breach, or termination, shall be resolved through a multi-step dispute resolution process including negotiation, mediation, and, if necessary, arbitration in accordance with the rules of [Relevant Arbitration Association].',
        },
      ],
    },
  ];

  const faqItems: FAQItem[] = [
    {
      q: 'Can I use your services for commercial purposes?',
      a: 'Our services are provided for personal, non-commercial use unless explicitly stated otherwise in a separate agreement.',
    },
    {
      q: 'How do I terminate my account?',
      a: 'You can terminate your account at any time by contacting our customer support team or using the account deletion option in your account settings.',
    },
    {
      q: 'What happens to my data if I delete my account?',
      a: 'When you delete your account, we will delete or anonymize your personal data in accordance with our Privacy Policy and applicable laws.',
    },
    {
      q: 'Do these terms apply to all your services?',
      a: 'These terms apply to all services unless a specific service has its own separate terms and conditions, which will be clearly indicated.',
    },
    {
      q: 'How will I be notified of changes to these terms?',
      a: 'Changes to our terms will be posted on our website. For significant changes, we may also notify you via email or through an in-service notification.',
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section with Improved Styling */}
        <div className="">
          <Hero />
          <section className="px-16 py-8">
            <div className="flex flex-col md:flex-row justify-between items-start gap-8">
              <div className="space-y-4 max-w-2xl">
                <h1 className="text-4xl md:text-5xl text-gray-900">Terms and Conditions</h1>
                {/* <p className="text-gray-600 md:text-lg">
                  Our Terms and Conditions establish the legal framework for using our services.
                  Please review them carefully to understand your rights and responsibilities.
                </p> */}
              </div>
              <div className="flex flex-col gap-3 min-[400px]:flex-row shrink-0">
                <AnimatedButton text="Download PDF" href="#download-pdf" />
                <AnimatedButton text="Contact Legal" href="#contact-legal" />
              </div>
            </div>
          </section>
        </div>

        {/* Key Principles Section with Improved Cards */}
        <section className="w-full py-12 md:py-24 bg-white">
          <div className=" px-6 md:px-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-4xl text-gray-900 mb-3">Key Principles</h2>
            </motion.div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {keyPrinciples.map((principle, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card
                    icon={principle.icon}
                    title={principle.title}
                    description={principle.description}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Full Terms Section with Tabs and Table of Contents */}
        <section id="terms-full" className="w-full py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 md:px-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">
                Complete Terms and Conditions
              </h2>
              <p className="max-w-3xl text-gray-600 md:text-lg">
                The following terms constitute the legally binding agreement between you and our
                company. Please read them carefully.
              </p>
            </motion.div>

            <Tabs defaultValue="full-terms" className="w-full">
              <TabsList className="mb-8 bg-white p-1 rounded-lg border border-gray-200">
                <TabsTrigger
                  value="full-terms"
                  className="px-6 py-3 data-[state=active]:bg-orange-50 data-[state=active]:text-orange-700"
                >
                  Full Document
                </TabsTrigger>
                <TabsTrigger
                  value="simplified"
                  className="px-6 py-3 data-[state=active]:bg-orange-50 data-[state=active]:text-orange-700"
                >
                  Simplified Version
                </TabsTrigger>
                <TabsTrigger
                  value="faq"
                  className="px-6 py-3 data-[state=active]:bg-orange-50 data-[state=active]:text-orange-700"
                >
                  FAQ
                </TabsTrigger>
              </TabsList>

              <TabsContent value="full-terms" className="mt-0">
                <div className="flex flex-col lg:flex-row gap-10">
                  <div className="lg:w-1/4 order-2 lg:order-1">
                    <TableOfContents sections={policySections} />
                  </div>

                  <div className="lg:w-3/4 order-1 lg:order-2">
                    {policySections.map((section, index) => (
                      <div key={index} id={`section-${index + 1}`}>
                        <PolicySection title={`${index + 1}. ${section.title}`} icon={section.icon}>
                          {section.content.map((item, itemIndex) => (
                            <div key={itemIndex} className="mb-6">
                              <h4 className="font-medium text-lg text-gray-800 mb-2">
                                {item.subtitle}
                              </h4>
                              <p>{item.text}</p>
                            </div>
                          ))}
                        </PolicySection>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="simplified" className="mt-0">
                <div className="bg-white p-8 rounded-lg shadow-sm">
                  <h3 className="text-2xl font-semibold mb-6">
                    Terms and Conditions: Simplified Version
                  </h3>
                  <p className="text-gray-500 italic mb-6">
                    This simplified version is provided for convenience only and does not replace
                    the full Terms and Conditions.
                  </p>

                  <div className="space-y-6">
                    <div className="p-4 bg-orange-50 rounded-md">
                      <h4 className="font-medium mb-2">What You Can Expect From Us:</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>We provide our services on an &#34;as is&#34; basis</li>
                        <li>
                          We protect your personal information according to our Privacy Policy
                        </li>
                        <li>We may update our terms with notice on our website</li>
                        <li>We own all intellectual property related to our services</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-blue-50 rounded-md">
                      <h4 className="font-medium mb-2">What We Expect From You:</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Use our services legally and respectfully</li>
                        <li>Maintain the security of your account</li>
                        <li>Only share content you have the right to share</li>
                        <li>Accept that we may terminate your access if you violate these terms</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-gray-100 rounded-md">
                      <h4 className="font-medium mb-2">Important Limitations:</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>We limit our liability to the maximum extent permitted by law</li>
                        <li>
                          Disputes will be resolved according to the laws of [Your Jurisdiction]
                        </li>
                        <li>
                          You indemnify us against claims arising from your use of our services
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="faq" className="mt-0">
                <div className="bg-white p-8 rounded-lg shadow-sm">
                  <h3 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h3>

                  <div className="space-y-6">
                    {faqItems.map((item, index) => (
                      <div key={index} className="border-b border-gray-100 pb-5">
                        <h4 className="font-medium text-lg text-gray-800 mb-2">{item.q}</h4>
                        <p className="text-gray-600">{item.a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Contact Section with Cards */}
        <section id="contact-legal" className="w-full py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">Need Assistance?</h2>
              <p className="max-w-3xl text-gray-600 md:text-lg">
                If you have questions about our Terms and Conditions or need legal assistance, our
                team is here to help.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:border-orange-200 transition-all duration-300">
                <div className="mb-4 w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
                  <FileCheck className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Legal Support</h3>
                <p className="text-gray-600 mb-4">
                  Contact our legal team directly for specific inquiries about our terms or legal
                  matters.
                </p>
                <a href="/contact/legal" className="text-blue-600 font-medium hover:underline">
                  legal@company.com
                </a>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:border-orange-200 transition-all duration-300">
                <div className="mb-4 w-12 h-12 bg-green-50 rounded-full flex items-center justify-center">
                  <Handshake className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Customer Support</h3>
                <p className="text-gray-600 mb-4">
                  Our support team is available to address general questions and concerns about our
                  services.
                </p>
                <a href="/contact/support" className="text-green-600 font-medium hover:underline">
                  support@company.com
                </a>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:border-orange-200 transition-all duration-300">
                <div className="mb-4 w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center">
                  <GlobeLock className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Privacy Concerns</h3>
                <p className="text-gray-600 mb-4">
                  For questions related to your privacy and data protection, contact our data
                  protection officer.
                </p>
                <a href="/contact/privacy" className="text-purple-600 font-medium hover:underline">
                  privacy@company.com
                </a>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between bg-gray-50 p-8 rounded-lg">
              <div className="mb-6 md:mb-0 md:mr-6">
                <h3 className="text-xl font-semibold mb-2">Still have questions?</h3>
                <p className="text-gray-600 max-w-xl">
                  Our legal team is ready to provide detailed explanations and guidance on our Terms
                  and Conditions.
                </p>
              </div>
              <AnimatedButton text="Schedule a Consultation" href="/contact/schedule" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
