const o={},t=`<h2>Day 15/100</h2>
<hr>
<p>Date: 21/01/23</p>
<hr>
<h3>Goal:</h3>
<p>Make a simple portfolio + blog site using SvelteKit for my anon account</p>
<h3><strong>Today's Progress</strong>:</h3>
<ul>
<li>Content: normalises the style across all notes and updates the submodule in the portfolio repo</li>
<li>Moved the 100days-of-code summary page to be within /blog</li>
<li>Adds ability for /blog to read from a new content/blog/page.json data. Enables the ability to write blogs and showcase the links directly on the /blog page</li>
<li>Fix: pages nested within /blog/100days-of-code could not be rendered because of a missing /</li>
<li>Moved all the links to logs to the 100days-of-code page. Old <code>/blog/[slug]</code> was moved here</li>
<li>Updates the 100days-of-code nested pages data generation and link building</li>
<li>Tested navigation throughout the app: home -&gt; blog/100days-of-code -&gt; blog/100days-of-code/[slug] and home -&gt; /blog -&gt; blog/100days-of-code</li>
</ul>
<h3><strong>Thoughts</strong>:</h3>
<ul>
<li>Felt quite nice to fix the navigation to follow a logical flow</li>
</ul>
<h3><strong>Next</strong>:</h3>
<ul>
<li>Style <code>/blog/[slug]</code></li>
</ul>
<h3><strong>Link to work:</strong></h3>
<ul>
<li><a href="https://github.com/activate-glacier-instinct/activate-glacier-instinct.github.io">Portfolio - Repo</a></li>
<li><a href="https://activate-glacier-instinct.github.io/">Portfolio - Deployment</a></li>
<li><a href="https://www.figma.com/file/EACX3PwCLrEc2q3oHRtxU4/Portfolio---Moodboard?node-id=0%3A1">Portfolio - Design Moodboard</a></li>
</ul>
`;export{o as attributes,t as html};
