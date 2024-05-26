import { makeInstall } from '@circle-ui/utils';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import components from './components';
import '@circle-ui/theme/index.css'

library.add(fas);
const installer = makeInstall(components);

export * from '@circle-ui/components';
export default installer