"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryPaths = exports.categoriesToPreRender = exports.postPaths = exports.staticPostsIdList = void 0;
exports.staticPostsIdList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
exports.postPaths = exports.staticPostsIdList.map(function (id) { return ({
    params: { id: String(id) }
}); });
exports.categoriesToPreRender = ["Science", "Technology", "People"];
exports.categoryPaths = exports.categoriesToPreRender.map(function (category) { return ({
    params: { id: category }
}); });
//# sourceMappingURL=index.js.map