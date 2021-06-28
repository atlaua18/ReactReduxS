export {};
declare global {
    interface Window {
        __token__: string;
    }    
}

// interface Window {
//     __token__: string;
// }

// declare let __token__ : Window['__token__']