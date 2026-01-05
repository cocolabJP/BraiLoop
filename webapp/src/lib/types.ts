//=== API types ===//
export interface Pavement {
    id: string
    camera_timestamp: string
    latitude: number
    longitude: number
    image_url: string
    classes?: number[]
}