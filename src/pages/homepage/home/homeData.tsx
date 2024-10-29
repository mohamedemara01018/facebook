

export const post_footer_data = () => {
    return [
        { id: 1, icon: 'fa-regular fa-share-from-square', data: 'مشاركة' },
        { id: 2, icon: 'fa-brands fa-whatsapp', data: 'ارسال' },
        { id: 3, icon: 'fa-regular fa-comment', data: 'تعليق' },
        { id: 4, icon: 'fa-regular fa-thumbs-up', data: 'اعجبني' },
    ]
}

export const popUp_icon_post_footer = (name: string) => {
    return (
        [
            { id: 1, icon: 'fa-solid fa-plus', title: 'عرض المزيد', desc: 'يسترى منشورات اكثر مشابعة لهذا', hr: false },
            { id: 2, icon: 'fa-solid fa-minus', title: 'عرض الاقل', desc: 'يسترى منشورات اقل مشابعة لهذا', hr: false },
            { id: 3, hr: true },
            { id: 4, icon: 'fa-solid fa-bookmark', title: 'حفظ المنشور', desc: 'ياضافة هذا العنصر الى العناصر المحفوظة', hr: false },
            { id: 5, hr: true },
            { id: 6, icon: 'fa-solid fa-bell', title: 'تشغيل الاشعارات لهذا المنشور', desc: '', hr: false },
            { id: 7, icon: 'fa-brands fa-gripfire', title: 'تضمين', desc: '', hr: false },
            { id: 8, hr: true },
            { id: 9, icon: 'fa-solid fa-xmark', title: 'اخفاء المنشور', desc: 'يعرض منشورات اقل مشابعة لهذا', hr: false },
            { id: 10, icon: 'fa-solid fa-clock', title: `اخفاء منشور ${name} مؤقتا لمدة 30 يوما`, desc: 'التؤقف عن الرؤية المنشورات مؤقتا', hr: false },
            { id: 11, icon: 'fa-solid fa-xmark', title: `الغاء متابعة ${name}`, desc: 'يالتوقف عن رؤية المنشورات مع الابقاء على الصداقة', hr: false },
            { id: 12, icon: 'fa-solid fa-exclamation', title: 'الابلاغ عن المنشور', desc: `لن نخبر ${name} بمن ابلغ عن هذا`, hr: false },
            { id: 13, icon: 'fa-solid fa-ban', title: `حظر ملف ${name} الشخصي`, desc: 'لن تتمكنوا من رؤية بعضكما البعض او التواصل معا مره اخرى.', hr: false },
        ]
    )
}

export const thinkData = [
    { id: 1, title: 'شعور/نشاط', icon: 'fa-solid fa-face-smile' },
    { id: 2, title: 'صورة/فيديو', icon: 'fa-solid fa-images' },
    { id: 3, title: 'فيديو/بث مباشر', icon: 'fa-solid fa-video' },
]


export const rightSideBarData = [
    { id: 1, title: 'الاصدقاء(89 على الانترنت)', icon: "fa-solid fa-user-group",to:'friends' },
    { id: 2, title: 'الذكريات', icon: "fa-solid fa-clock-rotate-left",to:'memorys' },
    { id: 3, title: 'العناصر الحفوظة', icon: "fa-solid fa-bookmark",to:'ElementSaving' },
    { id: 4, title: 'المجموعات', icon: "fa-solid fa-users",to:'groups' },
    { id: 5, title: 'الفيديو', icon: "fa-solid fa-circle-play",to:'vedio' },
    { id: 6, title: 'Marketplace', icon: "fa-solid fa-store",to:'MarkertPlace' },
    { id: 7, title: 'الاخبار', icon: "fa-solid fa-newspaper",to:'news' },
    { id: 8, title: 'Messenger', icon: "fa-brands fa-facebook-messenger",to:'messenger' },
    { id: 9, title: 'MessengerKids', icon: "fa-brands fa-facebook-messenger",to:'MessengerKids' },
    { id: 10, title: 'احدث نشاط اعلاني', icon: "fa-solid fa-panorama",to:'LastActivity' },
    { id: 11, title: 'اعياد الميلاد', icon: "fa-solid fa-cake-candles",to:'BirthDay' },
    { id: 12, title: 'الصفحات', icon: "fa-solid fa-flag",to:'pages' },
    { id: 13, title: 'الطلبات وعمليات الدفع', icon: "fa-regular fa-credit-card",to:'order' },
    { id: 14, title: 'المناسبات', icon: "fa-regular fa-square-plus",to:'occasion' },
    { id: 15, title: 'حملات جمع التبرعات', icon: "fa-solid fa-heart",to:'FundraisingCampaigns' },
    { id: 16, title: 'لعب العاب', icon: "fa-solid fa-gamepad",to:'GamePlay' },
    { id: 17, title: 'مدير الاعلانات', icon: "fa-solid fa-chart-column",to:'AdverseManage' },
    { id: 18, title: 'مركز علم المناخ', icon: "fa-solid fa-sun-plant-wilt",to:'ClimatologyCentre' },
    { id: 19, title: 'مقاطع فيديو الالعاب', icon: "fa-solid fa-clapperboard",to:'VedioGame' },
]
