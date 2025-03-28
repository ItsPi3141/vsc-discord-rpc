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
		custom: [],
		default: "javascript",
	},
	json: {
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
		default: "toml",
	},
	ts: {
		default: "typescript",
	},
	v: {
		default: "v",
	},
	wat: {
		default: "wasm",
	},
	xml: {
		default: "xml",
	},
	yaml: {
		default: "yaml",
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
