/**
 * @author itck_mth
 * @time 2018/11/1 10:16 AM
 * @class describe
 */

export default function createFun(text) {
    console.log('createFun run');
    let name = text;

    innerFun1 = () => {
        console.log('innerFun11111 run ');
    }

    innerFun2 = () => {
        console.log('innerFun22222 run ');
    }

    getName = () => name;


    return {
        innerFun1,
        innerFun2,
        getName,
    }

}