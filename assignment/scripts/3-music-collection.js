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
    yearsPublished: '2019'
}]
console.log(showcollections(collectionArray));
//end test
function findByArtist(artist){
    let findByArtistArray= [];
    for(let i=0; i<Collection.length;i++){
        let album= Collection[i];
        if(album.artist===artist){
            findByArtistArray.push(album);
        }
    }
return findByArtistArray;
}
//findbyartist test
let artistName= 'chase atlantic';
let artistResults= findByArtist(artistName);
console.log(artistResults);
