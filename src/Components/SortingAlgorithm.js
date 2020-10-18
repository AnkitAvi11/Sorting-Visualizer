
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

export const selectionSort = (arr) => {

    const animations = []

    for(let i =0 ;i<arr.length-1;i++) {
        let small = arr[i];
        let pos = i;

        for(let j = i+1;j<arr.length; j++)
        {
            animations.push([j,j]);
            animations.push([j,j]);

            animations.push([[i,arr[i]],[i,arr[i]]]);
            if(arr[j] <= small) {
                small = arr[j];
                pos = j;
            }
        }

        animations.push([i,pos]);
        animations.push([pos,i]);

        animations.push([[pos,arr[i]],[i,arr[pos]]]);

        let temp = arr[i];
        arr[i] = arr[pos];
        arr[pos] = temp;  
    }

    console.log(arr)

    return animations;

}