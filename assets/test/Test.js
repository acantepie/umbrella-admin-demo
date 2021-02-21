import './test.scss';

import "./jquery";
import 'bootstrap';
import 'select2/dist/js/select2.full';
import 'select2/dist/js/i18n/fr';
import 'bootstrap-tagsinput';
import 'bootstrap-datepicker';
import 'bootstrap-datepicker/js/locales/bootstrap-datepicker.fr';
import 'eonasdan-bootstrap-datetimepicker';
import 'jquery-toast-plugin';
import 'umbrella_core/jquery-plugins/_jquery_plugins';

// components
import Select2 from "umbrella_core/components/Select2";
import AsyncSelect2 from "umbrella_core/components/AsyncSelect2";
import TagsInput from "umbrella_core/components/TagsInput";
import DatePicker from "umbrella_core/components/DatePicker";
import DateTimePicker from "umbrella_core/components/DateTimePicker";
import UmbrellaFile from "umbrella_core/components/UmbrellaFile";
import Collection from "umbrella_core/components/Collection";

// js response action
import ShowToast from "umbrella_core/jsresponse/action/ShowToast";
import OpenModal from "umbrella_core/jsresponse/action/OpenModal";
import CloseModal from "umbrella_core/jsresponse/action/CloseModal";
import Eval from "umbrella_core/jsresponse/action/Eval";
import Redirect from "umbrella_core/jsresponse/action/Redirect";
import Reload from "umbrella_core/jsresponse/action/Reload";
import RemoveHtml from "umbrella_core/jsresponse/action/RemoveHtml";
import UpdateHtml from "umbrella_core/jsresponse/action/UpdateHtml";

// App
import UmbrellaApp from "umbrella_core/core/UmbrellaApp";

const app = new UmbrellaApp();
window.app = app;

app.use('.js-select2', Select2);
app.use('.js-async-select2', AsyncSelect2);
app.use('.js-tag', TagsInput);
app.use('.js-datepicker', DatePicker);
app.use('.js-datetimepicker', DateTimePicker);
app.use('.js-umbrella-file', UmbrellaFile);
app.use('.js-umbrella-collection', Collection);

app.jsResponseHandler.registerAction('toast', new ShowToast());
app.jsResponseHandler.registerAction('open_modal', new OpenModal());
app.jsResponseHandler.registerAction('close_modal', new CloseModal());
app.jsResponseHandler.registerAction('eval', new Eval());
app.jsResponseHandler.registerAction('redirect', new Redirect());
app.jsResponseHandler.registerAction('reload', new Reload());
app.jsResponseHandler.registerAction('update', new UpdateHtml());
app.jsResponseHandler.registerAction('remove', new RemoveHtml());

window.app.init();