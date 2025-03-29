import { assets } from "./assetsData";

const basePath =
	"https://raw.githubusercontent.com/itspi3141/vsc-discord-rpc/refs/heads/main/assets/icons/";
export const getAsset = ({
	fileName,
	filePath,
	name,
}: {
	fileName?: string;
	filePath?: string;
	name?: string;
}): string | undefined => {
	if (name) return `${basePath}${name}.png`;

	if (!fileName || !filePath) return undefined;

	const ext = fileName.split(".").pop();
	if (!ext) return undefined;

	const lang = assets[ext];
	if (!lang) return `${basePath}text.png`;
	if (lang.custom) {
		for (const custom of lang.custom) {
			if (custom.matcher instanceof RegExp && custom.matcher.test(filePath))
				return `${basePath}${custom.asset}.png`;

			if (typeof custom.matcher === "string") {
				if (custom.matcher.includes("/") && filePath.includes(custom.matcher))
					return `${basePath}${custom.asset}.png`;
				if (fileName.includes(custom.matcher))
					return `${basePath}${custom.asset}.png`;
			}
		}
	}
	return `${basePath}${lang.default}.png`;
};
