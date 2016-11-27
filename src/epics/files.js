import { List } from 'immutable';
import { LOAD_FILES, FILES_LOADED } from '../data/actions';
import findImage from '../data/find-image';
import dataFile1 from '../data/maps-list-page-1.json';
import dataFile2 from '../data/maps-list-page-2.json';

const data = dataFile1.Results.concat(dataFile2.Results);
const filesEpic = action$ => {
    return action$.ofType(LOAD_FILES)
        .delay(3000)
        .mapTo({
            type: FILES_LOADED,
            files: List.of(...data.map((map) => {
                return {
                    name: map.Name,
                    image: findImage(map.Identity.ResourceId),
                };
            }))
        });
};

export default filesEpic;
