interface LanguageAsset {
	custom?: {
		matcher: RegExp | string;
		asset: string;
	}[];
	default: string;
}

const _assets: Record<string, LanguageAsset> = {
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
	fr: {
		default: "frege",
	},
	fs: {
		default: "fsharp",
	},
	go: {
		default: "go",
	},
	hs: {
		default: "haskell",
	},
	hc: {
		default: "holyc",
	},
	html: {
		default: "html",
	},
	idr: {
		default: "idris",
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
				matcher: "vite.config.",
				asset: "vite",
			},
			{
				matcher: "webpack.",
				asset: "webpack",
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
				matcher: "vercel.json",
				asset: "vercel",
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
				matcher: "vite.config.",
				asset: "vite",
			},
			{
				matcher: "webpack.",
				asset: "webpack",
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
	wat: {
		default: "wasm",
	},
	xml: {
		default: "xml",
	},
	yaml: {
		custom: [
			{
				matcher: "fly.y",
				asset: "fly",
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
		],
		default: "yaml",
	},
	yarnclean: {
		default: "yarn",
	},
	yarnrc: {
		default: "yarn",
	},
	"yarn-integrity": {
		default: "yarn",
	},
	zig: {
		default: "zig",
	},
};
const aliases: Record<string, string[]> = {
	c: ["a", "h", "o"],
	clj: ["cljc", "cljd", "cljr", "cljs", "edn"],
	ex: ["exs"],
	erl: ["hrl"],
	fs: ["fsi", "fsx", "fsscript"],
	hs: ["lhs"],
	idr: ["lidr"],
	js: ["cjs", "mjs"],
	json: ["jsonc"],
	jsx: ["tsx"],
	lock: ["lockb"],
	md: ["markdown", "mdx"],
	ml: ["cmt", "cmti", "codoc", "mli", "odoc"],
	nim: ["nims", "nimble"],
	ps1: ["psd1", "psm1"],
	py: ["pyc", "pyd", "pyi", "pyw", "pyz"],
	rb: ["ru"],
	red: ["reds"],
	rs: ["rlib"],
	scala: ["sc"],
	v: ["vsh"],
	wat: ["wasm"],
	yaml: ["yml"],
	zig: ["zigr", "zir", "zon"],
};
for (const alias in aliases) {
	for (const ext of aliases[alias]) {
		_assets[ext] = _assets[alias];
	}
}

export const assets = _assets;
