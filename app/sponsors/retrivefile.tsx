import { Sponsor } from "./sponsor";
/**
 * NEXT.JS helper: call this inside getStaticProps/getServerSideProps.
 *
 * Example:
 * export async function getStaticProps() {
 *   const sponsors = await getSponsorsFromPublicDir();
 *   return { props: { sponsors } };
 * }
 */
export async function getSponsorsFromPublicDir(): Promise<Sponsor[]> {
  try {
    // require inside function so this module can still be imported in the browser (won't run this on client)
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const fs = require("fs");
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const path = require("path");

    const publicDir = path.join(process.cwd(), "public", "sponsors");
    if (!fs.existsSync(publicDir)) return [];

    const files = fs
      .readdirSync(publicDir)
      .filter((f: string) => /\.(png|jpe?g|svg|webp|avif)$/i.test(f));

    const sponsors: Sponsor[] = files.map((filename: string) => ({
      id: filename.replace(/\W+/g, "-").toLowerCase(),
      name: filename.replace(/\.(png|jpe?g|svg|webp|avif)$/i, ""),
      src: `/sponsors/${filename}`,
      alt: filename.replace(/\.(png|jpe?g|svg|webp|avif)$/i, "").replace(/[-_]/g, " "),
    }));

    return sponsors;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error("getSponsorsFromPublicDir error:", err);
    return [];
  }
}

/**
 * VITE / CRA note:
 * If you use Vite and want front-end-only auto import, move images into src/assets/sponsors and:
 *
 * const modules = import.meta.glob('/src/assets/sponsors/*.{png,jpg,jpeg,svg}', { eager: true });
 * const sponsors = Object.entries(modules).map(([path, m]) => ({ id: ..., src: m.default || m, ... }));
 *
 * I left this out so the component stays framework-agnostic. Tell me if you want the Vite-specific variant.
 */
