export declare enum ReviewFields {
    reviewtext = "reviewtext",
    reviewerID = "reviewerID",
    FKBusinessId = "BusinessId",
    acknowledged = "acknowledged",
    id = "id"
}
export interface reviewDTO {
    id: string;
    reviewtext: string;
    acknowledged: boolean;
}
