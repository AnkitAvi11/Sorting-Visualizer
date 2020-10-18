
export const getSortAnimations = (arr) => {
    const animations = [];
    if(arr.length <= 1) {
        return arr;
    }

    const auxarray = arr.slice();
    
    bubbleSort(arr, auxarray, animations);

    return animations;

}

const bubbleSort = (arr, auxarray, animations) => {
    for(let i=0;i<arr.length-1;i++){
        for(let j =0;j<arr.length;j++){
            if(arr[j] > arr[j+1]) {
                animations.push([j,j+1]);
                animations.push([j+1,j]);
                animations.push(

                    [[j,arr[j+1]],

                    [j+1,arr[j]]]
                    
                );
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
}