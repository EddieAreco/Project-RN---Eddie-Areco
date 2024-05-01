import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseUrl } from '../databases/realtimeDatabase'

export const shopApi = createApi({

    reducerPath: "shopApi",
    //SE LE ASIGNA UN NOMBRE A LA API PARA EVITAR CONFLICTOS AL TENER MAS DE 1 API

    baseQuery:fetchBaseQuery ({ baseUrl: baseUrl }),
    endpoints: (builder) => ({
        getCategories: builder.query ({
            query: () => `categories.json`
            // TRAEMOS LAS CATEGORIAS
        }),
        getProductsByCategory: builder.query ({
            query: (category) => `products.json?orderBy="category"&equalTo="${category}"`,
            // HACEMOS EL FILTRO EN BASE A LA CATEGORIA
            transformResponse: (response) => {
                const responseTransformed = Object.values (response)
                return responseTransformed
            },
            //DEBIDO A QUE REAL TIME DATABASE NOS DEVUELVE LOS VALORES, AL HACER UN FILTRO, COMO UN OBJETO, TENEMOS QUE TRANSFORMAR ESO EN UN ARRAY USANDO OBJECT.
        }),
        getProductsById: builder.query ({
            query: (productId) => `products.json?orderBy="id"&equalTo=${productId}`,
            // HACEMOS EL FILTRO EN BASE AL ID
            transformResponse: (response) => {
                const responseTransformed = Object.values (response)

                console.log('responseTransformed', responseTransformed)
                if ( responseTransformed.length ) return responseTransformed[0]
                
                return responseTransformed
            },
        }),
        postOrder: builder.mutation({
            query: ({...order}) => ({
                url: 'orders.json',
                method: 'POST',
                body: order
            })
        })
        //ESTE ES EL ENDPOINT PARA CREAR LA ORDEN, Y SE HACE UNA MUTATION PORQUE SE VAN A ALTERAR DATOS DENTRO DE LA DATABASE(db)
    })
})

export const { useGetCategoriesQuery, useGetProductsByCategoryQuery, useGetProductsByIdQuery, usePostOrderMutation } = shopApi
// HACEMOS LA EXPORTACION EN FOMRA DE HOOKS