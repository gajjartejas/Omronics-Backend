import { nanoid } from 'nanoid';
const fs = require('fs');

const ROOT_FOLDER = '/Users/tejas/Desktop/uploads';

/**
 * POST /uploadFile
 * Upload file
 */
export const uploadFile = async (req: any, res: any, next: any) => {
  console.log('req.files', JSON.stringify(!req.files.image));

  try {
    if (!req.files.file && !req.files.image) {
      return res.send('No files provided!');
    }

    if (Array.isArray(req.files.file) || Array.isArray(req.files.image)) {
      return res.send('Multiple files no supported!');
    }

    let sampleFile;
    let folder;
    if (req.files && req.files.image) {
      //image
      sampleFile = req.files.image;
      folder = '/images/';
    } else if (req.files && req.files.file) {
      //PDF ZIP file...
      sampleFile = req.files.file;
      folder = '/resources/';
    }

    let uploadPath = __dirname + '/' + sampleFile.name;
    let fileExt = sampleFile.name
      .split('.')
      .filter(Boolean) // removes empty extensions (e.g. `filename...txt`)
      .slice(1)
      .join('.');
    const id = nanoid();

    const dest = ROOT_FOLDER + folder + id + '.' + fileExt;

    sampleFile.mv(dest, function (err: any) {
      if (err) return res.status(500).send(err);

      res.send(uploadPath);
    });
  } catch (err) {
    return next(err);
  }
};

/**
 * DELETE /deleteFile
 * Delete file
 */
export const deleteFile = async (req: any, res: any, next: any) => {
  try {
    const { id }: { id?: string } = req.params;
    if (!id) {
      return res.send('Id required!');
    }
    const folders = ['/images/', '/resources/'];

    let deleted = false;
    for (let i = 0; i < folders.length; i++) {
      const folder = folders[i];
      const dest = ROOT_FOLDER + folder + id;

      if (fs.existsSync(dest)) {
        fs.unlinkSync(dest);
        deleted = true;
      }
    }

    return res.send({ deleted, id });
  } catch (err) {
    return next(err);
  }
};
