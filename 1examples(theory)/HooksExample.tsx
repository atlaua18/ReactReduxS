// Какие бывают Хуки
// 1. useState
// 2. useEffect
// 3. useRef
// 4. useReducer
// 5. useMemo
// 6. useContext
// 7. useCallback
// 8. useImperativeHandle
// 9. useLayoutEffect
// 10. useDebugValue

import React from "react";

// ПРО useEffect();

//у хуков используется в начале use
// React.useEffect();
// !!!!!!!!!!useEffect всегда вызывается при первом рендере
// хуки соблюдают порядок, в котором вы их указали
// можно писать собственные хуки
// хуки на сервере не работают, но как-то можно писать на сервере?

// ЧЕГО ДЕЛАТЬ НЕЛЬЗЯ
// 1) хуки должны быть вызваны только из тела ФУНКЦИОНАЛЬНОГО компонента(если вызывать в класс компоненте - ошибка)
// 2) нельзя менять порядок исполнения хуков 
// 3) оборачивать хуки в if (потому что должен быть вызван из ТЕЛА), чтобы без if, надо использовать [] - это второй параметр

export function MyHooks({title}: { title: string}) {

    //без второго аргумента [], срабатывает на каждое изменение
    React.useEffect( () => {
        //аналог того, что будет происходить в useEffect
        console.log("componentDidMounte"); 
        console.log("componentWillUpdate"); 
    });

    //с пустым аргументом - срабатывает 1 раз
    React.useEffect( () => {
        console.log("componentDidMounte"); 
        //то еть тут без аналога componentWillUpdate

        //эта функция в return может добавляться в любом useEffect
        return () => { // эта функция вызовется прямо перед componentWillUnmount
            console.log("componentWillUnmount")
        }
    }, []); // второй параметр - массив зависимости 

    // тут useEffect будет срабатывать каждый раз, когда мы будем изменять свойство title,то есть useEffect наблюдает за title
    React.useEffect( () => {
        console.log("componentWillReceiveProps: ", title); 
        //то еть тут без аналога componentWillUpdate
    }, [title]);

    //свой Хук(он внизу)
    const [isMounted] = useIsMounted();

    React.useEffect( () => {
        console.log("isMounted", isMounted);
    }, [isMounted]);

    return (
        <div>{title}</div>
    )
}

//свой хук
//у хуков в начале использовать use

function useIsMounted() {
    const [isMounted, setIsMounted] = React.useState( false);

    React.useEffect( () => {
        setIsMounted(true);
    }, [])

    return [isMounted]
}





// ПРО useMemo - для оптимизации приложения

// использовать useMemo, если есть сложные вычисления или еще что-то подобное сложное

export function MyHook({title, id}: { title: string, id?: number}) {
    //чтобы useMemo мог работать, нужно вынести items и multiplier в соответсвующие переменные
    const items = 10;
    const multiplier = 5
    const result = React.useMemo(
        () => calculate(items, multiplier),
        [items, multiplier]
    );
    return (
        <div>{title} {id} {result}</div>
    )
};

function calculate(items: number, multiplier: number) {
    return new Array(items).fill(1).reduce((a, v) => a * multiplier)
}