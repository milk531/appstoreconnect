import { AppInfoLocalizationsType, AppInfoType } from '../..'
import { API, DELETE, GET, PATCH, POST } from '../../../api'
import { AppInfoResponse, AppInfoLocalizationsResponse } from './types'

/**
 * Get a list of the users on your team.
 * @param query
 */
export function listAppInfoLocalizations(
    api: API,
    id: string,
    query: ListAppInfoLocalizationsQuery
): Promise<AppInfoLocalizationsResponse> {
    return GET(api, `/appInfos/${id}/appInfoLocalizations`, { query })
}

export function listAppInfo(api: API, id: string): Promise<AppInfoResponse> {
    return GET(api, `/apps/${id}/appInfos`, {})
}

interface ListAppInfoLocalizationsQuery {
    fields?: {
        /**
         * Fields to return for included related types.
         */
        appInfoLocalizations?: AppInfoLocalizationsType[]
        /**
         * Fields to return for included related types.
         */
        appInfos?: AppInfoType[]
    }
    /**
     * Relationship data to include in the response.
     */
    include?: string
    /**
     * Number of resources to return.
     */
    // limit?: number
    /**
     * Attributes by which to sort.
     */
    filter?: {
        locale?: string[]
    }
    limit?: number
}
