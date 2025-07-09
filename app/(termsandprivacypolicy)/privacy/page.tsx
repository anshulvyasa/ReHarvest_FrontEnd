import React from "react";

const privacyPolicyContent = `
# ReHarvest Privacy Policy

**Last Updated:** July 8, 2025

This Privacy Policy describes how ReHarvest ("we," "us," or "our"), a student project developed for a hackathon, collects, uses, and discloses information when you use our application.

## 1. Our Commitment

ReHarvest is a student project focused on demonstrating a platform for sustainability and impact tracking. We are committed to protecting your privacy, especially given the nature of a hackathon.

## 2. Information We Collect

When you use ReHarvest, we collect the following types of information:

* **Information from Google OAuth:** When you log in using your Google account, we receive basic profile information from Google, which may include:
    * Your Google User ID
    * Your Name (e.g., "Anshul Vyas" as seen in your dashboard)
    * Your Email Address
    * Your Profile Picture (if provided by Google)

* **Application Usage Data:** We collect data related to your interactions within the ReHarvest application, such as:
    * Your "CO₂ Saved" (e.g., 2,450kg)
    * "Food rescued" (e.g., 1,203 Pts)
    * "GreenPoints" (e.g., 42,450kg)
    * "Waste produced" (e.g., 1,240kg)
    * Your "Weekly Impact Trend" data (e.g., Monday, Tuesday, etc.)
    * Interactions with "MarketPlace" and "Donate Items" features (if implemented)

## 3. How We Use Your Information

We use the collected information solely for the following purposes:

* **Authentication:** To allow you to log in and access the ReHarvest application.
* **Personalization:** To display your personalized impact data and dashboard (e.g., "Welcome back, Anshul Vyas," and your saved CO2, rescued food, etc.).
* **Core Application Functionality:** To enable the features of the ReHarvest application, such as tracking your contributions to sustainability.
* **Hackathon Demonstration:** To showcase the functionality and impact of our project during the hackathon.

**We do NOT use your information for:**

* Marketing or advertising purposes.
* Selling or renting your data to third parties.
* Any purpose beyond the scope of this hackathon project.

## 4. Data Sharing and Disclosure

We do not share, sell, or disclose your personal information to any third parties, except as required by law or to fulfill the core functionality of this hackathon project (e.g., if the hackathon platform itself requires certain data submission, which would be anonymized where possible).

## 5. Data Retention and Deletion

Due to the nature of this being a hackathon project:

* Your data will be retained only for the duration of the hackathon event.
* **All user data collected by ReHarvest will be permanently deleted shortly after the conclusion of the hackathon (e.g., by July 31, 2025).**

## 6. Your Choices

You can stop using the ReHarvest application at any time. As all data will be deleted post-hackathon, no further action is required from your side for data removal.

## 7. Security

We implement reasonable security measures to protect your information from unauthorized access or disclosure. However, please remember that no method of transmission over the Internet or electronic storage is 100% secure.

## 8. Changes to This Privacy Policy

We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Last Updated" date.

## 9. Contact Us

If you have any questions about this Privacy Policy or our data practices, please contact us at [Your Team Name/Contact Email, if you have one for the hackathon].
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

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 font-inter text-gray-800 p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 sm:p-8 lg:p-10 my-8">
        <div className="prose max-w-none">
          {" "}
          {/* Use prose for basic typography styling */}
          {renderMarkdown(privacyPolicyContent)}
        </div>
      </div>
    </div>
  );
}
