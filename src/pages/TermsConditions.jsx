import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="h-full bg-background flex flex-col gap-8 p-4 md:p-16 landing">
      <h2 className="text-white text-[24px] font-bold">Terms & Conditions</h2>

      <h2 className="text-white text-xl">BotTradeX Terms and Conditions</h2>

      <div className="flex gap-4 flex-col">
        <h2 className="text-white text-xl">1. Acceptance of Terms:</h2>
        <span className="text-white">
          By accessing www.bottradex.com you agree to be bound by these Terms
          and Conditions.
        </span>
      </div>
      <div className="flex gap-4 flex-col">
        <h2 className="text-white text-xl">2. Service Description:</h2>
        <span className="text-white">
          BotTradeX provides trading automation tools/softwares. We reserve the
          right to modify or discontinue services without notice.
        </span>
      </div>
      <div className="flex gap-4 flex-col">
        <h2 className="text-white text-xl">3. User Responsibilities :</h2>
        <span className="text-white">
          You are solely responsible for complying with all applicable laws and
          regulations. You understand that trading involves inherent risks and
          may result in financial loss.
        </span>
      </div>
      <div className="flex gap-4 flex-col">
        <h2 className="text-white text-xl">  4. Intellectual Property:</h2>
        <span className="text-white">
          All intellectual property rights related to BotTradeX belong to Phills
          & Zewde Enterprise Pty Limited ACN 670556957
        </span>
      </div>
      <div className="flex gap-4 flex-col">
        <h2 className="text-white text-xl">5. Disclaimer of Warranties:</h2>
        <span className="text-white">
          BotTradeX is provided "as is" without warranties of any kind. We
          disclaim all warranties, express or implied.
        </span>
      </div>
      <div className="flex gap-4 flex-col">
        <h2 className="text-white text-xl">6. Indemnification:</h2>
        <span className="text-white">
          You agree to indemnify and hold BotTradeX harmless from any claims
          arising from your use of our services.
        </span>
      </div>
      <div className="flex gap-4 flex-col">
        <h2 className="text-white text-xl"> 7. Data Privacy:</h2>
        <span className="text-white">
          Your privacy is important to us. Please refer to our Privacy Policy
          for details on how we collect, use, and protect your personal
          information.
        </span>
      </div>
      <div className="flex gap-4 flex-col">
        <h2 className="text-white text-xl"> 8. Entire Agreement:</h2>
        <span className="text-white">
          These Terms constitute the entire agreement between you and BotTradeX
        </span>
      </div>
    </div>
  );
};

export default TermsAndConditions;
