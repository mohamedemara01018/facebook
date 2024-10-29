export const middleData = [
    { id: 1, icon: 'fa-solid fa-gamepad', data: 'العاب', to: 'games' },
    { id: 2, icon: 'fa-solid fa-users', data: 'المجموعات', to: 'groups' },
    { id: 3, icon: 'fa-solid fa-store', data: 'marketplace', to: 'MarketPalce' },
    { id: 4, icon: 'fa-regular fa-circle-play', data: 'فيديو', to: 'vedios' },
    { id: 5, icon: 'fa-solid fa-house', data: 'الصفحة الرئسية', to: 'MainHome' },
]




import myImage from '../../../1-images/٢٠٢٢١٢٢٥_١٥٢٠٤١.jpg'
import Account from './head-left/Account/Account'
import List from './head-left/list/List'
import Massenger from './head-left/messenger/Messenger'
import Notifications from './head-left/notifications/Notifications'

export const leftData = [
    { id: 1, icon: myImage, component: <Account />, data: 'الحساب' },
    { id: 2, icon: 'fa-solid fa-bell', component: <Notifications />, data: 'الاشعارات' },
    { id: 3, icon: 'fa-brands fa-facebook-messenger', component: <Massenger />, data: 'Messenge' },
    { id: 4, icon: 'fa-regular fa-rectangle-list', component: <List />, data: 'القائمة' },
]

export const listData_leftPart_lefthead = [
    { id: 1, icon: 'fa-solid fa-pen-to-square', data: 'منشور', to: 'CreatePost' },
    { id: 2, icon: 'fa-solid fa-book-open', data: 'قصة', to: 'CreateStory' },
    { id: 3, icon: 'fa-solid fa-circle-play', data: 'ريلز', to: 'CreateRyls' },
    { id: 4, icon: 'fa-solid fa-star', data: 'مناسبة شخصية', to: 'CreatePersonal' },
    { id: 5, icon: 'fa-solid fa-font-awesome', data: <hr />, to: <hr /> },
    { id: 6, icon: 'fa-solid fa-font-awesome', data: 'صفحة', to: 'CreatePage' },
    { id: 7, icon: 'fa-solid fa-microphone-lines', data: 'اعلان', to: 'CreateAdvirse' },
    { id: 8, icon: 'fa-solid fa-users', data: 'مجموعة', to: 'CreateGroups' },
    { id: 9, icon: 'fa-solid fa-book-medical', data: 'مناسبه', to: 'CreateOccasion' },
    { id: 10, icon: 'fa-solid fa-bag-shopping', data: 'قائمة معروضات على Marketplace', to: 'CreateMarketPlace' },
]








export const listData_rightPart_lefthead: { id?: number, title?: string, hr: boolean, data?: { id: number, icon: string, title: string, desc: string, to: string }[] }[] = [
    {
        id: 1,
        title: 'اجتماعية',
        hr: false,
        data: [
            { id: 1, icon: 'fa-solid fa-book-medical', title: 'المناسبات', desc: '.يمكنك تنظيم والبحث عن الاحداث واشياء اخرى يمكنك القيام بهم علي الانترنت او بالجوار', to: 'occasion' },
            { id: 2, icon: 'fa-solid fa-user-group', title: 'الأصدقاء(89 على الانترنت)', desc: '.يمكنك بحث عن اصدقاء او اشخاص قد تعرفهم', to: 'friends' },
            { id: 3, icon: 'fa-solid fa-users', title: 'المجموعات', desc: '.التواصل مع اشخاص يشاركونك نفس اهتماماتك', to: 'groups' },
            { id: 4, icon: 'fa-solid fa-newspaper', title: 'اخر الاخبار', desc: '.عرض المنشورات الملائمة من الاشخاص والصفحات التي تعرفها', to: 'LastNews' },
            { id: 5, icon: 'fa-solid fa-radio', title: 'الاخبار', desc: '.يمكنك رؤية أحدث المنشورات من الاصدقاء ومجموعات وصفحات وغير ذلك كثير', to: 'news' },
            { id: 6, icon: 'fa-solid fa-font-awesome', title: 'الصفحات', desc: '.يمكنك استكشاف الانشطة التجارية والتواصل معها علي الفيسبوك', to: 'pages' },
        ]
    },
    { hr: true },
    {
        id: 2,
        title: 'ترفيه',
        hr: false,
        data: [
            { id: 1, icon: 'fa-solid fa-film', title: 'مقاطع فيديو الالعاب', desc: '.يمكنك مشاهده العابك المفضلة ومشاهدة القائمين بالبث الذين تفضلهم والتواصل معهم', to: 'VedioGame' },
            { id: 2, icon: 'fa-solid fa-gamepad', title: 'لعب العاب', desc: '.يمكنك لعب العابك المفضلة', to: 'GamePlay' },
            { id: 3, icon: 'fa-regular fa-circle-play', title: 'الفديو', desc: '.وجهة فيديو مخصصة لاهتماماتك وجهات تواصلك', to: 'vedio' },

        ]
    },
    { hr: true },

    {
        id: 3,
        title: 'تسوق',
        hr: false,
        data: [
            { id: 1, icon: 'fa-solid fa-credit-card', title: 'الطالبات وعمليات الدفع', desc: '.طريقة سهلة وأمنة للدفع من خلال التطبيقات التى تستخدمها بالفعل', to: 'order' },
            { id: 2, icon: 'fa-solid fa-store', title: 'Marketplace', desc: '.يمكنك البيع والشراء في مجتمعك', to: 'MarketPlace' },
        ]
    },
    { hr: true },
    {
        id: 4,
        title: 'شخصية',
        hr: false,
        data: [
            { id: 1, icon: 'fa-solid fa-images', title: 'احدث نشاط انساني', desc: '.يمكنك عرض جميع الاعلانات التي تفاعلت معها على الفيسبوك', to: 'LastActivity' },
            { id: 2, icon: 'fa-solid fa-clock-rotate-left', title: 'الذكريات', desc: '.يمكنك تصفح صورك ومقاطع الفيديو ومنشوراتك القديمه على فيسبوك', to: 'memorys' },
            { id: 3, icon: 'fa-solid fa-bookmark', title: 'العناصر المحفوظة', desc: '.يمكنك العثور علي المنشورات والصور ومقاطع الفيديو  التي حفظتها للرجوع اليها لاحقا', to: 'ElementSaving' },

        ]
    },
    { hr: true },
    {
        id: 5,
        title: 'احترافية',
        hr: false,
        data: [
            { id: 1, icon: 'fa-solid fa-chart-simple', title: 'مدير الاعلانات', desc: '.يمكنك انشاء اعلانات وادارتها وتتبع مستوى أدائها', to: 'AdverseManage' },

        ]
    },
    { hr: true },
    {
        id: 6,
        title: 'موارد المجتمع',
        hr: false,
        data: [
            { id: 1, icon: 'fa-solid fa-sun-plant-wilt', title: 'مركز علم المناخ', desc: '.تعرف على التغيرات المناخية وتأثيرها', to: 'ClimatologyCentre' },
            { id: 2, icon: 'fa-solid fa-heart', title: 'حملات جمع التبرعات', desc: '.يمكنك التبرع وجمع تبرعات للمنظات غير الهادفة للربح ولدعم قضايا شخصية', to: 'FundraisingCampaigns' },

        ]
    },
    { hr: true },
    {
        id: 7,
        title: 'المزيد من Meta',
        hr: false,
        data: [
            { id: 1, icon: 'fa-brands fa-facebook-messenger', title: 'Messenger', desc: '.يمكن للأطفال مراسلة اصدقائهم المقربين وعائلتهم', to: "messenger" },
            { id: 2, icon: 'fa-brands fa-whatsapp', title: 'واتساب', desc: '.يمكنك مراسلة الأشخاص والاتصال بهم بشكل خاص على الكمبيوتر', to: "whatsapp" },

        ]
    },

]