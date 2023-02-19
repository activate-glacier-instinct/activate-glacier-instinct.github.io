const t={},n=`<h2>Day 35/100</h2>
<hr>
<p>Date: 18/02/23</p>
<hr>
<h3>Goal:</h3>
<p>Build a full NFT collection smart contract in Foundry - LW3 Sophomore track</p>
<h3><strong>Today's Progress</strong>:</h3>
<ul>
<li>Foundry: implemented static whitelist and nonWhitelist addresses</li>
<li>Foundry: adds mint and presaleMint tests</li>
<li>Foundry: adds withdraw test</li>
<li>Test coverage: 84%</li>
</ul>
<h3><strong>Thoughts</strong>:</h3>
<ul>
<li>Attempted testing log emits from within the contract during the mint, but had errors around mismatched log signatures. Could not resolve in time for the end of this session.</li>
<li>Left to test are <code>receive()</code> and <code>fallback()</code> functions</li>
<li>Dug deep into the Open Zeppellin contact definitions to figure out the correct test signature</li>
<li>Learned about <code>vm.deal()</code> which sends eth to an address in a test setting</li>
<li>Need to start deploying to Sepolia instead of Goerli, but its not clear if LearnWeb3 will support Sepolia</li>
</ul>
<h3><strong>Next</strong>:</h3>
<ul>
<li>Deployment script and actual deployment to Goerli or Sepolia</li>
</ul>
<h3><strong>Link to work:</strong></h3>
<ul>
<li><a href="https://github.com/activate-glacier-instinct/nft-collection-contract-foundry--lw3">NFT Collection (contract) - Project Repo</a></li>
<li><a href="https://activate-glacier-instinct.github.io/">My Portfolio</a></li>
</ul>
`;export{t as attributes,n as html};
