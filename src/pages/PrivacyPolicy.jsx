import React from "react";

const Privacy = () => {
  return (
    <div className="h-full bg-background flex flex-col gap-8 p-4 md:p-16 landing">
      <div className="flex gap-4 flex-col">
        <h2 className="text-white text-[24px] font-bold">Privacy policy</h2>
        <span className="text-white">
          BotTradeX Privacy Policy <br />
          Last Updated: July 2024
        </span>
      </div>
      <div className="flex gap-4 flex-col">
        <span className="text-white">
          At BotTradeX, we prioritize the protection of your personal
          information. This Privacy Policy outlines how we collect, use,
          disclose, and safeguard your data when you use our services.
        </span>
      </div>
      <div className="flex gap-4 flex-col">
        <h2 className="text-white text-xl">1.  INFORMATION WE COLLECT</h2>
        <span className="text-white">
          We collect information necessary to provide and improve our services.
          This includes:
          <br />
          <br />
          <ul className="list-disc px-6">
            <li>
              Account Information: Name, email, username, password (hashed),
              contact details.
            </li>
            <li>
              {" "}
              Usage Data: IP address, browser type, device information, website
              activity.
            </li>
            <li>
              {" "}
              Financial Information: Payment details (securely processed by
              third-party providers).
            </li>
            <li>
              Financial Information: Payment details (securely processed by
              third-party providers).
            </li>
          </ul>
        </span>
      </div>
      <div className="flex gap-4 flex-col">
        <h2 className="text-white text-xl">2. HOW WE USE YOUR INFORMATION</h2>
        <span className="text-white">
          We use collected information to
          <br />
          <br />
          <ul className="list-disc px-6">
            <li>Deliver and enhance our services</li>
            <li> Process payments and transactions</li>
            <li>Personalize your user experience</li>
            <li> Communicate with you</li>
            <li> Analyze trends and improve our offerings</li>
            <li> Ensure compliance with legal obligations</li>
            <li> Send marketing communications (with your consent)</li>
          </ul>
          <br />
          <br />
          2. the processing is necessary for the performance of a contract to
          which you are party, or in order to take steps at your request prior
          to entering into such contract; or
          <br />
          <br />
          3. the processing is necessary for our legitimate interests or the
          legitimate interests of others (except where such interests are
          overridden by the interests or rights of your employees, agents and
          contractors and those of your associated entities requiring the
          protection of their Personal Information) including:
          <ul className="list-disc px-6">
            <li>
              for monitoring and assessing compliance with Remesa policies and
              standards;
            </li>
            <li>for promotional and marketing materials and activities</li>
            <li>
              to comply with court orders and exercise and/or defend our legal
              rights, as otherwise permitted or required by any applicable law
              or regulation;
            </li>
            <li>
              to identify person(s) authorised to act on behalf of our clients
            </li>
            <li>
              for administrative purposes in relation to the security and access
              of our systems, offices, platforms and secure websites and
              applications; and
            </li>
            <li>to contact you about the Services we offer</li>
          </ul>
        </span>
      </div>
      <div className="flex gap-4 flex-col">
        <h2 className="text-white text-xl">3. SHARING INFORMATION</h2>
        <span className="text-white">
          We may share your information with trusted third-party service
          providers who assist us in operating our business. We do not sell or
          rent your personal information to third parties for marketing
          purposes.
        </span>
      </div>
      <div className="flex gap-4 flex-col">
        <h2 className="text-white text-xl">  4. DATA SECURITY</h2>
        <span className="text-white">
          We implement robust security measures to protect your information from
          unauthorized access, disclosure, or alteration.
        </span>
      </div>
      <div className="flex gap-4 flex-col">
        <h2 className="text-white text-xl">5. YOUR RIGHTS</h2>
        <span className="text-white">
          You have the right to access, correct, or delete your personal
          information. To exercise these rights, please contact us at
          <i className="text-primary">[support@bottradex.com]</i>
        </span>
      </div>
      <div className="flex gap-4 flex-col">
        <h2 className="text-white text-xl">6. CHILDREN's PRIVACY</h2>
        <span className="text-white">
          Our services are not intended for children under 13.
        </span>
      </div>
      <div className="flex gap-4 flex-col">
        <h2 className="text-white text-xl"> 7. CHANGES TO THIS POLICY</h2>
        <span className="text-white">
          We may update this policy. Your continued use signifies your
          acceptance of changes
        </span>
      </div>

      <div className="flex gap-4 flex-col">
        <h2 className="text-white text-xl"> 10. CONTACT US</h2>
        <span className="text-white">
          For inquiries, contact{" "}
          <i className="text-primary">[support@bottradex.com]</i>. By using
          BotTradeX, you consent to this Privacy Policy.
        </span>
      </div>
    </div>
  );
};

export default Privacy;
