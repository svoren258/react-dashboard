import { Endpoints } from '../models/Endpoints';

const urlBase = 'https://jsonplaceholder.typicode.com';

export const getUserEndpointUrl = (id: string): string => `${urlBase}/${Endpoints.USERS}/${id}`;

export const getUsersEndpointUrl = (): string => `${urlBase}/${Endpoints.USERS}`;

export const getPostsEndpointUrl = (id: string): string => `${urlBase}/${Endpoints.USERS}/${id}/${Endpoints.POSTS}`;

export const getPostEndpointUrl = (id: string): string => `${urlBase}/${Endpoints.POSTS}/${id}`;

export const getCommentsEndpointUrl = (id: number): string =>
  `${urlBase}/${Endpoints.POSTS}/${id}/${Endpoints.COMMENTS}`;
