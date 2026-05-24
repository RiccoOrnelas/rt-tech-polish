
const PLACE_ID = process.env.GOOGLE_PLACE_ID
const API_KEY = process.env.GOOGLE_PLACES_API_KEY

// Cache simples em memória (evita chamadas repetidas)
let cache = null
let cacheTime = 0
const CACHE_DURATION_MS = 1000 * 60 * 60 // 1 hora

// ── App Router (Next.js 13+) ──────────────────────────────────
export async function GET() {
    try {
        const now = Date.now()
        if (cache && now - cacheTime < CACHE_DURATION_MS) {
            return Response.json(cache)
        }

        const url = `https://places.googleapis.com/v1/places/${PLACE_ID}`
        const res = await fetch(url, {
            headers: {
                'X-Goog-Api-Key': API_KEY,
                'X-Goog-FieldMask': 'reviews,rating,userRatingCount',
            },
            // Revalidação do lado do servidor (Next.js cache)
            next: { revalidate: 3600 },
        })

        if (!res.ok) {
            return Response.json({ error: 'Falha ao buscar avaliações' }, { status: 502 })
        }

        const data = await res.json()

        // Mapeia para o formato esperado pelo componente
        const reviews = (data.reviews || []).map((r) => ({
            author_name: r.authorAttribution?.displayName || 'Anônimo',
            profile_photo_url: r.authorAttribution?.photoUri || null,
            rating: r.rating,
            text: r.text?.text || '',
            relative_time_description: r.relativePublishTimeDescription || '',
        }))

        const result = { reviews, rating: data.rating, total: data.userRatingCount }
        cache = result
        cacheTime = now

        return Response.json(result)
    } catch (err) {
        console.error('[/api/reviews]', err)
        return Response.json({ error: 'Erro interno' }, { status: 500 })
    }
}