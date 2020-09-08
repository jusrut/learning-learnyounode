let http = require('http');
let bl = require('bl');

/**
 * This is a bit of an odd solution. The official solution simply takes each URL,
 * fetches it and saves the results in an array. When the number of results matches
 * the number of arguments (urls) passed in then the results are printed.
 */
let parallel = async () => {
    const string1 = await fetchData(process.argv[2]);
    const string2 = await fetchData(process.argv[3]);
    const string3 = await fetchData(process.argv[4]);
    console.log(string1);
    console.log(string2);
    console.log(string3);
};

let fetchData = (url) => {
    return new Promise(resolve => {
        http.get(
            url,
            (response) => {
                response.pipe(bl((err, data) => {
                    resolve(data.toString());
                }))
            }
        )
    });
}

parallel();
