/**
 * @author itck_mth
 * @time 2018/11/1 9:53 AM
 * @class describe
 */

import createFun from './funTest';
import createFun2 from './funTest2';


export default class Test {

    constructor() {
        console.log('test constructor');
        // let fun = createFun('hello name');
        // fun.innerFun1();
        // let name = fun.getName();
        // console.log(`name = ${name}`);

        createFun2().map((result,index,aar)=>{
            aar[index]();
        })

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
}



