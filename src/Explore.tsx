import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Explore() {
    const { feed } = useParams<{ feed?: string }>()
    const [data, setData] = useState<any[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        if (!feed) return
        setLoading(true)
        setError(null)

        fetch(`https://api.sampleapis.com/wines/${encodeURIComponent(feed)}`)
            .then((res) => {
                if (!res.ok) throw new Error('Network response was not ok')
                return res.json()
            })
            .then((json) => setData(json)) // <-- set as array/object, not string
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false))
    }, [feed])

    return (
        <div>
            <h2>Explore {feed}</h2>
            {loading && <p>Loading...</p>}
            {error && <p style={{ color: 'red' }}>Error: {error}</p>}
            {data
                .sort(
                    (a, b) =>
                        (b.rating?.average ?? 0) - (a.rating?.average ?? 0)
                )
                .map((item: any) => (
                    <div key={item.wine}>
                        <h3 className="p-5">Winery: {item.winery}</h3>
                        <p>Wine: {item.wine}</p>
                        <p>Rating: {item.rating?.average}</p>
                    </div>
                ))}
            {/* Optionally show raw data for debugging */}
            {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
        </div>
    )
}

export default Explore
