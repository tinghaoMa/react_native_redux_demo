/**
 * @author itck_mth
 * @time 2018/11/1 9:53 AM
 * @class describe
 */

import createFun from './funTest';
import createFun2 from './funTest2';
import {compose} from 'redux'

{

    let x = 10

    function fn1(x) {
        console.log('fn1');
        return x + 1
    }

    function fn2(x) {
        console.log('fn2');
        return x + 2
    }

    function fn3(x) {
        console.log('fn3');
        return x + 3
    }

    function fn4(x) {
        console.log('fn4');
        return x + 4
    }

    // 假设我这里想求得这样的值
    let a = fn1(fn2(fn3(fn4(x)))) // 10 + 4 + 3 + 2 + 1 = 20

    // 根据compose的功能，我们可以把上面的这条式子改成如下：
    let composeFn = compose(fn1, fn2, fn3, fn4)
    let b = composeFn(x) // 理论上也应该得到20


    console.log(`a = ${a} b =${b}`);

}
export default class Test {

    constructor() {
        console.log('test constructor');
        // let fun = createFun('hello name');
        // fun.innerFun1();
        // let name = fun.getName();
        // console.log(`name = ${name}`);

        // createFun2().map((result, index, aar) => {
        //     aar[index]();
        // })

    }

    test1 = (param1) => {
        console.log(param1);
        return ({a: a, b: b}) => {
            console.log(`a = ${a} b =${b}`)
        }
    }

    test2 = () => {
        let insert = (value) => (
            {
                into: (array) => (
                    {
                        after: (afterValue) => {
                            array.splice(array.indexOf(afterValue) + 1, 0, value);
                            return array;
                        }
                    }
                )
            }
        );

        insert(2).into([1, 3]).after(1); //[1, 2, 3]
    }

    test3 = () => {
        const pipeline = (...funcs) => {
            return val => funcs.reduce((a, b) => b(a), val);
        }

        const plus1 = a => a + 1;
        const mult2 = a => a * 2;
        const addThenMult = pipeline(plus1, mult2);

        let result = addThenMult(5)
        console.log(`result =${result}`);
    }


    test4 = ({x, y = 5}) => {
        console.log(x, y);
    }


    test5 = ({x, y = 5} = {}) => {
        console.log(x, y);
    }


    sayHello = () => {
        console.log('hello 中间件');
    }
}



