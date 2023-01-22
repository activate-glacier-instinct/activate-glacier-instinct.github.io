const t={},n=`<h2>Day 1/100</h2>
<hr>
<p>Date: 07/01/23</p>
<hr>
<h3>Goal:</h3>
<p>Make a simple portfolio + blog site using SvelteKit for my anon account</p>
<h3><strong>Today's Progress</strong>:</h3>
<ul>
<li>build was quite easy, just followed the docs
- https://kit.svelte.dev/docs/creating-a-project
<ul>
<li>changed the main page html, but missing a style atm (another future task)</li>
<li>started looking at CI/CD using Github Actions
<ul>
<li>first needed to build to static using an [adapter-static]
(https://www.npmjs.com/package/@sveltejs/adapter-static)</li>
<li>Svelte also has an <a href="https://www.npmjs.com/package/@sveltejs/adapter-auto">adapter-auto</a>
<ul>
<li>added setup by following the module docs</li>
<li>getting an error about not all routes being prerendered (clue for the failed deployment)</li>
</ul>
</li>
</ul>
</li>
<li>added a Github Action to build and deploy the site
<ul>
<li>currently not showing anything
<ul>
<li>probably relate to the above</li>
<li>also there's no index.html in the /out folder</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>
<h3><strong>Challenges</strong>:</h3>
<ul>
<li>CI/CD deployment is currently giving a 404, but ran out of time for today</li>
</ul>
<h3><strong>Thoughts</strong>:</h3>
<ul>
<li>Cloudflare Pages deployment works by default, worth a try</li>
<li>SvelteKit seems really nice
<ul>
<li>Super fast to build</li>
<li>The deployment Github Action I used was from a static Next.js build and worked just fine</li>
</ul>
</li>
<li>Playwright tests are very nice</li>
<li>/out folder is 93kb, love that I can build this precompressed with brotli and gzip</li>
<li>Glad that I spent some time to make a bash script that allows me to configure the repos with my anon credentials
<ul>
<li>need to look at a VM in the future</li>
</ul>
</li>
<li>Used the Github Projects view a lot
<ul>
<li>very, very nice to use as a board and as a spreadsheet</li>
</ul>
</li>
<li>Also using a proper flow
<ul>
<li>Issues --&gt; Branches --&gt; PRs</li>
</ul>
</li>
</ul>
<h3><strong>Link to work:</strong></h3>
<ul>
<li><a href="https://github.com/activate-glacier-instinct/activate-glacier-instinct.github.io">Portfolio - activate-glacier-instinct</a></li>
</ul>
`;export{t as attributes,n as html};
