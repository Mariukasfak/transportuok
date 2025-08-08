// Netlify Function: google-reviews
// Fetch Google Place details (reviews) server-side to avoid CSP issues and client eval.

exports.handler = async (event) => {
    const jsonHeaders = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    };

    try {
        // Support both POST (JSON body) and GET (?placeId=...)
        const method = event.httpMethod || 'GET';
        let placeId = '';
        if (method === 'POST') {
            try {
                const body = JSON.parse(event.body || '{}');
                placeId = body.placeId || '';
            } catch (e) {
                return { statusCode: 400, headers: jsonHeaders, body: JSON.stringify({ error: 'Invalid JSON body' }) };
            }
        } else {
            placeId = (event.queryStringParameters && event.queryStringParameters.placeId) || '';
        }

        const apiKey = process.env.GOOGLE_MAPS_API_KEY;

        if (!apiKey) {
            // Return 200 with empty data so clients can gracefully fall back
            return {
                statusCode: 200,
                headers: jsonHeaders,
                body: JSON.stringify({ reviews: [], rating: 0, user_ratings_total: 0, note: 'GOOGLE_MAPS_API_KEY not configured' })
            };
        }
        if (!placeId) {
            return { statusCode: 400, headers: jsonHeaders, body: JSON.stringify({ error: 'Missing placeId' }) };
        }

        const fields = 'rating,user_ratings_total,reviews';
        const params = new URLSearchParams({
            place_id: placeId,
            fields,
            language: 'lt',
            key: apiKey,
            // Prefer newest reviews
            reviews_sort: 'newest',
            // Keep translations on so content is localized if available
            reviews_no_translations: 'false',
        });

        const url = `https://maps.googleapis.com/maps/api/place/details/json?${params.toString()}`;

        const res = await fetch(url);
        if (!res.ok) {
            console.error('Places API HTTP error', res.status, res.statusText);
            return { statusCode: 502, headers: jsonHeaders, body: JSON.stringify({ error: 'Places API HTTP error', status: res.status }) };
        }
        const data = await res.json();

        if (data.status !== 'OK') {
            // Common statuses: ZERO_RESULTS, OVER_QUERY_LIMIT, REQUEST_DENIED, INVALID_REQUEST
            console.warn('Places API non-OK status', data.status, data.error_message);
            return {
                statusCode: 200,
                headers: jsonHeaders,
                body: JSON.stringify({ reviews: [], rating: 0, user_ratings_total: 0, status: data.status, error_message: data.error_message || null })
            };
        }

        const { result } = data;
        return {
            statusCode: 200,
            headers: jsonHeaders,
            body: JSON.stringify({
                reviews: result.reviews || [],
                rating: result.rating || 0,
                user_ratings_total: result.user_ratings_total || 0,
            })
        };
    } catch (err) {
        console.error('Server error in google-reviews function', err);
        return { statusCode: 500, headers: jsonHeaders, body: JSON.stringify({ error: 'Server error', message: err.message }) };
    }
};
