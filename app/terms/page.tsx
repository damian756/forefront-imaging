import Link from "next/link";
import { FileText, AlertTriangle, Scale, ShieldCheck, Package, Mail } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Terms & Conditions - StreamTek",
  description: "Terms and conditions for using our website and services.",
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <Scale className="w-16 h-16 text-blue-400 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              Terms & Conditions
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
                Agreement to Terms
              </h2>
              <div className="text-slate-300 leading-relaxed space-y-4">
                <p>
                  These Terms and Conditions (&quot;Terms&quot;) govern your use of the StreamTek 
                  website and services provided by Churchtown Media Ltd. (trading as 
                  StreamTek) (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;).
                </p>
                <p>
                  By accessing or using our website, you agree to be bound by these Terms. If you 
                  disagree with any part of these terms, you may not access our services.
                </p>
              </div>
            </section>

            {/* B2B Nature */}
            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Package className="w-6 h-6 text-purple-400" />
                Business-to-Business Service
              </h2>
              <div className="text-slate-300 leading-relaxed space-y-4">
                <p>
                  StreamTek is a professional USB video capture equipment supplier. Our services are available to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Authorized resellers and value-added resellers (VARs)</li>
                  <li>Systems integrators and solution providers</li>
                  <li>Sub-distributors and wholesale partners</li>
                  <li>Commercial entities purchasing for business use</li>
                </ul>
                <p className="mt-4">
                  We do not sell directly to end consumers. All pricing, terms, and services are 
                  structured for business-to-business transactions.
                </p>
              </div>
            </section>

            {/* Reseller Accounts */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Reseller Accounts and Approval</h2>
              <div className="text-slate-300 leading-relaxed space-y-4">
                <p>
                  To purchase products, you must apply for and be approved as an authorized reseller:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Applications are subject to our approval process</li>
                  <li>You must provide accurate business information and documentation</li>
                  <li>Account approval is at our sole discretion</li>
                  <li>We reserve the right to terminate accounts for cause</li>
                  <li>Accounts are non-transferable without written consent</li>
                </ul>
              </div>
            </section>

            {/* Orders and Pricing */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Orders, Pricing, and Payment</h2>
              <div className="text-slate-300 leading-relaxed space-y-4">
                <h3 className="text-lg font-semibold text-white">Orders</h3>
                <p>
                  All orders are subject to acceptance and product availability. We reserve the right 
                  to refuse or cancel any order at our discretion.
                </p>

                <h3 className="text-lg font-semibold text-white mt-6">Pricing</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Prices are subject to change without notice</li>
                  <li>Quoted prices are valid for 30 days unless otherwise stated</li>
                  <li>Pricing is exclusive of VAT and shipping costs unless specified</li>
                  <li>Reseller pricing tiers are confidential and not for public disclosure</li>
                </ul>

                <h3 className="text-lg font-semibold text-white mt-6">Payment</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Payment terms are established during account setup (typically Net 30)</li>
                  <li>Credit limits are assigned based on credit checks and history</li>
                  <li>Late payments may incur interest charges and account restrictions</li>
                  <li>We accept bank transfers, credit cards, and approved payment methods</li>
                </ul>
              </div>
            </section>

            {/* Shipping and Delivery */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Shipping and Delivery</h2>
              <div className="text-slate-300 leading-relaxed space-y-4">
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Delivery times are estimates and not guaranteed</li>
                  <li>Risk of loss passes to you upon delivery to carrier</li>
                  <li>International shipments may be subject to customs duties and taxes</li>
                  <li>You are responsible for providing accurate shipping information</li>
                  <li>We are not liable for delays caused by carriers or customs</li>
                </ul>
              </div>
            </section>

            {/* Warranty and Returns */}
            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-green-400" />
                Warranty and Returns
              </h2>
              <div className="text-slate-300 leading-relaxed space-y-4">
                <h3 className="text-lg font-semibold text-white">Manufacturer Warranty</h3>
                <p>
                  All products are covered by the manufacturer&apos;s warranty. Warranty terms vary by 
                  product (typically 2-3 years). We facilitate warranty claims and RMA processing.
                </p>

                <h3 className="text-lg font-semibold text-white mt-6">Returns Policy</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Authorized resellers may return unopened products within 30 days</li>
                  <li>Returns require prior authorization (RMA number)</li>
                  <li>Products must be in original packaging and resalable condition</li>
                  <li>Restocking fees may apply (typically 15-20%)</li>
                  <li>Custom or special-order items are non-returnable</li>
                  <li>Shipping costs for returns are buyer&apos;s responsibility</li>
                </ul>

                <h3 className="text-lg font-semibold text-white mt-6">Defective Products</h3>
                <p>
                  Contact our support team immediately if you receive defective products. We will 
                  arrange replacement or repair under warranty terms.
                </p>
              </div>
            </section>

            {/* Intellectual Property */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Intellectual Property</h2>
              <div className="text-slate-300 leading-relaxed space-y-4">
                <p>
                  All content on this website, including text, graphics, logos, images, and software, 
                  is the property of Electronic Modular Solutions Ltd. or its licensors and is 
                  protected by intellectual property laws.
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                  <li>Magewell® is a registered trademark of Nanjing Magewell Electronics Co., Ltd.</li>
                  <li>Authorized resellers may use product images for promotional purposes</li>
                  <li>You may not modify, reproduce, or distribute our content without permission</li>
                  <li>Marketing materials are provided for authorized use only</li>
                </ul>
              </div>
            </section>

            {/* Limitation of Liability */}
            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <AlertTriangle className="w-6 h-6 text-orange-400" />
                Limitation of Liability
              </h2>
              <div className="text-slate-300 leading-relaxed space-y-4">
                <p>
                  To the maximum extent permitted by law:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>We are not liable for indirect, incidental, or consequential damages</li>
                  <li>Our liability is limited to the purchase price of the product in question</li>
                  <li>We are not responsible for business interruption or lost profits</li>
                  <li>Technical specifications are subject to change by manufacturers</li>
                  <li>Product suitability for specific applications is your responsibility</li>
                </ul>
                <p className="mt-4 font-semibold text-white">
                  Nothing in these terms excludes or limits liability for fraud, death or personal 
                  injury caused by negligence, or other liability that cannot be excluded by law.
                </p>
              </div>
            </section>

            {/* Confidentiality */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Confidentiality</h2>
              <div className="text-slate-300 leading-relaxed space-y-4">
                <p>
                  Resellers agree to keep confidential:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Pricing structures and discount levels</li>
                  <li>Product roadmaps and unreleased product information</li>
                  <li>Business strategies and marketing plans</li>
                  <li>Any information marked as confidential</li>
                </ul>
              </div>
            </section>

            {/* Termination */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Termination</h2>
              <div className="text-slate-300 leading-relaxed space-y-4">
                <p>
                  We may terminate or suspend your account and access to our services immediately, 
                  without prior notice, for:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Breach of these Terms</li>
                  <li>Non-payment or credit issues</li>
                  <li>Fraudulent or illegal activity</li>
                  <li>Violation of manufacturer policies</li>
                  <li>Business reasons at our discretion</li>
                </ul>
              </div>
            </section>

            {/* Governing Law */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Governing Law</h2>
              <div className="text-slate-300 leading-relaxed space-y-4">
                <p>
                  These Terms are governed by the laws of England and Wales. Any disputes shall be 
                  subject to the exclusive jurisdiction of the courts of England and Wales.
                </p>
              </div>
            </section>

            {/* Changes to Terms */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Changes to Terms</h2>
              <div className="text-slate-300 leading-relaxed space-y-4">
                <p>
                  We reserve the right to modify these Terms at any time. We will notify registered 
                  resellers of material changes via email. Continued use of our services after 
                  changes constitutes acceptance of the updated Terms.
                </p>
              </div>
            </section>

            {/* Severability */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Severability</h2>
              <div className="text-slate-300 leading-relaxed space-y-4">
                <p>
                  If any provision of these Terms is found to be unenforceable or invalid, that 
                  provision will be limited or eliminated to the minimum extent necessary so that 
                  these Terms remain in full force and effect.
                </p>
              </div>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Mail className="w-6 h-6 text-blue-400" />
                Contact Information
              </h2>
              <div className="text-slate-300 leading-relaxed space-y-4">
                <p>
                  For questions about these Terms and Conditions:
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
