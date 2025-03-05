function findSecondLargest(n) {
    let largest = -Infinity;  
    let secondLargest = -Infinity;  

    for (let i = 0; i < n.length; i++) {
        if (n[i] > largest) { 
            secondLargest = largest; 
            largest = n[i]; 
        } else if (n[i] > secondLargest && n[i] !== largest) { 
            secondLargest = n[i]; 
        }
    }

    console.log("Largest:", largest);
    console.log("Second Largest:", secondLargest);
}

const numbers = [10, 5, 8, 20, 15];
findSecondLargest(numbers);
