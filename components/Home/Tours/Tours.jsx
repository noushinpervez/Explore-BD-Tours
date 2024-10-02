import TourCard from './TourCard';

const Tours = async () => {
  const fetchTours = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN || 'http://localhost:3000'}/api/tours`, {
        headers: {
          'Cache-Control': 'no-cache',
        },
      });

      if (!res.ok) {
        console.error('Error fetching tours');
      }

      const data = await res.json();
      return data;
    } catch (error) {
      console.error('Error in fetchTours function:', error);
      return []; // Return an empty array if there's an error
    }
  };

  const tours = await fetchTours();

  return (
    <section className="bg-background py-20">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="font-bold text-4xl mb-8 text-center">Get inspired for your next trip</h2>

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