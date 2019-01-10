// assets/js/cow_say.js
import lowerFirst from 'lodash/lowerFirst';

export default function (msg) {
    return `The cow says: ${lowerFirst(msg)}`;
}
