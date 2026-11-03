/**
 * shared Tealium/GA config for manager-head and preview-head
 */
const SITE_NAME = "CarbonAngularStorybook";
const IBM_COMMON_SRC = "https://1.www.s81c.com/common/stats/ibm-common.js";

const ibmAnalytics = {
	settings: {
		name: SITE_NAME,
		isSpa: true,
		tealiumProfileName: "ibm-web-app",
	},
	onLoad: [["ibmStats.pageview", []]],
};

const digitalData = {
	page: {
		pageInfo: {
			ibm: {
				siteId: `IBM_${SITE_NAME}`,
			},
		},
		category: {
			primaryCategory: "PC100",
		},
	},
};

const setGlobals = `
	window._ibmAnalytics = ${JSON.stringify(ibmAnalytics)};
	window.digitalData = ${JSON.stringify(digitalData)};
`;

/**
 * manager (index.html): always top-level window, so set the globals and
 * load ibm-common.js with static script
 */
const managerAnalyticsHead = `
<!-- Tealium/GA set up -->
<script type="text/javascript">${setGlobals}</script>
<script src="${IBM_COMMON_SRC}" type="text/javascript" async="async"></script>
`;

/**
 * preview (iframe.html): only set up analytics when opened directly, since the
 * manager already loads ibm-common.js when preview is embedded
 */
const previewAnalyticsHead = `
<!-- Tealium/GA set up -->
<script type="text/javascript">
	if (window.self === window.top) {${setGlobals}
		var ibmCommonScript = document.createElement("script");
		ibmCommonScript.type = "text/javascript";
		ibmCommonScript.async = true;
		ibmCommonScript.src = "${IBM_COMMON_SRC}";
		document.head.appendChild(ibmCommonScript);
	}
</script>
`;

module.exports = {
	managerAnalyticsHead,
	previewAnalyticsHead,
};
