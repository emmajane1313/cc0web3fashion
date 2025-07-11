import { MediaImageMimeType } from "@lens-protocol/metadata";

const handlePasteImage = async (
  e: ClipboardEvent,
  id: string,
  media?: {
    [key: string]: {
      type: MediaImageMimeType;
      item: string;
    }[];
  }
): Promise<
  | {
      [key: string]: {
        type: MediaImageMimeType;
        item: string;
      }[];
    }
  | undefined
> => {
  const clipboardData = e.clipboardData;
  if (!clipboardData) return;

  const items = Array.from(clipboardData.items);
  const imageItems = items.filter(item => item.type.startsWith('image/'));
  
  if (imageItems.length === 0) return;

  // Prevent default paste behavior
  e.preventDefault();

  const imageReaders = imageItems.map((item) => {
    return new Promise<string>((resolve, reject) => {
      const file = item.getAsFile();
      if (!file) {
        reject(new Error('No file found'));
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        resolve(e.target?.result as string);
      };
      reader.onerror = () => reject(new Error('Failed to read file'));
      reader.readAsDataURL(file);
    });
  });

  try {
    const newImages = await Promise.all(imageReaders);
    const images = { ...media };
    
    images[id] = [
      ...(images?.[id] || []),
      ...newImages.map((item) => ({
        item,
        type: "image/png" as MediaImageMimeType,
      })),
    ];

    return images;
  } catch (error) {
    console.error('Error processing pasted images:', error);
    return undefined;
  }
};

export default handlePasteImage;