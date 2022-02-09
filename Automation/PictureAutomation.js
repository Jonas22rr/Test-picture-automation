/* eslint-disable default-case */
var __awaiter =
    (this && this.__awaiter) ||
    function (thisArg, _arguments, P, generator) {
        function adopt(value) {
            return value instanceof P
                ? value
                : new P(function (resolve) {
                      resolve(value);
                  });
        }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) {
                try {
                    step(generator.next(value));
                } catch (e) {
                    reject(e);
                }
            }
            function rejected(value) {
                try {
                    step(generator["throw"](value));
                } catch (e) {
                    reject(e);
                }
            }
            function step(result) {
                result.done
                    ? resolve(result.value)
                    : adopt(result.value).then(fulfilled, rejected);
            }
            step(
                (generator = generator.apply(thisArg, _arguments || [])).next()
            );
        });
    };
var __generator =
    (this && this.__generator) ||
    function (thisArg, body) {
        var _ = {
                label: 0,
                sent: function () {
                    if (t[0] & 1) throw t[1];
                    return t[1];
                },
                trys: [],
                ops: [],
            },
            f,
            y,
            t,
            g;
        return (
            (g = { next: verb(0), throw: verb(1), return: verb(2) }),
            typeof Symbol === "function" &&
                (g[Symbol.iterator] = function () {
                    return this;
                }),
            g
        );
        function verb(n) {
            return function (v) {
                return step([n, v]);
            };
        }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (
                        ((f = 1),
                        y &&
                            (t =
                                op[0] & 2
                                    ? y["return"]
                                    : op[0]
                                    ? y["throw"] ||
                                      ((t = y["return"]) && t.call(y), 0)
                                    : y.next) &&
                            !(t = t.call(y, op[1])).done)
                    )
                        return t;
                    if (((y = 0), t)) op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (
                                !((t = _.trys),
                                (t = t.length > 0 && t[t.length - 1])) &&
                                (op[0] === 6 || op[0] === 2)
                            ) {
                                _ = 0;
                                continue;
                            }
                            if (
                                op[0] === 3 &&
                                (!t || (op[1] > t[0] && op[1] < t[3]))
                            ) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2]) _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                } catch (e) {
                    op = [6, e];
                    y = 0;
                } finally {
                    f = t = 0;
                }
            if (op[0] & 5) throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    };
var _this = this;
// import Getter from "./Getter";
// import Writer from "./Writer";
// import Deleter from "./Deleter";
//lkjasödlkfjadöfkljasödflkj
var fs = require("fs").promises;
(function () {
    return __awaiter(_this, void 0, void 0, function () {
        var picturePath, photoPath, deleter, getter, fileNames, writer;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    picturePath = "./src/Components/pictures";
                    photoPath =
                        "/Users/jonas/Programming/AQstify-react/src/photos.js";
                    deleter = new Deleter(photoPath);
                    getter = new Getter(picturePath);
                    return [4 /*yield*/, getter.getFileNames()];
                case 1:
                    fileNames = _a.sent();
                    writer = new Writer(photoPath, fileNames);
                    return [4 /*yield*/, deleter.deleteFile()];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, writer.writePhotoFile()];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
})();
var Writer = /** @class */ (function () {
    function Writer(photoPath, fileNames) {
        this.photoPath = photoPath;
        this.fileNames = fileNames;
        this.photoPath = photoPath;
        this.fileNames = fileNames;
    }
    Writer.prototype.writePhotoFile = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        return [4 /*yield*/, this.writeImport()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.writeObject()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Writer.prototype.writeImport = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _i, _a, fileName, file, dataImport;
            return __generator(this, function (_b) {
                // eslint-disable-next-line default-case
                switch (_b.label) {
                    case 0:
                        // eslint-disable-next-line no-unused-expressions
                        (_i = 0), (_a = this.fileNames);
                        _b.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 5];
                        fileName = _a[_i];
                        return [4 /*yield*/, fileName.toString().split(".")];
                    case 2:
                        file = _b.sent();
                        dataImport =
                            "import picture" +
                            file[0] +
                            ' from "./Components/pictures/' +
                            fileName +
                            '" \n';
                        return [
                            4 /*yield*/,
                            fs.appendFile(this.photoPath, dataImport),
                        ];
                    case 3:
                        _b.sent();
                        _b.label = 4;
                    case 4:
                        _i++;
                        return [3 /*break*/, 1];
                    case 5:
                        return [2 /*return*/];
                }
            });
        });
    };
    Writer.prototype.writeObject = function () {
        return __awaiter(this, void 0, void 0, function () {
            var objectOpen, _i, _a, fileName, file, photo;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        objectOpen = "\nexport const photos = [ \n";
                        return [
                            4 /*yield*/,
                            fs.appendFile(this.photoPath, objectOpen),
                        ];
                    case 1:
                        _b.sent();
                        // eslint-disable-next-line no-unused-expressions
                        (_i = 0), (_a = this.fileNames);
                        _b.label = 2;
                    case 2:
                        if (!(_i < _a.length)) return [3 /*break*/, 6];
                        fileName = _a[_i];
                        return [4 /*yield*/, fileName.toString().split(".")];
                    case 3:
                        file = _b.sent();
                        photo =
                            "{  src: picture" +
                            file[0] +
                            ", \n width: 4, \n height: 3 }, \n";
                        return [
                            4 /*yield*/,
                            fs.appendFile(this.photoPath, photo),
                        ];
                    case 4:
                        _b.sent();
                        _b.label = 5;
                    case 5:
                        _i++;
                        return [3 /*break*/, 2];
                    case 6:
                        return [
                            4 /*yield*/,
                            fs.appendFile(this.photoPath, "]"),
                        ];
                    case 7:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return Writer;
})();
var Getter = /** @class */ (function () {
    function Getter(picturePath) {
        this.picturePath = picturePath;
    }
    Getter.prototype.getFileNames = function () {
        return __awaiter(this, void 0, void 0, function () {
            var fileNames, files, _i, files_1, file, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fileNames = [];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.getPicturePaths()];
                    case 2:
                        files = _a.sent();
                        for (
                            _i = 0, files_1 = files;
                            _i < files_1.length;
                            _i++
                        ) {
                            file = files_1[_i];
                            fileNames.push(file);
                        }
                        if (fileNames) {
                            return [2 /*return*/, fileNames];
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        console.error(err_1);
                        return [3 /*break*/, 4];
                    case 4:
                        return [2 /*return*/];
                }
            });
        });
    };
    Getter.prototype.getPicturePaths = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        return [4 /*yield*/, fs.readdir(this.picturePath)];
                    case 1:
                        return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return Getter;
})();
var Deleter = /** @class */ (function () {
    function Deleter(photoPath) {
        this.photoPath = photoPath;
    }
    Deleter.prototype.deleteFile = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        return [4 /*yield*/, fs.writeFile(this.photoPath, "")];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return Deleter;
})();
