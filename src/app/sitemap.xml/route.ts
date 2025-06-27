import { NextResponse } from "next/server";

function generateStaticUrls(
  baseUrl: string,
  paths: { base: string; images: { title: string; image: string }[] }[]
) {
  return paths
    .map((path) => {
      const loc = `${baseUrl}${path.base}`;

      return `
      <url>
        <loc>${loc}</loc>
 
${path.images.map(
  (im) =>
    `<image:image>
            <image:loc>${`${baseUrl}/images/${im.image}`}</image:loc>
            <image:title><![CDATA[${
              im.title
            } | Emma-Jane MacKinnon-Lee ]]></image:title>
            <image:caption><![CDATA[${
              im.title
            } | Emma-Jane MacKinnon-Lee]]></image:caption>
          </image:image>
         `
)}
      </url>
      `;
    })
    .join("");
}

export async function GET() {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://cc0web3fashion.com";

  const staticPaths = [
    { images: [], base: "/" },
    { images: [], base: "/dhawu/" },
    { images: [], base: "/мерч/" },
    { images: [], base: "/forum/" },
    { images: [], base: "/mu-dheidhinn/" },
    { images: [], base: "/timeline/" },
    { images: [], base: "/מוסדות/" },
    { images: [], base: "/الكود-هنا/" },
  ];
  const staticXml = generateStaticUrls(baseUrl, staticPaths);

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset 
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
>
${staticXml}
</urlset>`;

  return new NextResponse(body, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
