// Netlify Function: google-reviews
// Fetch Google Place details (reviews) server-side to avoid CSP issues and client eval.

exports.handler = async (event) => {
    try {
        const { placeId } = JSON.parse(event.body || '{}');
        const apiKey = process.env.GOOGLE_MAPS_API_KEY;

        if (!apiKey) {
            return { statusCode: 500, body: JSON.stringify({ error: 'Missing GOOGLE_MAPS_API_KEY' }) };
        }
        if (!placeId) {
            return { statusCode: 400, body: JSON.stringify({ error: 'Missing placeId' }) };
        }

        const fields = 'rating,user_ratings_total,reviews';
        const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${encodeURIComponent(placeId)}&fields=${fields}&language=lt&key=${apiKey}`;

        const res = await fetch(url);
        const data = await res.json();

        if (data.status !== 'OK') {
            return { statusCode: 502, body: JSON.stringify({ error: 'Places API error', status: data.status, details: data.error_message }) };
        }

        const { result } = data;
        return {
            statusCode: 200,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                reviews: result.reviews || [],
                rating: result.rating || 0,
                user_ratings_total: result.user_ratings_total || 0,
            })
        };
    } catch (err) {
        return { statusCode: 500, body: JSON.stringify({ error: 'Server error', message: err.message }) };
    }
};
