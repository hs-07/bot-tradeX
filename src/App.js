import React from "react";
import { Navbar } from "./components";
import { Route, Routes } from "react-router-dom";
import { LandingPage, About, TermsAndConditions, PrivacyPolicy } from "./pages";

const App = () => {
  return (
    <div className="w-full bg-white flex justify-center">
      <div className="max-w-[1600px] w-full">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/cookiePolicy" element={<CookiePolicy />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
          {/* <Route path="/comingSoon" element={<ComingSoon />} /> */}
          <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/termsAndConditions" element={<TermsAndConditions />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
