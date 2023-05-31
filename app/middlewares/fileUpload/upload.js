const multer = require('multer');
const mkdirp = require('mkdirp');

const uploadAvatar = (type) => {
    const folderPath = mkdirp.sync(`./app/public/images/${type}`);
    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, `./app/public/images/${type}`);
        },
        filename: (req, file, cb) => {
            cb(null, Date.now() + "-" + file.originalname);
        },
    });
    
    const upload = multer({
        storage: storage, 
        fileFilter: (req, file, cb) => {
            const fileTailList = ['.png', '.jpg'];
            const tail = file.originalname.slice(-4);
            const check = fileTailList.includes(tail);
            if(check) {
                cb(null, true);
            } else {
                cb(new Error("File khong hop le"));
            }
        }
    });
    return upload.single(type);
}

module.exports = {uploadAvatar}