// 接受一系列参数
// 每个参数为一个任务
// 任务逐个同步执行

export type PromiseTask = (props?: any) => Promise<any>;
export default function series(...task: PromiseTask[]) {
    task.reduce((prevTask, nextTask) => {
        const next = prevTask().then(nextTask);
        return () => next;
    }, () => Promise.resolve(null))
}