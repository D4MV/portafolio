declare module "*.png" {
  import type { ImageMetadata } from "astro";
  const src: ImageMetadata;
  export default src;
}

declare module "*.jpg" {
  import type { ImageMetadata } from "astro";
  const src: ImageMetadata;
  export default src;
}

declare module "*.jpeg" {
  import type { ImageMetadata } from "astro";
  const src: ImageMetadata;
  export default src;
}

declare module "*.webp" {
  import type { ImageMetadata } from "astro";
  const src: ImageMetadata;
  export default src;
}

declare module "*.svg" {
  const src: string;
  export default src;
}

declare module "*.ico" {
  const src: string;
  export default src;
}
