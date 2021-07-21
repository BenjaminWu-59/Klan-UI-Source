import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import SwitchDemo from './components/Switch/SwitchDemo.vue';
import ButtonDemo from './components/Button/ButtonDemo.vue';
import DialogDemo from './components/Dialog/DialogDemo.vue';
import TabsDemo from './components/Tabs/TabsDemo.vue';
import ListDemo from './components/List/ListDemo.vue';
import {createRouter, createWebHashHistory} from 'vue-router';
import Markdown from './components/Markdown.vue';
import {h} from 'vue';
import SlideDemo from './components/SlideDemo.vue';





const history = createWebHashHistory();
export const router = createRouter({
    history: history,
    routes: [
        {path: '/', component: Home},
        {
            path: '/doc',
            component: Doc,
            children: [
                {path:'',redirect:'/doc/intro'},
                {path:'intro',component:h(Markdown,{path:'../markdown/intro.md',key:'1'})},
                {path:'get-started',component:h(Markdown,{path:'../markdown/get-started.md',key:'2'})},
                {path:'install',component:h(Markdown,{path:'../markdown/install.md',key:'3'})},
                {path: 'switch', 'component': SwitchDemo},
                {path: 'button', 'component': ButtonDemo},
                {path: 'dialog', 'component': DialogDemo},
                {path: 'tabs', 'component': TabsDemo},
                {path: 'slide', 'component': SlideDemo},
                {path: 'list', 'component': ListDemo},
            ]
        }
    ]
});