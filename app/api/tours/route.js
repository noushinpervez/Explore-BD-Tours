export const GET = async (request) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN || 'https://explore-bd-tours.vercel.app'}/tours.json`, {
      headers: {
        'Cache-Control': 'no-cache',
      },
    });

    if (!res.ok) {
      console.error(`Failed to fetch data: ${res.statusText}`);
      return new Response('Failed to fetch data', { status: res.status });
    }

    const tours = await res.json();
    return new Response(JSON.stringify(tours), { status: 200 });
  } catch (error) {
    console.error('Error fetching tours:', error);
    return new Response('Error fetching tours', { status: 500 });
  }
};