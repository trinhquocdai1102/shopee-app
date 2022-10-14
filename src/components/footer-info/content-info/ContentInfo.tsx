import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Section, { SectionBody, SectionTitle } from '../../common/Section';

const ContentInfo = () => {
    const [showMore, setShowMore] = useState(false);
    const handleShowMore = () => {
        setShowMore(true);
    };
    const countries = [
        'Singapore',
        'Malaysia',
        'Indonesia',
        'Thái Lan',
        'Philippines',
        'Đài Loan',
        'Brazil',
        'México',
        'Colombia',
        'Chile',
        'Poland',
        'Spain',
    ];
    const cosmeticBrandList = [
        "Kiehl's",
        'MAC',
        'Foreo',
        ' SK-II',
        'Estee Lauder',
    ];
    const sportShoesBrandList = [
        'Converse',
        'New Balance',
        'Nike',
        'Vans',
        'Crocs',
    ];

    const topBrand = [
        'Samsung',
        'OPPO',
        'Xiaomi',
        'Innisfree',
        'Unilever',
        'P&G',
        "Biti's",
    ];
    return (
        <Section
            className='content-info'
            style={{ height: !showMore ? '280px' : '' }}
        >
            <SectionTitle>
                <h1 className='color-black'>
                    shopee - gì cũng có, mua hết ở shopee
                </h1>
            </SectionTitle>
            <SectionBody>
                <p>
                    Shopee - ứng dụng mua sắm trực tuyến thú vị, tin cậy, an
                    toàn và miễn phí! Shopee là nền tảng giao dịch trực tuyến
                    hàng đầu ở Đông Nam Á, có trụ sở chính ở Singapore, đã có
                    mặt ở khắp các khu vực
                    {countries.map((item, index) => {
                        return <u key={`country-${index}`}>{item},</u>;
                    })}
                    <u>Argentina</u>. Với sự đảm bảo của Shopee, bạn sẽ mua hàng
                    trực tuyến an tâm và nhanh chóng hơn bao giờ hết!
                </p>
            </SectionBody>
            <br />
            <SectionTitle>
                <h2 className='color-black'>
                    mua sắm và bán hàng online đơn giản, nhanh chóng và an toàn
                </h2>
            </SectionTitle>
            <SectionBody>
                <p>
                    Nếu bạn đang tìm kiếm một trang web để mua và bán hàng trực
                    tuyến thì Shopee.vn là một sự lựa chọn tuyệt vời dành cho
                    bạn. Bản chất của Shopee là một social E-commerce platform -
                    nền tảng trang web thương mại điện tử tích hợp mạng xã hội.
                    Điều này cho phép người mua và người bán hàng dễ dàng tương
                    tác, trao đổi thông tin về sản phẩm và chương trình khuyến
                    mãi của shop. Nhờ nền tảng đó, việc mua bán trên Shopee trở
                    nên nhanh chóng và đơn giản hơn. Bạn có thể trò chuyện trực
                    tiếp với nhà bán hàng để hỏi trực tiếp về mặt hàng cần mua.
                    Còn nếu bạn muốn tìm mua những dòng sản phẩm chính hãng, uy
                    tín, Shopee Mall chính là sự lựa chọn lí tưởng dành cho bạn.
                    Để bạn có thể dễ dàng khi tìm hiểu và sử dụng sản phẩm,{' '}
                    <Link to='#'>
                        Shopee Blog- trang blog thông tin chính thức của Shopee
                    </Link>{' '}
                    - sẽ giúp bạn có thể tìm được cho mình các kiến thức về xu
                    hướng thời trang, review công nghệ, mẹo làm đẹp, tin tức
                    tiêu dùng và deal giá tốt bất ngờ.
                </p>
                {!showMore && (
                    <div className='btn-show-more mb-4 flex justify-content-start color-orange'>
                        <button
                            type='button'
                            className='btn px-0 color-orange'
                            onClick={handleShowMore}
                        >
                            Xem thêm
                        </button>
                        <div>
                            <i className='bi bi-chevron-right'></i>
                        </div>
                    </div>
                )}
                <p>
                    Đến với Shopee, cơ hội để trở thành một nhà bán hàng dễ dàng
                    hơn bao giờ hết. Chỉ với vài thao tác trên ứng dụng, bạn đã
                    có thể đăng bán ngay những sản phẩm của mình. Không những
                    thế, các nhà bán hàng có thể tự{' '}
                    <Link to=''>tạo chương trình khuyến mãi trên Shopee</Link>{' '}
                    để thu hút người mua với những sản phẩm có mức giá hấp dẫn.
                    Khi đăng nhập tại Shopee Kênh người bán, bạn có thể dễ dàng
                    phân loại sản phẩm, theo dõi đơn hàng, chăm sóc khách hàng
                    và cập nhập ngay các hoạt động của shop.
                </p>
            </SectionBody>
            <br />
            <SectionTitle>
                <h2 className='color-black'>
                    tải ứng dụng shopee ngay để mua bán online mọi lúc, mọi nơi
                </h2>
            </SectionTitle>
            <SectionBody>
                <p>
                    Ưu điểm của ứng dụng Shopee là cho phép bạn mua và bán hàng
                    mọi lúc, mọi nơi. Bạn có thể tải ứng dụng Shopee cũng như
                    đăng sản phẩm bán hàng một cách nhanh chóng và tiện lợi.
                    Ngoài ra, ứng dụng Shopee còn có những ưu điểm sau:
                </p>
                <ul>
                    <li>
                        <p>
                            Giao diện thân thiện, đơn giản, dễ sử dụng. Bạn sẽ
                            dễ dàng thấy được ngay những sản phẩm nổi bật cũng
                            như dễ dàng tìm đến các ô tìm kiếm, giỏ hàng hoặc
                            tính năng chat liền tay.
                        </p>
                    </li>
                    <li>
                        <p>
                            Ứng dụng tích hợp công nghệ quản lý đơn mua và bán
                            hàng tiện lợi trên cùng một tài khoản. Bạn sẽ vừa là
                            người mua hàng, vừa là người bán hàng rất linh hoạt,
                            dễ dàng.
                        </p>
                    </li>
                    <li>
                        <p>
                            Cập nhập thông tin khuyến mãi,
                            <Link to=''>Shopee flash sale</Link> nhanh chóng và
                            liên tục.
                        </p>
                    </li>
                </ul>
                <p>
                    Tại Shopee, bạn có thể lưu các
                    <Link to=''>mã giảm giá Shopee</Link> và
                    <Link to=''>mã miễn phí vận chuyển toàn quốc</Link>. Bên
                    cạnh đó, Shopee cũng sẽ có những chiến dịch khuyến mãi lớn
                    hằng năm như
                    <Link to=''>Siêu hội tiêu dùng 15.3</Link>,
                    <Link to=''>Shopee 4.4 sale</Link>,
                    <Link to=''>Shopee 5.5 sale</Link>,
                    <Link to=''>Shopee sale 7.7</Link>,
                    <Link to=''>Shopee sale 8.8</Link>,
                    <Link to=''>Shopee sale 9.9</Link>,
                    <Link to=''>Shopee 10.10 sale</Link>,
                    <Link to=''>Shopee 11.11 sale</Link>,
                    <Link to=''>Shopee 12.12 sale</Link>,
                    <Link to=''>Shopee Tết Sale</Link>. Đây là thời điểm để
                    người mua hàng có thể nhanh tay chọn ngay cho mình những mặt
                    hàng ưa thích với mức giá giảm kỉ lục. Ngoài ra, bạn còn có
                    thể thỏa thích săn sale vào các ngày trong tháng như
                    <Link to=''>Sale đồng giá giữa tháng</Link> và
                    <Link to=''>Sale cuối tháng</Link>.
                </p>
            </SectionBody>
            <br />
            <SectionTitle>
                <h2 className='color-black'>
                    mua hàng hiệu cao cấp giá tốt tại shopee
                </h2>
            </SectionTitle>
            <SectionBody>
                <p>
                    Bên cạnh <Link to=''>Shopee Premium</Link>, Shopee còn có
                    rất nhiều khuyến mãi khủng cho
                    <Link to=''> hàng hiệu giảm đến 50%</Link>. Cộng với mã giao
                    hàng miễn phí, Shopee cũng có các mã giảm giá được phân phối
                    mỗi tháng từ rất nhiều gian hàng chính hãng tham gia chương
                    trình khuyến mãi này. Bên cạnh đó, Shopee còn tập hợp rất
                    nhiều thương hiệu đình đám được các nhà bán lẻ uy tín phân
                    phối bán trên Shopee,
                    <Link to=''>
                        top sản phẩm hot deal cho bạn săn sale
                    </Link>{' '}
                    luôn cập nhật mỗi giờ, mỗi ngày, đem đến cho bạn sự lựa chọn
                    đa dạng, từ các hãng mỹ phẩm nổi tiếng hàng đầu như
                    {cosmeticBrandList.map((item, index) => {
                        return (
                            <Link to='' key={`cosmetic-brand-${index}`}>
                                {item},
                            </Link>
                        );
                    })}
                    ... Đến những thương hiệu công nghệ nổi tiếng như camera
                    hành trình Gopro, máy ảnh Fuifilm, webcam Hikvision, máy đọc
                    sách Kindle,... Tại Shopee, bạn có thể dễ dàng tìm thấy các
                    thương hiệu giày thể thao phổ biến hiện nay như:
                    {sportShoesBrandList.map((item, index) => {
                        return (
                            <Link to='' key={`sport-shoes-brand-${index}`}>
                                {item},
                            </Link>
                        );
                    })}
                    ...
                </p>
            </SectionBody>
            <br />
            <SectionTitle>
                <h2 className='color-black'>
                    mua hàng chính hãng từ các thương hiệu lớn với shopee
                </h2>
            </SectionTitle>
            <SectionBody>
                <p>
                    Mua hàng trên Shopee luôn là một trải nghiệm ấn tượng. Dù
                    bạn đang có nhu cầu mua bất kỳ mặt hàng{' '}
                    <Link to=''>thời trang nam</Link>,
                    <Link to=''>thời trang nữ</Link>,<Link to=''>đồng hồ</Link>,
                    <Link to=''>điện thoại</Link>,
                    <Link to=''>nước rửa tay khô</Link> hay{' '}
                    <Link to=''>khẩu trang N95</Link> thì Shopee cũng sẽ đảm bảo
                    cung cấp cho bạn những sản phẩm ưng ý. Bên cạnh đó, Shopee
                    cũng có sự tham gia của các thương hiệu hàng đầu thế giới ở
                    đa dạng nhiều lĩnh vực khác nhau. Trong đó có thể kể đến{' '}
                    {topBrand.join(', ')}
                    ,...Các thương hiệu này hiện cũng đã có cửa hàng chính thức
                    trên Shopee Mall với hàng trăm mặt hàng chính hãng, được cập
                    nhập liên tục. Là một kênh bán hàng uy tín, Shopee luôn cam
                    kết mang lại cho khách hàng những trải nghiệm mua sắm online
                    giá rẻ, an toàn và tin cậy. Mọi thông tin về người bán và
                    người mua đều được bảo mật tuyệt đối. Các hoạt động giao
                    dịch thanh toán tại Shopee luôn được đảm bảo diễn ra nhanh
                    chóng, an toàn. Một vấn đề nữa khiến cho các khách hàng luôn
                    quan tâm đó chính là mua hàng trên Shopee có đảm bảo không.
                </p>
                <p>
                    Shopee luôn cam kết mọi sản phẩm trên Shopee, đặc biệt là
                    Shopee Mall đều là những sản phẩm chính hãng, đầy đủ tem
                    nhãn, bảo hành từ nhà bán hàng. Ngoài ra, Shopee bảo vệ
                    người mua và người bán bằng cách giữ số tiền giao dịch đến
                    khi người mua xác nhận đồng ý với đơn hàng và không có yêu
                    cầu khiếu nại, trả hàng hay hoàn tiền nào. Thanh toán sau đó
                    sẽ được chuyển đến cho người bán. Đến với Shopee ngay hôm
                    nay để mua hàng online giá rẻ và trải nghiệm dịch vụ chăm
                    sóc khách hàng tuyệt vời tại đây. Đặc biệt khi mua sắm trên
                    Shopee Mall, bạn sẽ được miễn phí vận chuyển, giao hàng tận
                    nơi và 7 ngày miễn phí trả hàng. Ngoài ra, khách hàng có thể
                    sử dụng
                    <Link to=''>Shopee Xu</Link> để đổi lấy mã giảm giá có giá
                    trị cao và voucher dịch vụ hấp dẫn. Tiếp đến là{' '}
                    <Link to=''>Shopee Home Club</Link>,
                    <Link to=''>Shopee Mum Club</Link>,
                    <Link to=''>Shopee Beauty Club</Link> và{' '}
                    <Link to=''>Shopee Book Club</Link> với các ưu đãi độc quyền
                    từ các thương hiệu lớn có những khách hàng đã đăng ký làm
                    thành viên. Hãy truy cập ngay Shopee.vn hoặc tải ngay ứng
                    dụng Shopee về điện thoại ngay hôm nay!
                </p>
            </SectionBody>
        </Section>
    );
};

export default ContentInfo;
