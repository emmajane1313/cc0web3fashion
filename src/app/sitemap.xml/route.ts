import { NextResponse } from "next/server";
import fs from "node:fs/promises";
import path from "node:path";

const IMAGE_DIR = path.join(process.cwd(), "public", "images");
const VIDEO_DIR = path.join(process.cwd(), "public", "videos");

const IMAGE_TITLE_OVERRIDES: Record<string, string> = {
  "web3cc0fashion.png": "CC0 Web3 Fashion",
  "emmajanemackinnonlee.png": "Emma-Jane MacKinnon-Lee",
  "globaldesignernetwork_poster.png": "Global Designer Network",
  "digitalax_poster.png": "DIGITALAX Poster",
  "digitalax_poster1.png": "DIGITALAX Poster",
  "digitalax_poster2.png": "DIGITALAX Poster",
  "digitalax_poster3.png": "DIGITALAX Poster",
  "w3fw.png": "W3FW",
};

const VIDEO_ENTRIES = [
  {
    page: "/",
    file: "emmajanemackinnonlee-fgostandard-timelapse.mp4",
    title: "FGO1 Timelapse Throwback",
    description:
      "CC0 Web3 Fashion timelapse from Emma-Jane MacKinnon-Lee.",
    thumbnail: "/images/web3cc0fashion.png",
  },
  {
    page: "/",
    file: "w3fw.mp4",
    title: "W3FW GDR Punk",
    description: "CC0 Web3 Fashion video from W3FW GDR Punk.",
    thumbnail: "/images/w3fw.png",
  },
  {
    page: "/mu-dheidhinn/",
    file: "emmajanemackinnonlee.mp4",
    title: "Emma-Jane MacKinnon-Lee",
    description: "About Emma-Jane MacKinnon-Lee and CC0 Web3 Fashion.",
    thumbnail: "/images/emmajanemackinnonlee.png",
  },
  {
    page: "/gdn/",
    file: "globaldesignernetwork.mp4",
    title: "Global Designer Network",
    description: "Global Designer Network for CC0 Web3 Fashion.",
    thumbnail: "/images/globaldesignernetwork_poster.png",
  },
];

const STATIC_PATHS = [
  "/",
  "/dhawu/",
  "/merch/",
  "/мерч/",
  "/forum/",
  "/mu-dheidhinn/",
  "/timeline/",
  "/orgs/",
  "/פרויקטים/",
  "/code-here/",
  "/الكود-هنا/",
  "/gdn/",
];

const toTitle = (file: string) => {
  if (IMAGE_TITLE_OVERRIDES[file]) {
    return IMAGE_TITLE_OVERRIDES[file];
  }

  const base = file.replace(/\.[^/.]+$/, "");
  return base
    .split(/[-_]+/)
    .filter(Boolean)
    .map((chunk) => {
      if (chunk.toUpperCase() === chunk) {
        return chunk;
      }
      return chunk[0]?.toUpperCase() + chunk.slice(1);
    })
    .join(" ");
};

const listPublicFiles = async (dir: string) => {
  try {
    const files = await fs.readdir(dir);
    return files.filter((file) => !file.startsWith(".")).sort();
  } catch (error) {
    return [];
  }
};

const renderImagesXml = (baseUrl: string, imageFiles: string[]) => {
  return imageFiles
    .map((file) => {
      const title = toTitle(file);
      const imageLoc = new URL(`/images/${file}`, baseUrl).toString();

      return `
        <image:image>
          <image:loc>${imageLoc}</image:loc>
          <image:title><![CDATA[${title} | CC0 Web3 Fashion]]></image:title>
          <image:caption><![CDATA[${title} | CC0 Web3 Fashion]]></image:caption>
        </image:image>`;
    })
    .join("");
};

const renderVideosXml = (baseUrl: string, videos: typeof VIDEO_ENTRIES) => {
  return videos
    .map((video) => {
      const contentLoc = new URL(`/videos/${video.file}`, baseUrl).toString();
      const thumbnailLoc = new URL(video.thumbnail, baseUrl).toString();

      return `
        <video:video>
          <video:thumbnail_loc>${thumbnailLoc}</video:thumbnail_loc>
          <video:title><![CDATA[${video.title}]]></video:title>
          <video:description><![CDATA[${video.description}]]></video:description>
          <video:content_loc>${contentLoc}</video:content_loc>
        </video:video>`;
    })
    .join("");
};

export async function GET() {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://cc0web3fashion.com";

  const imageFiles = (await listPublicFiles(IMAGE_DIR)).filter((file) =>
    /\.(png|jpg|jpeg|gif|webp)$/i.test(file)
  );
  const videoFiles = new Set(
    (await listPublicFiles(VIDEO_DIR)).filter((file) => /\.mp4$/i.test(file))
  );
  const videos = VIDEO_ENTRIES.filter((video) => videoFiles.has(video.file));

  const staticXml = STATIC_PATHS.map((page) => {
    const loc = new URL(page, baseUrl).toString();
    const imagesXml = page === "/" ? renderImagesXml(baseUrl, imageFiles) : "";
    const pageVideos = videos.filter((video) => video.page === page);
    const videosXml =
      pageVideos.length > 0 ? renderVideosXml(baseUrl, pageVideos) : "";

    return `
      <url>
        <loc>${loc}</loc>${imagesXml}${videosXml}
      </url>`;
  }).join("");

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset 
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
  xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"
>
${staticXml}
</urlset>`;

  return new NextResponse(body, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
