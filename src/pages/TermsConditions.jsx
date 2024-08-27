import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const TermsAndConditions = () => {
  const navigate = useNavigate();

  return (
    <div className="h-full bg-background flex flex-col gap-8 p-4 md:p-16 landing">
      <span
        className="text-black bg-white w-10 h-10 rounded-md flex items-center justify-center cursor-pointer"
        onClick={() => navigate(-1)}
      >
        <FaChevronLeft />
      </span>
      <h2 className="text-white text-[24px] font-bold">Terms & Conditions</h2>
      <h2 className="text-white text-xl">BotTradeX Terms and Conditions</h2>
      <div class="w-full h-full bg-[#0d0d0d] flex-col justify-start items-center gap-[18px] flex">
        <div class="self-stretch h-full text-[#b1b1b1] text-2xl font-normal font-['Utendo'] leading-normal">
          These terms and conditions govern the use of www.bottradex.com. This
          Site is owned and operated by Phills & Zewde Enterprise Pty LTD. This
          Site is a trading automation service.{" "}
        </div>
        <div class="self-stretch h-full text-[#b1b1b1] text-2xl font-normal font-['Utendo'] leading-normal">
          TBy using this Site, you indicate that you have read and understand
          these Terms and Conditions and agree to abide by them at all times.
        </div>
        <div class="self-stretch h-9 text-white text-2xl font-semibold font-['Utendo'] leading-[30px]">
          Intellectual Property
        </div>
        <div class="self-stretch h-full text-[#b1b1b1] text-2xl font-normal font-['Utendo'] leading-normal">
          All content published and made available on our Site is the property
          of Phills & Zewde Enterprise Pty LTD and the Site's creators. This
          includes, but is not limited to images, text, logos, documents,
          downloadable files and anything that contributes to the composition of
          our Site.
          <br /> <br />
        </div>
        <div class="self-stretch h-full text-white text-2xl font-semibold font-['Utendo'] leading-[30px]">
          Age Restrictions
        </div>
        <div class="self-stretch h-full text-[#b1b1b1] text-2xl font-normal font-['Utendo'] leading-normal">
          The minimum age to use our Site is 14 years old. By using this Site,
          users agree that they are over 14 years old. We do not assume any
          legal responsibility for false statements about age.
        </div>
        <div class="self-stretch h-full text-white text-2xl font-semibold font-['Utendo'] leading-[30px]">
          Accounts
        </div>
        <div class="self-stretch h-10 text-[#b1b1b1] text-2xl font-normal font-['Utendo'] leading-normal">
          When you create an account on our Site, you agree to the following:
        </div>
        <div class="self-stretch h-full text-[#b1b1b1] text-2xl font-normal font-['Utendo'] leading-normal">
          1 You are solely responsible for your account and the security and
          privacy of your account, including passwords or sensitive information
          attached to that account; and
        </div>
        <div class="self-stretch h-full text-[#b1b1b1] text-2xl font-normal font-['Utendo'] leading-normal">
          2 All personal information you provide to us through your account is
          up to date, accurate, and truthful and that you will update your
          personal information if it changes.
        </div>
        <div class="self-stretch h-full text-[#b1b1b1] text-2xl font-normal font-['Utendo'] leading-normal">
          We reserve the right to suspend or terminate your account if you are
          using our Site illegally or if you violate these Terms and Conditions.
        </div>
        <div class="self-stretch h-full text-white text-2xl font-semibold font-['Utendo'] leading-[30px]">
          Sale of Goods And Services
        </div>
        <div class="self-stretch h-full text-[#b1b1b1] text-2xl font-normal font-['Utendo'] leading-normal">
          These Terms and Conditions govern the sale of goods and services
          available on our Site. The following goods are available on our Site:
        </div>
        <div class="self-stretch h-full text-[#b1b1b1] text-2xl font-normal font-['Utendo'] leading-normal">
          Trading Algorithmic Software; and
        </div>
        <div class="self-stretch h-full text-[#b1b1b1] text-2xl font-normal font-['Utendo'] leading-normal">
          Automatic Forex Expert Advisor (EA Bot).
        </div>
        <div class="self-stretch h-full text-[#b1b1b1] text-2xl font-normal font-['Utendo'] leading-normal">
          Automatic Forex Expert Advisor (EA Bot).
        </div>
        <div class="self-stretch h-full text-[#b1b1b1] text-2xl font-normal font-['Utendo'] leading-normal">
          The following services are available on our Site:
        </div>
        <div class="self-stretch h-full text-[#b1b1b1] text-2xl font-normal font-['Utendo'] leading-normal">
          BotTradeX Scalp Club.
        </div>
        <div class="self-stretch h-full text-[#b1b1b1] text-2xl font-normal font-['Utendo'] leading-normal">
          The services will be paid for in full after a 14-day or 30-day trial
          depending on the service selected.
        </div>
        <div class="self-stretch h-full text-[#b1b1b1] text-2xl font-normal font-['Utendo'] leading-normal">
          These Terms and Conditions apply to all the goods and services that
          are displayed on our Site at the time you access it. This includes all
          products listed as being out of stock. All information, descriptions,
          or images that we provide about our goods and services are as accurate
          as possible. However, we are not legally bound by such information,
          descriptions, or images as we cannot guarantee the accuracy of all
          goods and services we provide. You agree to purchase goods and
          services from our Site at your own risk.
        </div>
        <div class="self-stretch h-full text-[#b1b1b1] text-2xl font-normal font-['Utendo'] leading-normal">
          We reserve the right to modify, reject or cancel your order whenever
          it becomes necessary. If we cancel your order and have already
          processed your payment, we will give you a refund equal to the amount
          you paid. You agree that it is your responsibility to monitor your
          payment instrument to verify receipt of any refund.
        </div>
        <div class="self-stretch h-9 text-white text-2xl font-semibold font-['Utendo'] leading-[30px]">
          Third Party Goods and Services
        </div>
        <div class="self-stretch h-full text-[#b1b1b1] text-2xl font-normal font-['Utendo'] leading-normal">
          Our Site may offer goods and services from third parties. We cannot
          guarantee the quality or accuracy of goods and services made available
          by third parties on our Site.
        </div>
        <div class="self-stretch h-9 text-white text-2xl font-semibold font-['Utendo'] leading-[30px]">
          Subscriptions
        </div>
        <div class="self-stretch h-full text-[#b1b1b1] text-2xl font-normal font-['Utendo'] leading-normal">
          Your subscription automatically renews and you will be automatically
          billed until we receive notification that you want to cancel the
          subscription.
        </div>
        <div class="self-stretch h-full text-[#b1b1b1] text-2xl font-normal font-['Utendo'] leading-normal">
          To cancel your subscription, please follow these steps: Cancel 7 days
          Prior to activation.
        </div>
        <div class="self-stretch h-9 text-white text-2xl font-semibold font-['Utendo'] leading-[30px]">
          Free Trial
        </div>
        <div class="self-stretch h-full text-[#b1b1b1] text-2xl font-normal font-['Utendo'] leading-normal">
          We offer the following free trial of our goods and services: 14 Day
          Trial for EA Bot, 30 Day Trial For Scalp Club where you utilise our
          momentum indicator.
        </div>
        <div class="self-stretch h-full text-[#b1b1b1] text-2xl font-normal font-['Utendo'] leading-normal">
          At the end of your free trial, the following will occur: You will
          automatically be billed our monthly subscription rate. If you do not
          want to be billed, you will need to cancel your subscription before
          your free trial ends.
        </div>
        <div class="self-stretch h-full text-[#b1b1b1] text-2xl font-normal font-['Utendo'] leading-normal">
          To cancel your free trial, please follow these steps: Log in to your
          account and select "Cancel Free Trial" under the "Account Management"
        </div>
        <div class="self-stretch h-9 text-white text-2xl font-semibold font-['Utendo'] leading-[30px]">
          Payments
        </div>
        <div class="self-stretch text-[#b1b1b1] text-2xl font-normal font-['Utendo'] leading-normal">
          We accept the following payment methods on our Site:
        </div>
        <div class="self-stretch text-[#b1b1b1] text-2xl font-normal font-['Utendo'] leading-normal">
          Credit Card;
        </div>
        <div class="self-stretch text-[#b1b1b1] text-2xl font-normal font-['Utendo'] leading-normal">
          Debit; and
        </div>
        <div class="self-stretch text-[#b1b1b1] text-2xl font-normal font-['Utendo'] leading-normal">
          Crypto
        </div>
        <div class="self-stretchh-full text-[#b1b1b1] text-2xl font-normal font-['Utendo'] leading-normal">
          When you provide us with your payment information, you authorise our
          use of and access to the payment instrument you have chosen to use. By
          providing us with your payment information, you authorise us to charge
          the amount due to this payment instrument.
        </div>
        <div class="self-stretch h-full text-[#b1b1b1] text-2xl font-normal font-['Utendo'] leading-normal">
          If we believe your payment has violated any law or these Terms and
          Conditions, we reserve the right to cancel or reverse your
          transaction.
        </div>
        <div class="self-stretch h-9 text-white text-2xl font-semibold font-['Utendo'] leading-[30px]">
          Consumer Protection Law
        </div>
        <div class="self-stretch h-full text-[#b1b1b1] text-2xl font-normal font-['Utendo'] leading-normal">
          Where the Australian Consumer Law, Schedule 2 of the Competition and
          Consumer Act 2010, or any other consumer protection legislation in
          your jurisdiction applies and cannot be excluded, these Terms and
          Conditions will not limit your legal rights and remedies under that
          legislation. These Terms and Conditions will be read subject to the
          mandatory provisions of that legislation. If there is a conflict
          between these Terms and Conditions and that legislation, the mandatory
          provisions of the legislation will apply.
        </div>
        <div class="self-stretch h-9 text-white text-2xl font-semibold font-['Utendo'] leading-[30px]">
          Limitation of Liability
        </div>
        <div class="self-stretch h-[63px] text-[#b1b1b1] text-2xl font-normal font-['Utendo'] leading-normal">
          Phills & Zewde Enterprise Pty LTD and our directors, officers, agents,
          employees, subsidiaries, and affiliates will not be liable for any
          actions, claims, losses, damages, liabilities and expenses including
          legal fees from your use of the Site.
        </div>
        <div class="self-stretch h-9 text-white text-2xl font-semibold font-['Utendo'] leading-[30px]">
          Indemnity
        </div>
        <div class="self-stretchh-full text-[#b1b1b1] text-2xl font-normal font-['Utendo'] leading-normal">
          Except where prohibited by law, by using this Site you indemnify and
          hold harmless Phills & Zewde Enterprise Pty LTD and our directors,
          officers, agents, employees, subsidiaries, and affiliates from any
          actions, claims, losses, damages, liabilities and expenses including
          legal fees arising out of your use of our Site or your violation of
          these Terms and Conditions.
        </div>
        <div class="self-stretch h-9 text-white text-2xl font-semibold font-['Utendo'] leading-[30px]">
          Applicable Law
        </div>
        <div class="self-stretch h-full text-[#b1b1b1] text-2xl font-normal font-['Utendo'] leading-normal">
          These Terms and Conditions are governed by the laws of the State of
          Queensland
        </div>
        <div class="self-stretch h-9 text-white text-2xl font-semibold font-['Utendo'] leading-[30px]">
          Severability
        </div>
        <div class="self-stretch h-full text-[#b1b1b1] text-2xl font-normal font-['Utendo'] leading-normal">
          These Terms and Conditions are governed by the laws of the State of
          Queensland
        </div>
        <div class="self-stretch h-full text-[#b1b1b1] text-2xl font-normal font-['Utendo'] leading-normal">
          If at any time any of the provisions set forth in these Terms and
          Conditions are found to be inconsistent or invalid under applicable
          laws, those provisions will be deemed void and will be removed from
          these Terms and Conditions. All other provisions will not be affected
          by the removal and the rest of these Terms and Conditions will still
          be considered valid.
        </div>
        <div class="self-stretch text-white text-2xl font-semibold font-['Utendo'] leading-[30px]">
          Changes
        </div>
        <div class="self-stretch h-full text-[#b1b1b1] text-2xl font-normal font-['Utendo'] leading-normal">
          If at any time any of the provisions set forth in these Terms and
          Conditions are found to be inconsistent or invalid under applicable
          laws, those provisions will be deemed void and will be removed from
          these Terms and Conditions. All other provisions will not be affected
          by the removal and the rest of these Terms and Conditions will still
          be considered valid.
        </div>
        <div class="self-stretch text-white text-2xl font-semibold font-['Utendo'] leading-[30px]">
          Contact Details
        </div>
        <div class="self-stretch h-full text-[#b1b1b1] text-2xl font-normal font-['Utendo'] leading-normal">
          Please contact us if you have any questions or concerns. Our contact
          details are as follows:
        </div>
        <div class="self-stretch h-full text-[#b1b1b1] text-2xl font-normal font-['Utendo'] leading-normal">
          support@bottradex.com <br />
          Level 19, 10 Eagle Street, Brisbane City, QLD 4000 <br />
        </div>
        <div class="self-stretch h-full text-[#b1b1b1] text-2xl font-normal font-['Utendo'] leading-normal">
          You can also contact us through the feedback form available on our
          Site.
        </div>
        <div class="self-stretch h-full text-[#b1b1b1] text-2xl font-normal font-['Utendo'] leading-normal">
          Effective Date: 1st day of August, 2024
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
