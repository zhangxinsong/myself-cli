import one from '../components/one.vue';
import two from '../components/two.vue';

export default[{
    path: '',
    component: one,
    redirect: '/one'
},{
    path: '/one',
    component: one
},{
    path: '/two',
    component: two
}]