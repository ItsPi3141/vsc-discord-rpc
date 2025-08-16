import { assets } from "./assetsData";

const basePath =
  "https://raw.githubusercontent.com/itspi3141/vsc-discord-rpc/refs/heads/main/assets/icons/";
const timestamp = Date.now();

export const getAsset = ({
  fileName,
  filePath,
  name,
}: {
  fileName?: string;
  filePath?: string;
  name?: string;
}): string | undefined => {
  if (name) return `${basePath}${name}.png?v=${timestamp}`;

  if (!fileName || !filePath) return undefined;

  const ext = fileName.split(".").pop();
  if (!ext) return undefined;

  const lang = assets[ext];
  if (!lang) return `${basePath}text.png?v=${timestamp}`;
  if (lang.custom) {
    for (const custom of lang.custom) {
      if (custom.matcher instanceof RegExp && custom.matcher.test(filePath))
        return `${basePath}${custom.asset}.png?v=${timestamp}`;

      if (typeof custom.matcher === "string") {
        if (custom.matcher.includes("/") && filePath.includes(custom.matcher))
          return `${basePath}${custom.asset}.png?v=${timestamp}`;
        if (fileName.includes(custom.matcher))
          return `${basePath}${custom.asset}.png?v=${timestamp}`;
      }
    }
  }
  return `${basePath}${lang.default}.png?v=${timestamp}`;
};
