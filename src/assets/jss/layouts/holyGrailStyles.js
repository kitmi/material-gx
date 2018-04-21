import { appPath } from '../../../utils/mowa';
import { $hBox, $vBox, $vAlignInHBox } from '../flex';

const vbox = $vBox();
const hbox = $hBox();

export default sideWidth => theme => ({
    root: {
        height: '100%',
        ...vbox
    },
    headerFooter: {
        flex: 'none'
    },
    body: {
        ...hbox,
        flex: '1 0 auto'
    },
    content: {
        flexBasis: 'auto',
        flexGrow: 1,
        minWidth: 1024 - sideWidth * 2,
        maxWidth: `calc(100% - ${sideWidth * 2}px)`
    },
    left: {
        order: -1
    },
    side: {
        flex: [[0, 0, sideWidth + 'px']]
    }
});
