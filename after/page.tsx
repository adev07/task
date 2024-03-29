import React from 'react';

// Importing components created 
import BurnPageHeader from './BurnPageHeader';
import BurnButtonBar from './BurnButtonBar';
import BurnStatsContainer from './BurnStatsContainer';
import TransactionTable from './TransactionTable';
import ChainSelector from './ChainSelector';
import AppToast from './AppToast';

export const BurnPage = () => {

    const burnButtonBarProps = {
        burnAmount,
        onChangeBurnAmount,
        executeBurn,
        txButton,
        txProgress,
        burnTxHash,
        walletChain,
    };

    const burnStatsContainerProps = {
        statsSupplies,
        suppliesChain,
        tokenAddress,
        allSupplies,
        walletChain,
    };


    return (
        <div>
            <DashboardLayoutStyled className="burnpage">
                <div className="top_conatiner burnpage" style={{ alignItems: "flex-start" }}>
                    <BurnPageHeader />
                    <BurnButtonBar />
                    <BurnStatsContainer />
                </div>
            </DashboardLayoutStyled>
            <TransactionTable />
            <ChainSelector />
            <AppToast />
        </div>
    );
};