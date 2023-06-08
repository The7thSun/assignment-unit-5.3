console.log('***** Music Collection *****')
let object0 = {
    title: 'youre my fantasy',
    artist: 'Robin thicke',
    yearsPublished: '2019',
};
let Collection = [object0]
function addToCollection(title, artist, yearsPublished){
return object0;
}
console.log(addToCollection(object0));
//test music collections 
object0 = ['far from the madding city','oohyo', '2019']
console.log(addToCollection(object0));
object0 = ['adventure','oohyo','2015']
console.log(addToCollection(object0));
object0 = ['consume','chase atlantic','2018']
console.log(addToCollection(object0));
object0 = ['the adults are talking','the strokes','2020']
console.log(addToCollection(object0));
object0 = ['everybody loves the sunshine','naohirock','1995']
console.log(addToCollection(object0));
//end test 
function showcollections(arr){
    console.log('number of items in the collection:'+ arr.length);
    for(let i=0;i<Array.length;i++){
        let album= arr[i];
        let musicInfo= album.title + 'by' + album.artist + 'published in' + album.yearsPublished;
        console.log(musicInfo);
    }
    return Collection
}
//showcollections test 
let collectionArray=[{
    title: 'adventure',
    artist: 'oohyo',
    yearsPublished: '2015'
},
{
    title: 'far from the madding city',
    artist: 'oohyo',
    yearsPublished: '2019',
},
{
    title: 'Consume',
    artist: 'chaseAtlantic',
    yearsPublished: '2019',
}]
result= showcollections(collectionArray);
console.log('this is my results:',result);
//end test
// created a function taking in an artist as a parameter 
function findByArtist(artist){
    // declare an empty array to later push the artists into
    let findByArtistArray= [];
    // loop through the array to see touch all the contents of the album
    for(let i=0; i< collectionArray.length;i++){
        // declared the album equal to the arrays index so the album can be ther in its entirity 
        let album= collectionArray[i];
        // now if the albums artist is true to be the artist youre looking for 
        //i want the function to push the artist into the empty array
        if(album.artist===artist){
            findByArtistArray.push(album.artist);
        }
    }
    //loop through the array and if there are 0 matches log none was found 
    if(findByArtistArray.length===0){
        console.log('none was found');
    }


return findByArtistArray;
}
//findbyartist test
result= findByArtist('oohyo')
console.log('found:',result);
result= findByArtist('chaseAtlantic')
console.log('found', result);
result= findByArtist('jaden smith')
console.log('found', result);