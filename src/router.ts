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
import SlideDemo from './components/Carousel/CarouselDemo.vue';
import MessageDemo from './components/Message/MessageDemo.vue';
import RateDemo from './components/Rate/RateDemo.vue';
import Intro from './Doc/Intro.vue';
import Install from './Doc/Install.vue';
import GetStarted from './Doc/GetStarted.vue'




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
                {path:'intro','component':Intro},
                {path:'get-started','component':GetStarted},
                {path:'install','component':Install},
                {path: 'switch', 'component': SwitchDemo},
                {path: 'button', 'component': ButtonDemo},
                {path: 'dialog', 'component': DialogDemo},
                {path: 'tabs', 'component': TabsDemo},
                {path: 'slide', 'component': SlideDemo},
                {path: 'list', 'component': ListDemo},
                {path: 'message', 'component': MessageDemo},
                {path: 'rate', 'component': RateDemo},
            ]
        }
    ]
});