export interface ITopBannerLeft {
    _id: number | string;
    url: string;
    src: string;
}

export interface ITopBannerCategories {
    _id: number | string | any;
    thumbnail: string;
    title: string;
    url: string;
}

export interface ICategoryColumn {
    _id: number | string;
    column: number;
    categories: ICategory[];
}

export interface ICategory {
    _id: number | string;
    title: string;
    url: string;
    thumbnail: string;
}

export interface IFlashSale {
    _id: number | string;
    title: string;
    thumbnail: string;
    salePercent: number;
    bannerSale: string;
    price: number;
    amountSale: number;
    url: string;
}

export interface IHomeMall {
    _id: string | number;
    list: IHomeMallItem[];
}

export interface IHomeMallBanner {
    _id: string | number;
    title: string;
    thumbnail: string;
    url: string;
}

export interface IHomeMallItem {
    _id: string | number;
    title: string;
    thumbnail: string;
    url: string;
    status?: string;
}

export interface ITopSearch {
    _id: number | string;
    title: string;
    thumbnail: string;
    soldAmount: number;
    url: string;
}

export interface ITodaySuggest {
    _id: number | string;
    title: string;
    thumbnail: string;
    favorite: boolean;
    salePercent: number;
    bannerSale: string;
    price: number;
    soldAmount: number;
    video?: IItemVideo[];
}

interface IItemVideo {
    id: number | string;
    url: string;
    title: string;
}
