// assets/js/cow_say.js
import _ from 'lodash';

export default function (msg) {
    return `The cow says: ${_.lowerFirst(msg)}`;
}
