interface LanguageAsset {
	custom?: {
		matcher: RegExp | string;
		asset: string;
	}[];
	default: string;
}

const _assets: Record<string, LanguageAsset> = {
	aep: {
		default: "adobe_afterfx",
	},
	ai: {
		default: "adobe_illustrator",
	},
	apk: {
		default: "android",
	},
	bp: {
		default: "android",
	},
	c: {
		default: "c",
	},
	clj: {
		default: "clojure",
	},
	coffee: {
		default: "coffeescript",
	},
	cpp: {
		default: "cpp",
	},
	cr: {
		default: "crystal",
	},
	cs: {
		default: "csharp",
	},
	css: {
		default: "css",
	},
	d: {
		default: "d",
	},
	dart: {
		default: "dart",
	},
	ex: {
		default: "elixir",
	},
	erl: {
		default: "erlang",
	},
	fla: {
		default: "adobe_animate",
	},
	fr: {
		default: "frege",
	},
	fs: {
		default: "fsharp",
	},
	git: {
		default: "git",
	},
	go: {
		default: "go",
	},
	hc: {
		default: "holyc",
	},
	hgignore: {
		default: "mercurial",
	},
	hs: {
		default: "haskell",
	},
	html: {
		default: "html",
	},
	idr: {
		default: "idris",
	},
	indd: {
		default: "adobe_indesign",
	},
	ini: {
		custom: [
			{
				matcher: "mercurial.ini",
				asset: "mercurial",
			},
		],
		default: "text",
	},
	java: {
		default: "java",
	},
	js: {
		custom: [
			{
				matcher: "esbuild.",
				asset: "esbuild",
			},
			{
				matcher: ".pnpmfile.",
				asset: "pnpm",
			},
			{
				matcher: "rollup.config.",
				asset: "rollup",
			},
			{
				matcher: "next.config.",
				asset: "vercel",
			},
			{
				matcher: "tailwind.",
				asset: "tailwind",
			},
			{
				matcher: /uno(css)?\.config\./,
				asset: "uno",
			},
			{
				matcher: "vite.config.",
				asset: "vite",
			},
			{
				matcher: "vue.config.",
				asset: "vue",
			},
			{
				matcher: "webpack.",
				asset: "webpack",
			},
			{
				matcher: "windi.config.",
				asset: "windi",
			},
			{
				matcher: "yarn.config.",
				asset: "yarn",
			},
		],
		default: "javascript",
	},
	json: {
		custom: [
			{
				matcher: "deno.",
				asset: "deno",
			},
			{
				matcher: "fly.json",
				asset: "fly",
			},
			{
				matcher: "netlify.json",
				asset: "netlify",
			},
			{
				matcher: /package(-lock)?.json/i,
				asset: "npm",
			},
			{
				matcher: "railway.json",
				asset: "railway",
			},
			{
				matcher: "vercel.json",
				asset: "vercel",
			},
			{
				matcher: "windi.config.",
				asset: "windi",
			},
		],
		default: "json",
	},
	jsx: {
		default: "react",
	},
	jl: {
		default: "julia",
	},
	kt: {
		default: "kotlin",
	},
	lock: {
		custom: [
			{
				matcher: "bun.lock",
				asset: "bun",
			},
			{
				matcher: "deno.lock",
				asset: "deno",
			},
			{
				matcher: "yarn.lock",
				asset: "yarn",
			},
		],
		default: "lock",
	},
	log: {
		custom: [
			{
				matcher: "yarn-error.log",
				asset: "yarn",
			},
		],
		default: "text",
	},
	ls: {
		default: "livescript",
	},
	md: {
		default: "markdown",
	},
	ml: {
		default: "ocaml",
	},
	nim: {
		default: "nim",
	},
	npmignore: {
		default: "npm",
	},
	npmrc: {
		default: "npm",
	},
	php: {
		default: "php",
	},
	psd: {
		default: "adobe_photoshop",
	},
	ps1: {
		default: "powershell",
	},
	purs: {
		default: "purescript",
	},
	py: {
		default: "python",
	},
	rkt: {
		default: "racket",
	},
	rb: {
		default: "ruby",
	},
	red: {
		default: "red",
	},
	rs: {
		default: "rust",
	},
	sass: {
		default: "sass",
	},
	scala: {
		default: "scala",
	},
	swift: {
		default: "swift",
	},
	toml: {
		custom: [
			{
				matcher: "fly.toml",
				asset: "fly",
			},
			{
				matcher: "netlify.toml",
				asset: "netlify",
			},
			{
				matcher: "railway.toml",
				asset: "railway",
			},
		],
		default: "toml",
	},
	ts: {
		custom: [
			{
				matcher: "esbuild.",
				asset: "esbuild",
			},
			{
				matcher: "rollup.config.",
				asset: "rollup",
			},
			{
				matcher: "next.config.",
				asset: "vercel",
			},
			{
				matcher: "tailwind.",
				asset: "tailwind",
			},
			{
				matcher: /uno(css)?\.config\./,
				asset: "uno",
			},
			{
				matcher: "vite.config.",
				asset: "vite",
			},
			{
				matcher: "vue.config.",
				asset: "vue",
			},
			{
				matcher: "webpack.",
				asset: "webpack",
			},
			{
				matcher: "windi.config.",
				asset: "windi",
			},
			{
				matcher: "yarn.config.",
				asset: "yarn",
			},
		],
		default: "typescript",
	},
	v: {
		default: "v",
	},
	vercelignore: {
		default: "vercel",
	},
	vue: {
		default: "vue",
	},
	wat: {
		default: "wasm",
	},
	xd: {
		default: "adobe_xd",
	},
	xml: {
		default: "xml",
		custom: [
			{
				matcher: "androidmanifest.xml",
				asset: "android",
			},
		],
	},
	yaml: {
		custom: [
			{
				matcher: "fly.y",
				asset: "fly",
			},
			{
				matcher: "gitlab-ci.y",
				asset: "gitlab",
			},
			{
				matcher: "netlify.y",
				asset: "netlify",
			},
			{
				matcher: /pnpm-\w+\.y/,
				asset: "pnpm",
			},
			{
				matcher: ".yarnrc.y",
				asset: "yarn",
			},
			{
				matcher: /\.github\/workflows\/.+\.y/,
				asset: "github",
			},
		],
		default: "yaml",
	},
	yarnrc: {
		default: "yarn",
	},
	zig: {
		default: "zig",
	},
};
const aliases: Record<string, string[]> = {
	apk: ["apks", "smali", "dex"],
	c: ["a", "h", "o"],
	clj: ["cljc", "cljd", "cljr", "cljs", "edn"],
	ex: ["exs"],
	erl: ["hrl"],
	fla: ["apr", "as", "asc", "jsfl", "swf", "xfl"],
	fs: ["fsi", "fsx", "fsscript"],
	git: [
		"gitattributes",
		"gitconfig",
		"gitignore",
		"gitinclude",
		"gitkeep",
		"gitmessage",
		"gitmodules",
		"gitpreserve",
		"keep",
	],
	hs: ["lhs"],
	indd: ["indb", "indl"],
	idr: ["lidr"],
	js: ["cjs", "mjs"],
	json: ["jsonc"],
	jsx: ["tsx"],
	lock: ["lockb"],
	md: ["markdown", "mdx"],
	ml: ["cmt", "cmti", "codoc", "mli", "odoc"],
	nim: ["nims", "nimble"],
	psd: ["psb"],
	ps1: ["psd1", "psm1"],
	py: ["pyc", "pyd", "pyi", "pyw", "pyz"],
	rb: ["ru"],
	red: ["reds"],
	rs: ["rlib"],
	sass: ["scss"],
	scala: ["sc"],
	ts: ["cts"],
	v: ["vsh"],
	vue: ["vuerc"],
	wat: ["wasm"],
	yaml: ["yml"],
	yarnrc: ["yarnclean", "yarn-integrity"],
	zig: ["zigr", "zir", "zon"],
};
for (const alias in aliases) {
	for (const ext of aliases[alias]) {
		_assets[ext] = _assets[alias];
	}
}

export const assets = _assets;
