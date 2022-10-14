import Instance from './instance';

const APICommon = 'http://localhost:3000/api/v1';

export function getTopAdsList(): Promise<any> {
    return Instance.get(`${APICommon}/ads`);
}
export function getUnderTopAdsList(): Promise<any> {
    return Instance.get(`${APICommon}/under-top-ads`);
}
export function getCategoryList(): Promise<any> {
    return Instance.get(`${APICommon}/categories`);
}
export function getCategoryColumnList(): Promise<any> {
    return Instance.get(`${APICommon}/category-column`);
}
export function getFlashSaleList(): Promise<any> {
    return Instance.get(`${APICommon}/flash-sale`);
}
export function getMallBannerList(): Promise<any> {
    return Instance.get(`${APICommon}/mall-banner`);
}
export function getMallColumnList(): Promise<any> {
    return Instance.get(`${APICommon}/mall-column`);
}
export function getMallItemList(): Promise<any> {
    return Instance.get(`${APICommon}/mall-item`);
}
export function getTopSearchList(): Promise<any> {
    return Instance.get(`${APICommon}/top-search`);
}
export function getTodaySuggestList(): Promise<any> {
    return Instance.get(`${APICommon}/today-suggest`);
}
