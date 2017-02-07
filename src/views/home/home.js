import { Progress, Navbar, TabItem, TabContainer, TabContainerItem } from 'mint-ui';

export default {
    data() {
        return {
            selected: '1'
        }
    },
    methods: {
        
    },
    components: {
        'mt-progress': Progress,
        'mt-navbar': Navbar,
        'mt-tab-item': TabItem,
        'mt-tab-container': TabContainer,
        'mt-tab-container-item': TabContainerItem
    }
}
