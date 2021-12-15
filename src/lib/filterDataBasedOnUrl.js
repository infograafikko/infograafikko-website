export function filterDataBasedOnUrl(path, data, urlString){

    //parse slug from url
    const parsedSlug = path.split(urlString).pop();

    //check if url matches
    const slugInData = data.filter(d => d.url === parsedSlug)
    return slugInData[0];
}
