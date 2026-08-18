import React from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface HowToStep {
  step: number;
  name: string;
  text: string;
}

interface StructuredDataProps {
  faq?: FAQItem[];
  howTo?: {
    name: string;
    description: string;
    steps: HowToStep[];
  };
}

export const StructuredData: React.FC<StructuredDataProps> = ({ faq, howTo }) => {
  const schemas = [];

  if (faq && faq.length > 0) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faq.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    });
  }

  if (howTo && howTo.steps.length > 0) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: howTo.name,
      description: howTo.description,
      step: howTo.steps.map((s) => ({
        '@type': 'HowToStep',
        position: s.step,
        name: s.name,
        text: s.text,
      })),
    });
  }

  if (schemas.length === 0) return null;

  return (
    <>
      {schemas.map((schema, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
};

export default StructuredData;
