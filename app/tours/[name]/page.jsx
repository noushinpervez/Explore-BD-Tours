"use client";

import HeaderCarousel from "@/components/TourDetails/HeaderCarousel";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaRegCircle, FaRegClock, FaStar, FaTimesCircle } from "react-icons/fa";
import { PiFootprints } from "react-icons/pi";
import { HiLanguage, HiOutlineUsers } from "react-icons/hi2";
import { FaCircleCheck } from "react-icons/fa6";
import { SlTag } from "react-icons/sl";
import TourMap from "@/components/TourDetails/TourMap";

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
        <div className="col-span-8 lg:mb-0 mb-16">
          {/* Tour Title */ }
          <h1 className="text-3xl font-bold mb-2">{ tour.name }</h1>

          {/* Tour Rating */ }
          <p className="flex items-center gap-1.5 text-link">
            <FaStar className="text-yellow-400" />
            <span className="font-bold text-foreground">{ tour.stars }</span>
            ({ tour.reviews } Reviews)
          </p>

          {/* Tour Info */ }
          <div className="mt-12 mb-8 text-link grid grid-cols-2 md:grid-cols-4 gap-3">
            {/* Duration */ }
            <div className="flex items-center gap-4">
              <FaRegClock className="border border-border rounded-xl p-3 w-12 h-12" />
              <div>
                <p className="font-bold text-foreground">Duration</p>
                <p>{ tour.duration }</p>
              </div>
            </div>

            {/* Tour Type */ }
            <div className="flex items-center gap-4">
              <PiFootprints className="border border-border rounded-xl p-3 w-12 h-12" />
              <div>
                <p className="font-bold text-foreground">Tour Type</p>
                <p>{ tour.tourType }</p>
              </div>
            </div>

            {/* Group Size */ }
            <div className="flex items-center gap-4">
              <HiOutlineUsers className="border border-border rounded-xl p-3 w-12 h-12" />
              <div>
                <p className="font-bold text-foreground">Group Size</p>
                <p>{ tour.groupSize }</p>
              </div>
            </div>

            {/* Languages */ }
            <div className="flex items-center gap-4">
              <HiLanguage className="border border-border rounded-xl p-3 w-12 h-12" />
              <div>
                <p className="font-bold text-foreground">Languages</p>
                {/* Mapping over languages array */ }
                <p>{ tour.languages.join(", ") }</p>
              </div>
            </div>
          </div>

          {/* Divider */ }
          <hr className="border-1 border-border my-10 w-full" />

          {/* About this Tour Section */ }
          <h2 className="mb-2 font-bold text-4xl">About this Tour</h2>
          <p className="text-link">{ tour.aboutTour }</p>

          {/* Tour Highlights */ }
          <h2 className="mb-2 font-bold mt-8 text-3xl uppercase">Highlights</h2>
          <ul className="text-link mb-4 mt-8 pl-5 text-sm">
            {/* Map over the highlights array */ }
            { tour.highlights && tour.highlights.map((highlight, index) => (
              <li key={ index } className="flex items-start mb-5">
                {/* FaRegCircle icon as the bullet */ }
                <FaRegCircle className="mt-1 mr-3 p-[2.5px] text-[#5191FA]" />
                <span>{ highlight }</span>
              </li>
            )) }
          </ul>

          {/* Divider */ }
          <hr className="border-1 border-border my-10 w-full" />

          {/* Included/Excluded */ }
          <h2 className="mb-2 font-bold mt-8 text-3xl">Included/Excluded</h2>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <ul className="text-link mb-4 mt-8">
              {/* Map over the included array */ }
              { tour.included && tour.included.map((include, index) => (
                <li key={ index } className="flex items-start mb-5">
                  {/* FaCircleCheck icon as the bullet */ }
                  <FaCircleCheck className="mt-0.5 mr-3 w-5 h-5 text-[#cef2e5] bg-[#10ac58] rounded-full" />
                  <span>{ include }</span>
                </li>
              )) }
            </ul>

            <ul className="text-link my-4">
              {/* Map over the excluded array */ }
              { tour.excluded && tour.excluded.map((exclude, index) => (
                <li key={ index } className="flex items-start mb-5">
                  {/* FaTimesCircle icon as the bullet */ }
                  <FaTimesCircle className="mt-0.5 mr-3 w-5 h-5 text-[#fad6d6] bg-[#da3838] rounded-full" />
                  <span>{ exclude }</span>
                </li>
              )) }
            </ul>
          </div>

          {/* Divider */ }
          <hr className="border-1 border-border my-10 w-full" />

          {/* Languages */ }
          <h2 className="mb-2 font-bold mt-8 text-3xl">Languages</h2>
          <ul className="mb-4 mt-8 grid grid-cols-2 md:grid-cols-3">
            {/* Map over the languages array */ }
            { tour.languages && tour.languages.map((language, index) => (
              <li key={ index } className="flex items-start mb-5">
                {/* SlTag icon as the bullet */ }
                <SlTag className="mt-0.5 mr-3 w-5 h-5" />
                <span>{ language }</span>
              </li>
            )) }
          </ul>

          {/* Divider */ }
          <hr className="border-1 border-border my-10 w-full" />
          {/* Location */ }
          <h2 className="mb-2 font-bold mt-8 text-3xl">Tour&#39;s Location</h2>
          <TourMap location={ tour.location } />

          {/* Reviews */ }
          <h2 className="mb-2 font-bold mt-10 text-3xl">Reviews</h2>
          <div className="bg-bgCard border border-border mt-5 p-16 mb-24 rounded-3xl text-center">
            <h2 className="text-3xl font-bold text-[#3B71FE] flex items-center justify-center gap-2"><FaStar className="text-yellow-400 w-6 h-6" />{ tour.stars }/5</h2>
            <h4 className="my-2 font-bold text-2xl">Excellent</h4>
            <p className="text-link">({ tour.reviews } reviews)</p>
          </div>
        </div>

        {/* Sidebar */ }
        <aside className="space-y-8 col-span-4">
        </aside>
      </div>
    </section>
  );
};

export default TourDetails;