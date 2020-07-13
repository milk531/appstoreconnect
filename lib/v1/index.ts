import * as api from '../api'
import * as auth from './auth'
import * as routes from './routes'

const V1_BASEURL = 'https://api.appstoreconnect.apple.com/v1'

export function v1(token?: string) {
    return api.makeAPI(V1_BASEURL, token)
}
export namespace v1 {
    export const testflight = routes.testflight
    export const users = routes.users
    export const userInvitations = routes.userInvitations
    export const financeReports = routes.financeReports
    export const metadata = routes.metadata
    export const token = auth.token
    export const tokenAsync = auth.tokenAsync
}

export type AppType =
    | 'betaAppLocalizations'
    | 'betaAppReviewDetail'
    | 'betaGroups'
    | 'betaLicenseAgreement'
    | 'betaTesters'
    | 'builds'
    | 'bundleId'
    | 'name'
    | 'preReleaseVersions'
    | 'primaryLocale'
    | 'sku'
export type UserType =
    | 'allAppsVisible'
    | 'email'
    | 'expirationDate'
    | 'firstName'
    | 'lastName'
    | 'provisioningAllowed'
    | 'roles'
    | 'visibleApps'
export type BuildType =
    | 'app'
    | 'appEncryptionDeclaration'
    | 'betaAppReviewSubmission'
    | 'betaBuildLocalizations'
    | 'betaGroups'
    | 'buildBetaDetail'
    | 'expirationDate'
    | 'expired'
    | 'iconAssetToken'
    | 'individualTesters'
    | 'minOsVersion'
    | 'preReleaseVersion'
    | 'processingState'
    | 'uploadedDate'
    | 'usesNonExemptEncryption'
    | 'version'
export type BetaGroupType =
    | 'app'
    | 'betaTesters'
    | 'builds'
    | 'createdDate'
    | 'isInternalGroup'
    | 'name'
    | 'publicLink'
    | 'publicLinkEnabled'
    | 'publicLinkId'
    | 'publicLinkLimit'
    | 'publicLinkLimitEnabled'
export type BetaAppLocalizationType =
    | 'app'
    | 'description'
    | 'feedbackEmail'
    | 'locale'
    | 'marketingUrl'
    | 'privacyPolicyUrl'
    | 'tvOsPrivacyPolicy'
export type BetaAppReviewDetailType =
    | 'app'
    | 'contactEmail'
    | 'contactFirstName'
    | 'contactLastName'
    | 'contactPhone'
    | 'demoAccountName'
    | 'demoAccountPassword'
    | 'demoAccountRequired'
    | 'notes'
export type BuildBetaDetailType =
    | 'autoNotifyEnabled'
    | 'build'
    | 'externalBuildState'
    | 'internalBuildState'
export type BetaLicenseAgreementType = 'agreementText' | 'app'
export type PreReleaseVersionType = 'app' | 'builds' | 'platform' | 'version'
export type BetaAppReviewSubmissionType = 'betaReviewState' | 'build'
export type BetaBuildLocalizationType = 'build' | 'locale' | 'whatsNew'
export type BetaTesterType =
    | 'apps'
    | 'betaGroups'
    | 'builds'
    | 'email'
    | 'firstName'
    | 'inviteType'
    | 'lastName'
export type AppEncryptionDeclarationType =
    | 'app'
    | 'appEncryptionDeclarationState'
    | 'availableOnFrenchStore'
    | 'builds'
    | 'codeValue'
    | 'containsProprietaryCryptography'
    | 'containsThirdPartyCryptography'
    | 'documentName'
    | 'documentType'
    | 'documentUrl'
    | 'exempt'
    | 'platform'
    | 'uploadedDate'
    | 'usesEncryption'
export type Locale =
    | 'da'
    | 'de-DE'
    | 'el'
    | 'en-AU'
    | 'en-CA'
    | 'en-GB'
    | 'en-US'
    | 'es-ES'
    | 'es-MX'
    | 'fi'
    | 'fr-CA'
    | 'fr-FR'
    | 'id'
    | 'it'
    | 'ja'
    | 'ko'
    | 'ms'
    | 'nl-NL'
    | 'no'
    | 'pt-BR'
    | 'pt-PT'
    | 'ru'
    | 'sv'
    | 'th'
    | 'tr'
    | 'vi'
    | 'zh-Hans'
    | 'zh-Hant'
export type AppInfoLocalizationsType =
    | 'appInfo'
    | 'locale'
    | 'name'
    | 'privacyPolicyText'
    | 'privacyPolicyUrl'
    | 'subtitle'
export type AppInfoType =
    | 'app'
    | 'appInfoLocalizations'
    | 'appStoreAgeRating'
    | 'appStoreState'
    | 'brazilAgeRating'
    | 'kidsAgeBand'
    | 'primaryCategory'
    | 'primarySubcategoryOne'
    | 'primarySubcategoryTwo'
    | 'secondaryCategory'
    | 'secondarySubcategoryOne'
    | 'secondarySubcategoryTwo'
