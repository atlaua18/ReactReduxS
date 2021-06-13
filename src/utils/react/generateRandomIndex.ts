import { assoc } from "../js/assoc";

//вместо этого можно использовать библиотеку nanoid (полезнее с реально большими списками)
export const generateRandomString = () => Math.random().toString(36).substring(2, 15);

export const assignId = assoc("id", generateRandomString()); //тут generateRandomString вызывается всего 1 раз, когда мы определяем модуль 

export const generateId = <O extends object>(obj: O) => assignId(obj);// assignId(obj);
// assoc("id", generateRandomString()); //тут generateRandomString будет вызываться каждый раз, когда мы вызываем функцию