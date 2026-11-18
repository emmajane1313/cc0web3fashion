import escapeHtml from "./escapeHtml";
import safeExternalUrl from "./safeExternalUrl";

const descriptionRegex = (description: string, messages?: boolean) => {
  const replacedDescription = String(description ?? "").replace(
    /\n\n/g,
    "\n \n"
  );
  const lines = replacedDescription.split(/[\r\n]+/);
  const color = messages ? "#ff494a" : "#81A8F8";

  const styledLines = lines.map((line: string) => {
    const words = line.split(" ");
    const styledWords = words.map((word: string) => {
      const safeWord = escapeHtml(word);
      if (word[0] === "#") {
        return `<em id="hashtags" style="color: ${color}; cursor: pointer; font-style: normal;">${safeWord}</em>`;
      } else if (word[0] === "@") {
        const link = escapeHtml(
          `https://www.chromadin.xyz/?option=history&profile=${encodeURIComponent(
            word.replace("@lens/", "").replace("@", "")
          )}`
        );
        return ` <a href="${link}" rel="noreferrer" target="_blank" style="margin-right: 4px;"> <span style="color: ${color};">${safeWord}</span> </a> `;
      } else if (
        word.startsWith("http") ||
        word.startsWith("www.") ||
        word.endsWith(".xyz") ||
        word.endsWith(".com")
      ) {
        const url = safeExternalUrl(word);
        if (!url) {
          return safeWord;
        }
        return ` <a href="${escapeHtml(
          url
        )}" target="_blank" rel="noreferrer"> <span style="color: ${color};">${safeWord}</span> </a> `;
      } else {
        return safeWord;
      }
    });
    return `<span>${styledWords.join(" ")}</span>`;
  });

  return `<div>${styledLines.join("<br />")}</div>`;
};

export default descriptionRegex;
