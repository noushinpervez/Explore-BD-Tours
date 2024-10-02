import TourCard from "./TourCard";

const Tours = async () => {
  // Fetch data
  const res = await fetch("https://explore-bd-tours.vercel.app/api/tours");

  if (!res.ok) {
    console.error("Failed to fetch tours data");
    return (
      <p className="text-center text-link font-bold px-12 py-12">No tours available at the moment.</p>
    );
  }

  const tours = await res.json();

  return (
    <section className="bg-background py-20">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="font-bold text-4xl mb-12 text-center">Get inspired for your next trip</h2>

        {/* Conditional rendering based on tours data availability */ }
        { tours.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            { tours.map((tour) => (
              <TourCard key={ tour.id } tour={ tour } />
            )) }
          </div>
        ) : (
          <p className="text-center text-link font-bold px-12 py-12">No tours available at the moment.</p>
        ) }
      </div>
    </section>
  );
};

export default Tours;