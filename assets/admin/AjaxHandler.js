import AjaxCallbackHandler from "umbrella_core/core/AjaxCallbackHandler";

app.useAjaxHandler('custom', new AjaxCallbackHandler(
    (response) => console.log('Custom handler success :', response),
    (requestObject, error, errorThrown) => console.log('Custom handler error :', requestObject, error, errorThrown),
    (complete) => console.log('Custom handler complete'),
));