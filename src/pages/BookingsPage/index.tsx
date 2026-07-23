import React from "react";
import { useSearchParams } from "react-router-dom";
import BookingForm from "../../components/Bookings/BookingForm";
import bgImage from "../../assets/images/formPage/bgImg.jpg";

const BookingPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const preselectedService = searchParams.get("service") ?? "";

  return (
    <main
      className="min-h-screen w-full flex items-start justify-center px-4 py-24 sm:py-28 relative overflow-y-auto"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-[#06111f]/60" aria-hidden="true" />

      <div className="relative z-10 w-full max-w-lg bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl px-6 py-8 sm:px-10 sm:py-10 overflow-visible">
        <BookingForm preselectedService={preselectedService} />
      </div>
    </main>
  );
};

export default BookingPage;
