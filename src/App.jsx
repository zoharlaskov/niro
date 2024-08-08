export default App;
import React from "react";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import VideoSection from "./components/VideoSection";
import MapSection from "./components/MapSection";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import DonationPage from "./components/DonationPage";
import CommentsSection from "./components/CommentsSection";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <HomePage />
        <VideoSection />
        <DonationPage />
        <MapSection />
        <CommentsSection />
        <ScrollToTop />
        <Footer />
      </div>
    </>
  );
}
