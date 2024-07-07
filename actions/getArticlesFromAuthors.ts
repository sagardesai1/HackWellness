import fs from "fs";
import path from "path";

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || "https://www.hack-wellness.com";

function getDirectories(basePath: string): string[] {
  return fs
    .readdirSync(basePath)
    .map((file) => {
      const fullPath = path.join(basePath, file);
      if (fs.statSync(fullPath).isDirectory()) {
        return fullPath;
      }
      return "";
    })
    .filter(Boolean);
}

export function getArticlesFromAuthors(directoryPath: string): string[] {
  const directories = getDirectories(directoryPath);
  return directories.map((directory) => {
    const relativePath = path.relative(process.cwd(), directory);
    const urlPath = relativePath.replace(/\\/g, "/").replace(/^app\//, "");
    return `${BASE_URL}/${urlPath}`;
  });
}
