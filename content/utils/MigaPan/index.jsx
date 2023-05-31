const url_serve = process.env.NEXT_PUBLIC_BASE_PATH;

function Breadcrumb({ title, position, url }) {
  const breadcrumbs = [
    { name: 'Perfil', link: `/${url_serve}/${url}` },
    { name: title, link: '#' },
  ];

  return (
    <div className="col-lg-4 p-l-0 title-margin-left">
      <div className="page-header">
        <div className="page-title">
          <ol className="breadcrumb">
            {breadcrumbs.slice(0, position).map((breadcrumb, index) => (
              <li key={index} className="breadcrumb-item">
                <a href={breadcrumb.link}>{breadcrumb.name}</a>
              </li>
            ))}
            <li className="breadcrumb-item active">{title}</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Breadcrumb;
