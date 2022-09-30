export interface ITopBannerLeft {
    id: number | string;
    url: string;
    link: string;
}

export interface ITopBannerCategories {
    id: number | string;
    thumbnail: string;
    title: string;
    link: string;
}

export interface ICategory {
    id: number | string;
    categories: ICategoryList[];
}

export interface ICategoryList {
    id: number | string;
    title: string;
    link: string;
    thumbnail: string;
}

export interface IFlashSale {
    id: number | string;
    title: string;
    thumbnail: string;
    salePercent: number;
    bannerSale: string;
    price: number;
    amountSale: number;
    link: string;
}

export interface IHomeMall {
    id: string | number;
    list: IHomeMallList[];
}

export interface IHomeMallList {
    id: string | number;
    title: string;
    thumbnail: string;
    link: string;
    status?: string;
}

export interface ITopSearch {
    id: number | string;
    title: string;
    thumbnail: string;
    soldAmount: number;
    link: string;
}

export interface ITodaySuggest {
    id: number | string;
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
