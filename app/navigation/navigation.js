import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'


// import Login from '../account/login'
import User from '../page/account/user';
// import Product from '../products/products';
// import EnterWarehouse from '../warehouse/enter-warehouse';
// import UserDetail from '../account/user-detail';
// import LogOut from '../app';
// import Warehouse from '../warehouse/warehouse';
// import Export from '../export/export'
// import ProductDetail from '../products/product-detail';
// import Import from '../report/import';
// import Report from '../report/report';
// import ReportLogin from '../report/report-login'
// import Invoice from '../invoice/invoice'
// import InvoiceDetail from '../invoice/invoice-detail'
const AppNavigator = createStackNavigator({
    // Login: {
    //     screen: Login,
    //     navigationOptions: () => ({
    //         title: 'Login',
    //         // headerBackTitle: 'Back'
    //         header: null,
    //         // okLogin: false
    //     })
    // },
    User: {
        screen: User,
        navigationOptions: () => ({
            title: 'User',
            headerBackTitle: 'Back'
        })
    },
    // Product: {
    //     screen: Product,
    //     navigationOptions: () => ({
    //         title: 'Product',
    //         headerBackTitle: 'back'
    //     })
    // },
    // EnterWarehouse: {
    //     screen: EnterWarehouse,
    //     navigationOptions: () => ({
    //         title: 'EnterWarehouse',
    //         headerBackTitle: null
    //     })
    // },
    // Warehouse: {
    //     screen: Warehouse,
    //     navigationOptions: () => ({
    //         title: 'Warehouse',
    //         headerBackTitle: 'back  ',
    //     })
    // },

    // UserDetail: {
    //     screen: UserDetail,
    //     navigationOptions: () => ({
    //         title: 'UserDetail',
    //         headerBackTitle: 'Back'
    //     })
    // },
    // Export: {
    //     screen: Export,
    //     navigationOptions: () => ({
    //         title: 'Export',
    //         headerBackTitle: 'Back'
    //     })
    // },
    // ProductDetail: {
    //     screen: ProductDetail,
    //     navigationOptions: () => ({
    //         title: 'ProductDetail',
    //         headerBackTitle: 'Back'
    //     })
    // },
    // Import: {
    //     screen: Import,
    //     navigationOptions: () => ({
    //         title: 'Import',
    //         headerBackTitle: 'Back'
    //     })
    // },
    // Report: {
    //     screen: Report,
    //     navigationOptions: () => ({
    //         title: 'Report',
    //         headerBackTitle: 'Back'
    //     })
    // },
    // ReportLogin: {
    //     screen: ReportLogin,
    //     navigationOptions: () => ({
    //         title: 'Report_Login',
    //         headerBackTitle: 'Back'
    //     })
    // },
    // Invoice: {
    //     screen: Invoice,
    //     navigationOptions: () => ({
    //         title: 'Invoice',
    //         headerBackTitle: 'Back'
    //     })
    // },
    // InvoiceDetail: {
    //     screen: InvoiceDetail,
    //     navigationOptions: () => ({
    //         title: 'InvoiceDetail',
    //         headerBackTitle: 'Back'
    //     })
    // }

},
    {
        initialRouteName: 'User',
        defaultNavigationOptions: {
            title: 'User',
            headerStyle: {
                backgroundColor: '#27a084',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        }
    },

)

const Navigation = createAppContainer(AppNavigator);

export default Navigation;