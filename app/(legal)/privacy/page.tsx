import type { Metadata } from 'next';
import fs from 'fs';
import path from 'path';
import MarkdownIt from 'markdown-it';

const TITLE = 'Privacy Policy';

export const metadata: Metadata = {
  title: TITLE,
};

export default function Page() {
  const filePath = path.join(process.cwd(), 'src/content/privacy/privacy.md');
  const source = fs.readFileSync(filePath, 'utf8');
  const html = new MarkdownIt({ html: true, linkify: true }).render(source);

  return (
    <>
      <section className="border-b border-ink-200 pt-32 pb-12 md:pt-40">
        <div className="container-page">
          <p className="eyebrow mb-6">Legal</p>
          <h1>{TITLE}</h1>
        </div>
      </section>

      <section className="py-14 md:py-16">
        <div className="container-page">
          <div
            className="prose prose-lg max-w-prose prose-headings:font-display prose-headings:font-medium prose-headings:text-ink-800 prose-p:text-ink-500 prose-li:text-ink-500 prose-a:text-forest-700 prose-strong:text-ink-700"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </section>
    </>
  );
}
