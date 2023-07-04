const url_serve = process.env.NEXT_PUBLIC_BASE_PATH;
export const menuItems = [
    {
        id: 1,
        label: 'Users',
        icon: 'pi pi-fw pi-users',
        items: [
            [
                {
                    items: [
                        {
                            id: 1,
                            label: 'Mis Ahorros',
                            icon: 'pi pi-money-bill',
                            url: `/${url_serve}/users-perfil/mis-ahorros`
                        },
                        {
                            separator: true
                        },
                        {
                            id: 2,
                            label: 'Mis Solicitudes',
                            icon: 'pi pi-file-o',
                            url: `/${url_serve}/users-perfil/mis-solicitudes`
                        }
                    ]
                }
            ]
        ]
    }
];

export const menuItemsAd = [
    {
        id: 1,
        label: 'Users',
        icon: 'pi pi-fw pi-users',
        items: [
            [
                {
                    items: [
                        {
                            id: 1,
                            label: 'Mi Perfil',
                            icon: 'pi pi-fw pi-user',
                            url: `/${url_serve}/admins-perfil`
                        },
                        {
                            separator: true
                        },
                        {
                            id: 2,
                            label: 'Solicitar Formulario',
                            icon: 'pi pi-file',
                            url: `/${url_serve}/admins-perfil/solicitar-form`
                        },
                        {
                            separator: true
                        },
                        {
                            id: 2,
                            label: 'Solicitar Soporte Técnico',
                            icon: 'pi pi-cog',
                            url: `/${url_serve}/admins-perfil/solicitar-soporte`
                        },
                        {
                            separator: true
                        },
                        {
                            id: 3,
                            label: 'Envio Masivo',
                            icon: 'pi pi-whatsapp',
                            url: `/${url_serve}/admins-perfil/send-whatsapp`
                        },
                        {
                            separator: true
                        },
                        {
                            id: 3,
                            label: 'Cargar Información',
                            icon: 'pi pi-upload',
                            url: `/${url_serve}/admins-perfil/cargar-archivos`
                        }
                    ]
                }
            ]
        ]
    }
];

export const menuItemsSuAd = [
    {
        id: 1,
        label: 'Users',
        icon: 'pi pi-fw pi-users',
        items: [
            [
                {
                    items: [
                        {
                            id: 1,
                            label: 'Mi Perfil',
                            icon: 'pi pi-fw pi-user',
                            url: `/${url_serve}/super-admins-perfil`
                        },
                        {
                            separator: true
                        },
                        {
                            id: 2,
                            label: 'Crear Usuarios',
                            icon: 'pi pi-file',
                            url: `/${url_serve}/super-admins-perfil/crear-usu-form`
                        },
                        {
                            separator: true
                        },
                        {
                            id: 3,
                            label: 'Crear Formulario Cliente',
                            icon: 'pi pi-plus-circle',
                            url: `/${url_serve}/super-admins-perfil/crear-form-sa`
                        }
                    ]
                }
            ]
        ]
    }
];


export const rutaSuperAdmin = {
    url: 'super-admins-perfil'
};


export const rutaAdmin = {
    url: 'admins-perfil'
};

export const rutaUser = {
    url: 'users-perfil'
};

export const Dataafiliado = [
    {
        id: 1,
        nombre: 'Juan Pérez 2',
        edad: 30,
        email: 'juan.perez@example.com',
        imagen1: { url: 'https://picsum.photos/id/1015/200/200' },
        imagen2: { url: 'https://picsum.photos/id/3/200/300' },
        imagen3: { url: 'https://picsum.photos/id/1025/200/200' }
    }
];


export const dataPdf = [
    {
      "userId": 1,
      "name": "manu 1",
      "category": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "description": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      "image": 'https://picsum.photos/id/1015/200/200',
      "price": 1000,
      "inventoryStatus": true
    },
    {
        "userId": 2,
        "name": "nombre 2",
        "category": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "description": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        "image": 'https://picsum.photos/id/1015/200/200',
        "price": 1000,
        "inventoryStatus": true
      },
      {
        "userId": 3,
        "name": "tata 3",
        "category": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "description": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        "image": 'https://picsum.photos/id/1015/200/200',
        "price": 1000,
        "inventoryStatus": false
      },
      {
        "userId": 4,
        "name": "pollo 4",
        "category": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "description": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        "image": 'https://picsum.photos/id/1015/200/200',
        "price": 1000,
        "inventoryStatus": false
      },
      {
        "userId": 5,
        "name": "nombre 5",
        "category": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "description": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        "image": 'https://picsum.photos/id/1015/200/200',
        "price": 1000,
        "inventoryStatus": false
      },
      {
        "userId": 6,
        "name": "nombre 6",
        "category": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "description": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        "image": 'https://picsum.photos/id/1015/200/200',
        "price": 1000,
        "inventoryStatus": true
      },
]