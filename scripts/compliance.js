const fs = require('fs');
const path = require('path');

const entryDirectory = './documentation';

const componentToAppend = `

	<footer class="carbon">
		<dds-footer-container key="footer" disable-locale-button="true" size="micro" />
	</footer>

	<script
		key="8"
		type="module"
		src="https://1.www.s81c.com/common/carbon-for-ibm-dotcom/tag/v1/latest/footer.min.js">
	</script>

	<!-- Storybook override -->
	<script>
		document.title = "Carbon Components Angular";
	</script>

	<script
		src="//1.www.s81c.com/common/stats/ibm-common.js"
		type="text/javascript"
		async="async">
	</script>
</body>`;
const styleToAppend = `
	<style>
		footer.carbon {
			position: absolute;
			bottom: 0;
			width: 100%;
			z-index: 9999;
		}
		#root > div {
			/*
			 * Subtracting the height of the footer to prevent
			 * overlaying the footer ontop of content
			 */
			height: calc(100vh - 48px);
		}
	</style>
</head>`;


function rewriteHtmlFile(filePath) {
	fs.readFile(filePath, 'utf8', (err, data) => {
		if (err) {
			console.error('Error reading file', filePath, err);
			return;
		}

		let newContent = data.replace('</body>', componentToAppend);
		newContent = newContent.replace('</head>', styleToAppend);

		fs.writeFile(filePath, newContent, 'utf8', (err) => {
			if(err) {
				console.error('Error writing file', filePath, err);
			} else {
				console.log('Success writing file', filePath);
			}
		})
	})
}

function walkDirectory(dir) {
	fs.readdir(dir, { withFileTypes: true }, (err, items) => {
		if (err) {
			console.error('Error reading directory', dir, err);
			return;
		}

		items.forEach((item) => {
			const fullPath = path.join(dir, item.name);
			if (item.isDirectory()) {
				walkDirectory(fullPath);
			} else if (item.isFile() && path.extname(item.name) === '.html') {
				rewriteHtmlFile(fullPath);
			}
		})
	})
}

walkDirectory(entryDirectory)