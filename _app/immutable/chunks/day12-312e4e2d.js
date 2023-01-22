const o={},t=`<h2>Day 12/100</h2>
<hr>
<p>Date: 18/01/23</p>
<hr>
<h3>Goal:</h3>
<p>Make a simple portfolio + blog site using SvelteKit for my anon account</p>
<h3><strong>Today's Progress</strong>:</h3>
<ul>
<li>Made a decision on how to handle data: git submodules and dynamic imports</li>
<li>Adds 100days-of-code repo as a git submodule, so we now clone that data into this repo</li>
<li>Adds load function that uses import.meta.glob to try to import the files from the submodule</li>
<li>Adds parsing of this import queue to get the files that are trying to be imported</li>
<li>Uses the file names for the /blog list</li>
<li>Bunch of testing for the location of this new submodule</li>
<li>Removes a lot of store and fetch code implementations</li>
</ul>
<h3><strong>Thoughts</strong>:</h3>
<ul>
<li>Seems a lot cleaner to go down this way and allows for easier parsing of the content in the files too</li>
</ul>
<h3><strong>Link to work:</strong></h3>
<ul>
<li><a href="https://github.com/activate-glacier-instinct/activate-glacier-instinct.github.io">Portfolio - Repo</a></li>
<li><a href="https://activate-glacier-instinct.github.io/">Portfolio - Deployment</a></li>
<li><a href="https://www.figma.com/file/EACX3PwCLrEc2q3oHRtxU4/Portfolio---Moodboard?node-id=0%3A1">Portfolio - Design Moodboard</a></li>
</ul>
`;export{o as attributes,t as html};
