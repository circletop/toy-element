import { makeInstall } from '@circle-ui/utils';
import components from './components';
import '@circle-ui/theme/index.css'
const installer = makeInstall(components);

export * from '@circle-ui/components';
export default installer