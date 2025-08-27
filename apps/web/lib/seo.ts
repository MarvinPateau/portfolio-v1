export const defaultSeo = {
  title: "Portfolio",
  description: "Personal portfolio"
};

export function getMeta(options?: { title?: string; description?: string }) {
  return {
    title: options?.title ?? defaultSeo.title,
    description: options?.description ?? defaultSeo.description
  };
}
