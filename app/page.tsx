export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Universal Crypto Asset Token (UCAT)</h1>
        <h2 className="text-2xl font-semibold mb-4">Simple Summary</h2>
        <p className="mb-6">A standard interface for cross chain non-fungible tokens (NFT).</p>
        
        <h2 className="text-2xl font-semibold mb-4">Abstract</h2>
        <p className="mb-6">
          The following standard allows the implementation of a standard API for NFTs within EOS/IOST/ETH smart contracts. 
          This standard provides basic functionality to track and transfer NFTs.
        </p>
        
        <h2 className="text-2xl font-semibold mb-4">Features</h2>
        <ul className="list-disc list-inside mb-6">
          <li>NFTs can represent ownership over digital assets</li>
          <li>Cross-chain support for EOS, IOST, and ETH blockchains</li>
          <li>Standard interface for wallet/broker/auction applications</li>
          <li>UCAT V2 support for NFT level and stacked assets</li>
        </ul>
        
        <h2 className="text-2xl font-semibold mb-4">Motivation</h2>
        <p className="mb-6">
          A standard interface allows wallet/broker/auction applications to work with any NFT on EOS/IOST/ETH blockchain. 
          Simple smart contracts are provided for each platform.
        </p>
        
        <div className="mt-8 p-4 bg-gray-100 rounded">
          <h3 className="text-xl font-semibold mb-2">Supported Blockchains</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-white rounded shadow">
              <h4 className="font-bold">EOS</h4>
              <p className="text-sm">Smart contract implementation available</p>
            </div>
            <div className="p-4 bg-white rounded shadow">
              <h4 className="font-bold">IOST</h4>
              <p className="text-sm">Smart contract implementation available</p>
            </div>
            <div className="p-4 bg-white rounded shadow">
              <h4 className="font-bold">ETH</h4>
              <p className="text-sm">Smart contract implementation available</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
