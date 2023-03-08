export const getVideoMime = (src: string) => {
  const extension = src.split('.')?.pop()?.toLowerCase();
  return `media/${extension || 'mp4'}`;
};
