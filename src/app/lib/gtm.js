export const sendGTMEvent = ({ event, conversion_label, value, currency = 'BRL' }) => {
    if (typeof window !== 'undefined') {
        window.dataLayer = window.dataLayer || []
        window.dataLayer.push({
            event,
            conversion_label,
            value,
            currency,
        })
    }
}