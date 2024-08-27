import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Privacy = () => {
  const navigate = useNavigate();
  return (
    <div className="h-full bg-background flex flex-col gap-8 p-4 md:p-16 landing">
      <span
        className="text-black bg-white w-10 h-10 rounded-md flex items-center justify-center cursor-pointer"
        onClick={() => navigate(-1)}
      >
        <FaChevronLeft />
      </span>
      <div className="flex gap-4 flex-col">
        <h2 className="text-white text-[24px] font-bold">Privacy policy</h2>
        <span className="text-white">
          BotTradeX Privacy Policy <br />
          Last Updated: Aug 2024
        </span>
      </div>
      <div class="w-full h-full flex-col justify-start items-start gap-[18px] inline-flex">
        <div class="self-stretch h-full text-[#b1b1b1] text-2xl font-normal font-['Utendo'] leading-normal">
          www.bottradex.com is owned and operated by Phills & Zewde Enterprise
          Pty Ltd. Phills & Zewde Enterprise Pty Ltd is the data controller and
          can be contacted at:
        </div>
        <div class="self-stretch h-full text-[#b1b1b1] text-2xl font-normal font-['Utendo'] leading-normal">
          support@bottradex.com{" "}
        </div>
        <div class="self-stretch h-full text-[#b1b1b1] text-2xl font-normal font-['Utendo'] leading-normal">
          Level 19, 10 Eagle St, Brisbane City. QLD 4000
        </div>
        <div class="w-full h-full text-white text-2xl font-semibold font-['Utendo']">
          Purpose
        </div>
        <div class="self-stretch h-full text-[#b1b1b1] text-2xl font-normal font-['Utendo'] leading-normal">
          The purpose of this privacy policy is to inform users of our Site of
          the following:
        </div>
        <div class="self-stretch h-full text-[#b1b1b1] text-2xl font-normal font-['Utendo'] leading-normal">
          1. The personal data we will collect;
        </div>
        <div class="self-stretch h-full text-[#b1b1b1] text-2xl font-normal font-['Utendo'] leading-normal">
          2. Use of collected data;
        </div>
        <div class="self-stretch h-full text-[#b1b1b1] text-2xl font-normal font-['Utendo'] leading-normal">
          3. Who has access to the data collected;
        </div>
        <div class="self-stretch h-full text-[#b1b1b1] text-2xl font-normal font-['Utendo'] leading-normal">
          4. The rights of Site users; and
        </div>
        <div class="self-stretch h-full text-[#b1b1b1] text-2xl font-normal font-['Utendo'] leading-normal">
          5. The Site's cookie policy.
        </div>
        <div class="self-stretch h-full text-[#b1b1b1] text-2xl font-normal font-['Utendo'] leading-normal">
          This Privacy Policy applies in addition to the terms and conditions of
          our Site.
        </div>
        <div class="w-full h-full text-white text-2xl font-semibold font-['Utendo']">
          GDPR
        </div>
        <div class="self-stretch h-full text-[#b1b1b1] text-2xl font-normal font-['Utendo'] leading-normal">
          For users in the European Union, we adhere to the Regulation (EU)
          2016/679 of the European Parliament and of the Council of 27 April
          2016, known as the General Data Protection Regulation (the "GDPR").
          For users in the United Kingdom, we adhere to the GDPR as enshrined in
          the Data Protection Act 2018.
        </div>
        <div class="self-stretch h-full text-[#b1b1b1] text-2xl font-normal font-['Utendo'] leading-normal">
          We have not appointed a Data Protection Officer as we do not fall
          within the categories of controllers and processors required to
          appoint a Data Protection Officer under Article 37 of the GDPR.
        </div>
        <div class="w-full h-full text-white text-2xl font-semibold font-['Utendo']">
          Consent
        </div>
        <div class="self-stretch h-7 text-[#b1b1b1] text-2xl font-normal font-['Utendo'] leading-normal">
          By using our Site users agree that they consent to:
        </div>
        <div class="self-stretch h-7 text-[#b1b1b1] text-2xl font-normal font-['Utendo'] leading-normal">
          1. The conditions set out in this Privacy Policy.
        </div>
        <div class="self-stretch h-full text-[#b1b1b1] text-2xl font-normal font-['Utendo'] leading-normal">
          When the legal basis for us processing your personal data is that you
          have provided your consent to that processing, you may withdraw your
          consent at any time. If you withdraw.
        </div>
        <div class="self-stretch h-7 text-[#b1b1b1] text-2xl font-normal font-['Utendo'] leading-normal">
          your consent, it will not make processing which we completed before
          you withdrew your consent unlawful.
        </div>
        <div class="self-stretch h-full text-[#b1b1b1] text-2xl font-normal font-['Utendo'] leading-normal">
          You can withdraw your consent by: Contacting the Data Protection
          Officer.
        </div>
        <div class="w-full h-full text-white text-2xl font-semibold font-['Utendo']">
          Legal Basis for Processing
        </div>
        <div class="self-stretch h-full text-[#b1b1b1] text-2xl font-normal font-['Utendo'] leading-normal">
          We collect and process personal data about users in the EU only when
          we have a legal basis for doing so under Article 6 of the GDPR.
        </div>
        <div class="self-stretch h-[34px] text-[#b1b1b1] text-2xl font-normal font-['Utendo'] leading-normal">
          We rely on the following legal bases to collect and process the
          personal data of users in the EU:
        </div>
        <div class="self-stretch h-[34px] text-[#b1b1b1] text-2xl font-normal font-['Utendo'] leading-normal">
          1. Users have provided their consent to the processing of their data
          for one or more specific purposes; and
        </div>
        <div class="self-stretch h-[34px] text-[#b1b1b1] text-2xl font-normal font-['Utendo'] leading-normal">
          2. Processing of user personal data is necessary to protect the life
          of the user or another natural person.
        </div>
        <div class="w-full h-full text-white text-2xl font-semibold font-['Utendo']">
          Personal Data We Collect
        </div>
        <div class="self-stretch h-[52px] text-[#b1b1b1] text-2xl font-normal font-['Utendo'] leading-normal">
          We only collect data that helps us achieve the purpose set out in this
          Privacy Policy. We will not collect any additional data beyond the
          data listed below without notifying you first.
        </div>
        <div class="w-full h-full text-white text-2xl font-semibold font-['Utendo']">
          Data Collected Automatically
        </div>
        <div class="self-stretch h-7 text-[#b1b1b1] text-2xl font-normal font-['Utendo'] leading-normal">
          When you visit and use our Site, we may automatically collect and
          store the following information:
        </div>
        <div class="self-stretch h-[34px] text-[#b1b1b1] text-2xl font-normal font-['Utendo'] leading-normal">
          1. IP address;
        </div>
        <div class="self-stretch h-[34px] text-[#b1b1b1] text-2xl font-normal font-['Utendo'] leading-normal">
          2. Location; and
        </div>
        <div class="self-stretch h-[34px] text-[#b1b1b1] text-2xl font-normal font-['Utendo'] leading-normal">
          3. Clicked links.
        </div>
        <div class="w-full h-full text-white text-2xl font-semibold font-['Utendo']">
          Data Collected in a Non-Automatic W
        </div>
        <div class="self-stretch h-[34px] text-[#b1b1b1] text-2xl font-normal font-['Utendo'] leading-normal">
          We may also collect the following data when you perform certain
          functions on our Site:
        </div>
        <div class="self-stretch h-[34px] text-[#b1b1b1] text-2xl font-normal font-['Utendo'] leading-normal">
          1. First and last name; and
        </div>
        <div class="self-stretch h-[34px] text-[#b1b1b1] text-2xl font-normal font-['Utendo'] leading-normal">
          2. Email address.
        </div>
        <div class="self-stretch h-[34px] text-[#b1b1b1] text-2xl font-normal font-['Utendo'] leading-normal">
          This data may be collected using the following methods:
        </div>
        <div class="self-stretch h-[34px] text-[#b1b1b1] text-2xl font-normal font-['Utendo'] leading-normal">
          1. Creating an account.
        </div>
        <div class="w-full h-full text-white text-2xl font-semibold font-['Utendo']">
          How We Use Personal Data
        </div>
        <div class="self-stretch h-[63px] text-[#b1b1b1] text-2xl font-normal font-['Utendo'] leading-normal">
          Data collected on our Site will only be used for the purposes
          specified in this Privacy Policy or indicated on the relevant pages of
          our Site. We will not use your data beyond what we disclose in this
          Privacy Policy.
        </div>
        <div class="self-stretch h-[34px] text-[#b1b1b1] text-2xl font-normal font-['Utendo'] leading-normal">
          The data we collect automatically is used for the following purposes:
        </div>
        <div class="self-stretch h-[34px] text-[#b1b1b1] text-2xl font-normal font-['Utendo'] leading-normal">
          1. Statistics.
        </div>
        <div class="self-stretch h-[34px] text-[#b1b1b1] text-2xl font-normal font-['Utendo'] leading-normal">
          The data we collect when the user performs certain functions may be
          used for the following purposes:
        </div>
        <div class="self-stretch h-[34px] text-[#b1b1b1] text-2xl font-normal font-['Utendo'] leading-normal">
          1. Communication.
        </div>
        <div class="w-full h-full text-white text-2xl font-semibold font-['Utendo']">
          Who We Share Personal Data With
        </div>
        <div class="self-stretch h-[34px] text-[#b1b1b1] text-2xl font-normal font-['Utendo'] leading-normal">
          Employees
        </div>
        <div class="self-stretch h-full text-[#b1b1b1] text-2xl font-normal font-['Utendo'] leading-normal">
          We may disclose user data to any member of our organisation who
          reasonably needs access to user data to achieve the purposes set out
          in this Privacy Policy.
        </div>
        <div class="self-stretch h-full text-[#b1b1b1] text-2xl font-normal font-['Utendo'] leading-normal">
          Other Disclosures
        </div>
        <div class="self-stretch h-full text-[#b1b1b1] text-2xl font-normal font-['Utendo'] leading-normal">
          We will not sell or share your data with other third parties, except
          in the following cases:
        </div>
        <div class="self-stretch h-full text-[#b1b1b1] text-2xl font-normal font-['Utendo'] leading-normal">
          1. If the law requires it;
        </div>
        <div class="self-stretch h-full text-[#b1b1b1] text-2xl font-normal font-['Utendo'] leading-normal">
          2. If it is required for any legal proceeding;
        </div>
        <div class="self-stretch h-full text-[#b1b1b1] text-2xl font-normal font-['Utendo'] leading-normal">
          3. To prove or protect our legal rights; and
        </div>
        <div class="self-stretch h-full text-[#b1b1b1] text-2xl font-normal font-['Utendo'] leading-normal">
          4. To buyers or potential buyers of this company in the event that we
          seek to sell the company.
        </div>
        <div class="self-stretch h-full text-[#b1b1b1] text-2xl font-normal font-['Utendo'] leading-normal">
          If you follow hyperlinks from our Site to another Site, please note
          that we are not responsible for and have no control over their privacy
          policies and practices.
        </div>
        <div class="w-full h-full text-white text-2xl font-semibold font-['Utendo']">
          How Long We Store Personal Data
        </div>
        <div class="self-stretch h-[35px] text-[#b1b1b1] text-2xl font-normal font-['Utendo'] leading-normal">
          User data will be stored until the purpose the data was collected for
          has been achieved
        </div>
        <div class="self-stretch h-[35px] text-[#b1b1b1] text-2xl font-normal font-['Utendo'] leading-normal">
          You will be notified if your data is kept for longer than this period
        </div>
        <div class="w-full h-full text-white text-2xl font-semibold font-['Utendo']">
          How We Protect Your Personal Data
        </div>
        <div class="self-stretch h-full text-[#b1b1b1] text-2xl font-normal font-['Utendo'] leading-normal">
          In order to protect your security, we use the strongest available
          browser encryption and store all of our data on servers in secure
          facilities. All data is only accessible to our employees. Our
          employees are bound by strict confidentiality agreements and a breach
          of this agreement would result in the employee's termination.
        </div>
        <div class="self-stretch h-7 text-[#b1b1b1] text-2xl font-normal font-['Utendo'] leading-normal">
          While we take all reasonable precautions to ensure that user data is
          secure and that users are
        </div>
        <div class="self-stretch h-[52px] text-[#b1b1b1] text-2xl font-normal font-['Utendo'] leading-normal">
          protected, there always remains the risk of harm. The Internet as a
          whole can be insecure at times and therefore we are unable to
          guarantee the security of user data beyond what is reasonably
          practical.
        </div>
        <div class="w-full h-full text-white text-2xl font-semibold font-['Utendo']">
          Your Rights as a User
        </div>
        <div class="self-stretch h-[52px] text-[#b1b1b1] text-2xl font-normal font-['Utendo'] leading-normal">
          protected, there always remains the risk of harm. The Internet as a
          whole can be insecure at times and therefore we are unable to
          guarantee the security of user data beyond what is reasonably
          practical.
        </div>
        <div class="self-stretch h-7 text-[#b1b1b1] text-2xl font-normal font-['Utendo'] leading-normal">
          Under the GDPR, you have the following rights:
        </div>
        <div class="self-stretch h-7 text-[#b1b1b1] text-2xl font-normal font-['Utendo'] leading-normal">
          1. Right to be informed;
        </div>
        <div class="self-stretch h-7 text-[#b1b1b1] text-2xl font-normal font-['Utendo'] leading-normal">
          2. Right of access;
        </div>
        <div class="self-stretch h-7 text-[#b1b1b1] text-2xl font-normal font-['Utendo'] leading-normal">
          3. Right to rectification;
        </div>
        <div class="self-stretch text-[#b1b1b1] text-2xl font-normal font-['Utendo'] leading-normal">
          4. Right to erasure;
        </div>
        <div class="w-full h-full text-white text-2xl font-semibold font-['Utendo']">
          Children
        </div>
        <div class="self-stretch text-[#b1b1b1] text-2xl font-normal font-['Utendo'] leading-normal">
          The minimum age to use our website is 14 years of age. We do not
          knowingly collect or use personal data from children under 16 years of
          age. If we learn that we have collected personal data from a child
          under 16 years of age, the personal data will be deleted as soon as
          possible. If a child under 16 years of age has provided us with
          personal data their parent or guardian may contact our privacy
          officer.
        </div>
        <div class="w-full h-full text-white text-2xl font-semibold font-['Utendo']">
          How to Access, Modify, Delete, or Challenge the Data Collected
        </div>
        <div class="self-stretch text-[#b1b1b1] text-2xl font-normal font-['Utendo'] leading-normal">
          If you would like to know if we have collected your personal data, how
          we have used your personal data, if we have disclosed your personal
          data and to who we disclosed your personal data, if you would like
          your data to be deleted or modified in any way, or if you would like
          to exercise any of your other rights under the GDPR, please contact
          our privacy officer here: support@bottradex.com
        </div>
        <div class="w-full h-full text-white text-2xl font-semibold font-['Utendo']">
          Do Not Track Notice
        </div>
        <div class="self-stretch text-[#b1b1b1] text-2xl font-normal font-['Utendo'] leading-normal">
          Do Not Track ("DNT") is a privacy preference that you can set in
          certain web browsers. We do not track the users of our Site over time
          and across third party websites and therefore do not respond to
          browser-initiated DNT signals.
        </div>
        <div class="w-full h-full text-white text-2xl font-semibold font-['Utendo']">
          Cookie Policy
        </div>
        <div class="self-stretch text-[#b1b1b1] text-2xl font-normal font-['Utendo'] leading-normal">
          A cookie is a small file, stored on a user's hard drive by a website.
          Its purpose is to collect data relating to the user's browsing habits.
          You can choose to be notified each time a cookie. is transmitted. You
          can also choose to disable cookies entirely in your internet browser,
          but this may decrease the quality of your user experience
        </div>
        <div class="self-stretch text-[#b1b1b1] text-2xl font-normal font-['Utendo'] leading-normal">
          We use the following types of cookies on our Site:
        </div>
        <div class="self-stretch text-[#b1b1b1] text-2xl font-normal font-['Utendo'] leading-normal">
          1. Analytical cookies
        </div>
        <div class="self-stretch text-[#b1b1b1] text-2xl font-normal font-['Utendo'] leading-normal">
          Analytical cookies allow us to improve the design and functionality of
          our Site by collecting data on how you access our Site, for example
          data on the content you access, how long you stay on our Site, etc.
        </div>
        <div class="w-full h-full text-white text-2xl font-semibold font-['Utendo']">
          Modifications
        </div>
        <div class="self-stretch text-[#b1b1b1] text-2xl font-normal font-['Utendo'] leading-normal">
          This Privacy Policy may be amended from time to time in order to
          maintain compliance with the law and to reflect any changes to our
          data collection process. When we amend this Privacy Policy we will
          update the "Effective Date" at the top of this Privacy Policy. We
          recommend that our users periodically review our Privacy Policy to
          ensure that they are notified of any updates. If necessary, we may
          notify users by email of changes to this Privacy Policy.
        </div>
        <div class="w-full h-full text-white text-2xl font-semibold font-['Utendo']">
          Complaints
        </div>
        <div class="self-stretch text-[#b1b1b1] text-2xl font-normal font-['Utendo'] leading-normal">
          If you have any complaints about how we process your personal data,
          please contact us through the contact methods listed in the Contact
          Information section so that we can, where possible, resolve the issue.
          If you feel we have not addressed your concern in a satisfactory
          manner you may contact a supervisory authority. You also have the
          right to directly make a complaint to a supervisory authority. You can
          lodge a complaint with a supervisory authority by contacting the
          Information Commissioner's Office in the UK, Data Protection
          Commission in Ireland.
        </div>
        <div class="w-full h-full text-white text-2xl font-semibold font-['Utendo']">
          Contact Information
        </div>
        <div class="self-stretch text-[#b1b1b1] text-2xl font-normal font-['Utendo'] leading-normal">
          If you have any questions, concerns or complaints, you can contact our
          privacy officer, at: support@bottradex.com
        </div>
      </div>
    </div>
  );
};

export default Privacy;
