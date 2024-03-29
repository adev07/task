import React from 'react'

const SupplyLabel = ({ color, text, percent, value }) => {
    return (
        <div>
            <p className={`supply_label ${color}`}>
                <span className={`hyphen ${color}`}></span>
                <span className="text">{text}</span>
                <span className={`percent ${color}`}>{percent}%</span>
            </p>
            <p className="supply_value">
                <AppIcon
                    size={1.25}
                    url={`/images/token/${walletChain?.nativeCurrency?.symbol}.svg`}
                    fill={IconFilter.unset}
                    margin={0}
                />
                {numberWithCommas(value)}
            </p>
        </div>
    );
}

export default SupplyLabel