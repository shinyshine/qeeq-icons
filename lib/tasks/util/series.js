"use strict";
// 接受一系列参数
// 每个参数为一个任务
// 任务逐个同步执行
Object.defineProperty(exports, "__esModule", { value: true });
function series(...task) {
    task.reduce((prevTask, nextTask) => {
        const next = prevTask().then(nextTask);
        return () => next;
    }, () => Promise.resolve(null));
}
exports.default = series;
