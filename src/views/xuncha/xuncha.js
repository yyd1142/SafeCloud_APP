import { Navbar, TabItem, TabContainer, TabContainerItem } from 'mint-ui';

export default {
    data() {
        return {
            active: 'tab-container1'
        }
    },
    methods: {
        
    },
    components: {
        'mt-navbar': Navbar,
        'mt-tab-item': TabItem,
        'mt-tab-container': TabContainer,
        'mt-tab-container-item': TabContainerItem
    }
}
