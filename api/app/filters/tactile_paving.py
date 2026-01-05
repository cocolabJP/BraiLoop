from enum import Enum

class TactilePavingFilter(str, Enum):
    all = 'all'
    warning = 'warning'
    guiding = 'guiding'
    none = 'none'

def apply_tactile_paving_filter(query, value: TactilePavingFilter):
    FILTER_MAP = {
        TactilePavingFilter.all: lambda q: q.not_.is_('classes', None),
        TactilePavingFilter.warning: lambda q: q.contains('classes', [0]),
        TactilePavingFilter.guiding: lambda q: q.contains('classes', [1]),
        TactilePavingFilter.none: lambda q: q.is_('classes', None),
    }
    return FILTER_MAP[value](query)