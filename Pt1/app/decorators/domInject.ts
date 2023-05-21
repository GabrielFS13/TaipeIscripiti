export function domInject(s: string){
    return function(target: any, propertKey: string){
        let elemento:HTMLElement | null = null 
        const getter = function(){
            if(!elemento){
                elemento = document.querySelector(s) as HTMLElement
            }
            return elemento
        }
        Object.defineProperty(target, propertKey, {
            get: getter
        })
    }
}