// app/terms/page.tsx
import React from "react";

const termsOfServiceContent = `
# ReHarvest Terms of Service

**Last Updated:** July 8, 2025

Welcome to ReHarvest! These Terms of Service ("Terms") govern your use of the ReHarvest application ("App"), a student project developed for a hackathon. By accessing or using the App, you agree to be bound by these Terms.

## 1. Purpose of the App

ReHarvest is a demonstration project created for a hackathon. Its purpose is to showcase a concept for tracking and visualizing individual contributions to sustainability and environmental impact. It is not intended for commercial use or long-term production.

## 2. Acceptance of Terms

By using the App, you confirm that you accept these Terms and agree to comply with them. If you do not agree to these Terms, you must not use the App.

## 3. Account and Login

* To access certain features of the App, you may be required to log in using your Google account via Google OAuth.
* You are responsible for maintaining the confidentiality of your Google account credentials.

## 4. User Conduct

You agree to use the App only for its intended hackathon demonstration purpose and in a manner that is lawful and does not infringe upon the rights of others. You agree not to:

* Use the App for any commercial purpose.
* Attempt to gain unauthorized access to any part of the App or its systems.
* Engage in any activity that disrupts or interferes with the App's functionality.

## 5. "As Is" Basis

The ReHarvest App is provided on an "as is" and "as available" basis. Given its nature as a hackathon project, we make no warranties or representations, express or implied, regarding the App's reliability, availability, accuracy, or suitability for any purpose. We do not guarantee that the App will be error-free or uninterrupted.

## 6. Limitation of Liability

To the fullest extent permitted by law, we shall not be liable for any damages, losses, or expenses arising from your use of or inability to use the ReHarvest App, even if we have been advised of the possibility of such damages. This includes, but is not limited to, direct, indirect, incidental, consequential, or punitive damages.

## 7. Data Deletion

As this is a temporary hackathon project, **all user data and accounts associated with ReHarvest will be permanently deleted shortly after the conclusion of the hackathon (e.g., by July 31, 2025).** You acknowledge and agree that you will not have access to your data after this period.

## 8. Intellectual Property

All intellectual property rights in the ReHarvest App (excluding any third-party components or content) belong to the ReHarvest hackathon team. Your use of the App does not grant you any rights to its intellectual property.

## 9. Changes to These Terms

We reserve the right to modify these Terms at any time. Any changes will be effective immediately upon posting. Your continued use of the App after any such changes constitutes your acceptance of the new Terms.

## 10. Governing Law

These Terms shall be governed by and construed in accordance with the laws of [Your Country/State, if applicable, otherwise omit or state "the laws applicable to hackathon projects"].

## 11. Contact Us

If you have any questions about these Terms of Service, please contact us at [Your Team Name/Contact Email, if you have one for the hackathon].
`;

const renderMarkdown = (markdown: string) => {
  return markdown.split("\n").map((line, index) => {
    if (line.startsWith("### ")) {
      return (
        <h3
          key={index}
          className="text-xl font-semibold mt-4 mb-2 text-[#2e7d32]"
        >
          {line.substring(4)}
        </h3>
      );
    } else if (line.startsWith("## ")) {
      return (
        <h2 key={index} className="text-2xl font-bold mt-6 mb-3 text-[#2e7d32]">
          {line.substring(3)}
        </h2>
      );
    } else if (line.startsWith("# ")) {
      return (
        <h1 key={index} className="text-3xl font-bold mt-8 mb-4 text-[#2e7d32]">
          {line.substring(2)}
        </h1>
      );
    } else if (line.startsWith("* ")) {
      return (
        <li key={index} className="ml-6 list-disc">
          {line.substring(4)}
        </li>
      );
    } else if (line.startsWith("-   ")) {
      return (
        <li key={index} className="ml-6 list-disc">
          {line.substring(4)}
        </li>
      );
    } else if (line.startsWith("**")) {
      const parts = line.split("**");
      return (
        <p key={index} className="mb-2">
          {parts.map((part, i) =>
            i % 2 === 1 ? <strong key={i}>{part}</strong> : part
          )}
        </p>
      );
    } else if (line.trim() === "") {
      return <br key={index} />;
    }
    return (
      <p key={index} className="mb-2">
        {line}
      </p>
    );
  });
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gray-50 font-inter text-gray-800 p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 sm:p-8 lg:p-10 my-8">
        <div className="prose max-w-none">
          {renderMarkdown(termsOfServiceContent)}
        </div>
      </div>
    </div>
  );
}
