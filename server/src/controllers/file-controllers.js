import Jimp from 'jimp';
import { v4 as uuidv4 } from 'uuid';

export const uploadFile = async (req, res) => {
  try {
    const { fileUrl } = req.body;
    let image;
    let extension;

    if (fileUrl) {
      image = await Jimp.read(fileUrl);
      extension = fileUrl.split('.').pop();
    } else {
      const file = req.file;
      image = await Jimp.read(file.path);
      extension = file.originalname.split('.').pop();
    }

    const imageId = uuidv4().split('-')[0];
    const newname = `./files/${imageId}.${extension}`;

    await image.resize(350, Jimp.AUTO).greyscale().writeAsync(newname);

    /* Envío la imagen de respuesta */
    res.download(newname, newname);
  } catch (error) {
    res.status(500).json({ message: 'error al procesar la imagen' });
  }
};
