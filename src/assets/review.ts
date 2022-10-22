export enum ReviewFields {
    reviewtext = "reviewtext",
    reviewerID = "reviewerID",
    FKBusinessId = "BusinessId",
    acknowledged = "acknowledged"
}

export interface reviewDTO {
    id: string
    reviewtext: string
    acknowledged: false
}