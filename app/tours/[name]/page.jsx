import TourDetails from "@/components/TourDetails/TourDetails";

// Fetch tour data and generate dynamic metadata
export async function generateMetadata({ params }) {
  const res = await fetch(`https://explore-bd-tours.vercel.app/api/tours/${params.name}`);
  const tour = await res.json();

  return {
    title: `${tour.name} - Explore BD Tours`,
    description: `Explore ${tour.name} and find the best tours in Bangladesh.`,
  };
}

const Page = async ({ params }) => {
  // Fetch tour data for the server component
  const res = await fetch(`https://explore-bd-tours.vercel.app/api/tours/${params.name}`);
  const tour = await res.json();

  if (!tour) {
    return (
      <div className="min-h-[90vh] flex items-center justify-center text-center">
        <p className="text-link text-2xl font-medium">Tour Not Found</p>
      </div>
    );
  }

  return <TourDetails tour={ tour } />;
};

export default Page;