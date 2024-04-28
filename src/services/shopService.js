import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseUrl } from '../databases/realtimeDatabase'

export const shopApi = createApi({
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
    })
})

export const { useGetCategoriesQuery, useGetProductsByCategoryQuery, useGetProductsByIdQuery } = shopApi
// HACEMOS LA EXPORTACION EN FOMRA DE HOOKS