const getCommentHTML = (
  e: any,
  resultElement: Element,
  saved?: boolean
): string => {
  const regexMentions = /(?:^|\s)[#@](\S+)/g;

  const finalHTML = String((saved ? e : e.target.value) ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(regexMentions, (match: string) => {
      return `<span style="color: #0091ff">${match}</span>`;
    });
  if (finalHTML && resultElement) (resultElement as any).innerHTML = finalHTML;
  return finalHTML;
};

export default getCommentHTML;
