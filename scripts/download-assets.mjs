import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const ASSETS = [
  "https://be10x.in/wp-content/uploads/2023/10/be10x-logowhite-1.png",
  "https://be10x.in/wp-content/uploads/2023/11/Layer.svg",
  "https://be10x.in/wp-content/uploads/2023/03/be10x-logo.png",
  "https://be10x.in/wp-content/uploads/2023/12/Red-Abstract-YouTube-Thumbnail-7.jpg",
  "https://be10x.in/wp-content/uploads/2023/10/Red-Abstract-YouTube-Thumbnail-2.jpg",
  "https://be10x.in/wp-content/uploads/2023/11/PowerBI-2.jpg",
  "https://be10x.in/wp-content/uploads/2025/07/Why-You-Should-Attend-The-Be10x-AI-Tools-Workshop-In-2025.jpg",
  "https://be10x.in/wp-content/uploads/2025/06/Be10x-vs-Other-Online-Courses-Reviews-That-Matter.png",
  "https://be10x.in/wp-content/uploads/2025/06/Everything-You-Need-to-Know-About-Be10X-in-2025.png",
  "https://be10x.in/wp-content/uploads/2025/07/Top-AI-Marketing-Strategies-to-Boost-Your-Brand.png",
  "https://be10x.in/wp-content/uploads/2025/07/Top-10-Ways-To-Excel-With-AI-In-Your-Career-And-Business.png",
  "https://be10x.in/wp-content/uploads/2025/07/Your-Guide-to-the-Be10x-AI-Mastery-Course-Is-It-Right-for-You.png",
  "https://be10x.in/wp-content/uploads/2024/07/Screenshot-2024-07-16-151043.webp",
  "https://be10x.in/wp-content/uploads/2024/07/Screenshot-2024-07-16-151536.webp",
  "https://be10x.in/wp-content/uploads/2024/07/Screenshot-2024-07-16-151618.webp",
  "https://be10x.in/wp-content/uploads/2024/07/Screenshot-2024-07-16-151657.webp",
  "https://be10x.in/wp-content/uploads/2024/07/Screenshot-2024-07-16-151922.webp",
  "https://be10x.in/wp-content/uploads/2024/07/Screenshot-2024-07-16-152002.webp",
  "https://be10x.in/wp-content/uploads/2026/06/download-4-1.png",
  "https://be10x.in/wp-content/uploads/2026/06/download-1-1-1.png",
  "https://be10x.in/wp-content/uploads/2026/06/download-2-1-1.png",
  "https://be10x.in/wp-content/uploads/2026/06/download-3-e1767892208960-1-1.png",
  "https://be10x.in/wp-content/uploads/2025/12/niR8cAxJY-4-HD.webp",
  "https://be10x.in/wp-content/uploads/2025/12/Qcxlh7GW1eQ-HD.webp",
  "https://be10x.in/wp-content/uploads/2025/12/XAV8oEFqmF0-HD.webp",
  "https://be10x.in/wp-content/uploads/2025/06/XvofmELxr70-HD.webp",
  "https://be10x.in/wp-content/uploads/2025/06/niR8cAxJY-4-HD.webp",
  "https://be10x.in/wp-content/uploads/2025/06/Qcxlh7GW1eQ-HD.webp",
  "https://be10x.in/wp-content/uploads/2025/06/9perDWyxNgo-HD.webp",
  "https://be10x.in/wp-content/uploads/2025/12/XvofmELxr70-HD.webp",
  "https://be10x.in/wp-content/uploads/2025/12/iYxI4BIhHag-HD.webp",
  "https://be10x.in/wp-content/uploads/2025/12/ov0QPm2TIko-HD.webp",
  "https://be10x.in/wp-content/uploads/2025/12/c9fyZnBgreA-HD.webp",
  "https://be10x.in/wp-content/uploads/2025/12/EK699kd3LkI-HD.jpg",
  "https://be10x.in/wp-content/uploads/2025/12/5QFPSYNcb88-HD.webp",
  "https://be10x.in/wp-content/uploads/2025/12/x20mAXebsLc-HD.webp",
  "https://be10x.in/wp-content/uploads/2023/11/WhatsApp-Image-2023-11-24-at-22.29.48_d4e7eee4.jpg",
  "https://be10x.in/wp-content/uploads/2024/07/5-insane-ai-tools-to-10x-product-195.jpg",
  "https://be10x.in/wp-content/uploads/2023/11/WhatsApp-Image-2023-11-24-at-22.29.48_25662f4a.jpg",
  "https://be10x.in/wp-content/uploads/2023/11/WhatsApp-Image-2023-11-24-at-22.29.48_a3382fc9.jpg",
  "https://be10x.in/wp-content/uploads/2023/11/Group-95.svg",
  "https://be10x.in/wp-content/uploads/2023/11/be10x-logowhite-2.png",
  "https://be10x.in/wp-content/uploads/2023/11/Layer_2.png",
  "https://be10x.in/wp-content/uploads/2023/11/Layer_2-1.png",
  "https://be10x.in/wp-content/uploads/2023/03/be10x-logo-100x100.png",
];

const OUT_DIR = path.join(process.cwd(), "public", "images", "be10x");

async function downloadOne(url) {
  const filename = decodeURIComponent(url.split("/").pop());
  const dest = path.join(OUT_DIR, filename);
  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.error(`FAILED ${res.status}: ${url}`);
      return;
    }
    const buf = Buffer.from(await res.arrayBuffer());
    await writeFile(dest, buf);
    console.log(`OK: ${filename} (${buf.length} bytes)`);
  } catch (err) {
    console.error(`ERROR: ${url} — ${err.message}`);
  }
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true });
  const batchSize = 4;
  for (let i = 0; i < ASSETS.length; i += batchSize) {
    const batch = ASSETS.slice(i, i + batchSize);
    await Promise.all(batch.map(downloadOne));
  }
  console.log("Done.");
}

main();
