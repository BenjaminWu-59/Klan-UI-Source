import Dialog from './Dialog.vue';
import {createApp, h} from 'vue';

export const openDialog = (options) => {
    const {title, content,ok,cancel} = options;
    const div = document.createElement('div'); //创建div
    document.body.appendChild(div); //将创建的div放入body
    const close = () => {
        //@ts-ignore
        app.unmount(div);
        div.remove();
    };
    const app = createApp({
        render() {
            return h(Dialog, {
                visible: true,ok,cancel,
                'onUpdate:visible': (newVisible) => {
                    if (newVisible === false) {
                        close();
                    }
                }
            }, {title, content});
        }
    });
    app.mount(div); // 将Dialog放入div
};