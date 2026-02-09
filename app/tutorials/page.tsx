import Link from "next/link";
import { Play, Clock, TrendingUp, Layers, Settings, Rocket, Video, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Video Tutorials - Forefront Imaging",
  description: "Step-by-step video guides for installing, configuring, and optimizing Magewell products.",
};

export default function TutorialsPage() {
  const videoCategories = [
    {
      icon: Rocket,
      title: "Getting Started",
      description: "Essential tutorials for first-time users and basic setup.",
      color: "blue",
      videos: [
        {
          title: "Unboxing and Initial Setup - USB Capture HDMI",
          duration: "8:45",
          views: "24.5k",
          thumbnail: "getting-started"
        },
        {
          title: "Installing Drivers on Windows 10/11",
          duration: "6:20",
          views: "18.2k",
          thumbnail: "getting-started"
        },
        {
          title: "macOS Driver Installation and Configuration",
          duration: "7:15",
          views: "12.8k",
          thumbnail: "getting-started"
        },
        {
          title: "Your First Capture: OBS Studio Setup",
          duration: "11:30",
          views: "31.4k",
          thumbnail: "getting-started"
        }
      ]
    },
    {
      icon: Settings,
      title: "Configuration",
      description: "Detailed guides for configuring capture settings and optimizing quality.",
      color: "purple",
      videos: [
        {
          title: "Understanding Video Formats and Resolutions",
          duration: "9:45",
          views: "15.7k",
          thumbnail: "configuration"
        },
        {
          title: "Optimizing Settings for 4K60 Capture",
          duration: "12:30",
          views: "22.1k",
          thumbnail: "configuration"
        },
        {
          title: "Audio Input Configuration and Mixing",
          duration: "10:15",
          views: "13.5k",
          thumbnail: "configuration"
        },
        {
          title: "Color Space and HDR Settings Explained",
          duration: "14:20",
          views: "9.8k",
          thumbnail: "configuration"
        }
      ]
    },
    {
      icon: Layers,
      title: "Advanced Workflows",
      description: "Multi-camera setups, streaming, and professional production techniques.",
      color: "orange",
      videos: [
        {
          title: "Setting Up a Multi-Camera Production System",
          duration: "18:45",
          views: "19.3k",
          thumbnail: "advanced"
        },
        {
          title: "Live Streaming with Multiple Sources",
          duration: "16:20",
          views: "25.6k",
          thumbnail: "advanced"
        },
        {
          title: "Using SDK for Custom Applications",
          duration: "22:10",
          views: "7.4k",
          thumbnail: "advanced"
        },
        {
          title: "NDI Integration and Workflow",
          duration: "15:35",
          views: "11.9k",
          thumbnail: "advanced"
        }
      ]
    },
    {
      icon: TrendingUp,
      title: "Troubleshooting",
      description: "Common issues, diagnostics, and solutions.",
      color: "green",
      videos: [
        {
          title: "Fixing 'No Signal' Detection Issues",
          duration: "8:15",
          views: "28.4k",
          thumbnail: "troubleshooting"
        },
        {
          title: "Resolving USB Bandwidth Problems",
          duration: "10:45",
          views: "16.2k",
          thumbnail: "troubleshooting"
        },
        {
          title: "Diagnosing Audio Sync Issues",
          duration: "9:30",
          views: "14.7k",
          thumbnail: "troubleshooting"
        },
        {
          title: "Firmware Update Procedures",
          duration: "7:50",
          views: "12.1k",
          thumbnail: "troubleshooting"
        }
      ]
    }
  ];

  const colorClasses = {
    blue: {
      icon: "bg-blue-600/10 text-blue-500 border-blue-500/20",
      badge: "bg-blue-600/20 text-blue-400 border-blue-500/30"
    },
    purple: {
      icon: "bg-purple-600/10 text-purple-500 border-purple-500/20",
      badge: "bg-purple-600/20 text-purple-400 border-purple-500/30"
    },
    orange: {
      icon: "bg-orange-600/10 text-orange-500 border-orange-500/20",
      badge: "bg-orange-600/20 text-orange-400 border-orange-500/30"
    },
    green: {
      icon: "bg-green-600/10 text-green-500 border-green-500/20",
      badge: "bg-green-600/20 text-green-400 border-green-500/30"
    }
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              Video Tutorials
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Step-by-step video guides to help you install, configure, and master your Magewell products. 
              From basics to advanced workflows.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 text-center">
              <Video className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <div className="text-3xl font-extrabold mb-1">60+</div>
              <div className="text-sm text-slate-400">Video Tutorials</div>
            </div>
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 text-center">
              <Play className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <div className="text-3xl font-extrabold mb-1">500k+</div>
              <div className="text-sm text-slate-400">Total Views</div>
            </div>
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 text-center">
              <Clock className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <div className="text-3xl font-extrabold mb-1">12hrs</div>
              <div className="text-sm text-slate-400">Content</div>
            </div>
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 text-center">
              <TrendingUp className="w-8 h-8 text-orange-400 mx-auto mb-3" />
              <div className="text-3xl font-extrabold mb-1">New</div>
              <div className="text-sm text-slate-400">Weekly</div>
            </div>
          </div>

          {/* Video Categories */}
          <div className="space-y-16">
            {videoCategories.map((category) => {
              const Icon = category.icon;
              const colors = colorClasses[category.color as keyof typeof colorClasses];
              
              return (
                <div key={category.title}>
                  <div className="flex items-center gap-4 mb-8">
                    <div className={`w-12 h-12 rounded-xl ${colors.icon} border flex items-center justify-center`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold">{category.title}</h2>
                      <p className="text-slate-400">{category.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {category.videos.map((video) => (
                      <div
                        key={video.title}
                        className="bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden hover:border-slate-700 transition-all group cursor-pointer"
                      >
                        {/* Video Thumbnail */}
                        <div className="relative aspect-video bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center group-hover:from-slate-700 group-hover:to-slate-800 transition-all">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:bg-white/20 group-hover:scale-110 transition-all">
                              <Play className="w-8 h-8 text-white ml-1" fill="white" />
                            </div>
                          </div>
                          <div className="absolute top-3 right-3 px-2 py-1 bg-black/60 backdrop-blur-sm rounded text-xs font-bold">
                            {video.duration}
                          </div>
                        </div>

                        {/* Video Info */}
                        <div className="p-5">
                          <h3 className="font-bold mb-2 group-hover:text-blue-400 transition-colors line-clamp-2">
                            {video.title}
                          </h3>
                          <div className="flex items-center gap-3 text-sm text-slate-400">
                            <span>{video.views} views</span>
                            <span>•</span>
                            <span>{video.duration}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* YouTube Channel CTA */}
          <div className="mt-20 bg-gradient-to-br from-red-600/20 to-pink-600/20 border border-red-500/30 rounded-3xl p-12 text-center">
            <Video className="w-16 h-16 text-red-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Subscribe for Weekly Tutorials</h2>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
              New video tutorials released every week covering the latest products, 
              features, and best practices. Join our community of 50k+ subscribers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="px-8 py-4 bg-red-600 hover:bg-red-500 text-white font-bold rounded-lg shadow-lg shadow-red-500/30 transition-all flex items-center justify-center gap-2"
              >
                <Play className="w-5 h-5" />
                Subscribe on YouTube
              </a>
              <Link
                href="/knowledge-base"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-lg border border-white/20 transition-all"
              >
                Browse Knowledge Base
              </Link>
            </div>
          </div>

          {/* Training Program */}
          <div className="mt-12 bg-slate-900/50 border border-slate-800 rounded-2xl p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <CheckCircle2 className="w-12 h-12 text-blue-400 mb-6" />
                <h2 className="text-3xl font-bold mb-4">Reseller Training Program</h2>
                <p className="text-slate-400 mb-6 leading-relaxed">
                  Registered resellers get access to exclusive training materials, 
                  certification courses, and advanced technical workshops.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300">Product certification courses</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300">Live webinar sessions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300">Technical deep-dive workshops</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300">Sales enablement resources</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-xl p-8">
                <h3 className="text-xl font-bold mb-6">Become a Certified Partner</h3>
                <p className="text-slate-400 mb-6">
                  Join our reseller program to access comprehensive training and grow your business.
                </p>
                <Link
                  href="/resellers"
                  className="block w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg text-center transition-all"
                >
                  Learn About Reseller Program
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
