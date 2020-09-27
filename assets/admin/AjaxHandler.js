import AjaxCallbackHandler from "umbrella_core/core/AjaxCallbackHandler";

app.useAjaxHandler('custom', new AjaxCallbackHandler(
    (response) => {
        for (const message of response) {
            if (message.action === 'say') {
                console.log(message.params['msg']);
            }
        }
    },
    (requestObject, error, errorThrown) => {},
    (complete) => {},
));