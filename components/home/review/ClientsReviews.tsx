"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

const ClientsReviews = () => {
  const [openItem, setOpenItem] = useState("item-0");

  const clientsReviews = [
    {
      companyName: "Karman Ventures",
      services: ["Sales Deck Creation", "Storytelling", "Design"],
      clientName: "William Barnes",
      image: "/c1.png",
      description:
        "They were transparent about the time and the stages of the project. The end product is high quality, and I feel confident about how they were handholding the client through the process. I feel like I can introduce them to someone who needs to put a sales deck together from scratch, and they would be able to handhold the client experience from 0 to 100 very effectively from story to design.",
      rating: 5,
    },
    {
      companyName: "Nimbus Labs",
      services: ["App Development", "Cloud Integration", "Maintenance"],
      clientName: "Sophia Carter",
      image: "/c2.png",
      description:
        "Their team was incredibly professional and delivered a seamless app that perfectly matched our requirements. Their ability to integrate cloud services into our platform exceeded our expectations. Highly recommend them!",
      rating: 4.8,
    },
    {
      companyName: "Summit Analytics",
      services: ["Data Visualization", "BI Tools", "Custom Dashboards"],
      clientName: "Michael Johnson",
      image: "/c3.png",
      description:
        "The custom dashboards they designed are both functional and visually stunning. Their team was highly collaborative, and their turnaround time was impressive. A great partner for any analytics project.",
      rating: 5,
    },
    {
      companyName: "Eco Innovations",
      services: [
        "Sustainability Consulting",
        "Project Management",
        "Green Tech Solutions",
      ],
      clientName: "Emma Lee",
      image: "/c4.png",
      description:
        "They brought a wealth of knowledge and expertise to our sustainability projects. Their solutions were innovative, and they guided us every step of the way to ensure successful implementation. Truly a great experience.",
      rating: 4.9,
    },
    {
      companyName: "Pixelwave Studios",
      services: ["Branding", "Graphic Design", "Social Media Management"],
      clientName: "James Oliver",
      image: "/c5.jpg",
      description:
        "The team at Pixelwave Studios elevated our brand to a whole new level. Their creativity and attention to detail are unmatched. Our social media engagement has significantly increased thanks to their strategy.",
      rating: 4.7,
    },
    {
      companyName: "Trailblazer IT Solutions",
      services: ["IT Support", "Cybersecurity", "Infrastructure Setup"],
      clientName: "Olivia Martin",
      image: "/c6.png",
      description:
        "They provided exceptional IT support for our company. The cybersecurity measures they implemented have given us peace of mind. I would gladly work with them again for future projects.",
      rating: 5,
    },
  ];

  return (
    <div className="pb-24">
      <h2 className="text-7xl pt-20 py-16 px-16 border-b border-black/15">
        Clients’ reviews
      </h2>
      <div className="">
        <Accordion
          type="single"
          collapsible
          defaultValue="item-0"
          onValueChange={(value) => setOpenItem(value)}
        >
          {clientsReviews.map((review, idx) => (
            <AccordionItem
              key={idx}
              className="px-16 py-1"
              value={`item-${idx}`}
            >
              <AccordionTrigger>
                <div className="grid grid-cols-4 items-center justify-between text-2xl font-normal w-full ">
                  <h2 className="col-span-1">{review.companyName}</h2>
                  <h2
                    className={`uppercase col-span-1 ps-2 ${
                      openItem === `item-${idx}` ? "visible" : "invisible"
                    }`}
                  >
                    Services
                  </h2>
                  <h2 className="col-span-1">{review.clientName}</h2>
                  <h2
                    className={`uppercase col-span-1  text-end ${
                      openItem === `item-${idx}` ? "opacity-30" : "opacity-100"
                    }`}
                  >
                    Read
                  </h2>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-4 items-start justify-between text-2xl font-normal w-full py-16">
                  <h2 className="col-span-1"></h2>
                  <h2 className="uppercase col-span-1">
                    {review.services.map((service, idx) => (
                      <div className="pb-2" key={idx}>
                        <p className="px-3 py-1 text-xl rounded-full border me-1.5 uppercase inline-block border-black/70 font-medium">
                          {service}
                        </p>
                      </div>
                    ))}
                  </h2>
                  <div className="col-span-2 ">
                    <div className="">
                      <Image
                        src={review.image}
                        alt={review.clientName}
                        width={200}
                        height={200}
                        className="w-36 h-36 rounded-2xl "
                      />
                    </div>
                    <p className="text-xl pt-6 w-8/12">{review.description}</p>
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

export default ClientsReviews;
