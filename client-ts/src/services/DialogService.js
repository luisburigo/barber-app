import {createElement} from "react";
import {render, unmountComponentAtNode} from "react-dom";

class DialogService {
    static async open(dialog, props) {
        return new Promise((resolve, reject) => {
            let component;
            const container = document.getElementById("dialog-container");
            const defaultProps = {
                open: true,
                close: (value) => {
                    unmountComponentAtNode(container);
                    resolve(value);
                    component = null;
                },
            };
            component = createElement(dialog, {...props, ...defaultProps});
            render(component, container)
        });
    }
}

export {DialogService};
