import { configure } from '@kadira/storybook';

function loadStories() {
    require('../dev/stories');
}

configure(loadStories, module);
