// pages/services.js
import React from "react";
import { Container, ServiceCard, ServiceDescription, ServiceGrid, ServiceTitle, Title } from "../components/ServicesStyle";
import ServiceImage from "../components/ServiceImage";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { DescriptionContent, DescriptionTitle, ServiceDescriptionSection } from "../components/ServiceDescriptionSection";
import ScrollToTopButton from "../components/ScrollToTopButton/ScrollToTopButton";
import { Layout } from "../layout/Layout";
const Services = () => {
  return (
    <Layout>

      <Title>Our Services</Title>
      <ScrollToTopButton />
      <ServiceGrid>
        <ServiceCard>
        <ServiceImage imageName="website-development.jpg" alt="Website Development" />
       
          <ServiceTitle>Web Development</ServiceTitle>
          <ServiceDescription>
            We create responsive and scalable web applications using the latest technologies.
          </ServiceDescription>
        </ServiceCard>

        <ServiceCard>
        <ServiceImage imageName="mobile-app-development.jpg" alt="Mobile App Development" />
        
          <ServiceTitle>App Development</ServiceTitle>
          <ServiceDescription>
            Building mobile applications for iOS and Android platforms with a focus on user experience.
          </ServiceDescription>
        </ServiceCard>

        <ServiceCard>
        <ServiceImage imageName="seo.jpg" alt="SEO" />
        
          <ServiceTitle>SEO</ServiceTitle>
          <ServiceDescription>
            Enhancing your website's visibility in search engines to drive organic traffic and improve rankings.
          </ServiceDescription>
        </ServiceCard>

        <ServiceCard>
        <ServiceImage imageName="digital-marketing.jpg" alt="Digital Marketing" />
        
          <ServiceTitle>Digital Marketing</ServiceTitle>
          <ServiceDescription>
            Comprehensive digital marketing strategies to promote your brand, products, and services.
          </ServiceDescription>
        </ServiceCard>
      </ServiceGrid>

      <ServiceDescriptionSection>
        <DescriptionTitle>Why Choose Our Services?</DescriptionTitle>
        <DescriptionContent>
          I am dedicated to delivering high-quality services to meet your business needs. 
          Whether you're looking for web development, app development, SEO, or digital marketing, 
          we have the expertise to drive your success in the digital world.
        </DescriptionContent>
      </ServiceDescriptionSection>
      </Layout>

  );
};

export default Services;
