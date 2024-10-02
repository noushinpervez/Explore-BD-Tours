"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();

  return (
    <section className="bg-bgCard">
      <div className="min-h-[90vh] px-2 mx-auto flex flex-col-reverse md:flex-row items-center gap-12 justify-center max-w-screen-xl">

        {/* Text Section */ }
        <div className="w-full lg:w-1/2">
          <p className="text-sm font-medium text-primary">404 error</p>
          <h1 className="mt-3 text-2xl font-semibold md:text-3xl">Page not found</h1>
          <p className="mt-4 text-link">Sorry, the page you are looking for doesn't exist.</p>

          <div className="flex items-center mt-6 gap-x-3">
            {/* Go Back Button */ }
            <button
              className="flex items-center justify-center w-1/2 px-5 py-2 text-sm transition-colors duration-200 bg-bgColor border border-border rounded-full gap-x-2 sm:w-auto hover:bg-gray-200 font-bold"
              onClick={ () => router.back() }
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5 rtl:rotate-180">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
              </svg>
              <span>Go back</span>
            </button>

            {/* Home Link Button */ }
            <Link
              href="/"
              className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-primary font-bold rounded-full shrink-0 sm:w-auto hover:bg-secondary text-center"
            >
              Take me home
            </Link>
          </div>
        </div>

        {/* Image Section */ }
        <div className="relative w-full lg:w-1/2">
          <Image
            className="w-full lg:h-[32rem] h-80 md:h-96 rounded-3xl object-cover"
            src="https://images.unsplash.com/photo-1576359877473-d92bc837facc?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Beautiful Landscape"
            sizes="100vw"
            width={ 0 }
            height={ 0 }
          />
        </div>
      </div>
    </section>
  );
};

export default NotFound;