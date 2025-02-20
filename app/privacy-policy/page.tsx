import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Our privacy policy and how we handle your personal information",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <div className="prose prose-lg max-w-none space-y-6">
        <p>
          This Privacy Policy describes how your personal information is
          collected, used, and shared when you visit or make a purchase from our
          website.
        </p>
        <h2>Personal information we collect</h2>
        <p>
          When you visit the Site, we automatically collect certain information
          about your device, including information about your web browser, IP
          address, time zone, and some of the cookies that are installed on your
          device.
        </p>
        <h2>How we use your personal information</h2>
        <p>
          We use the personal information we collect to help us screen for
          potential risk and fraud (in particular, your IP address), and more
          generally to improve and optimize our Site.
        </p>
        <h2>Sharing your personal Information</h2>
        <p>
          We share your Personal Information with third parties to help us use
          your Personal Information, as described above.
        </p>
        <h2>Changes</h2>
        <p>
          We may update this privacy policy from time to time in order to
          reflect, for example, changes to our practices or for other
          operational, legal or regulatory reasons.
        </p>
        <h2>Contact us</h2>
        <p>
          For more information about our privacy practices, if you have
          questions, or if you would like to make a complaint, please contact us
          by e-mail at privacy@example.com.
        </p>
      </div>
    </div>
  );
}
