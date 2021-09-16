"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const through2_1 = __importDefault(require("through2"));
function transformStream(callback) {
    return through2_1.default.obj((file, enc, next) => {
        if (file.isBuffer()) {
            const beforeChunk = file.contents.toString(enc);
            try {
                const afterChunk = callback(beforeChunk, file);
                file.contents = Buffer.from(afterChunk);
                next(null, file);
            }
            catch (err) {
                next(err, null);
            }
        }
        else {
            next(null, file);
        }
    });
}
exports.default = transformStream;
