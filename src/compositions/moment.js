import { inject } from 'vue'
import { momentProvider } from '../plugins/moment'

export const useFindDate = (props, slots) => {
    if (props.date) {
        return props.date
    } else if (slots.default) {
        return slots.default()[0].children
    }
}

export const useFindFormat = (format) => {
    const { formats = {} } = inject(momentProvider, {})

    if (format) {
        return formats[format] || format
    } else {
        return formats.default
    }
}

export const useMoment = () => {
    const { moment } = inject(momentProvider, {})
    return moment
}

export const useDateFormat = (date, format) => {
    const moment = useMoment()
    return moment(date).format(useFindFormat(format))
}