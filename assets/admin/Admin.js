import './admin.scss';
import 'umbrella_admin/Admin';

window.app.init();

window.app.jsResponseHandler.registerAction('alert', function(params) {
    alert(params.msg);
});
