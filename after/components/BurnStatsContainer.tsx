import React from 'react'

const BurnStatsContainer = ({ statsSupplies, suppliesChain, tokenAddress, allSupplies, walletChain }) => {
    return (
        <div className="top_bar">
          <AppIcon
            url="/images/token/App_new.svg"
            size={2}
            margin={0}
            fill={IconFilter.unset}
          />
          <p className="label">App SUPPLY</p>
          <AppChip
            onClick={openChainModal}
            title={walletChain?.name || "---"}
            endIcon={"/icons/expand_more.svg"}
            startIcon={`/images/token/${walletChain?.nativeCurrency?.symbol}.svg`}
          ></AppChip>
          <AppExtLink
            className=" supply_label"
            url={`${suppliesChain?.blockExplorers?.default?.url}/address/${tokenAddress}`}
          >
            View Contract
          </AppExtLink>
          {/* Supply Bar and Label List Components */}
        </div>
      );
}

export default BurnStatsContainer