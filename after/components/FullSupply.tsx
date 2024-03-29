import React from 'react'

const FullSupply = ({ totalSupply }) => {
    return (
        <div className="full_supply">
          Original App Token Initial Supply: {numberWithCommas(totalSupply)}
        </div>
      );
}

export default FullSupply