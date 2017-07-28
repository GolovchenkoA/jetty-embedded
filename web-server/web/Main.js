/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('TraccarTest.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'TraccarTest.view.main.MainController',
        'TraccarTest.view.main.MainModel',
        'TraccarTest.view.main.List',
        'TraccarTest.view.UsersModel',
        'TraccarTest.view.UsersListServer',
        'TraccarTest.store.UsersServerStore'
    ],

    controller: 'main',
    viewModel: 'main',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        iconCls: 'fa-th-list'
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            plugins: 'responsive',
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    items: [{
            title: 'Home',
            iconCls: 'fa-home',
            // The following grid shares a store with the classic version's grid as well!
            items: [{
                xtype: 'mainlist'
            }]
        },
        /*{

               title: 'MyUsers',
               //iconCls: 'fa-home',
               items: [{
                   xtype: 'usersList'
               }]

           }, */
        {

            title: 'MyServerUsers',
            //iconCls: 'fa-home',
            items: [{
                xtype: 'usersListServer'
            }]

        },/*{

            title: 'Window',
            //iconCls: 'fa-home',
            items: [{

                xtype: 'payment-window'

            }]

        }*//*,{

            title: 'Payment',
            //iconCls: 'fa-home',
            items: [{

                xtype: 'paymentView'

            }]

        }*/
        , {
            title: 'Users',
            iconCls: 'fa-user',
            bind: {
                html: '{loremIpsum}'
            }
        }, {
            title: 'Groups',
            iconCls: 'fa-users',
            bind: {
                html: '{loremIpsum}'
            }
        },  {
            title: 'HTML PAYMENT',
            iconCls: 'fa-users',
            bind: {
                //html: '{loremIpsum}'

                    html: '<b>TestPaymentWithServerRedirect ONLY With POST to http://31.172.143.33:9999/api/liqpay</b> <form method="POST" accept-charset="utf-8" action="https://www.liqpay.com/api/3/checkout">    <input type="hidden" name="data" value="eyJ2ZXJzaW9uIjozLCJhY3Rpb24iOiJwYXkiLCJwdWJsaWNfa2V5IjoiaTgwMzM0MzAzMTQ3IiwiYW1vdW50IjoiNSIsImN1cnJlbmN5IjoiVUFIIiwiZGVzY3JpcHRpb24iOiJUZXN0UGF5bWVudFdpdGhTZXJ2ZXJSZWRpcmVjdCIsInR5cGUiOiJidXkiLCJzYW5kYm94IjoiMSIsInNlcnZlcl91cmwiOiJodHRwOi8vMzEuMTcyLjE0My4zMzo5OTk5L2FwaS9saXFwYXkiLCJsYW5ndWFnZSI6InJ1In0=" />    <input type="hidden" name="signature" value="lWWnIrjK4g3ZctUnl5MZbju9lvM=" />    <button style="border: none !important; display:inline-block !important;text-align: center !important;padding: 7px 20px !important; 		color: #fff !important; font-size:16px !important; font-weight: 600 !important; font-family:OpenSans, sans-serif; cursor: pointer !important; border-radius: 2px !important;		background: rgb(122,183,43) !important;"onmouseover="this.style.opacity=""0.5"";" onmouseout="this.style.opacity=""1"";">         <img src="https://static.liqpay.com/buttons/logo-small.png" name="btn_text"              style="margin-right: 7px !important; vertical-align: middle !important;"/>         <span style="vertical-align:middle; !important">Оплатить 5 UAH</span>     </button> </form>'

            }
        }, {
            title: 'Settings',
            iconCls: 'fa-cog',
            bind: {
                html: '{loremIpsum}'
            }
        }
    ]
});