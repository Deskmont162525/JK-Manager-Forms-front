import Link from 'next/link';

const url_serve = process.env.NEXT_PUBLIC_BASE_PATH;
const LayoutSA = () => {
    return (
        <div className="layout-topbar-sa">
            <Link href="/">
                <a className="layout-topbar-sa-logo">
                    <img style={{ width: 50, marginRight: 10 }} src={`/${url_serve}/demo/images/pages/logoJK&A.png`} widt={'true'} alt="logo" />
                    <span>JK-Manager-Forms</span>
                </a>
            </Link>
        </div>
    );
};

export default LayoutSA;
