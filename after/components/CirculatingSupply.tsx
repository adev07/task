import React from 'react'

const CirculatingSupply = ({ chainId, circulatingSupply }) => {
    return (
        <p key={chainId} className="supply_value mini">
            <AppIcon
                size={1.25}
                url={`/images/token/${chainTokenSymbols.get(chainId) ?? "ETH"
                    }.svg`}
                fill={IconFilter.unset}
                margin={0}
            />
            {numberWithCommas(circulatingSupply)}
        </p>
    );
}

export default CirculatingSupply