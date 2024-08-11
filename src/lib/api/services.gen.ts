// This file is auto-generated by @hey-api/openapi-ts

import { createClient, createConfig, type Options } from '@hey-api/client-fetch';
import type { GetGamesError, GetGamesResponse2, GetGameData, GetGameError, GetGameResponse2, GetParticipationMethodsData, GetParticipationMethodsError, GetParticipationMethodsResponse2, GetPrizesData, GetPrizesError, GetPrizesResponse2, GetUsersData, GetUsersError, GetUsersResponse2, GetUserData, GetUserError, GetUserResponse2, GetWonPrizesData, GetWonPrizesError, GetWonPrizesResponse2 } from './types.gen';

export const client = createClient(createConfig());

export const getGames = <ThrowOnError extends boolean = false>(options?: Options<unknown, ThrowOnError>) => { return (options?.client ?? client).get<GetGamesResponse2, GetGamesError, ThrowOnError>({
    ...options,
    url: '/games'
}); };

export const getGame = <ThrowOnError extends boolean = false>(options: Options<GetGameData, ThrowOnError>) => { return (options?.client ?? client).get<GetGameResponse2, GetGameError, ThrowOnError>({
    ...options,
    url: '/games/{gameId}'
}); };

export const getParticipationMethods = <ThrowOnError extends boolean = false>(options?: Options<GetParticipationMethodsData, ThrowOnError>) => { return (options?.client ?? client).get<GetParticipationMethodsResponse2, GetParticipationMethodsError, ThrowOnError>({
    ...options,
    url: '/participation-methods'
}); };

export const getPrizes = <ThrowOnError extends boolean = false>(options?: Options<GetPrizesData, ThrowOnError>) => { return (options?.client ?? client).get<GetPrizesResponse2, GetPrizesError, ThrowOnError>({
    ...options,
    url: '/prizes'
}); };

export const getUsers = <ThrowOnError extends boolean = false>(options?: Options<GetUsersData, ThrowOnError>) => { return (options?.client ?? client).get<GetUsersResponse2, GetUsersError, ThrowOnError>({
    ...options,
    url: '/users'
}); };

export const getUser = <ThrowOnError extends boolean = false>(options: Options<GetUserData, ThrowOnError>) => { return (options?.client ?? client).get<GetUserResponse2, GetUserError, ThrowOnError>({
    ...options,
    url: '/users/{userId}'
}); };

export const getWonPrizes = <ThrowOnError extends boolean = false>(options?: Options<GetWonPrizesData, ThrowOnError>) => { return (options?.client ?? client).get<GetWonPrizesResponse2, GetWonPrizesError, ThrowOnError>({
    ...options,
    url: '/won-prizes'
}); };