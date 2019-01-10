import cow_say from './cow_say';
import '../css/cow.css';

document.body.innerHTML += `
    <div class="the-cow">
        ${cow_say('Moooo')}
    </div>
`;
