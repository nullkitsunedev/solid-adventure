import Image from "next/image";
import { getGalleryImages, resolveImageSource } from "@/sanity/lib/cms";

export default async function GalleryPage() {
  const galleryImages = await getGalleryImages();

  return (
    <div className="site-container py-16">
      <div className="text-center">
        <span className="eyebrow">Gallery</span>
        <h1 className="mt-3 font-heading text-4xl font-extrabold text-school-ink">Photo Gallery</h1>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {galleryImages.map((item) => {
          const imageSrc = resolveImageSource(item.image);

          return (
            <article key={item.slug} className="list-card overflow-hidden">
              {imageSrc ? (
                <Image src={imageSrc} alt={item.title} width={1200} height={900} className="h-64 w-full object-cover" />
              ) : null}
              <div className="p-6">
                <h2 className="font-heading text-xl font-bold text-school-ink">{item.title}</h2>
                {item.caption ? <p className="mt-2 text-sm">{item.caption}</p> : null}
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
