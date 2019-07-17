 const DOMAIN = "sfsx-trading-book"
 
 export function duckifyActionType(module, type) {
    return `${DOMAIN}/${module}/${type}`;
}