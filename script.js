//your code here
let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
let arr2 = [];
let mp = {};

for(let i=0;i<touristSpots.length;i++){
    let word = touristSpots[i].split(" ");
    let finalString = "";
    for(let j=0;j<word.length;j++){
        let currWord = word[j].toLowerCase();
        if(currWord != "an" && currWord != "a" && currWord != "the"){
            finalString += word[j] + " ";
        }
    }
    let articleLess = finalString.trim();
    mp[articleLess] = touristSpots[i];
    arr2.push(articleLess);
}
arr2.sort();

let ans = [];
for(let i in arr2){
    ans[i] = mp[arr2[i]];
}
console.log(ans);
