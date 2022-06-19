import {
    useAnchorWallet,
    useConnection,
} from '@solana/wallet-adapter-react';
import {
    WalletModalProvider,
    WalletMultiButton,
} from '@solana/wallet-adapter-react-ui';

function MyWallet() {
    const { connection } = useConnection();

    return (
            <div className="m-auto pl-4 max-w-4xl">
                <span className="button-wrapper">
                    <WalletModalProvider>
                        <WalletMultiButton />
                    </WalletModalProvider>
                </span>
            </div>

    );
};

export default MyWallet;
