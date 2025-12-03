import StreamLabsLogo from "../assets/streamlabs-logo.png";
import BroadcastlyLogo from "../assets/broadcastly-logo.png";
import LiveStreamerLogo from "../assets/livestreamer-logo.png";
import CloudCastLogo from "../assets/cloudcast-logo.png";

import streamImage from "../assets/post1.png";
import chart from "../assets/post3.png";

import audienceEngagementImage from "../assets/post2.png";

import user4 from "../assets/user4.jpeg";
import user5 from "../assets/user5.jpeg";
import user6 from "../assets/user6.jpeg";

import {
  RiBarChart2Line,
  RiSettings2Line,
  RiTeamLine,
  RiTwitchLine,
  RiYoutubeLine,
  RiCalendarLine,
} from "@remixicon/react";

export const HERO_CONTENT = {
  badgeText: "🚀 New Feature: Stream Analytics 2.0 Now Live!",
  mainHeading: "The Ultimate \n Streaming Toolkit+",

  subHeading:
    "Enjoy fast, reliable IPTV with hundreds of channels, HD streaming, and instant access on any device. Simple setup, smooth performance, and nonstop entertainment.",
  callToAction: {
    primary: "Start Free Trial",
    secondary: "Request a Demo",
  },
  trustedByText: "Trusted by Leading Streaming Brands & Creators",
};

export const BRAND_LOGOS = [
  { src: StreamLabsLogo, alt: "StreamLabs" },
  { src: BroadcastlyLogo, alt: "Broadcastly" },
  { src: LiveStreamerLogo, alt: "LiveStreamer" },
  { src: CloudCastLogo, alt: "CloudCast" },
];

export const HOW_IT_WORKS_CONTENT = {
  sectionTitle: "How it works!",
  sectionDescription:
    "Stream like a pro with our 6-step process. From setup to performance tracking, we've got everything you need to elevate your streaming experience.",
  steps: [
    {
      title: "Set Up Your Streaming Environment",
      description:
        "Easily configure your streaming environment with our user-friendly tools. Connect to Twitch, YouTube, and more in minutes.",
      imageSrc: streamImage,
      imageAlt: "Streaming Setup",
    },
    {
      title: "Engage with Your Audience",
      description:
        "Interact with your audience in real-time through custom alerts, chat overlays, and live notifications.",
      imageSrc: audienceEngagementImage,
      imageAlt: "Audience Engagement",
    },
    {
      title: "Track and Analyze Performance",
      description:
        "Monitor your stream’s performance in real-time with detailed analytics and viewer engagement insights.",
      imageSrc: chart,
      imageAlt: "Performance Analytics",
    },
  ],
};

export const KEY_FEATURES_CONTENT = {
  sectionTitle: "Stream Smarter with These Key Features",
  sectionDescription:
    "Everything you need to enhance your streaming experience, all in one place.",
  features: [
    {
      id: 1,
      icon: <RiTwitchLine className="w-8 h-8" />,
      title: "Twitch Integration",
      description:
        "Seamlessly connect with Twitch to automate alerts, manage subscribers, and track donations.",
    },
    {
      id: 2,
      icon: <RiYoutubeLine className="w-8 h-8" />,
      title: "YouTube Streaming Support",
      description:
        "Go live on YouTube with built-in tools for managing chats, subscribers, and more.",
    },
    {
      id: 3,
      icon: <RiCalendarLine className="w-8 h-8" />,
      title: "Schedule Streams",
      description:
        "Plan and schedule your streams ahead of time, with reminders sent to your audience.",
    },
  ],
};

export const PLANS_CONTENT = {
  sectionTitle: "Choose Your Plan",
  sectionDescription:
    "Streamerzz offers flexible pricing plans to fit every streamer’s needs, from beginner to pro.",
  popularBadge: "Most Popular",
  ctaText: "Get Started",
  plans: [
    {
      name: "Basic",
      price: "$9.99/month",
      description:
        "Perfect for beginners just starting their streaming journey.",
      features: [
        "Basic analytics",
        "Custom overlays",
        "Viewer engagement tools",
        "Stream up to 720p",
      ],
    },
    {
      name: "Pro",
      price: "$19.99/month",
      description:
        "For streamers who want more advanced tools to grow their audience.",
      features: [
        "Advanced analytics",
        "Custom alerts & notifications",
        "HD streaming up to 1080p",
        "Real-time audience insights",
        "Unlimited support",
      ],
      popular: true,
    },
    {
      name: "Elite",
      price: "$49.99/month",
      description:
        "For professional streamers who need cutting-edge tools and insights.",
      features: [
        "Premium analytics & reporting",
        "4K Ultra HD streaming",
        "Dedicated account manager",
        "Full API access",
        "Custom branding & overlays",
      ],
    },
  ],
};

export const TESTIMONIALS_CONTENT = {
  sectionTitle: "What Our Streamers Say",
  sectionDescription:
    "Hear from some of the top streamers who use Streamerzz to engage with their audience and grow their channels.",
  reviews: [
    {
      name: "David Lee",
      title: "Customer Success Manager",
      review:
        "Using StreamLab, we’ve been able to streamline our live streaming setup. The platform’s intuitive interface and versatile features make broadcasting effortless, providing our audience with a smooth and engaging experience every time..",
      image: user4,
    },
    {
      name: "Ella Fernandez",
      title: "UX Designer",
      review:
        "Using StreamLab, we’ve been able to streamline our live streaming setup. The platform’s intuitive interface and versatile features make broadcasting effortless, providing our audience with a smooth and engaging experience every time..",
      image: user5,
    },
    {
      name: "Frank Wilson",
      title: "Data Analyst",
      review:
        "Using StreamLab, we’ve been able to streamline our live streaming setup. The platform’s intuitive interface and versatile features make broadcasting effortless, providing our audience with a smooth and engaging experience every time..",
      image: user6,
    },
  ],
};
