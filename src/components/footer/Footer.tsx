import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    aboutUs,
    customersCare,
    followUs,
    paymentMethod,
    regionShopee,
    transportMethod,
} from '../../assets/fake-data/footer';
import Section, { SectionBody, SectionTitle } from '../common/Section';
import FooterInfo from '../footer-info/FooterInfo';

const Footer = () => {
    const location = useLocation();
    const getDate = Date().split(' ');
    const currentYear = getDate[3];

    return (
        <div className='footer-container'>
            {(location.pathname === '/' || location.pathname === '/home') && (
                <FooterInfo />
            )}
            <div className='footer-center'>
                <div className='footer-center-wrapper container'>
                    <div>
                        <Section>
                            <SectionTitle>
                                <h1>Chăm sóc khách hàng</h1>
                            </SectionTitle>
                            <SectionBody>
                                {customersCare.map((item) => {
                                    return (
                                        <Link to=''>
                                            <div>{item.title}</div>
                                        </Link>
                                    );
                                })}
                            </SectionBody>
                        </Section>
                        <Section>
                            <SectionTitle>
                                <h1>Về shopee</h1>
                            </SectionTitle>
                            <SectionBody>
                                {aboutUs.map((item) => {
                                    return (
                                        <Link to=''>
                                            <div>{item.title}</div>
                                        </Link>
                                    );
                                })}
                            </SectionBody>
                        </Section>
                        <Section>
                            <div className='payment'>
                                <SectionTitle>
                                    <h1>Thanh toán</h1>
                                </SectionTitle>
                                <SectionBody>
                                    {paymentMethod.map((item) => {
                                        return (
                                            <div>
                                                <div>
                                                    <img
                                                        src={item.url}
                                                        alt={item.title}
                                                    />
                                                </div>
                                            </div>
                                        );
                                    })}
                                </SectionBody>
                            </div>
                            <div className='transport'>
                                <SectionTitle>
                                    <h1>Đơn vị vận chuyển</h1>
                                </SectionTitle>
                                <SectionBody>
                                    {transportMethod.map((item) => {
                                        return (
                                            <div>
                                                <img
                                                    src={item.url}
                                                    alt={item.title}
                                                />
                                            </div>
                                        );
                                    })}
                                </SectionBody>
                            </div>
                        </Section>
                        <Section>
                            <SectionTitle>
                                <h1>Theo dõi chúng tôi trên</h1>
                            </SectionTitle>
                            <SectionBody>
                                {followUs.map((item) => {
                                    return (
                                        <div className='flex mb-3 align-items-center'>
                                            <div className='me-2'>
                                                <i
                                                    style={{ fontSize: '16px' }}
                                                    className={`bi bi-${
                                                        item.thumbnail ||
                                                        item.title
                                                    }`}
                                                ></i>
                                            </div>
                                            <a
                                                href={item.url}
                                                target='_blank'
                                                rel='noreferrer'
                                            >
                                                <div>{item.title}</div>
                                            </a>
                                        </div>
                                    );
                                })}
                            </SectionBody>
                        </Section>
                        <Section>
                            <SectionTitle>
                                <h1>tải ứng dụng shopee ngay thôi</h1>
                            </SectionTitle>
                            <SectionBody>
                                <Link to=''>
                                    <img
                                        src='https://cf.shopee.vn/file/a5e589e8e118e937dc660f224b9a1472'
                                        alt=''
                                    />
                                </Link>
                                <div className='flex flex-column justify-content-start'>
                                    <Link to=''>
                                        <img
                                            src='https://cf.shopee.vn/file/ad01628e90ddf248076685f73497c163'
                                            alt=''
                                        />
                                    </Link>
                                    <Link to=''>
                                        <img
                                            src='https://cf.shopee.vn/file/ae7dced05f7243d0f3171f786e123def'
                                            alt=''
                                        />
                                    </Link>
                                    <Link to=''>
                                        <img
                                            src='https://cf.shopee.vn/file/35352374f39bdd03b25e7b83542b2cb0'
                                            alt=''
                                        />
                                    </Link>
                                </div>
                            </SectionBody>
                        </Section>
                    </div>
                    <div className='footer-region flex'>
                        <div>
                            &copy; {currentYear} Shopee. Tất cả quyền được bảo
                            lưu.
                        </div>
                        <div className='flex'>
                            <div className='me-1'>Quốc gia {'&'} khu vực: </div>
                            {regionShopee.map((item) => {
                                return (
                                    <div>
                                        <a
                                            href={item.url}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                        >
                                            {item.title}
                                            <span>&nbsp;|&nbsp;</span>
                                        </a>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer-bottom'>
                <div className='footer-bottom-wrapper container'>
                    <div>
                        <div>
                            <Link to=''>chính sách bảo mật</Link>
                        </div>
                        <div>
                            <Link to=''>quy chế hoạt động</Link>
                        </div>
                        <div>
                            <Link to=''>chính sách vận chuyển</Link>
                        </div>
                        <div>
                            <Link to=''>chính sách trả hàng và hoàn tiền</Link>
                        </div>
                    </div>
                    <div>
                        <a
                            href='http://online.gov.vn/Home/WebDetails/18367'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <img src='./images/certification.png' alt='' />
                        </a>
                        <a
                            href='http://online.gov.vn/Home/WebDetails/18367'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <img src='./images/certification.png' alt='' />
                        </a>
                        <a
                            href='http://online.gov.vn/Home/WebDetails/18367'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <img src='./images/certification2.png' alt='' />
                        </a>
                    </div>
                    <div className='footer-bottom-text'>
                        công ty TNHH shopee
                    </div>
                    <div className='footer-bottom-text'>
                        Địa chỉ: Tầng 4-5-6, Tòa nhà Capital Place, số 29 đường
                        Liễu Giai, Phường Ngọc Khánh, Quận Ba Đình, Thành phố Hà
                        Nội, Việt Nam. Tổng đài hỗ trợ: 19001221 - Email:
                        cskh@hotro.shopee.vn
                    </div>
                    <div className='footer-bottom-text'>
                        Chịu Trách Nhiệm Quản Lý Nội Dung: Nguyễn Đức Trí - Điện
                        thoại liên hệ: 024 73081221 (ext 4678)
                    </div>
                    <div className='footer-bottom-text'>
                        Mã số doanh nghiệp: 0106773786 do Sở Kế hoạch {'&'} Đầu
                        tư TP Hà Nội cấp lần đầu ngày 10/02/2015
                    </div>
                    <div className='footer-bottom-text'>
                        &copy; 2015 - Bản quyền thuộc về Công ty TNHH Shopee
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
