const multer = require('multer');
const mkdirp = require('mkdirp');

const uploadImg = () => {

    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, "url-to-folder")
        },
        filename: (req, file, cb) => {
            cb(null, Date.now() + "-" + file.originalname);
        }
    });

    const upload = multer({
        storage: storage,
        fileFilter: (req, file, cb) => {
            
        }
    });

}