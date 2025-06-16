import ContactForm from "@/components/contactForm";
import Container from "@/components/container";
import PageLayout from "@/components/PageLayout";
import { Phone, Mail, MapPinCheck } from "lucide-react";
import React from "react";

const infoData = [
  {
    title: "Phone",
    details: "+92 03132626499",
    icon: <Phone />,
  },
  {
    title: "Email",
    details: "syedabdulrehman308@gmail.com",
    icon: <Mail />,
  },
  {
    title: "Address",
    details: "karachi, Pakistan",
    icon: <MapPinCheck />,
  },
];

const contactPage = () => {
  return (
    <div className="fixed inset-0 pt-[80px]">
      <PageLayout>
        <Container className="h-[calc(100vh-80px)] py-6 md:py-12">
          <div className="h-full flex flex-col md:flex-row gap-6 md:gap-14">
            <div className="w-full md:w-2/3">
              <div className="h-full">
                <ContactForm />
              </div>
            </div>

            <div className="w-full md:w-1/3">
              <div className="flex flex-col justify-center gap-4 md:gap-8">
                {infoData?.map((item) => (
                  <div
                    className="flex items-center space-x-4 group"
                    key={item?.title}
                  >
                    <span className="bg-lightSky/10 p-3 border rounded-lg border-hoverColor/10 text-hoverColor group-hover:bg-lightSky/20 group-hover:border-lightSky transition-all duration-300">
                      {item?.icon}
                    </span>

                    <div>
                      <h3 className="text-white/80 font-semibold text-lg mb-1">
                        {item?.title}
                      </h3>
                      <p className="text-white/80 text-base group-hover:text-lightSky transition-colors duration-300">
                        {item?.details}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </PageLayout>
    </div>
  );
};

export default contactPage;
