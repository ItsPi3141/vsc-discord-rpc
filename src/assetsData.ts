interface LanguageAsset {
	custom: {
		matcher: RegExp | string;
		asset: string;
	}[];
	default: string;
}

export const assets: Record<string, LanguageAsset> = {
	js: {
		custom: [],
		default: "javascript",
	},
};
