import Link from "next/link";
import { Shield, Lock, Eye, UserCheck, FileText, Mail } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Privacy Policy - StreamTek",
  description: "Our privacy policy and data protection practices.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen text-white pt-20 pb-20" style={{ background: 'var(--fiber-gradient)' }}>
        <div className="max-w-4xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <Shield className="w-16 h-16 text-blue-400 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            <p className="text-slate-400 text-lg">
              Last updated: February 9, 2026
            </p>
          </div>

          {/* Content */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 md:p-12 space-y-10">
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <FileText className="w-6 h-6 text-blue-400" />
                Introduction
              </h2>
              <div className="text-slate-300 leading-relaxed space-y-4">
                <p>
                  Churchtown Media Ltd. (trading as StreamTek) (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) 
                  is committed to protecting your privacy. This Privacy Policy explains how we collect, use, 
                  disclose, and safeguard your information when you visit our website or use our services.
                </p>
                <p>
                  As a B2B distributor serving resellers and integrators, we primarily collect business 
                  contact information for commercial purposes. We comply with UK GDPR and applicable 
                  data protection regulations.
                </p>
              </div>
            </section>

            {/* Information We Collect */}
            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Eye className="w-6 h-6 text-green-400" />
                Information We Collect
              </h2>
              <div className="text-slate-300 leading-relaxed space-y-4">
                <h3 className="text-lg font-semibold text-white">Business Information</h3>
                <p>
                  When you contact us or register as a reseller, we may collect:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Company name and registration details</li>
                  <li>Business contact name, email address, and phone number</li>
                  <li>Job title and department</li>
                  <li>Billing and shipping addresses</li>
                  <li>Order history and purchase preferences</li>
                  <li>Communications with our support team</li>
                </ul>

                <h3 className="text-lg font-semibold text-white mt-6">Technical Data</h3>
                <p>
                  Our website automatically collects certain technical information:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>IP address and browser type</li>
                  <li>Operating system and device information</li>
                  <li>Pages visited and time spent on our site</li>
                  <li>Referring website and search terms</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </div>
            </section>

            {/* How We Use Information */}
            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <UserCheck className="w-6 h-6 text-purple-400" />
                How We Use Your Information
              </h2>
              <div className="text-slate-300 leading-relaxed space-y-4">
                <p>We use the information we collect to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Process orders and manage reseller accounts</li>
                  <li>Provide customer support and technical assistance</li>
                  <li>Send product updates, stock alerts, and promotional materials (with consent)</li>
                  <li>Improve our website and services</li>
                  <li>Comply with legal obligations and enforce our terms</li>
                  <li>Prevent fraud and ensure security</li>
                  <li>Conduct business analytics and market research</li>
                </ul>
              </div>
            </section>

            {/* Data Sharing */}
            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Lock className="w-6 h-6 text-orange-400" />
                Information Sharing and Disclosure
              </h2>
              <div className="text-slate-300 leading-relaxed space-y-4">
                <p>
                  We do not sell your personal information. We may share information with:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Magewell:</strong> Product warranty, RMA processing, and technical support</li>
                  <li><strong>Service Providers:</strong> Payment processors, shipping companies, and IT services</li>
                  <li><strong>Legal Authorities:</strong> When required by law or to protect our rights</li>
                  <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale</li>
                </ul>
              </div>
            </section>

            {/* Data Security */}
            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Shield className="w-6 h-6 text-blue-400" />
                Data Security
              </h2>
              <div className="text-slate-300 leading-relaxed space-y-4">
                <p>
                  We implement appropriate technical and organizational security measures to protect 
                  your information against unauthorized access, alteration, disclosure, or destruction. 
                  This includes:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Encrypted data transmission (SSL/TLS)</li>
                  <li>Secure server infrastructure</li>
                  <li>Access controls and authentication</li>
                  <li>Regular security assessments</li>
                  <li>Employee training on data protection</li>
                </ul>
                <p className="mt-4">
                  However, no method of transmission over the internet is 100% secure. While we 
                  strive to protect your information, we cannot guarantee absolute security.
                </p>
              </div>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Your Data Rights</h2>
              <div className="text-slate-300 leading-relaxed space-y-4">
                <p>Under UK GDPR, you have the right to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Access:</strong> Request a copy of your personal data</li>
                  <li><strong>Rectification:</strong> Correct inaccurate or incomplete data</li>
                  <li><strong>Erasure:</strong> Request deletion of your data (subject to legal obligations)</li>
                  <li><strong>Restriction:</strong> Limit how we use your data</li>
                  <li><strong>Portability:</strong> Receive your data in a structured format</li>
                  <li><strong>Object:</strong> Opt out of marketing communications</li>
                  <li><strong>Withdraw Consent:</strong> For processing based on consent</li>
                </ul>
                <p className="mt-4">
                  To exercise these rights, contact us at the details below.
                </p>
              </div>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Cookies</h2>
              <div className="text-slate-300 leading-relaxed space-y-4">
                <p>
                  Our website uses cookies to improve functionality and user experience. 
                  You can control cookie settings through your browser preferences. Note that 
                  disabling cookies may affect website functionality.
                </p>
              </div>
            </section>

            {/* Data Retention */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Data Retention</h2>
              <div className="text-slate-300 leading-relaxed space-y-4">
                <p>
                  We retain your information for as long as necessary to fulfill the purposes 
                  outlined in this policy, comply with legal obligations, resolve disputes, 
                  and enforce our agreements. Business records are typically retained for 7 years.
                </p>
              </div>
            </section>

            {/* Children's Privacy */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Children&apos;s Privacy</h2>
              <div className="text-slate-300 leading-relaxed space-y-4">
                <p>
                  Our services are intended for business use only. We do not knowingly collect 
                  information from individuals under 18 years of age.
                </p>
              </div>
            </section>

            {/* International Transfers */}
            <section>
              <h2 className="text-2xl font-bold mb-4">International Data Transfers</h2>
              <div className="text-slate-300 leading-relaxed space-y-4">
                <p>
                  Your information may be transferred to and processed in countries other than the UK. 
                  We ensure appropriate safeguards are in place for such transfers in accordance with 
                  UK GDPR requirements.
                </p>
              </div>
            </section>

            {/* Changes to Policy */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Changes to This Policy</h2>
              <div className="text-slate-300 leading-relaxed space-y-4">
                <p>
                  We may update this Privacy Policy periodically. We will notify you of significant 
                  changes by posting the new policy on this page with an updated &quot;Last updated&quot; date. 
                  Your continued use of our services after changes constitutes acceptance.
                </p>
              </div>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Mail className="w-6 h-6 text-blue-400" />
                Contact Us
              </h2>
              <div className="text-slate-300 leading-relaxed space-y-4">
                <p>
                  If you have questions about this Privacy Policy or wish to exercise your data rights:
                </p>
                <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 mt-4">
                  <p className="font-semibold text-white mb-2">Electronic Modular Solutions Ltd.</p>
                  <p>Trading as StreamTek</p>
                  <p>Leicester, United Kingdom</p>
                  <p className="mt-3">Phone: <a href="tel:+441162775730" className="text-blue-400 hover:text-blue-300">+44 (0)116 277 5730</a></p>
                  <p>Email: <Link href="/contact" className="text-blue-400 hover:text-blue-300">Contact Form</Link></p>
                </div>
              </div>
            </section>
          </div>

          {/* Back Link */}
          <div className="text-center mt-12">
            <Link 
              href="/"
              className="inline-block px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg border border-slate-700 transition-all"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
