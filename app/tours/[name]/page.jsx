"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

import HeaderCarousel from "@/components/TourDetails/HeaderCarousel";
import Details from "@/components/TourDetails/Details";
import Book from "@/components/TourDetails/Book";

const TourDetails = () => {
  const { name } = useParams(); // Get the tour name from the URL params
  const [tour, setTour] = useState(null); // Tour data state
  const [loading, setLoading] = useState(true); // Loading state

  // Fetch tour data based on the name
  useEffect(() => {
    const fetchTourData = async () => {
      if (!name) {
        setLoading(false); // If no name is provided, stop loading
        return;
      }

      try {
        const res = await fetch(`https://explore-bd-tours.vercel.app/api/tours/${name}`);

        if (!res.ok) {
          throw new Error("Tour not found"); // Handle error when tour is not found
        }

        const data = await res.json();
        setTour(data); // Set the fetched tour data to the state
      } catch (error) {
        console.error("Failed to fetch tour data:", error);
        setTour(null); // Set tour data to null on error
      } finally {
        setLoading(false); // Set loading to false once the request is done
      }
    };

    fetchTourData();
  }, [name]);

  // Show loading screen if data is still being fetched
  if (loading) {
    return (
      <div className="min-h-[90vh] flex items-center justify-center">
        <p className="text-link text-2xl font-medium">Loading...</p>
      </div>
    );
  }

  // Show "Tour Not Found" if no data was fetched
  if (!tour) {
    return (
      <div className="min-h-[90vh] flex items-center justify-center text-center">
        <p className="text-link text-2xl font-medium">Tour Not Found</p>
      </div>
    );
  }

  return (
    <section>
      {/* Header Carousel for images */ }
      <HeaderCarousel images={ tour.images } />

      <div className="max-w-screen-xl mx-auto px-2 lg:grid grid-cols-12 w-full">
        {/* Tour Details */ }
        <Details tour={ tour } />

        {/* Sidebar */ }
        <aside className="space-y-8 col-span-4 lg:sticky lg:top-0 md:h-screen">
          <Book />
        </aside>
      </div>
    </section>
  );
};

export default TourDetails;