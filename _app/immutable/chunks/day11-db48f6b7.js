const t={},o=`<h2>Day 11/100</h2>
<hr>
<p>Date: 17/01/23</p>
<hr>
<h3>Goal:</h3>
<p>Make a simple portfolio + blog site using SvelteKit for my anon account</p>
<h3><strong>Today's Progress</strong>:</h3>
<ul>
<li>Added a /lib folder and moved a bunch of utilities there</li>
<li>Added a store for fetched posts from Github</li>
<li>Rendered the data from this new store on the /blog page</li>
<li>Stopped the /blog/[slug] from making too many calls onLoad (pre-rendering on hover)</li>
<li>Simplified the blog/+layout by removing both loading logic and data definitions</li>
</ul>
<h3><strong>Thoughts</strong>:</h3>
<ul>
<li>Tricky to think about this problem: fetch list data when hitting /blog, but then when you render /blog/[slug] render the individual item from the list</li>
<li>Some avenues:
<ul>
<li>Service workers downloading the files locally, then the app uses these files to push .md contents into html</li>
<li>Dynamically fetch the data on /blog, reuse it on /blog/[slug] using a store</li>
</ul>
</li>
</ul>
<h3><strong>Link to work:</strong></h3>
<ul>
<li><a href="https://github.com/activate-glacier-instinct/activate-glacier-instinct.github.io">Portfolio - Repo</a></li>
<li><a href="https://activate-glacier-instinct.github.io/">Portfolio - Deployment</a></li>
<li><a href="https://www.figma.com/file/EACX3PwCLrEc2q3oHRtxU4/Portfolio---Moodboard?node-id=0%3A1">Portfolio - Design Moodboard</a></li>
</ul>
`;export{t as attributes,o as html};
