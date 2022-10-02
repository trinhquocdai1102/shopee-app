import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import {
    listUnderSearchBox,
    topNavLeftItems,
    topNavRightItems,
} from '../../assets/fake-data/navbar';
import Logo from '../../assets/svg/Logo';

const Header = () => {
    return (
        <div className='header'>
            <div className='navbar-wrapper'>
                <nav className='container flex justify-content-between'>
                    <div className='flex header-menu__left align-items-center'>
                        {topNavLeftItems.map((item) => {
                            return (
                                <Fragment key={item.id}>
                                    {item.clickAble === true ? (
                                        <Link to={item.url}>
                                            {item.title}
                                            {item.icon &&
                                                item.icon.map((i) => {
                                                    return (
                                                        <Link
                                                            key={i.id}
                                                            to={i.url}
                                                        >
                                                            <i
                                                                className={`bi bi-${i.thumbnail}`}
                                                            ></i>
                                                        </Link>
                                                    );
                                                })}
                                        </Link>
                                    ) : (
                                        <div className='header-menu__button--unclickable'>
                                            {item.title}
                                            {item.icon.map((i) => {
                                                return (
                                                    <Link key={i.id} to={i.url}>
                                                        <i
                                                            className={`bi bi-${i.thumbnail}`}
                                                        ></i>
                                                    </Link>
                                                );
                                            })}
                                        </div>
                                    )}
                                </Fragment>
                            );
                        })}
                    </div>
                    <div className='flex header-menu__right'>
                        {topNavRightItems.map((item) => {
                            return (
                                <Link key={item.id} to={item.url}>
                                    <i
                                        className={`bi bi-${item.icon[0].thumbnail}`}
                                    ></i>
                                    <span>{item.title[0]}</span>
                                    {item.icon[1] && (
                                        <i
                                            style={{
                                                fontSize: '12px',
                                            }}
                                            className={`bi bi-${item.icon[1].thumbnail}`}
                                        ></i>
                                    )}
                                </Link>
                            );
                        })}
                        <Link to='#'>Đăng Ký</Link>
                        <div className='nav__link-separator'></div>
                        <Link to='#'>Đăng Nhập</Link>
                    </div>
                </nav>
            </div>
            <div className='container-wrapper header-with-search-wrapper'>
                <div className='flex container header-with-search'>
                    <Link to='#' className='header-with-search__logo-section'>
                        <Logo />
                    </Link>
                    <div className='header-with-search__search-section'>
                        <div className='header-searchbar'>
                            <form action=''>
                                <div className='header-search__main'>
                                    <input
                                        type='text'
                                        placeholder='Đăng ký và nhận voucher bạn mới đến 70k!'
                                    />
                                </div>
                                <button
                                    type='submit'
                                    className='btn btn-solid-primary btn--s header-searchbar__search-button'
                                >
                                    <i className='bi bi-search'></i>
                                </button>
                            </form>
                        </div>
                        <div className='header-list__under-searchbar'>
                            {listUnderSearchBox.map((item) => {
                                return (
                                    <Link key={item.id} to={item.url}>
                                        {item.title}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                    <div className='header-with-search__cart-section'>
                        <Link to='#' className='header-cart__main'>
                            <i className='bi bi-cart2'></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
