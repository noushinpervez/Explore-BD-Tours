// GET /api/tours/:name
export const GET = async (request, { params }) => {
  const { name } = params; // Destructure the name parameter from params
  try {
    const res = await fetch("https://explore-bd-tours.vercel.app/tours.json", {
      headers: {
        "Cache-Control": "no-cache",
      },
    });

    if (!res.ok) {
      console.error(`Failed to fetch data: ${res.statusText}`);
      return new Response("Failed to fetch data", { status: res.status });
    }

    const tours = await res.json();

    // Filter the tour based on the name parameter if it exists
    const filteredTours = name ? tours.filter(tour => tour.name.toLowerCase() === name.toLowerCase()) : tours;

    // Return the filtered tour
    return new Response(JSON.stringify(filteredTours[0]), { status: 200 });
  } catch (error) {
    console.error("Error fetching tours:", error);
    return new Response("Error fetching tours", { status: 500 });
  }
};