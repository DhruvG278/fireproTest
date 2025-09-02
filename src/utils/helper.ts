import { v7 as uuidv7 } from "uuid";

import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

export const s3 = new S3Client({
  region: process.env.AWS_REGION || "ap-south-1", // 👈 required
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

export async function uploadToS3(file: File): Promise<string> {
  const buffer = Buffer.from(await file.arrayBuffer());
  const key = `blogs/${generateUniqueId()}-${file.name}`;

  await s3.send(
    new PutObjectCommand({
      Bucket: process.env.AWS_S3_BUCKET!,
      Key: key,
      Body: buffer,
      ContentType: file.type,
    })
  );

  return `https://${process.env.AWS_S3_BUCKET}.s3.${process.env.AWS_REGION}.amazonaws.com/${key}`;
}
export const generateUniqueId = (): string => {
  return uuidv7();
};
// TypeScript - Browser / React
export function cleanQuillTableHtml(html: string): string {
  // 1) Decode escaped table-like tags (&lt;table ... &gt; -> <table ...>)
  html = html.replace(
    /&lt;(\/?)(table|tr|td|th|thead|tbody|tfoot)([^&]*)&gt;/gi,
    (_m, slash, tag, attrs) => {
      const decodedAttrs = (attrs || "")
        .replace(/&quot;/g, '"')
        .replace(/&amp;/g, "&");
      return `<${slash}${tag}${decodedAttrs}>`;
    }
  );

  // 2) Parse and unwrap <p> that wrap (or contain) table elements
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");
  const tableSelectors = "table, tr, td, th, thead, tbody, tfoot";

  // Convert NodeList -> Array to avoid live-list issues
  Array.from(doc.querySelectorAll("p")).forEach((p) => {
    // if this <p> contains any table-like element, unwrap it (move children out)
    if (p.querySelector(tableSelectors)) {
      while (p.firstChild) {
        p.parentNode!.insertBefore(p.firstChild, p);
      }
      p.parentNode!.removeChild(p);
    }
  });

  // Remove leftover empty <p> (only whitespace / <br>)
  Array.from(doc.querySelectorAll("p")).forEach((p) => {
    if (!p.textContent?.trim()) p.remove();
  });

  return doc.body.innerHTML;
}
