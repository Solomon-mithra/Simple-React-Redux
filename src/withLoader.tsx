import React, { useState } from 'react'

function withLoader(WrappedComponent: React.ComponentType<any>) {
  return (props: any) => {
    const [loading, setLoading] = useState(true);

    return (
      <div>
        {loading && <div>Loading...</div>}
        <div style={{ display: loading ? 'none' : 'block' }}>
          <WrappedComponent setLoading={setLoading} loading={loading} {...props} />
        </div>
      </div>
    );
  };
}

export default withLoader