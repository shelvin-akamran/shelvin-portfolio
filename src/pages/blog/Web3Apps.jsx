import { Calendar, Clock, ArrowLeft, Share2, Twitter, Linkedin, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';
import SayHello from '../../components/SayHello';
import CTASection from '../../components/CTASection';

const Web3Apps = () => {
  return (
    <>
      <div className="min-h-screen bg-background text-white pt-24">
        {/* Breadcrumb */}
        <section className="py-6 px-6 border-b border-text-tertiary/10">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-sm text-text-tertiary">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link to="/blog" className="hover:text-white transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-white">Web3 Real-World Apps</span>
            </div>
          </div>
        </section>

        {/* Article */}
        <article className="py-12 px-6">
          <div className="max-w-4xl mx-auto">
            <Link to="/blog" className="inline-flex items-center gap-2 text-text-secondary hover:text-white transition-colors mb-8">
              <ArrowLeft size={18} />
              Back to Blog
            </Link>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light serif-heading mb-6 leading-tight">
              Building Real-World Web3 Apps: Lessons from the Trenches
            </h1>

            <div className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b border-text-tertiary/10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-purple-400 flex items-center justify-center font-bold text-white">SA</div>
                <div>
                  <div className="font-semibold">Shelvin Akamuran</div>
                  <div className="text-sm text-text-tertiary">Full-Stack Developer</div>
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm text-text-tertiary">
                <div className="flex items-center gap-2"><Calendar size={16} />December 28, 2025</div>
                <div className="flex items-center gap-2"><Clock size={16} />15 min read</div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden mb-12">
              <div className="w-full aspect-video bg-gradient-to-br from-purple-400/20 via-blue-400/20 to-cyan-400/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">⛓️</div>
                  <p className="text-text-tertiary">Web3 Development</p>
                </div>
              </div>
            </div>

            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-text-secondary leading-relaxed mb-6">
                Six months ago, I shipped my first production Web3 application for a legal tech startup. We built a document verification system using Ethereum smart contracts. It was messy, expensive, and taught me more about blockchain than any tutorial ever could. Here's what I learned building real Web3 apps.
              </p>

              <h2 className="text-3xl font-light serif-heading mt-12 mb-6">The Reality Check</h2>
              
              <p className="text-text-secondary leading-relaxed mb-6">
                Let's get this out of the way: Web3 development is HARD. Not "learning a new framework" hard. More like "rethinking everything you know about web development" hard. State is immutable. There's no undo button. Every mistake costs real money. And users will judge you harshly if your transaction fees are too high.
              </p>

              <p className="text-text-secondary leading-relaxed mb-6">
                But it's also incredibly rewarding when you build something that genuinely solves a problem using blockchain's unique properties.
              </p>

              <h2 className="text-3xl font-light serif-heading mt-12 mb-6">What We Built</h2>

              <p className="text-text-secondary leading-relaxed mb-6">
                Our legal tech platform needed a way to prove that documents were notarized at a specific time without relying on a central authority. Perfect use case for blockchain, right?
              </p>

              <div className="glass rounded-xl p-6 mb-6">
                <h3 className="text-xl font-semibold mb-4">The Tech Stack</h3>
                <ul className="space-y-2 text-text-secondary">
                  <li><strong>Smart Contracts:</strong> Solidity on Ethereum (later moved to Polygon)</li>
                  <li><strong>Frontend:</strong> Next.js + ethers.js</li>
                  <li><strong>Wallet:</strong> MetaMask integration</li>
                  <li><strong>Storage:</strong> IPFS for document hashes</li>
                  <li><strong>Backend:</strong> Node.js for off-chain data</li>
                </ul>
              </div>

              <h2 className="text-3xl font-light serif-heading mt-12 mb-6">Lessons I Learned the Hard Way</h2>

              <h3 className="text-2xl font-semibold mt-8 mb-4">1. Gas Fees Will Surprise You</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Our first deployment cost $200 in gas fees. ONE deployment. On mainnet. At 2 AM when I thought gas was cheap. I nearly cried. That's when I learned about testnets, Hardhat, and local development. Always test on Goerli or Sepolia first. Always.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">2. Smart Contract Security is No Joke</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                One missing modifier. That's all it took for our contract to be vulnerable to reentrancy attacks. Thank god we caught it in audit. Learn about common vulnerabilities: reentrancy, integer overflow, front-running. Use OpenZeppelin's audited contracts whenever possible.
              </p>

              <div className="glass rounded-xl p-6 mb-6 border-l-4 border-red-400">
                <p className="text-sm font-semibold mb-2 text-red-400">Security First!</p>
                <p className="text-sm text-text-secondary">Never deploy without:</p>
                <ul className="text-sm text-text-secondary mt-2 space-y-1">
                  <li>✓ Security audit (even informal)</li>
                  <li>✓ Comprehensive test coverage</li>
                  <li>✓ Slither static analysis</li>
                  <li>✓ Testnet deployment first</li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold mt-8 mb-4">3. User Experience is Terrible (and You Need to Fix It)</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                "Connect your wallet." "Sign this message." "Approve this transaction." "Wait for 15 confirmations." Users HATE this. We spent weeks making the UX bearable. Loading states for blockchain operations, clear error messages, transaction status updates. It's still not perfect, but it's usable.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">4. Not Everything Belongs on the Blockchain</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We made this mistake early. Storing full document metadata on-chain? Expensive and slow. Solution: Store only the hash on-chain, keep metadata in a traditional database. Blockchain for immutability and verification, database for everything else.
              </p>

              <h2 className="text-3xl font-light serif-heading mt-12 mb-6">The Development Process</h2>

              <div className="glass rounded-xl p-6 mb-6">
                <h4 className="font-semibold mb-4">Our Workflow:</h4>
                <ol className="space-y-3 text-text-secondary list-decimal list-inside">
                  <li>Write smart contracts in Solidity</li>
                  <li>Test locally with Hardhat</li>
                  <li>Deploy to testnet (Goerli)</li>
                  <li>Build frontend integration</li>
                  <li>Test with real wallets on testnet</li>
                  <li>Security audit (internal + external)</li>
                  <li>Deploy to mainnet (Polygon for lower fees)</li>
                  <li>Monitor and optimize</li>
                </ol>
              </div>

              <h2 className="text-3xl font-light serif-heading mt-12 mb-6">Solidity Code That Actually Works</h2>

              <p className="text-text-secondary leading-relaxed mb-4">Here's a simplified version of our document verification contract:</p>

              <div className="glass rounded-xl p-6 mb-6">
                <pre className="bg-surface-dark/50 rounded-lg p-4 overflow-x-auto text-sm">
                  <code className="text-green-400">{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DocumentRegistry {
    struct Document {
        bytes32 hash;
        uint256 timestamp;
        address notary;
        bool exists;
    }
    
    mapping(bytes32 => Document) public documents;
    
    event DocumentRegistered(
        bytes32 indexed hash,
        uint256 timestamp,
        address notary
    );
    
    function registerDocument(bytes32 _hash) 
        external 
        returns (bool) 
    {
        require(!documents[_hash].exists, "Already registered");
        
        documents[_hash] = Document({
            hash: _hash,
            timestamp: block.timestamp,
            notary: msg.sender,
            exists: true
        });
        
        emit DocumentRegistered(_hash, block.timestamp, msg.sender);
        return true;
    }
    
    function verifyDocument(bytes32 _hash) 
        external 
        view 
        returns (bool exists, uint256 timestamp, address notary) 
    {
        Document memory doc = documents[_hash];
        return (doc.exists, doc.timestamp, doc.notary);
    }
}`}</code>
                </pre>
              </div>

              <h2 className="text-3xl font-light serif-heading mt-12 mb-6">Why We Moved to Polygon</h2>

              <p className="text-text-secondary leading-relaxed mb-6">
                Ethereum mainnet was killing us with gas fees. A single document registration cost users $15-30 depending on network congestion. Unacceptable. We migrated to Polygon and fees dropped to cents. Same security model, same Solidity code, 100x cheaper.
              </p>

              <h2 className="text-3xl font-light serif-heading mt-12 mb-6">The Biggest Challenges</h2>

              <ul className="list-disc list-inside space-y-3 text-text-secondary mb-6">
                <li><strong>State Management:</strong> Syncing on-chain and off-chain state is complex</li>
                <li><strong>Error Handling:</strong> Blockchain errors are cryptic and unhelpful</li>
                <li><strong>Testing:</strong> Need to test contract logic AND integration</li>
                <li><strong>Documentation:</strong> Web3 docs are often outdated or incomplete</li>
                <li><strong>Debugging:</strong> No console.log in Solidity (use events instead)</li>
              </ul>

              <h2 className="text-3xl font-light serif-heading mt-12 mb-6">Is Web3 Worth It?</h2>

              <p className="text-text-secondary leading-relaxed mb-6">
                Honest answer: It depends on your use case. Blockchain excels at:
              </p>

              <ul className="list-disc list-inside space-y-2 text-text-secondary mb-6">
                <li>Immutable records and audit trails</li>
                <li>Decentralized verification</li>
                <li>Trustless interactions</li>
                <li>Token economics and incentives</li>
              </ul>

              <p className="text-text-secondary leading-relaxed mb-6">
                But if you just need a database, use a database. Blockchain adds complexity, costs, and user friction. Make sure you really need it.
              </p>

              <div className="glass rounded-xl p-8 mt-12 border-l-4 border-primary">
                <p className="text-lg text-white italic">
                  "Building Web3 apps taught me that the hardest part isn't the code—it's explaining to users why they need to approve three transactions to do one thing."
                </p>
                <p className="text-sm text-text-tertiary mt-2">- Me, after 6 months of Web3 development</p>
              </div>

              <h2 className="text-3xl font-light serif-heading mt-12 mb-6">Final Thoughts</h2>

              <p className="text-text-secondary leading-relaxed mb-6">
                Web3 isn't hype. It's a real technology solving real problems. But it's also immature, expensive, and frustrating. If you're thinking about building Web3 apps: start small, test extensively, and always remember that users don't care about blockchain—they care about solving their problems.
              </p>

              <p className="text-text-secondary leading-relaxed mb-6">
                Would I do it again? Absolutely. Despite the challenges, building something that exists on a decentralized, immutable ledger is incredibly satisfying. Plus, the Web3 space is growing fast, and early experience will pay off.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-text-tertiary/10">
              {['Web3', 'Blockchain', 'Solidity', 'Ethereum', 'Smart Contracts'].map(tag => (
                <span key={tag} className="px-4 py-2 glass-light rounded-full text-sm">{tag}</span>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-text-tertiary/10">
              <div className="flex items-center justify-between">
                <span className="text-text-secondary">Share this article:</span>
                <div className="flex gap-3">
                  <button className="p-3 glass rounded-full hover:bg-surface-lighter transition-all"><Twitter size={18} /></button>
                  <button className="p-3 glass rounded-full hover:bg-surface-lighter transition-all"><Linkedin size={18} /></button>
                  <button className="p-3 glass rounded-full hover:bg-surface-lighter transition-all"><Facebook size={18} /></button>
                  <button className="p-3 glass rounded-full hover:bg-surface-lighter transition-all"><Share2 size={18} /></button>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>

      <SayHello />
      <CTASection />
    </>
  );
};

export default Web3Apps;