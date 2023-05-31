const url_serve = process.env.NEXT_PUBLIC_BASE_PATH;
const Custom = () => {
    return (
        <div className="body404">
            <main className="cover404">
                <div className="container404">
                    <img className="img404" src={`/${url_serve}/demo/images/notfound/axolot-cute.gif`} width="200px" />
                    <h1 className="h1404">ERROR 404</h1>
                    <h2 className="h2404">Esta página no existe o No tienes los códigos para acceder a ella.</h2>
                    <blockquote cite="" className="blockquote404">
                        “Lo siento Dave, me temo que no puedes hacer eso.”
                        <br />
                    </blockquote>
                </div>
            </main>
            ;
        </div>
    );
};

export default Custom;
