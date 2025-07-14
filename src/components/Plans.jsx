import React from 'react';
import { Check } from 'lucide-react';

// === Single Feature Component ===
const PlanFeature = ({ text, description, textColor }) => (
  <div className="mb-4">
    <div className="flex items-center gap-2 py-2">
      <Check size={18} className="bg-[#1AB8B7] rounded-full text-white flex-shrink-0  p-1 " />
      <p className={`font-medium ${textColor || 'text-black'}`}>{text}</p>
    </div>
    <p className={`pl-6 text-sm ${textColor ? 'text-gray-300' : 'text-gray-500'}`}>
      {description}
    </p>
  </div>
);

// === Pricing Card Component ===
const PricingCard = ({
  title,
  monthlyPrice,
  annualPrice,
  isAnnual,
  buttonText,
  buttonClass,
  subtext,
  bgColor,
  customBgColor,
  customBottomBgColor,
  textColor,
  bottomTextColor,
  headerText,
  features,
  popular,
}) => {
  const displayPrice = isAnnual ? annualPrice : monthlyPrice;
  const displayPeriod = isAnnual ? 'per year' : 'per month';
  

  return (
    <div className="p-4 md:p-6">
      {/* Top Section */}
      <div className="p-4 rounded-t-lg" style={{ backgroundColor: customBgColor }}>
        <div className="flex justify-between items-center">
          <p className={`text-2xl font-medium ${textColor}`}>{title}</p>
          {popular && (
            <span className="bg-gradient-to-r from-green-400  text-white text-xs px-2 py-1 rounded-full">
              Most Popular
            </span>
          )}
        </div>

        <p className={`font-bold text-5xl mt-2 ${textColor}`}>${displayPrice}</p>
        <p className={textColor === 'text-white' ? 'text-gray-300' : 'text-gray-500'}>
          {displayPeriod}
        </p>

        <button className={`${buttonClass} px-4 py-2 rounded w-full mt-4 font-medium`}>
          {buttonText}
        </button>

        {subtext && <p className="text-center text-gray-400 text-sm mt-2">{subtext}</p>}
      </div>

      {/* Bottom Section */}
      <div
        className="p-4 rounded-b-lg"
        style={{
          backgroundColor: customBottomBgColor || (bgColor === 'bg-black' ? '#374151' : '#e5e7eb'),
        }}
      >
        <p className={`font-bold mb-4 ${bottomTextColor || textColor}`}>{headerText}</p>

        {features.map((feature, index) => (
          <PlanFeature
            key={index}
            text={feature.text}
            description={feature.description}
            textColor={bottomTextColor}
          />
        ))}
      </div>
    </div>
  );
};

// === Plans Section (Main Component) ===
const Plans = ({ isAnnual = true }) => {
  // --- Feature Lists ---
  const freeFeatures = [
    {
      text: '1 invited User',
      description:
        'Invite 1 team member (admin, moderator or guest) to help manage your events Q&A sessions.',
    },
    {
      text: 'Unlimited Q&A Sessions',
      description: 'Conduct unlimited Q&A sessions with your audience.',
    },
    {
      text: 'Upvoting & Sorting',
      description: 'Allow participants to upvote questions and sort by popularity.',
    },
    {
      text: 'Up to 100 Participants',
      description: 'Host Q&A sessions with up to 100 attendees.',
    },
    {
      text: 'Live Chat Support',
      description: 'Access live chat support for assistance.',
    },
  ];

  const proFeatures = [
    {
      text: '3 Users included',
      description:
        'Invite up to 3 more team members (admins, moderators and guests) to help manage your events Q&A.',
    },
    {
      text: 'Up to 250 participants',
      description: 'Host Q&A sessions with up to 250 attendees.',
    },
    {
      text: 'Q&A Moderation',
      description: 'Approve or Reject Questions in real time.',
    },
    {
      text: 'Sessions Analytics',
      description: "Gain insights into event's performance.",
    },
    {
      text: 'Announce Upcoming Events',
      description: 'Promote your upcoming events to event attendees.'
    },
    {
      text: 'Data Export',
      description: 'Export data for reporting or further analysis.',
    },
  ];

  const eliteFeatures = [
    {
      text: '5 Users included',
      description:
        'Invite up to 5 team members (admins, moderators and guests) to help manage your event.',
    },
    {
      text: 'Up to 1000 participants',
      description: 'Host Q&A sessions with up to 1000 attendees.',
    },
    {
      text: 'Branding & Customization',
      description: 'Brand your event with custom logos, banners etc.',
    },
    {
      text: 'DEE AI',
      description:
        'Attendees can rewrite questions, and creators can craft descriptions with PAAQ AI.',
    },
  ];

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* FREE Card */}
        <PricingCard
          title="FREE"
          monthlyPrice={0}
          annualPrice={0}
          isAnnual={isAnnual}
          buttonText="Get Started"
          buttonClass="bg-black text-white"
          subtext="No credit card required"
          bgColor="bg-gray-100"
          customBgColor="#EBEBEB"
          customBottomBgColor="#FAFAFA" // <- Almost white bottom
          textColor="text-black"
          headerText="All Free plans include"
          features={freeFeatures}
        />

        {/* PRO Card */}
        <PricingCard
          title="PRO"
          monthlyPrice={7}
          annualPrice={75}
          isAnnual={isAnnual}
          buttonText="Start 30-day free trial"
          buttonClass="bg-[#2588C5] text-white"
          bgColor="bg-black"
          customBgColor="#000000"
          customBottomBgColor="#252525"
          textColor="text-white"
          bottomTextColor="text-white"
          headerText="Everything in Free plus:"
          features={proFeatures}
          subtext= "No credit card required"
          popular
        />

        {/* ELITE Card */}
        <PricingCard
          title="ELITE"
          monthlyPrice={15}
          annualPrice={149}
          isAnnual={isAnnual}
          buttonText="Start 30-day free trial"
          buttonClass="bg-black text-white"
          bgColor="bg-gray-100"
          customBgColor="#EBEBEB"
          customBottomBgColor="#FAFAFA" // <- Almost white bottom
          textColor="text-black"
          headerText="Everything in Pro plus:"
          features={eliteFeatures}
          subtext="No credit card required"
        />
      </div>
    </div>
  );
};

export default Plans;
