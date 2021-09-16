
export type PromisfyFun = (props?: any) => NodeJS.ReadWriteStream;

export default function promisfy(fun: PromisfyFun) {
   return () => new Promise(resolve => {
    fun().on('finish', function() {
        resolve(null)
    })
})
}