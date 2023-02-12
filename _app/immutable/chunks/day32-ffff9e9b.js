const t={},e=`<h2>Day 32/100</h2>
<hr>
<p>Date: 12/02/23</p>
<hr>
<h3>Goal:</h3>
<p>Build a full NFT collection smart contract in Foundry - LW3 Sophomore track</p>
<h3><strong>Today's Progress</strong>:</h3>
<ul>
<li>Foundry: learned more about fuzzing and warping</li>
<li>Contract: added <code>init()</code> contract tests, learned about <a href="https://book.getfoundry.sh/reference/forge-std/make-addr?highlight=makeAddr#makeaddr">makeAddr</a> Foundry util</li>
<li>Contract: added a variety of success and fail tests for the <code>mint()</code> method</li>
<li>Contract: test coverage at 22%</li>
<li>Foundry: learned about editing the block times and using <a href="https://book.getfoundry.sh/cheatcodes/warp">warp</a></li>
</ul>
<h3><strong>Thoughts</strong>:</h3>
<ul>
<li>The fact that I'm using an interface contract for the Whitelist confused me a bit. I needed to include this interface in the tests, but how could I pass in an <code>address</code> type when all I had was a string.</li>
<li>Resources and videos from <a href="https://www.youtube.com/@thirdweb_">thirdweb</a> on Foundry have been incredible.</li>
<li>Finish the <a href="https://www.youtube.com/watch?v=fNMfMxGxeag">Patrick Collins video on Foundry</a>, but I found it to skip over a lot of interesting things. Needs to spend more time combing through <a href="https://github.com/PatrickAlphaC/foundry-play">his recommended repo</a>.</li>
</ul>
<h3><strong>Link to work:</strong></h3>
<ul>
<li><a href="https://github.com/activate-glacier-instinct/nft-collection-contract-foundry--lw3">NFT Collection (contract) - Project Repo</a></li>
<li><a href="https://activate-glacier-instinct.github.io/">My Portfolio</a></li>
</ul>
`;export{t as attributes,e as html};
