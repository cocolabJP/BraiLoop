
def apply_bbox_filter(query, west, south, east, north):
    return (
        query
        .gte("longitude", west)
        .lte("longitude", east)
        .gte("latitude", south)
        .lte("latitude", north)
    )
