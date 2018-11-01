/**
 * @author itck_mth
 * @time 2018/11/1 10:16 AM
 * @class describe
 */

export default function createFun2() {
    console.log('createFun2 run');

    innerFun1 = () => {
        console.log('数组 innerFun1 run ');
    }

    innerFun2 = () => {
        console.log('数组 innerFun2 run ');
    }


    return [
        innerFun1,
        innerFun2,
    ]

}