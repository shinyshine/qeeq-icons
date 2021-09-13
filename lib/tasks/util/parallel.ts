
export type ParallelTask = (props?: any) => Promise<any>;

export default function parallel(...tasks: ParallelTask[]) {
    return () => Promise.all(
        tasks.map(task => task())
    )
}