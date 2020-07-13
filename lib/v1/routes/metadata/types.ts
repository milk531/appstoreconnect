import { Data, Links, ResourceType } from '../../data'
import {
    PagedDocumentLinks,
    PagingInformation,
    ResourceLinks,
} from '../../paging'

/**
 * The data structure that represents the resource.
 */
export interface AppInfoLocalization {
    /**
     * The resource's attributes.
     */
    attributes?: AppInfoLocalizationAttributes
    /**
     * The opaque resource ID that uniquely identifies the resource.
     */
    id: string
    /**
     * Navigational links to related data and included resource types and IDs.
     */
    relationships?: {
        appInfo?: {
            data?: Data<'appInfos'>[]
            links?: Links
        }
    }
    /**
     * The resource type.
     */
    type: ResourceType<'appInfoLocalizations'>
    /**
     * Navigational links that include the self-link.
     */
    links: ResourceLinks
}

/**
 * Attributes that describe a resource.
 */
interface AppInfoLocalizationAttributes {
    locale?: string
    name?: string
    privacyPolicyText?: string
    privacyPolicyUrl?: string
    subtitle?: string
}

/**
 * A response containing a single resource.
 */
export interface AppInfoLocalizationsResponse {
    /**
     * The object types and IDs of the related resources.
     */
    data: Data<'appInfoLocalizations'>[]
    /**
     * Navigational links including the self-link and links to the related
     * data.
     */
    links: PagedDocumentLinks
    /**
     * Paging information.
     */
    meta?: PagingInformation
}

export interface AppInfoResponse {
    /**
     * The object types and IDs of the related resources.
     */
    data: Data<'appInfos'>[]
    /**
     * Navigational links including the self-link and links to the related
     * data.
     */
    links: PagedDocumentLinks
    /**
     * Paging information.
     */
    meta?: PagingInformation
}
