angular
    .module("x1.ui.bootstrap", [
		"ui.router",
		"ui.bootstrap",
		"x1.ui.prism",
		"x1.ui.bootstrap.demo"
	])
    .config([
		"$stateProvider", "$urlRouterProvider", "$logProvider",
        function ($stateProvider, $urlRouterProvider, $logProvider) {
            "use strict";

            $urlRouterProvider.otherwise("/bootstrap");
            $logProvider.debugEnabled(false);
        }
    ]);
angular
    .module("x1.ui.bootstrap")
	.constant("x1.ui.bootstrap.components", [
		{
			"name": "Badges",
			"state": "badges",
			"class": "badges"
		},
		{
			"name": "Breadcrumbs",
			"state": "breadcrumbs",
			"class": "breadcrumbs"
		},
		{
			"name": "Buttons",
			"state": "buttons",
			"class": "buttons"
		},
		{
			"name": "Button: menu",
			"state": "button-menu",
			"class": "button-menu"
		},
		{
			"name": "Check boxes",
			"state": "check-boxes",
			"class": "check-boxes"
		},
		{
			"name": "Iconography",
			"state": "iconography",
			"class": "iconography"
		},
		{
			"name": "List group",
			"state": "list-group",
			"class": "list-group"
		},
		{
			"name": "Pagination & Pager",
			"state": "pagination",
			"class": "pagination"
		},
		{
			"name": "Messages",
			"state": "messages",
			"class": "messages"
		},
		{
			"name": "Radio buttons",
			"state": "radio-buttons",
			"class": "radio-buttons"
		},
		{
			"name": "Text fields",
			"state": "text-fields",
			"class": "text-fields"
		},
		{
			"name": "Toggle button group",
			"state": "toggle-button-group",
			"class": "toggle-button-group"
		},
		{
			"name": "Typography",
			"state": "typography",
			"class": "typography"
		}
	]);
angular
	.module("x1.ui.bootstrap")
	.config(["$stateProvider",
		function($stateProvider) {
			"use strict";

			$stateProvider
				.state("badges", {
					url: "/bootstrap/badges",
					templateUrl: "badges/badges.demo.html"
				});
		}
	]);
angular
	.module("x1.ui.bootstrap.demo", [])
	.config([
		"$stateProvider",
		function($stateProvider) {
			"use strict";

			$stateProvider
				.state("bootstrap", {
					url: "/bootstrap",
					templateUrl: "bootstrap/bootstrap.demo.html",
					controller: "BootstrapDemoCtrl"
				});
		}
	])
	.controller("BootstrapDemoCtrl", [
		"$scope", "x1.ui.bootstrap.components",
		function($scope, BootstrapComponents) {
			"use strict";

			$scope.bootstrapItems = BootstrapComponents;
		}
	]);
angular
	.module("x1.ui.bootstrap")
	.config([
		"$stateProvider",
		function($stateProvider) {
			"use strict";

			$stateProvider
				.state("button-menu", {
					url: "/bootstrap/button-menu",
					templateUrl: "button-menu/button-menu.demo.html"
				});
		}
	]);
angular
	.module("x1.ui.bootstrap")
	.config(["$stateProvider",
		function($stateProvider) {
			"use strict";

			$stateProvider
				.state("breadcrumbs", {
					url: "/bootstrap/breadcrumbs",
					templateUrl: "breadcrumbs/breadcrumbs.demo.html"
				});
		}
	]);
angular
	.module("x1.ui.bootstrap")
	.config([
		"$stateProvider",
		function($stateProvider) {
			"use strict";

			$stateProvider
				.state("check-boxes", {
					url: "/bootstrap/check-boxes",
					templateUrl: "check-boxes/check-boxes.demo.html"
				});
		}
	]);
angular
	.module("x1.ui.bootstrap")
	.config([
		"$stateProvider",
		function($stateProvider) {
			"use strict";

			$stateProvider
				.state("buttons", {
					url: "/bootstrap/buttons",
					templateUrl: "buttons/buttons.demo.html"
				});
		}
	]);
angular
	.module("x1.ui.bootstrap")
	.config([
		"$stateProvider",
		function($stateProvider) {
			"use strict";

			$stateProvider
				.state("iconography", {
					url: "/bootstrap/iconography",
					templateUrl: "iconography/iconography.demo.html",
					controller: "iconographyDemoCtrl"
				});
		}
	]);
angular
	.module("x1.ui.bootstrap")
	.controller("iconographyDemoCtrl", [
		"$scope",
		function($scope) {
			"use strict";

			$scope.glyphs = [
				{
					group: "Action Icons",
					classes: [
						"glyphicon-copy",
						"glyphicon-paste",
						"glyphicon-save",
						"glyphicon-save-as",
						"glyphicon-export",
						"glyphicon-import",
						"glyphicon-or",
						"glyphicon-and",
						"glyphicon-plus",
						"glyphicon-remove",
						"glyphicon-trash",
						"glyphicon-pushpin",
						"glyphicon-edit",
						"glyphicon-search",
						"glyphicon-share",
						"glyphicon-refresh",
						"glyphicon-filter-clear",
						"glyphicon-filter",
						"glyphicon-filter-fill",
						"glyphicon-snapshot-select",
						"glyphicon-sub-select",
						"glyphicon-category-select",
						"glyphicon-zoom-in",
						"glyphicon-zoom-out",
						"glyphicon-zoom-more",
						"glyphicon-zoom-less",
						"glyphicon-resize",
						"glyphicon-resize-full",
						"glyphicon-resize-small",
						"glyphicon-minimize-window",
						"glyphicon-maximize-window",
						"glyphicon-compare"
					]
				},
				{
					group: "Directional Icons",
					classes: [
						"glyphicon-chevron-up-double",
						"glyphicon-chevron-down-double",
						"glyphicon-chevron-left-double",
						"glyphicon-chevron-right-double",
						"glyphicon-chevron-up",
						"glyphicon-chevron-down",
						"glyphicon-chevron-left",
						"glyphicon-chevron-right",
						"glyphicon-arrow-up",
						"glyphicon-arrow-down",
						"glyphicon-arrow-left",
						"glyphicon-arrow-right",
						"glyphicon-fast-forward",
						"glyphicon-fast-backward",
						"glyphicon-triangle-right",
						"glyphicon-triangle-left",
						"glyphicon-chevron-up-down",
						"glyphicon-run"
					]
				},
				{
					group: "File Icons",
					classes: [
						"glyphicon-folder-close",
						"glyphicon-folder-open",
						"glyphicon-folder-open-fill",
						"glyphicon-file",
						"glyphicon-file-csv",
						"glyphicon-file-excel",
						"glyphicon-file-pdf",
						"glyphicon-file-png",
						"glyphicon-doc-properties",
						"glyphicon-doc-new",
						"glyphicon-doc-add"
					]
				},
				{
					group: "Status Icons",
					classes: [
						"glyphicon-locked",
						"glyphicon-unlocked",
						"glyphicon-ok",
						"glyphicon-ok-circle",
						"glyphicon-warning-sign",
						"glyphicon-error-circle"
					]
				},
				{
					group: "View/Layout Icons",
					classes: [
						"glyphicon-workspaces",
						"glyphicon-view-full",
						"glyphicon-view-split",
						"glyphicon-view-thumb",
						"glyphicon-view-tree",
						"glyphicon-view-list",
						"glyphicon-view-combo",
						"glyphicon-view-chart",
						"glyphicon-gallery",
						"glyphicon-preview"
					]
				},
				{
					group: "Calculator Icons",
					classes: [
						"glyphicon-calc-plus",
						"glyphicon-calc-divide",
						"glyphicon-calc-equal",
						"glyphicon-calc-minus",
						"glyphicon-calc-multiply",
						"glyphicon-calc-delete"
					]
				},
				{
					group: "Calendar Icons",
					classes: [
						"glyphicon-calendar",
						"glyphicon-date-picker",
						"glyphicon-calendar-schedule"
					]
				},
				{
					group: "People Icons",
					classes: [
						"glyphicon-user",
						"glyphicon-people-one-add",
						"glyphicon-people-two",
						"glyphicon-people-group",
						"glyphicon-accessibility"
					]
				},
				{
					group: "Help Icons",
					classes: [
						"glyphicon-info-circle",
						"glyphicon-info-sign",
						"glyphicon-question-circle",
						"glyphicon-question-sign",
						"glyphicon-flag-empty",
						"glyphicon-flag-fill"
					]
				},
				{
					group: "Shape Icons",
					classes: [
						"glyphicon-shapes",
						"glyphicon-circle",
						"glyphicon-circle-empty",
						"glyphicon-diamond",
						"glyphicon-diamond-empty",
						"glyphicon-pentagon",
						"glyphicon-pentagon-empty",
						"glyphicon-square",
						"glyphicon-square-empty",
						"glyphicon-triangle",
						"glyphicon-triangle-empty",
						"glyphicon-star-empty",
						"glyphicon-star"
					]
				},
				{
					group: "Miscellaneous Icons",
					classes: [
						"glyphicon-menu-hamburger",
						"glyphicon-option-horizontal",
						"glyphicon-option-vertical",
						"glyphicon-gear",
						"glyphicon-gears",
						"glyphicon-gears-fill",
						"glyphicon-tools",
						"glyphicon-tools-fill",
						"glyphicon-analyze",
						"glyphicon-stats",
						"glyphicon-prefs",
						"glyphicon-history",
						"glyphicon-property",
						"glyphicon-grip-vertical",
						"glyphicon-envelope",
						"glyphicon-envelope-fill",
						"glyphicon-world",
						"glyphicon-payment-creditcard",
						"glyphicon-lightbulb",
						"glyphicon-forum",
						"glyphicon-tag",
						"glyphicon-tag-repeat",
						"glyphicon-tag-select",
						"glyphicon-components",
						"glyphicon-contribution",
						"glyphicon-versioning",
						"glyphicon-blank"
					]
				}
			];
		}
	]);
angular
	.module("x1.ui.bootstrap")
	.config(["$stateProvider",
		function($stateProvider) {
			"use strict";

			$stateProvider
				.state("list-group", {
					url: "/bootstrap/list-group",
					templateUrl: "list-group/list-group.demo.html"
				});
		}
	]);
angular
	.module("x1.ui.bootstrap")
	.config([
		"$stateProvider",
		function($stateProvider) {
			"use strict";

			$stateProvider
				.state("messages", {
					url: "/bootstrap/messages",
					templateUrl: "messages/messages.demo.html"
				});
		}
	]);
angular
	.module("x1.ui.bootstrap")
	.config([
		"$stateProvider",
		function($stateProvider) {
			"use strict";

			$stateProvider
				.state("pagination", {
					url: "/bootstrap/pagination",
					templateUrl: "pagination/pagination.demo.html"
				});
		}
	]);
angular
	.module("x1.ui.bootstrap")
	.config([
		"$stateProvider",
		function($stateProvider) {
			"use strict";

			$stateProvider
				.state("radio-buttons", {
					url: "/bootstrap/radio-buttons",
					templateUrl: "radio-buttons/radio-buttons.demo.html"
				});
		}
	]);
angular
	.module("x1.ui.bootstrap")
	.config([
		"$stateProvider",
		function($stateProvider) {
			"use strict";

			$stateProvider
				.state("typography", {
					url: "/bootstrap/typography",
					templateUrl: "typography/typography.demo.html"
				});
		}
	]);
angular
	.module("x1.ui.bootstrap")
	.config([
		"$stateProvider",
		function($stateProvider) {
			"use strict";

			$stateProvider
				.state("text-fields", {
					url: "/bootstrap/text-fields",
					templateUrl: "text-fields/text-fields.demo.html"
				});
		}
	]);
angular
	.module("x1.ui.bootstrap")
	.config([
		"$stateProvider",
		function($stateProvider) {
			"use strict";

			$stateProvider
				.state("toggle-button-group", {
					url: "/bootstrap/toggle-button-group",
					templateUrl: "toggle-button-group/toggle-button-group.demo.html"
				});
		}
	]);