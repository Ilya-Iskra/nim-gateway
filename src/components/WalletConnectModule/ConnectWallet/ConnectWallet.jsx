import { useAccount, useReadContract } from "wagmi";
import { ChainIcon, Avatar } from "connectkit";
import { formatUnits } from "viem";
import WalletConnectLogo from "/src/assets/walletConnectLogo.svg?react";
import AGIXLogo from "/src/assets/agix.svg?react";
import abi from "/src/chains/abi";
import "./ConnectWallet.css";

function ButtonInner({ isConnected, address, truncatedAddress, chain }) {
  const { address: userAddress } = useAccount();

  const { data: balance } = useReadContract({
    abi,
    address: "0xf703b9aB8931B6590CFc95183be4fEf278732016",
    functionName: "balanceOf",
    args: [userAddress],
  });

  const hasBalance = typeof balance === "bigint";

  if (!isConnected)
    return (
      <span className="connect-wallet__not-connected">
        <span className="connect-wallet__not-connected-text">
          Connect wallet
        </span>
        <WalletConnectLogo className="connect-wallet__not-connected-icon" />
      </span>
    );
  else
    return (
      <span className="connect-wallet__connected">
        <span className="connect-wallet__connected-address">
          <Avatar address={address} size={24} />{" "}
          <span className="connect-wallet__connected-text">
            {truncatedAddress}
          </span>
        </span>
        <span
          className={`connect-wallet__connected-balance ${
            hasBalance && "connect-wallet__connected-balance--loaded"
          }`}
        >
          <span className="connect-wallet__connected-balance-text">
            {hasBalance && formatUnits(balance, 8)}
          </span>
          <div className="connect-wallet__connected-icons">
            <AGIXLogo className="connect-wallet__connected-currency-icon" />
            <ChainIcon id={chain.id} size={12} />
          </div>
        </span>
      </span>
    );
}

export default function ConnectWallet({
  isConnected,
  isPending,
  isConfirming,
  isConfirmed,
  address,
  truncatedAddress,
  chain,
  onClick,
}) {
  return (
    <button
      className="nim-button-1 connect-wallet"
      disabled={isPending || isConfirming || isConfirmed}
      onClick={onClick}
    >
      <ButtonInner
        isConnected={isConnected}
        address={address}
        truncatedAddress={truncatedAddress}
        chain={chain}
      />
    </button>
  );
}
