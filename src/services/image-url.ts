import noImagePlaceholder from '../assets/no-image-placeholder.webp';

export const getCroppedImageUrl = (url: string) => {
  if (!url) return noImagePlaceholder;

  const index = url.indexOf('media/') + 'media/'.length;
  return url.slice(0, index) + 'crop/600/400/' + url.slice(index);
}
