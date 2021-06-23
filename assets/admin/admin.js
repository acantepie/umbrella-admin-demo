import './admin.scss';
import 'umbrella_admin/Admin';


umbrella.jsResponseHandler.registerAction('toast', (params) => {
    umbrella.Toast.show(params['type'], params['text'], params['title'], params['options']);
});

import HighlightCode from './HighlightCode';
customElements.define('hl-code', HighlightCode);





