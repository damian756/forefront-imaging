'use client';

import Link from 'next/link';
import { Plug, MonitorPlay, Video, Check, Zap, Shield, Truck, ArrowRight, Laptop, Usb, Play } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';

export default function HowItWorksPage() {
  const steps = [
    {
      number: '1',
      icon: Plug,
      title: 'Plug It In',
      description: 'Connect your HDMI or SDI source (camera, console, medical device) to the USB Capture device, then plug it into your computer via USB.',
      details: [
        'No drivers needed - works instantly',
        'Compatible with USB 3.0 and 2.0',
        'Powers directly from USB port'
      ]
    },
    {
      number: '2',
      icon: MonitorPlay,
      title: 'Open Your Software',
      description: 'Launch any video software like OBS, Zoom, Teams, vMix, or Adobe Premiere. Your USB Capture device appears automatically as a webcam source.',
      details: [
        'Works with 1000+ applications',
        'No configuration required',
        'Recognized as standard UVC device'
      ]
    },
    {
      number: '3',
      icon: Video,
      title: 'Start Capturing',
      description: 'Select the USB Capture as your video input and you\'re ready to stream, record, or present. Professional quality video with zero hassle.',
      details: [
        'Full 1080p60 capture quality',
        'Ultra-low latency (<1 frame)',
        'Rock-solid performance 24/7'
      ]
    }
  ];

  const useCases = [
    {
      icon: Play,
      title: 'Content Creators',
      description: 'Stream gameplay, tutorials, or reactions to YouTube, Twitch, or Facebook.',
      benefit: 'Professional quality without complicated setup'
    },
    {
      icon: Laptop,
      title: 'Remote Workers',
      description: 'Share high-quality camera feeds in Zoom, Teams, or Google Meet presentations.',
      benefit: 'Look professional in every video call'
    },
    {
      icon: Video,
      title: 'Video Professionals',
      description: 'Capture and edit footage from professional cameras and production equipment.',
      benefit: 'Reliable capture for mission-critical projects'
    },
    {
      icon: MonitorPlay,
      title: 'Educators & Trainers',
      description: 'Record lectures, demonstrations, or training materials with ease.',
      benefit: 'Simple setup, professional results'
    }
  ];

  const faqs = [
    {
      q: 'Do I need to install drivers?',
      a: 'No! USB Capture devices use the UVC standard, so they work instantly on Windows, Mac, and Linux without any drivers.'
    },
    {
      q: 'What software does it work with?',
      a: 'It works with virtually any software that accepts video input: OBS Studio, Zoom, Microsoft Teams, Skype, vMix, Adobe Premiere, Final Cut Pro, and thousands more.'
    },
    {
      q: 'Can I capture gameplay from my console?',
      a: 'Absolutely! Connect your PlayStation, Xbox, or Nintendo Switch via HDMI to the USB Capture device, and you can stream or record your gameplay.'
    },
    {
      q: 'What resolution and frame rate can I capture?',
      a: 'Most USB Capture devices support up to 1080p at 60fps, perfect for smooth, professional-quality video.'
    },
    {
      q: 'Is there any lag or delay?',
      a: 'USB Capture devices have ultra-low latency (typically less than one frame), so there\'s no noticeable delay for live streaming or recording.'
    }
  ];

  const benefits = [
    { icon: Zap, text: 'Plug & Play - No Drivers Needed' },
    { icon: Shield, text: '3-Year Manufacturer Warranty' },
    { icon: Truck, text: 'Free Next-Day UK Delivery' },
    { icon: Check, text: 'Works with All Major Software' }
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-300 text-sm font-bold mb-6">
              <Usb className="w-4 h-4" />
              Simple. Professional. Reliable.
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              How USB Capture Works
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Professional video capture shouldn't be complicated. Here's how USB Capture devices make it incredibly simple.
            </p>
          </motion.div>

          {/* 3 Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className="relative bg-slate-900/50 border border-slate-800 rounded-2xl p-8 hover:border-blue-500/50 transition-all"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center text-2xl font-bold shadow-lg shadow-blue-500/50">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center mb-6 ml-8">
                  <step.icon className="w-8 h-8 text-blue-400" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-slate-400 mb-6 leading-relaxed">{step.description}</p>

                {/* Details */}
                <ul className="space-y-2">
                  {step.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-500">
                      <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>

                {/* Arrow to next step */}
                {index < 2 && (
                  <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 text-blue-500">
                    <ArrowRight className="w-8 h-8" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Use Cases */}
          <div className="mb-20">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-4">Perfect For...</h2>
              <p className="text-slate-400 text-lg">Whatever your video needs, USB Capture has you covered</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  className="bg-slate-900/30 border border-slate-800 rounded-xl p-6 hover:border-blue-500/30 transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0">
                      <useCase.icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{useCase.title}</h3>
                      <p className="text-slate-400 mb-3">{useCase.description}</p>
                      <div className="flex items-center gap-2 text-sm text-green-400">
                        <Check className="w-4 h-4" />
                        {useCase.benefit}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Benefits Bar */}
          <motion.div
            className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-2xl p-8 mb-20"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-600/30 flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-5 h-5 text-blue-300" />
                  </div>
                  <p className="text-white font-semibold text-sm">{benefit.text}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* FAQs */}
          <div className="mb-20">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-slate-400 text-lg">Everything you need to know about USB Capture</p>
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-blue-500/30 transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <h3 className="text-lg font-bold text-white mb-3">{faq.q}</h3>
                  <p className="text-slate-400 leading-relaxed">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <motion.div
            className="text-center bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-2xl p-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Start Capturing?</h2>
            <p className="text-slate-400 mb-8 text-lg max-w-2xl mx-auto">
              Browse our range of professional USB Capture devices and find the perfect one for your needs.
            </p>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-bold rounded-lg transition-all shadow-lg shadow-blue-500/30"
            >
              Shop USB Capture
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
}
