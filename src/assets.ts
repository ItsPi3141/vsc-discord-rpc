import { assets } from "./assetsData";

const basePath =
	"https://raw.githubusercontent.com/itspi3141/vsc-discord-rpc/refs/heads/main/assets/icons/";
export const getAsset = ({
	fileName,
	name,
}: {
	fileName?: string;
	name?: string;
}): string | undefined => {
	if (name) return `${basePath}${name}.png`;

	if (!fileName) return undefined;

	const ext = fileName.split(".").pop();
	if (!ext) return undefined;

	const lang = assets[ext];
	for (const custom of lang.custom) {
		if (custom.matcher instanceof RegExp && custom.matcher.test(fileName))
			return `${basePath}${custom.asset}.png`;

		if (typeof custom.matcher === "string" && fileName.includes(custom.matcher))
			return `${basePath}${custom.asset}.png`;
	}
	return `${basePath}${lang.default}.png`;
};
