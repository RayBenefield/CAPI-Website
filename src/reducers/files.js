import findImage from '../data/find-image';
import dataFile1 from '../data/maps-list-page-1.json';
import dataFile2 from '../data/maps-list-page-2.json';

const data = dataFile1.Results.concat(dataFile2.Results);

const files = () => {
    return data.map((map) => {
        return {
            name: map.Name,
            image: findImage(map.Identity.ResourceId),
        };
    })
};

export default files;
