'use client'
import { useState, useRef, useEffect } from 'react'
import styles from './page.module.css'


const GOOGLE_MAPS_URL =
    'https://www.google.com/maps/search/?api=1&query=RT+Polimento+Tecnico+Delivery+São+Paulo'

const SCROLL_AMOUNT = 296 // card width 280 + gap 16

function Stars({ rating }) {
    return (
        <div className={styles.stars}>
            {[1, 2, 3, 4, 5].map((i) => (
                <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill={i <= rating ? '#FFC107' : '#444'}>
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
            ))}
        </div>
    )
}

function Avatar({ name, photoUrl }) {
    if (photoUrl) {
        return <img src={photoUrl} alt={name} className={styles.avatarImg} />
    }
    return <div className={styles.avatarFallback}>{name.charAt(0).toUpperCase()}</div>
}

function ReviewCard({ review }) {
    const [expanded, setExpanded] = useState(false)
    const MAX_LEN = 140
    const isLong = review.text && review.text.length > MAX_LEN
    const displayText = expanded || !isLong ? review.text : review.text.slice(0, MAX_LEN) + '...'

    return (
        <div className={styles.card}>
            <div className={styles.cardHead}>
                <div className={styles.author}>
                    <Avatar name={review.author_name} photoUrl={review.profile_photo_url} />
                    <div>
                        <p className={styles.authorName}>{review.author_name}</p>
                        <p className={styles.authorTime}>{review.relative_time_description}</p>
                    </div>
                </div>
                <svg width="18" height="18" viewBox="0 0 24 24" className={styles.googleIcon}>
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
            </div>

            <Stars rating={review.rating} />

            <p className={styles.text}>
                {displayText}
                {isLong && (
                    <button onClick={() => setExpanded((e) => !e)} className={styles.expandBtn}>
                        {expanded ? ' ver menos' : ' ver mais'}
                    </button>
                )}
            </p>
        </div>
    )
}

function ArrowButton({ direction, onClick }) {
    return (
        <button
            onClick={onClick}
            aria-label={direction === 'left' ? 'Anterior' : 'Próximo'}
            className={`${styles.arrow} ${direction === 'left' ? styles.arrowLeft : styles.arrowRight}`}
        >
            {direction === 'left' ? '‹' : '›'}
        </button>
    )
}

export default function ReviewsCarousel() {
    const [reviews, setReviews] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const scrollRef = useRef(null)

    useEffect(() => {
        fetch('/api/get_reviews')
            .then((r) => {
                if (!r.ok) throw new Error()
                return r.json()
            })
            .then((data) => {
                setReviews(data.reviews || [])
                setLoading(false)
            })
            .catch(() => {
                setError(true)
                setLoading(false)
            })
    }, [])

    const scroll = (dir) => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: dir * SCROLL_AMOUNT, behavior: 'smooth' })
        }
    }

    return (
        <section className={styles.section}>


            {loading && <p className={styles.statusMsg}>Carregando avaliações...</p>}

            {error && (
                <p className={styles.statusMsg}>
                    Não foi possível carregar as avaliações.{' '}
                    <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer" className={styles.errorLink}>
                        Ver no Google
                    </a>
                </p>
            )}

            {!loading && !error && reviews.length > 0 && (
                <div className={styles.wrapper}>
                    <ArrowButton direction="left" onClick={() => scroll(-1)} />

                    <div ref={scrollRef} className={styles.track}>
                        {reviews.map((review, i) => (
                            <div key={i} className={styles.trackItem}>
                                <ReviewCard review={review} />
                            </div>
                        ))}
                    </div>

                    <ArrowButton direction="right" onClick={() => scroll(1)} />
                </div>
            )}

            <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer" className={styles.cta}>
                Ver todas as avaliações no Google
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                </svg>
            </a>
        </section>
    )
}