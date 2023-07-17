/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  learnSidebar: [
		{
			type: 'doc',
			id: 'learn/intro',
		},
		{
			type: 'category',
			label: 'Advanced Introduction',
			collapsed: false,
			link: { type: 'generated-index' },
			items: [{ type: 'autogenerated', dirName: 'learn/advanced-introduction' }],
		},
    {
			type: 'category',
			label: 'Academic Resources',
			collapsed: true,
			link: { type: 'generated-index' },
			items: [{ type: 'autogenerated', dirName: 'learn/academic-resources' }],
		},
	],
  participateSidebar: [
		{
			type: 'doc',
			id: 'participate/participateintro',
		},
		{
			type: 'category',
			label: 'Use Quai',
			collapsed: false,
			link: { type: 'generated-index' },
			items: [{ type: 'autogenerated', dirName: 'participate/use-quai' }],
		},
    {
			type: 'category',
			label: 'Run a Node',
			collapsed: true,
			link: { type: 'generated-index' },
			items: [{ type: 'autogenerated', dirName: 'participate/run-a-node' }],
		},
    {
			type: 'category',
			label: 'Run a Miner',
			collapsed: true,
			link: { type: 'generated-index' },
			items: [{ type: 'autogenerated', dirName: 'participate/run-a-miner' }],
		},
	],
  developSidebar: [
		{
			type: 'doc',
			id: 'develop/developintro',
		},
		{
			type: 'category',
			label: 'Smart Contracts',
			collapsed: false,
			link: { type: 'generated-index' },
			items: [{ type: 'autogenerated', dirName: 'develop/smart-contracts' }],
		},
    {
			type: 'category',
			label: 'APIs',
			collapsed: true,
			link: { type: 'generated-index' },
			items: [{ type: 'autogenerated', dirName: 'develop/apis' }],
		},
    {
			type: 'category',
			label: 'Tutorials',
			collapsed: true,
			link: { type: 'generated-index' },
			items: [{ type: 'autogenerated', dirName: 'develop/tutorials' }],
		},
	],
};

module.exports = sidebars;
