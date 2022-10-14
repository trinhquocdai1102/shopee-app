import { v4 as uuidv4 } from 'uuid';
export const topNavLeftItems = [
    {
        id: uuidv4(),
        title: 'Kênh Người Bán',
        clickAble: true,
        url: '',
        icon: [],
    },
    {
        id: uuidv4(),
        title: 'Trở thành Người bán Shopee',
        clickAble: true,
        url: '',
        icon: [],
    },
    {
        id: uuidv4(),
        title: 'Tải ứng dụng',
        clickAble: true,
        url: '',
        icon: [],
    },
    {
        id: uuidv4(),
        title: 'Kết nối',
        clickAble: false,
        url: '',
        icon: [
            { id: uuidv4(), thumbnail: 'facebook', url: '' },
            { id: uuidv4(), thumbnail: 'instagram', url: '' },
        ],
    },
];

export const topNavRightItems = [
    {
        id: uuidv4(),
        title: ['Thông báo'],
        url: '',
        icon: [{ id: uuidv4(), thumbnail: 'bell' }],
    },
    {
        id: uuidv4(),
        title: ['Hỗ trợ'],
        url: '',
        icon: [{ id: uuidv4(), thumbnail: 'question-circle' }],
    },
    {
        id: uuidv4(),
        title: ['Tiếng Việt', 'Tiếng Anh'],
        url: '',
        icon: [
            { id: uuidv4(), thumbnail: 'globe' },
            { id: uuidv4(), thumbnail: 'chevron-down' },
        ],
    },
];

export const listUnderSearchBox = [
    {
        id: uuidv4(),
        title: 'Áo khoác',
        url: '',
    },
    {
        id: uuidv4(),
        title: 'Dép',
        url: '',
    },
    {
        id: uuidv4(),
        title: 'Túi sách nữ',
        url: '',
    },
    {
        id: uuidv4(),
        title: 'Áo Croptop',
        url: '',
    },
    {
        id: uuidv4(),
        title: 'Ốp iPhone',
        url: '',
    },
    {
        id: uuidv4(),
        title: 'Tai Nghe Bluetooth',
        url: '',
    },
    {
        id: uuidv4(),
        title: 'Váy',
        url: '',
    },
    {
        id: uuidv4(),
        title: 'Bánh Tráng Phơi Sương',
        url: '',
    },
];
