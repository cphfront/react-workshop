import riot from 'riot';
import MarathonStore from 'MarathonStore';
import 'tags.js';

var marathonStore = new MarathonStore()

riot.mount('marathon-app', {store: marathonStore})
