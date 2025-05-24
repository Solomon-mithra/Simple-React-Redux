import React, { useState } from 'react'

function withLoader(WrappedComponent: React.ComponentType) {
  return (props: any) => {
    const [loading, setLoading] = useState(true)

    setTimeout(() => {
      setLoading(false)
    }, 2000)

    return (
      <div>
        {loading ? <div>Loading...</div> : <WrappedComponent {...props} />}
      </div>
    )
  }
}

export default withLoader