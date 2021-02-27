import './admin.scss';
import umbrellaApp from 'umbrella_admin/Admin';

umbrellaApp.jsResponseHandler.registerAction('alert', function(params) {
    alert(params.msg);
});

umbrellaApp.init();